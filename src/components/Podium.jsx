  import React from "react";
  import "../styles/Podium.css";

  function Podium() {
    return (
          <div className="podium-wrap">
            <div className="podium">
              
              <div className="podium-item second">  
                <p className="player-name"> Pseudo + elo </p>
                <img className="avatar-img" src="/user.png" alt="avatar" />
                <div className="step">
                  <span className="rank">2</span>
                </div>
              </div>

              <div className="podium-item first">
                {/* <img className="crown-img" src="/crown.jpg" alt="couronne" /> */}
                  <p className="player-name">Pseudo + elo</p>
                  <img className="avatar-img" src="/user.png" alt="avatar" />
                  <div className="step">
                    <span className="rank">1</span>
                  </div>
              </div>

              <div className="podium-item third">
                <p className="player-name">Pseudo + elo</p>
                <img className="avatar-img" src="/user.png" alt="avatar" />
                <div className="step">
                  <span className="rank">3</span>
                </div>
              </div>

            </div>
          </div>
    );
  }

  export default Podium;