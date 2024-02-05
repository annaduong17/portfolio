import { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/ContactPage.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Success from './Success';

function ContactPage() {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ errors, setErrors ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ serverError, setServerError ] = useState(false);
  const [ captchaVerified, setCaptchaVerified ] = useState(false);
  const [ token, setToken ] = useState(null);
  const successMessageRef = useRef(null);
  const reRef = useRef(null);

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

  const handleCaptchaChange = (value) => {
    setToken(value);
    setCaptchaVerified(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (captchaVerified) {
        try {
          setIsLoading(true);

          const response = await axios.post('/api/submit-form', {
              name: formData.name,
              email: formData.email,
              message: formData.message,
              token: token
          });
    
          if (response.ok || response.data.success) {
            setFormData({});
            setFormSubmitted(true);
          } else {
            setServerError(true);
            console.error('Error submitting:', response.statusText);
          }
        } catch (error) {
          setServerError(true);
          console.error('Error submitting form:', error.message);
        } finally {
          setIsLoading(false);
          scrollToSection(successMessageRef);
        }  
      } else {
        console.log("Please verify reCAPTCHA before submitting the form.");
      }
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
          isLoading={isLoading}
          serverError={serverError}
          reRef={reRef}
          handleCaptchaChange={handleCaptchaChange}
        />}
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactPage;