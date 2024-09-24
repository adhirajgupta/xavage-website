import React from "react";

const CauseS2 = () => {
  
  return (
    <div id="organizations">
        <h1>ORGANIZATIONS WE SUPPORT</h1>
        <div id="orgs-container">
            <div id="org-card">
              <img src={require('./Jayadeva-Logo.jpg')} id="org-img" alt="LOGO"/>
              <h3>Sri Jayadeva Institute of Cardio Vascular Sciences and Research</h3>
              <p>A non-profit hospital providing state-of-the-art care to patients in need.</p>
            </div>
            <div id="org-card">
              <img src={require('./Shankara-Logo.jpg')} id="org-img" alt="LOGO"/>
              <h3>Shri Shankara Cancer Foundation</h3>
              <p>A non-profit that provides cancer care to the most vulnerable.</p>
            </div>
        </div>
    </div>
  );
};

export default CauseS2;