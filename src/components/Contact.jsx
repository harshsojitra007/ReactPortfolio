import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        "service_575pjj1",
        "template_bqyhrg9",
        form.current,
        "je3OeWzimIoDFnpA0"
      );
    } catch (err) {
        console.log(err);
    }
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <div className="m-t-4">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <div className="contact__type">
                <ForwardToInboxRoundedIcon className="contact__option__icon color__primary__alt" />
                <h4 className="color__primary__alt">Email</h4>
              </div>
              <h5>harsh.sojitra.49@gmail.com</h5>
              <a
                href="mailto:harsh.sojitra.49@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="color__primary__alt"
              >
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <div className="contact__type">
                <WhatsAppIcon className="contact__option__icon color__primary__alt" />
                <h4 className="color__primary__alt">Contact</h4>
              </div>
              <h5>+91 9016694754</h5>
              <a
                href="https://wa.me/+919016694754"
                rel="noreferrer"
                target="_blank"
                className="color__primary__alt"
              >
                Contact me Direct?
              </a>
            </article>

            {/* <article className="contact__option">
              <BsInstagram className="contact__option__icon" />
              <h4>Instagram</h4>
              <h5>@harsh_sojitra_007</h5>
              <a
                href="https://www.instagram.com/harsh_sojitra_007/"
                rel="noreferrer"
                target="_blank"
              >
                Follow me
              </a>
            </article> */}
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="client_name"
              placeholder="Your Full Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="client_email"
              placeholder="Your E-mail"
              autoComplete="off"
              required
            />
            <textarea
              name="client_message"
              rows="7"
              placeholder="Type Your Message Here"
              required
            />
            <input
              type="submit"
              className="external__links__github__button"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
