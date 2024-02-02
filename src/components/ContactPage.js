import '../styles/ContactPage.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <div id="contact-page" className="contact-page page-margin page-padding">
      <h2 className='heading text-align-center'>Contact Me</h2>
      <div className='flex-row-center'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;