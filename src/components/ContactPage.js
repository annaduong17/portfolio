import { useState, useRef } from 'react';
import '../styles/ContactPage.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Success from './Success';

function ContactPage({ setActiveLink }) {
  const [ formData, setFormData ] = useState({});
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ errors, setErrors ] = useState({});
  const successMessageRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth'
      });
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData(prevFormData => {
      const updatedFormData = {...prevFormData, [id]: value};

      return updatedFormData;
    });
  }

  const validateForm = (data) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name) {
      newErrors.name = 'Please enter your name';
    }

    if (!data.email) {
      newErrors.email = 'Please enter your email';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!data.message) {
      newErrors.message = 'Please enter a message';
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
      scrollToSection(successMessageRef);
    } 
  } 

  return (
    <div ref={successMessageRef} id="contact-page" className="contact-page page-margin page-padding">
      <h2 className='heading text-align-center'>Contact</h2>
      <div className='flex-row-center'>
        {formSubmitted ? <Success /> : <ContactForm 
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />}
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactPage;