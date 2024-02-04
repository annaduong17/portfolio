import ReCAPTCHA from "react-google-recaptcha";

function ContactForm({ formData, errors, handleInputChange, handleSubmit, isLoading, serverError, reRef, handleCaptchaChange }) {
  
  return (
    <div id="form-container" className="contact">
      {serverError ? (
        <div>
          <h3 className="text-align-center">Oops!</h3>
          <p>An unexpected issue occurred while processing your request. I apologize for the inconvenience. Please try again in a little while or email me directly. Thank you for your understanding.</p>
        </div>) : (

        <form method="POST" noValidate onSubmit={handleSubmit} className="contact-form">
        <h3 className="text-align-center">Contact Form</h3>
        <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>

        <section className="form-section">
          <label className="form-label bold" htmlFor="name">Name</label>
          <input onChange={handleInputChange} required className="form-input form-field" id="name" type="text" value={formData.name} />
          <span className="validation-message">{errors.name}</span>
        </section>

        <section className="form-section">
          <label className="form-label bold" htmlFor="email">Email</label>
          <input onChange={handleInputChange} required className="form-input form-field" id="email" type="email" value={formData.email} />
          <span className="validation-message">{errors.email}</span>
        </section>

        <section className="form-section">
        <label className="form-label bold" htmlFor="message">Message</label>
        <textarea onChange={handleInputChange} required className="form-textarea form-field" id="message" type="text" value={formData.message}></textarea>
        <span className="validation-message">{errors.message}</span>
        </section>

        <section className="form-section flex-row-center">
          <ReCAPTCHA ref={reRef} size="normal" sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
        </section>

        <section className="form-section flex-row-center submit-section">
          <button disabled={isLoading} type="submit" className="btn primary-btn">{isLoading ? 'Submitting...' : 'Submit' }</button>
        </section>
      </form>
      )}
    </div>
  );
}

export default ContactForm;