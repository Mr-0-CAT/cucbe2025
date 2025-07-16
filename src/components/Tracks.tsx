import React from 'react';

const Tracks = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <p className="section-title text-secondary justify-content-center"><span></span>Research Areas<span></span></p>
      <h1 style={{color: '#004080', fontSize: '2.8rem', marginBottom: '3rem'}}>Conference Tracks</h1>

      <div className="cards-container fade-in-up">
        <div className="card3">
          <strong>Track-1 (Circuits)</strong>
          <div className="card__body">
            1. IoT: Sensors, MEMS, Nano, Devices and Circuits<br/>
            2. IoT Applications: Smart grid, Process instrumentation, e-health, Disaster management, Protocols and standards, Mobile and wearable devices, Innovative vehicular applications.<br/>
            3. VLSI: Design, Fabrication, Testing, CAD, Embedded systems and SOC<br/>
            4. Power Electronics, Smart Power electronics drives and applications, Renewable Energy sources<br/>
            5. Electric Vehicles
          </div>
          <span>Track-1 (Circuits)</span>
        </div>

        <div className="card3">
          <strong>Track-2 (Controls)</strong>
          <div className="card__body">
            1. Control, Robotics and Acquisition<br/>
            2. Power Systems and FACTS<br/>
            3. Advanced Machines and Controls<br/>
            4. Instrumentation, Robotics and Virtual Reality
          </div>
          <span>Track-2 (Controls)</span>
        </div>

        <div className="card3">
          <strong>Track-3 (Communications)</strong>
          <div className="card__body">
            1. Communication Network, Mobile Communication, MANET, VANET, Wireless Sensors Network, Web Services, Security, e-transaction<br/>
            2. Optical, Satellite, RF and Microwave Communication<br/>
            3. Signal Processing: Image, Audio, Video, Biomedical Signal Processing<br/>
            4. Pattern Recognition, Machine Learning, Deep Learning
          </div>
          <span>Track-3 (Communications)</span>
        </div>
      </div>
    </div>
  );
};

export default Tracks;