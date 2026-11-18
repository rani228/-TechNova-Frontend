
import { useEffect, useState } from "react";
import { getContactPage } from "../api/Contact";
import { client } from "../sanity/client";
function Contact() {
  const [contactPage, setContactPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [status, setStatus] = useState('');
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    let isMounted = true;

    getContactPage()
      .then((content) => {
        if (!isMounted) return;

        if (!content) {
          setLoadError("Contact page content has not been published in Sanity.");
          return;
        }

        setContactPage(content);
      })
      .catch((error) => {
        console.error("Failed to load Contact page content from the API:", error);
        if (isMounted) {
          setLoadError("Unable to load Contact page content. Please try again later.");
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (!/^[A-Za-z ]*$/.test(value)) {
        return;
      }
      setError("");
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const fullName = formData.name.trim();
    if (!/^[A-Za-z ]+$/.test(fullName)) {
      setError("Name should contain only letters. Numbers are not allowed.");
      return;
    }
    const nameParts = fullName.split(/\s+/);

    if (nameParts.length < 2) {
      setError("Please enter your full name with space. Example: Rushikesh Patil");
      return;
    }
    if (nameParts[0].length < 2 || nameParts[1].length < 2) {
      setError("First name and Last name should be at least 2 characters");
      return;
    }

    setStatus('Sending...')

    try {
      await client.create({
        _type: 'contactMessage',
        name: fullName,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      })
      setStatus('Message sent successfully!')
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err)
      setStatus('Error! Failed to send message. Please try again.')
    }
  }
  return (
    <section className="section">
      {isLoading ? (
        <p role="status">Loading contact page...</p>
      ) : loadError ? (
        <p role="alert">{loadError}</p>
      ) : (
        <>
          <h1>{contactPage.heading}</h1>
          <p>{contactPage.intro}</p>
        </>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>
       { status && <p style={{ color: "green", marginTop: "10px" }}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
