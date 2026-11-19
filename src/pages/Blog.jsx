import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/Blog";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogs()
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (blogs.length === 0) return <p style={{ textAlign: "center" }}>No blogs found</p>;

    return (
        <section className="section">
            <h1>Our Latest Blogs</h1>
            <p>Explore the latest technology updates and articles.</p>

            <div className="cards">
                {blogs.map((blog) => (
                    <div className="card" key={blog._id}>
                        <span className="blog-date">{blog.date}</span>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                      
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;