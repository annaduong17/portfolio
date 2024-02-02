function ContactForm({ handleSubmit }) {
  return (
    <div id="form-container" className="contact">
      <form onSubmit={handleSubmit} className="contact-form">
      <h3 className="text-align-center">Contact Form</h3>
      <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>

      <section className="form-section">
        <label className="form-label bold" htmlFor="name">Full Name</label>
        <input className="form-input form-field" id="name" type="text" />
      </section>

      <section className="form-section">
        <label className="form-label bold" htmlFor="email">Email</label>
        <input className="form-input form-field" id="email" type="email" />
      </section>

     <section className="form-section">
      <label className="form-label bold" htmlFor="message">Your Message</label>
      <textarea className="form-textarea form-field" id="message" type="text"></textarea>
     </section>

     <section className="form-section flex-row-center">
        <button type="submit" className="btn primary-btn">Submit</button>
      </section>
    </form>
  </div>
  );
}

export default ContactForm;