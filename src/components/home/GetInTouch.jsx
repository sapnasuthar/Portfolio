import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = ({ heading, message, email }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init({
      publicKey: "64lZgEKfi1zCB6zJM",
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Update the state of the form inputs while maintaining the field names required by EmailJS
  const handleNameChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const handleMessageChange = (e) => {
    setForm({ ...form, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    emailjs.sendForm(
      'service_wfmn97b',
      'template_isd76mm',
      formRef.current,
      {
        publicKey: '64lZgEKfi1zCB6zJM',
      }
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}{" "}
        <a className="text-decoration-none" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 600 }}>
        <div className="form-group pb-3">
          <label htmlFor="name" className="font-weight-bold">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="user_name" // This matches EmailJS template variable
            placeholder="What's your name?"
            value={form.name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="email" className="font-weight-bold">Your email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="user_email" // This matches EmailJS template variable
            placeholder="How can I reach you?"
            value={form.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="message" className="font-weight-bold">Your Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message" // This matches EmailJS template variable
            rows="5"
            placeholder="What you want to say?"
            value={form.message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary px-4 py-2" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        <div style={{ height: '32px' }}></div>
        {status && <div className={`text-center ${status.includes('success') ? 'text-success' : 'text-danger'}`}>{status}</div>}
      </form>
    </>
  );
};

export default GetInTouch;
