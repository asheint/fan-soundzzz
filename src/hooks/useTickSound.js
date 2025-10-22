import { useRef } from "react";

export const useTickSound = () => {
  const audioCtxRef = useRef(null);
  const bufferRef = useRef(null);

  const loadBuffer = async () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (!bufferRef.current) {
      const res = await fetch("/sounds/tick.ogg");
      const arrayBuffer = await res.arrayBuffer();
      bufferRef.current = await audioCtxRef.current.decodeAudioData(arrayBuffer);
    }
  };

  const playTick = async () => {
    await loadBuffer();
    const source = audioCtxRef.current.createBufferSource();
    source.buffer = bufferRef.current;
    source.connect(audioCtxRef.current.destination);
    source.start();
  };

  return playTick;
};
