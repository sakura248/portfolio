import emailjs from "@emailjs/browser";
import React, { MutableRefObject, useRef, useState } from "react";
import { Section } from "./contact.styles";

function Contact() {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const emailjsServiceId: string = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const emailjsTemplateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const emailjsUserId: string = process.env.REACT_APP_EMAILJS_USER_ID!;

  // init(emailjsUserId)

  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
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
    setInputs({ ...inputs, name: e.target.value });
    setIsFilled({ ...isFilled, name: true });
  };

  const onChangEmail = (e: { target: { value: string } }) => {
    setInputs({ ...inputs, email: e.target.value });
    setIsFilled({ ...isFilled, email: true });
  };

  const onChangMessage = (e: { target: { value: string } }) => {
    setInputs({ ...inputs, message: e.target.value });
    setIsFilled({ ...isFilled, message: true });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    emailjs
      .sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        form.current,
        emailjsUserId
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setIsSubmit(true);
      });
  };

  return (
    <Section id="contact">
      <h2>Contact</h2>
      {!isSubmit ? (
        <form onSubmit={handleSubmit} ref={form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required={true}
            onChange={onChangName}
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            required={true}
            onChange={onChangEmail}
          />
          <label htmlFor="name">Message</label>
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            required={true}
            onChange={onChangMessage}
          ></textarea>
          {isFilled.name && isFilled.email && isFilled.message ? (
            <button type="submit">SEND A MESSAGE</button>
          ) : (
            <button disabled>Please fill in!</button>
          )}
        </form>
      ) : (
        <div>
          <p>
            💖 <br />
            Thank you for the message!
          </p>
        </div>
      )}
    </Section>
  );
}

export default Contact;
