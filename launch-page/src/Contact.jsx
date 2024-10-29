
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
