import Page from "../Page";
import "./FanModelsPage.scss";
import { useNavigate } from "react-router-dom";
import { TbCarFanFilled } from "react-icons/tb";

const FanModelsPage = () => {
  const navigate = useNavigate();

  const fanModels = [
    {
      id: 1,
      name: "Pedestal Fan",
      description: "Classic stand fan with oscillation",
      status: "available",
      sounds: 1,
      image: "/images/pedestal-fan.jpg",
      features: ["Oscillation"],
      route: "/stand-fan-controls"
    },
    {
      id: 2,
      name: "Ceiling Fan",
      description: "Modern ceiling fan with elegant blade designs",
      status: "coming-soon",
      sounds: 0,
      image: "/images/ceiling-fan.jpg",
      features: [],
      route: null
    },
    {
      id: 3,
      name: "Box Fan",
      description: "Box fan with better white noise",
      status: "coming-soon",
      sounds: 0,
      image: "/images/box-fan.jpg",
      features: [],
      route: null
    }
  ];

  const handleExploreSounds = (fan) => {
    if (fan.status === 'available' && fan.route) {
      navigate(fan.route);
    }
  };

  return (
    <Page
      requireDarkRoom={true}
      customContent={true}
    >
      <div className="fan-models-container">
        <div className="fan-models-header">
          <h1>Fan Models</h1>
          <p>Discover the perfect harmony between airflow engineering and acoustic design</p>
        </div>
        
        <div className="fan-models-grid">
          {fanModels.map((fan) => (
            <div key={fan.id} className={`fan-card ${fan.status}`}>
              <div className="fan-card-image">
                <div className="fan-placeholder">
                  {fan.name === "Pedestal Fan" ? (
                    <TbCarFanFilled size={80} />
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C12.5523 2 13 2.44772 13 3V4.5C14.7949 4.82251 16.2983 5.85124 17.1904 7.31623C18.0825 8.78122 18.2647 10.5344 17.6919 12.1188C17.119 13.7032 15.8498 14.9355 14.2426 15.4646C12.6355 15.9937 10.8693 15.7647 9.41421 14.8284L8.70711 15.5355C9.09763 15.9261 9.09763 16.5592 8.70711 16.9497C8.31658 17.3403 7.68342 17.3403 7.29289 16.9497L6.58579 16.2426C5.64947 17.6977 5.42054 19.4639 5.94962 21.0711C6.4787 22.6782 7.71104 23.9476 9.29545 24.5204C10.8799 25.0933 12.6331 24.9111 14.098 24.0189C15.5629 23.1268 16.5917 21.6234 16.9142 19.8285H18.5C19.0523 19.8285 19.5 19.3808 19.5 18.8285C19.5 18.2762 19.0523 17.8285 18.5 17.8285H16.9142C16.5917 16.0336 15.5629 14.5302 14.098 13.6381C12.6331 12.7459 10.8799 12.5637 9.29545 13.1366C7.71104 13.7094 6.4787 14.9788 5.94962 16.5859C5.42054 18.1931 5.64947 19.9593 6.58579 21.4144L7.29289 20.7073C7.68342 20.3167 8.31658 20.3167 8.70711 20.7073C9.09763 21.0978 9.09763 21.7309 8.70711 22.1214L9.41421 22.8285C10.8693 21.8923 12.6355 21.6633 14.2426 22.1924C15.8498 22.7215 17.119 23.9538 17.6919 25.5382C18.2647 27.1226 18.0825 28.8758 17.1904 30.3408C16.2983 31.8058 14.7949 32.8345 13 33.157V34.5C13 35.0523 12.5523 35.5 12 35.5C11.4477 35.5 11 35.0523 11 34.5V33.157C9.20514 32.8345 7.70168 31.8058 6.80962 30.3408C5.91756 28.8758 5.73534 27.1226 6.30815 25.5382C6.88096 23.9538 8.15019 22.7215 9.75736 22.1924C11.3645 21.6633 13.1307 21.8923 14.5858 22.8285L15.2929 22.1214C14.9024 21.7309 14.9024 21.0978 15.2929 20.7073C15.6834 20.3167 16.3166 20.3167 16.7071 20.7073L17.4142 21.4144C18.3505 19.9593 18.5795 18.1931 18.0504 16.5859C17.5213 14.9788 16.289 13.7094 14.7046 13.1366C13.1201 12.5637 11.3669 12.7459 9.90196 13.6381C8.43707 14.5302 7.40834 16.0336 7.08583 17.8285H5.5C4.94772 17.8285 4.5 18.2762 4.5 18.8285C4.5 19.3808 4.94772 19.8285 5.5 19.8285H7.08583C7.40834 21.6234 8.43707 23.1268 9.90196 24.0189C11.3669 24.9111 13.1201 25.0933 14.7046 24.5204C16.289 23.9476 17.5213 22.6782 18.0504 21.0711C18.5795 19.4639 18.3505 17.6977 17.4142 16.2426L16.7071 16.9497C16.3166 17.3403 15.6834 17.3403 15.2929 16.9497C14.9024 16.5592 14.9024 15.9261 15.2929 15.5355L14.5858 14.8284C13.1307 15.7647 11.3645 15.9937 9.75736 15.4646C8.15019 14.9355 6.88096 13.7032 6.30815 12.1188C5.73534 10.5344 5.91756 8.78122 6.80962 7.31623C7.70168 5.85124 9.20514 4.82251 11 4.5V3C11 2.44772 11.4477 2 12 2Z"/>
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="fan-card-content">
                <div className="fan-card-header">
                  <h3>{fan.name}</h3>
                  <div className={`status-badge ${fan.status}`}>
                    {fan.status === 'available' ? 'Available' : 'Coming Soon'}
                  </div>
                </div>
                
                <p className="fan-description">{fan.description}</p>
                
                <div className="fan-stats">
                  <span className="sound-count">
                    {fan.sounds > 0 ? `${fan.sounds} Sounds` : 'Sounds TBA'}
                  </span>
                </div>
                
                <div className="fan-features">
                  {fan.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="fan-card-actions">
                  {fan.status === 'available' ? (
                    <button 
                      className="explore-btn"
                      onClick={() => handleExploreSounds(fan)}
                    >
                      Explore Sounds
                    </button>
                  ) : (
                    <button className="notify-btn" disabled>Explore Sounds</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="coming-soon-notice">
          <h3>More Fan Models Coming Soon</h3>
          <p>We're constantly expanding our collection. Check back for tower fans, exhaust fans, and industrial models.</p>
        </div>
      </div>
    </Page>
  );
};

export default FanModelsPage;
