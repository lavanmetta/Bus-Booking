import React from "react";
import { ServicesList } from "../Data/Services";
import { useEffect, useState } from "react";

function OurServices() {
  const [service, setService] = useState([]);

  useEffect(() => {
    const services = ServicesList();
    setService(services);
  }, []);

  return (
    <React.Fragment>
      <div className="our-services-container">
        {service.map((each) => (
          <div key={each.id} className="services">
            <img src={each.img} alt="img" />
            <h2>{each.number}</h2>
            <span>{each.text}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default OurServices;
