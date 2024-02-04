import { useState, useRef } from 'react';
import '../styles/ContactPage.scss';

function ContactPage() {
  const [ formData, setFormData ] = useState({});
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ errors, setErrors ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ serverError, setServerError ] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsLoading(true);

        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          setFormData({});
          setFormSubmitted(true);
          scrollToSection(successMessageRef);
        } else {
          setServerError(true);
          console.error('Error submitting form:', response.statusText);
        }
      } catch (error) {
        setServerError(true);
        console.error('Error submitting form:', error.message);
      } finally {
        setIsLoading(false);
      }  
    } 
  }
  
  return (
    <div id="contact-page" className="page-margin page-padding">
      <div className='contact'>
      <section>
        <h2 className="heading">Contact Me</h2>
        <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>
      </section>

      <section className="contact-info">
        <a target="_blank" rel="noreferrer" className="icon-link" href="mailto:aduong9417@gmail.com" type="email">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="email bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
        </a>
        <p>Email me at <a className="no-underline" target="_blank" rel="noreferrer" href="mailto:aduong9417@gmail.com" type="email">aduong9417@gmail.com</a></p>
      </section>

      <section className="contact-info">
        <a target="_blank" rel="noreferrer" className="icon-link github" href="https://github.com/annaduong17">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77" fill="currentColor"/></svg>
        </a>
        <p>Check out my <a className="no-underline" target="_blank" rel="noreferrer" href="https://github.com/annaduong17">GitHub</a></p>
      </section>

      <section className="contact-info">
        <a target="_blank" rel="noreferrer" className="icon-link" href="https://www.linkedin.com/in/annaduong17">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="linkedin bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
        <p>Connect with me on <a className="no-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/annaduong17/">LinkedIn</a></p>
      </section>

    </div>
  </div>
  );
}

export default ContactPage;