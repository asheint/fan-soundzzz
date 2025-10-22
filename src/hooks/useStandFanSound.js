import { useEffect, useRef } from 'react';

const OVERLAP_TIME = 0.1;

export const useStandFanSound = (isRunning, speed, fanType = 'stand-fan') => {
  const isInitializedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const currentStateRef = useRef('stopped');
  const audioCtxRef = useRef(null);
  const bufferRef = useRef(null);
  const playingRef = useRef(false);
  const sourceRef = useRef(null);
  const gainRef = useRef(null);

  useEffect(() => {
    const loadBuffer = async () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const res = await fetch(`/sounds/${fanType}/loop.ogg`);
      const arrayBuffer = await res.arrayBuffer();
      bufferRef.current = await audioCtxRef.current.decodeAudioData(arrayBuffer);
      isInitializedRef.current = true;
    };
    loadBuffer();

    return () => {
      stopLoop();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      bufferRef.current = null;
    };
  }, [fanType]);

  const startLoopWithOverlap = async () => {
    if (!audioCtxRef.current || !bufferRef.current) return;
    if (audioCtxRef.current.state === "suspended") {
      await audioCtxRef.current.resume();
    }
    let loopDuration = bufferRef.current.duration;
    playingRef.current = true;

    if (!gainRef.current) {
      gainRef.current = audioCtxRef.current.createGain();
      gainRef.current.gain.value = 0;
      gainRef.current.connect(audioCtxRef.current.destination);
    }

    const playSource = () => {
      if (!playingRef.current) return;
      const source = audioCtxRef.current.createBufferSource();
      source.buffer = bufferRef.current;
      source.connect(gainRef.current);
      source.start();
      sourceRef.current = source;

      setTimeout(playSource, (loopDuration - OVERLAP_TIME) * 1000);
    };

    playSource();

    gainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
    gainRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
    gainRef.current.gain.linearRampToValueAtTime(1, audioCtxRef.current.currentTime + 1);
  };

  const stopLoop = () => {
    playingRef.current = false;
    if (gainRef.current) {
      const ctx = audioCtxRef.current;

      gainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, ctx.currentTime);
      gainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);

      setTimeout(() => {
        if (sourceRef.current) {
          try { sourceRef.current.stop(); } catch (e) {}
          sourceRef.current.disconnect();
          sourceRef.current = null;
        }
        gainRef.current.disconnect();
        gainRef.current = null;
      }, 1000);
    } else {
      if (sourceRef.current) {
        try { sourceRef.current.stop(); } catch (e) {}
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
    }
  };

  useEffect(() => {
    if (!isInitializedRef.current) return;
    if (isTransitioningRef.current) return;

    if (isRunning && currentStateRef.current === 'stopped') {
      isTransitioningRef.current = true;
      currentStateRef.current = 'running';
      startLoopWithOverlap();
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 800);
    } else if (!isRunning && currentStateRef.current === 'running') {
      isTransitioningRef.current = true;
      currentStateRef.current = 'stopping';
      stopLoop();
      setTimeout(() => {
        currentStateRef.current = 'stopped';
        isTransitioningRef.current = false;
      }, 1500);
    }
  }, [isRunning]);

  return null;
};
