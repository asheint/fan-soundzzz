import "./FanController.scss";
import { useTickSound } from "../../hooks/useTickSound";

const FanController = ({ 
  title,
  isRunning, 
  speed, 
  isOscillating, 
  startFan, 
  stopFan, 
  setSpeed, 
  toggleOscillation,
  showSpeedControl = true,
  showOscillationControl = true 
}) => {
  const playTick = useTickSound();

  return (
    <div className="fan-control-panel">
      <h2 className="control-title">{title}</h2>
      
      {/* Power Controls */}
      <div className="control-section">
        <h3 className="control-section-title">Power</h3>
        <div className="control-buttons">
          <button 
            className={`control-btn ${isRunning ? 'active' : ''}`}
            onClick={() => { startFan(); playTick(); }}
            disabled={isRunning}
          >
            Start
          </button>
          <button 
            className={`control-btn ${!isRunning ? 'active' : ''}`}
            onClick={() => { stopFan(); playTick(); }}
            disabled={!isRunning}
          >
            Stop
          </button>
        </div>
      </div>

      {/* Speed Controls */}
      {/* {showSpeedControl && (
        <div className="control-section">
          <h3 className="control-section-title">Speed Level</h3>
          <div className="control-buttons">
            <button 
              className={`control-btn ${speed === 1 ? 'active' : ''}`}
              onClick={() => setSpeed(1)}
              disabled={!isRunning}
            >
              Low
            </button>
            <button 
              className={`control-btn ${speed === 2 ? 'active' : ''}`}
              onClick={() => setSpeed(2)}
              disabled={!isRunning}
            >
              Medium
            </button>
            <button 
              className={`control-btn ${speed === 3 ? 'active' : ''}`}
              onClick={() => setSpeed(3)}
              disabled={!isRunning}
            >
              High
            </button>
          </div>
        </div>
      )} */}

      {/* Oscillation Control */}
      {/* {showOscillationControl && (
        <div className="control-section">
          <h3 className="control-section-title">Oscillation</h3>
          <div className="control-buttons">
            <button 
              className={`control-btn ${isOscillating ? 'active' : ''}`}
              onClick={toggleOscillation}
              disabled={!isRunning}
            >
              {isOscillating ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      )} */}

      {/* Status Indicator */}
      <div className="status-section">
        <div className="status-indicator">
          <span className={`status-dot ${isRunning ? 'running' : ''}`}></span>
          <span className="status-text">
            {isRunning ? 'Running' : 'Stopped'}
          </span>
        </div>
        {isOscillating && isRunning && (
          <div className="status-badge">Oscillating</div>
        )}
      </div>
    </div>
  );
};

export default FanController;
