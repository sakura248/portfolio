import React, { useState, useRef } from "react";
import { Section } from "./contact.styles";
import emailjs, { init } from "@emailjs/browser";
import dotenv from "dotenv";

function Contact() {
  const form = useRef();

  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  console.log(emailjsServiceId);
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  // const emailjsUserId:string = process.env.REACT_APP_EMAILJS_USER_ID;

  // init(emailjsUserId)

  const [isSubmit, setIsSubmit] = useState(false);
  const [_form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFilled, setIsFilled] = useState({
    name: false,
    email: false,
    message: false,
  });

  // const onChangName = (e: { target: { value: string } }) => {
  //   setForm({ ..._form, name: e.target.value });
  //   setIsFilled({ ...isFilled, name: true });
  // };

  // const onChangEmail = (e: { target: { value: string } }) => {
  //   setForm({ ..._form, email: e.target.value });
  //   setIsFilled({ ...isFilled, email: true });
  // };

  // const onChangMessage = (e: { target: { value: string } }) => {
  //   setForm({ ..._form, message: e.target.value });
  //   setIsFilled({ ...isFilled, message: true });
  // };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    console.log(isFilled);
    event.preventDefault();
    // emailjs
    //   .sendForm(
    //     emailjsServiceId,
    //     emailjsTemplateId,
    //     form.current,
    //     "YOUR_USER_ID"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <Section id="contact">
      <h2>Contact</h2>
      <form
        onSubmit={handleSubmit}
        // ref={form}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required={true}
          // onChange={onChangName}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          required={true}
          // onChange={onChangEmail}
        />
        <label htmlFor="name">Message</label>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          required={true}
          // onChange={onChangMessage}
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
