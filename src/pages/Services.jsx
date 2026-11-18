
import React, { useEffect, useState } from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaRobot } from "react-icons/fa";
import { getServicesPage } from "../api/Service";

const iconMap = {
  code: <FaCode />,
  mobile: <FaMobileAlt />,
  database: <FaDatabase />,
  robot: <FaRobot />,
};

function Services() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getServicesPage().then(setData);
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <section className="section">
      <h1>{data.heading}</h1>
      <p>{data.subHeading}</p>

      <div className="cards">
        {data.services?.map((service, index) => (
          <div className="card" key={index}>
            <div className="service-icon">{iconMap[service.icon] || <FaCode />}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
