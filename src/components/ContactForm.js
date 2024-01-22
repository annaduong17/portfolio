import Button from './Button';

function ContactForm() {
  return (
    <div className='contact-form'>
      <h2>Contact Me</h2>
      <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>

      <form action="" className='form'>
        <div className='form-section'>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" />
        </div>
        <div className='form-section'>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className='form-section'>
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text"></textarea>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;