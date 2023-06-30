import React, { useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    const emailAddress = 'mamun.bbn.bd@gmail.com';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-4">
        If you have any inquiries or would like to discuss a project, feel free to reach out to me via email.
      </p>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1 font-bold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1 font-bold">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleEmailClick}
      >
        Send an Email To Mamun
      </button>
    </div>
  );
};

export default Contact;
