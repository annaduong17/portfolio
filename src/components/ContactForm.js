import Button from './Button';

function ContactForm() {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>

      <form action="">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" type="text"></textarea>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;