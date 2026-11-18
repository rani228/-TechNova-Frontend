import React, { useEffect, useState } from "react";
import { getAboutPage } from "../api/About";

function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getAboutPage().then(setData);
    }, []);

    if (!data) return <p style={{ textAlign: "center" }}>Loading...</p>;

    return (
        <section className="section about">
            <h1>{data.heading}</h1>
            <p>{data.description}</p>

            <div className="cards">
                {data.cards?.map((item, index) => (
                    <div className="card" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;