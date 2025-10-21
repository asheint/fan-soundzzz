import { useEffect, useRef } from 'react';

export const useStandFanSound = (isRunning, speed, fanType = 'stand-fan') => {
  const startSoundRef = useRef(null);
  const loopSoundRef = useRef(null);
  const stopSoundRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {

    startSoundRef.current = new Audio(`/sounds/${fanType}/start.ogg`);
    loopSoundRef.current = new Audio(`/sounds/${fanType}/loop.ogg`);
    stopSoundRef.current = new Audio(`/sounds/${fanType}/stop.ogg`);

    loopSoundRef.current.loop = true;

    return () => {
      if (startSoundRef.current) {
        startSoundRef.current.pause();
        startSoundRef.current = null;
      }
      if (loopSoundRef.current) {
        loopSoundRef.current.pause();
        loopSoundRef.current = null;
      }
      if (stopSoundRef.current) {
        stopSoundRef.current.pause();
        stopSoundRef.current = null;
      }
    };
  }, [fanType]);

  useEffect(() => {
    if (!loopSoundRef.current || !isRunning) return;

    const speedRates = {
      1: 0.8,
      2: 1.0,
      3: 1.2
    };

    loopSoundRef.current.playbackRate = speedRates[speed] || 1.0;
  }, [speed, isRunning]);

  useEffect(() => {
    if (isTransitioningRef.current) return;

    if (isRunning) {
      hasStartedRef.current = true;
      startFan();
    } else if (hasStartedRef.current) {
      stopFan();
    }
  }, [isRunning]);

  const startFan = async () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    try {

      if (stopSoundRef.current) {
        stopSoundRef.current.pause();
        stopSoundRef.current.currentTime = 0;
      }

      startSoundRef.current.currentTime = 0;
      startSoundRef.current.volume = 1.0;
      await startSoundRef.current.play();

      startSoundRef.current.onended = async () => {
        if (isRunning && loopSoundRef.current) {
          loopSoundRef.current.currentTime = 0;
          loopSoundRef.current.volume = 1.0;
          
          const speedRates = { 1: 0.8, 2: 1.0, 3: 1.2 };
          loopSoundRef.current.playbackRate = speedRates[speed] || 1.0;
          
          await loopSoundRef.current.play();
        }
        isTransitioningRef.current = false;
      };
    } catch (error) {
      console.error('Error playing start sound:', error);
      isTransitioningRef.current = false;
    }
  };

  const stopFan = async () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    try {
      // Stop the loop sound immediately
      if (loopSoundRef.current && !loopSoundRef.current.paused) {
        loopSoundRef.current.pause();
        loopSoundRef.current.currentTime = 0;
      }

      // Stop the start sound if it's playing
      if (startSoundRef.current && !startSoundRef.current.paused) {
        startSoundRef.current.pause();
        startSoundRef.current.currentTime = 0;
      }

      // Play stop sound
      if (stopSoundRef.current) {
        stopSoundRef.current.currentTime = 0;
        stopSoundRef.current.volume = 1.0;
        await stopSoundRef.current.play();
        
        stopSoundRef.current.onended = () => {
          isTransitioningRef.current = false;
        };
      } else {
        isTransitioningRef.current = false;
      }
    } catch (error) {
      console.error('Error stopping fan sound:', error);
      isTransitioningRef.current = false;
    }
  };

  return null;
};
