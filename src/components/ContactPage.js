import { useState, useRef } from 'react';
import '../styles/ContactPage.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Success from './Success';

function ContactPage({ setActiveLink }) {
  const [ nameInput, setNameInput ] = useState('');
  const [ emailInput, setEmailInput ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth'
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    scrollToSection(contactRef);
  } 

  return (
    <div ref={contactRef} id="contact-page" className="contact-page page-margin page-padding">
      <h2 className='heading text-align-center'>Contact Me</h2>
      <div className='flex-row-center'>
        <ContactInfo />
        {formSubmitted ? <Success /> : <ContactForm handleSubmit={handleSubmit}/>}
      </div>
    </div>
  );
}

export default ContactPage;