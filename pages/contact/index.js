import React, { useState } from "react";
import Styles from "./style";
import API from "../../utils/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendResult, setSendResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const sendMessage = e => {
    e.preventDefault();
    setLoading(true);
    API.post("/message", { name, email, message })
      .then(res => {
        setSendResult("Повідомлення успішно відправлено.");
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setSendResult('Помилка відправки даних');
      });
  };

  return (
    <>
      <div className="wrapContact">
        <h1 className="page-section-text">Контактна форма</h1>
        <div className="wrapContactForm">
          <form onSubmit={sendMessage} id="contactForm">
            <label htmlFor="name">Ваше ім'я:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Ваш e-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="message">Ваше повідомлення:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              required
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit" id="sendMessage" disabled={isLoading}>
              Відправити
            </button>
            <div className="sendResult">{sendResult}</div>
          </form>
        </div>
      </div>
      <Styles />
    </>
  );
};

export default Contact;
