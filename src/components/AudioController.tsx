import { useEffect, useRef } from 'react';
import { useFanStore } from '../store/fanStore';

const AudioController = () => {
  const { isPlaying, fanType, volume, speed, timerActive, timerRemaining } = useFanStore();
  
  const startSoundRef = useRef<HTMLAudioElement | null>(null);
  const loopSoundRef = useRef<HTMLAudioElement | null>(null);
  const stopSoundRef = useRef<HTMLAudioElement | null>(null);
  
  const timerRef = useRef<number | null>(null);
  const decrementTimer = useFanStore((state) => state.decrementTimer);
  
  // Handle timer
  useEffect(() => {
    if (timerActive && timerRemaining > 0) {
      timerRef.current = window.setInterval(() => {
        decrementTimer();
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerActive, timerRemaining, decrementTimer]);
  
  // Handle audio playback
  useEffect(() => {
    // Create audio elements
    if (!startSoundRef.current) {
      startSoundRef.current = new Audio();
      loopSoundRef.current = new Audio();
      stopSoundRef.current = new Audio();
      
      // When start sound ends, play loop sound
      startSoundRef.current.addEventListener('ended', () => {
        loopSoundRef.current?.play();
      });
    }
    
    // Update audio sources based on fan type
    startSoundRef.current.src = `./sounds/${fanType}-fan-start.mp3`;
    if (loopSoundRef.current) {
      loopSoundRef.current.src = `./sounds/${fanType}-fan-loop.mp3`;
    }
    if (stopSoundRef.current) {
      stopSoundRef.current.src = `./sounds/${fanType}-fan-stop.mp3`;
    }
    
    // Set loop property
    if (loopSoundRef.current) {
      loopSoundRef.current.loop = true;
    }
    
    // Handle play/stop
    if (isPlaying) {
      startSoundRef.current?.play();
    } else {
      const fadeOut = () => {
        if (!loopSoundRef.current) return;
        
        let vol = loopSoundRef.current.volume;
        const interval = setInterval(() => {
          if (vol > 0.05) {
            vol -= 0.05;
            loopSoundRef.current!.volume = vol;
          } else {
            clearInterval(interval);
            loopSoundRef.current!.pause();
            loopSoundRef.current!.currentTime = 0;
            stopSoundRef.current?.play();
          }
        }, 50);
      };
      
      if (loopSoundRef.current?.paused === false) {
        fadeOut();
      }
    }
    
    // Cleanup function
    return () => {
      if (startSoundRef.current) {
        startSoundRef.current.onended = null;
      }
    };
  }, [isPlaying, fanType]);
  
  // Handle volume changes
  useEffect(() => {
    if (startSoundRef.current) startSoundRef.current.volume = volume;
    if (loopSoundRef.current) loopSoundRef.current.volume = volume;
    if (stopSoundRef.current) stopSoundRef.current.volume = volume;
  }, [volume]);
  
  // Handle playback rate (speed) changes
  useEffect(() => {
    // Map speed (0-1) to playback rate (0.7-1.3)
    const playbackRate = 0.7 + (speed * 0.6);
    
    if (startSoundRef.current) startSoundRef.current.playbackRate = playbackRate;
    if (loopSoundRef.current) loopSoundRef.current.playbackRate = playbackRate;
    if (stopSoundRef.current) stopSoundRef.current.playbackRate = playbackRate;
  }, [speed]);
  
  return null; // This is a non-visual component
};

export default AudioController;