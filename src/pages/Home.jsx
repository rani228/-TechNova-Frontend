import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHomePage } from "../api/Home.jsx";

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHomePage()
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (!data) return <p style={{ textAlign: "center" }}>No data found.</p>;

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>{data.heroHeading}</h1>
                    <h2>{data.heroSubHeading}</h2>
                    <p>{data.heroDescription}</p>

                    <Link to="/services" className="btn">
                        {data.heroButtonText}
                    </Link>
                </div>
            </section>

            <section className="section">
                <h2>{data.whyChooseHeading}</h2>
                <div className="cards">
                    {data.features?.map((item, index) => (
                        <div className="card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;