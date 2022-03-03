import React, { useState } from "react";
import { Section } from "./contact.styles";

function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFilled, setIsFilled] = useState({
    name: false,
    email: false,
    message: false,
  });

  const onChangName = (e: { target: { value: string } }) => {
    setForm({ ...form, name: e.target.value });
    setIsFilled({ ...isFilled, name: true });
  };

  const onChangEmail = (e: { target: { value: string } }) => {
    setForm({ ...form, email: e.target.value });
    setIsFilled({ ...isFilled, email: true });
  };

  const onChangMessage = (e: { target: { value: string } }) => {
    setForm({ ...form, message: e.target.value });
    setIsFilled({ ...isFilled, message: true });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    console.log(isFilled);
    event.preventDefault();
  };

  return (
    <Section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name *"
          required={true}
          onChange={onChangName}
        />
        <input
          type="email"
          placeholder="Email *"
          required={true}
          onChange={onChangEmail}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          required={true}
          placeholder="Message *"
          onChange={onChangMessage}
        ></textarea>
        {isFilled.name && isFilled.email && isFilled.message ? (
          <button
            type="submit"
            style={{ backgroundColor: "#FF3495", color: "#fffffe" }}
          >
            SUBMIT
          </button>
        ) : (
          <button disabled>SUBMIT</button>
        )}
      </form>
    </Section>
  );
}

export default Contact;
