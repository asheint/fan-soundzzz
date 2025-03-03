import { useState, useEffect } from 'react';
import { useFanStore, FanType } from '../store/fanStore';
import { Play, Pause, Volume2, Clock, RotateCw } from 'lucide-react';

const ControlPanel = () => {
  const { 
    isPlaying, 
    fanType, 
    volume, 
    speed, 
    timerMinutes, 
    timerActive, 
    timerRemaining,
    setPlaying, 
    setFanType, 
    setVolume, 
    setSpeed, 
    setTimerMinutes, 
    startTimer, 
    stopTimer 
  } = useFanStore();
  
  const [showTimerSettings, setShowTimerSettings] = useState(false);
  
  // Format remaining time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate timer progress percentage
  const timerProgress = timerActive 
    ? (timerRemaining / (timerMinutes * 60)) * 100 
    : 100;
  
  const handleFanTypeChange = (type: FanType) => {
    if (!isPlaying) {
      setFanType(type);
    }
  };
  
  const togglePlayback = () => {
    setPlaying(!isPlaying);
  };
  
  const handleTimerStart = () => {
    if (timerActive) {
      stopTimer();
    } else {
      startTimer();
    }
    setShowTimerSettings(false);
  };
  
  return (
    <div className="glass p-6 rounded-2xl w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fan Type Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-indigo-300">Fan Type</h3>
          <div className="grid grid-cols-3 gap-2">
            <div 
              className={`fan-option ${fanType === 'table' ? 'active' : ''}`}
              onClick={() => handleFanTypeChange('table')}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-indigo-400">
                  <circle cx="12" cy="18" r="3" fill="currentColor" opacity="0.4" />
                  <path d="M12 15V8" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 7H9" stroke="currentColor" strokeWidth="2" />
                  <path d="M13.5 4.5L10.5 9.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M10.5 4.5L13.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Table Fan</span>
            </div>
            
            <div 
              className={`fan-option ${fanType === 'ceiling' ? 'active' : ''}`}
              onClick={() => handleFanTypeChange('ceiling')}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-indigo-400">
                  <circle cx="12" cy="4" r="2" fill="currentColor" />
                  <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  <line x1="18" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="6" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="16.5" y1="7.5" x2="14.5" y2="9.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="7.5" y1="7.5" x2="9.5" y2="9.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="7.5" y1="16.5" x2="9.5" y2="14.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Ceiling Fan</span>
            </div>
            
            <div 
              className={`fan-option ${fanType === 'box' ? 'active' : ''}`}
              onClick={() => handleFanTypeChange('box')}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-indigo-400">
                  <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7V17" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 12H7" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Box Fan</span>
            </div>
          </div>
        </div>
        
        {/* Volume Control */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-indigo-300">Volume</h3>
            <Volume2 className="w-5 h-5 text-indigo-300" />
          </div>
          
          <div className="relative h-40 w-full flex items-center justify-center">
            <div className="h-full w-1 bg-indigo-900/30 rounded-full overflow-hidden flex items-end">
              <div 
                className="w-full bg-indigo-500 volume-indicator"
                style={{ height: `${volume * 100}%` }}
              ></div>
            </div>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="absolute h-full w-8 opacity-0 cursor-pointer"
              style={{ transform: 'rotate(-90deg)' }}
            />
          </div>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-indigo-300">Speed</h3>
              <RotateCw className="w-5 h-5 text-indigo-300" />
            </div>
            
            <div className="relative w-full h-6 flex items-center">
              <div className="slider-track w-full"></div>
              <div 
                className="slider-track-active absolute left-0"
                style={{ width: `${speed * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="absolute w-full h-6 opacity-0 cursor-pointer"
              />
              <div 
                className="slider-thumb absolute pointer-events-none"
                style={{ left: `calc(${speed * 100}% - 8px)` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs text-indigo-300/70">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>
        
        {/* Timer and Play Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-indigo-300">Timer</h3>
            <Clock className="w-5 h-5 text-indigo-300" />
          </div>
          
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="8"
              />
              <circle
                className="timer-ring"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#5a189a"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * timerProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {timerActive ? (
                <div className="text-center">
                  <div className="text-2xl font-bold">{formatTime(timerRemaining)}</div>
                  <button 
                    className="text-xs text-indigo-300 mt-1 hover:text-indigo-200"
                    onClick={stopTimer}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-indigo-300 hover:text-indigo-200 text-sm font-medium"
                  onClick={() => setShowTimerSettings(!showTimerSettings)}
                >
                  {showTimerSettings ? 'Close' : 'Set Timer'}
                </button>
              )}
            </div>
          </div>
          
          {showTimerSettings && (
            <div className="mt-2 space-y-3">
              <div className="flex justify-between">
                {[15, 30, 60, 90].map((mins) => (
                  <button
                    key={mins}
                    className={`px-2 py-1 text-xs rounded ${
                      timerMinutes === mins 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-indigo-900/30 text-indigo-300'
                    }`}
                    onClick={() => setTimerMinutes(mins)}
                  >
                    {mins} min
                  </button>
                ))}
              </div>
              <button
                className="btn btn-secondary w-full text-sm"
                onClick={handleTimerStart}
              >
                Start Timer
              </button>
            </div>
          )}
          
          <button
            className={`btn w-full flex items-center justify-center gap-2 ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'btn-primary'
            }`}
            onClick={togglePlayback}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" /> Stop Fan
              </>
            ) : (
              <>
                <Play className="w-5 h-5" /> Start Fan
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;