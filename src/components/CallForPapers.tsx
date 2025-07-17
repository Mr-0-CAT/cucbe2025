import React from 'react';

const CallForPapers = () => {
  return (
    <div className="container fade-in-up" style={{ marginTop: '2.5rem' }}>
      <p className="section-title text-secondary justify-content-center"><span></span>Participate<span></span></p>
      <h1 style={{textAlign: 'center', paddingBottom: '2%', color: '#004080', fontSize: '2.8rem'}}>Call For Papers</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="col-box dark-blue-bg" style={{height: '480px'}}>
            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Circuits, Devices, VLSI</b></ol>
            <ol>
              1. Nano Technology <br/>
              2. Embedded Systems Design <br/>
              3. Analog Mixed Signal Design <br/>
              4. ASIC Design <br/>
            </ol>

            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Sensors and IOT</b></ol>
            <ol>
              1. Wearable Sensors<br/>
              2. Data Analytics<br/>
              3. Smart Agriculture <br/>
              4. Smart Cities <br/>
              5. Industrial IOT
            </ol>

            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Special Tracks For The Conference</b></ol>
            <ol>
              1. IEEE SIGHT Humanitarian<br/>
              2. Women In Engineering<br/>
              3. Quantum Communication
            </ol>
          </div>
        </div>

        <div className="col-md-4">
          <div className="col-box light-green-bg" style={{height: '480px'}}>
            <ol><b style={{color: '#004080', fontSize: 'larger'}}>Signal and Image Processing</b></ol>
            <ol>
              1. Statistical Signal Processing<br/>
              2. Computer Vision<br/>
              3. Medical Imaging
            </ol>
            <br/>
            <b style={{color: '#004080', fontSize: 'larger'}}>Antenna Communication and Networking</b>
            <br/><br/>
            <ol>1. Software Defined Radio</ol>
            <ol>2. Phased Array Antennas</ol>
            <ol>3. Wireless Body Networks</ol>
            <ol>4. Wireless Sensor Networks</ol>
            <ol>5. Optical Communication and Networks</ol>
            <ol>6. Antennas for 5G/6G Communication</ol>
          </div>
        </div>

        <div className="col-md-4">
          <div className="col-box dark-blue-bg" style={{height: '480px'}}>
            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Control, Robotics and Automation</b></ol>
            <ol>
              1. Humanoid Robot Technology<br/>
              2. Nano Robotics<br/>
              3. Automated Guided Vehicles
            </ol>
            
            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Power energy and Electric Vehicles</b></ol>
            <ol>
              1. Renewable energy and Sustainable Technologies<br/>
              2. Powerline Communication
            </ol>
            
            <ol><b style={{color: 'rgb(84, 200, 95)', fontSize: 'larger'}}>Computer Systems and Engineering AI</b></ol>
            <ol>
              1. Cyber Security and Block Chain<br/>
              2. Big Data, Distributed and Cloud Computing
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;