function Contact() {
  return (
    <div className='contact'>
      
      <section>
        <h2>Let's get in touch!</h2>
        <p>I am fluent in English and Vietnamese. Feel free to communicate with me in either language.</p>
      </section>

      <section className="contact-info">
        <a href="mailto:aduong9417@gmail.com">
          <img width={27} src="/images/icons/icon-email.svg" alt="email icon" />
        </a>
        <p>Email me at <a href="mailto:aduong9417@gmail.com" type="email">aduong9417@gmail.com</a></p>
      </section>

      <section className="contact-info">
        <a href="https://github.com/annaduong17?tab=repositories">
          <img width={30} src="/images/icons/icon-github.svg" alt="github icon" />
        </a>
        <p>Check out my <a href="https://github.com/annaduong17?tab=repositories" type="email">GitHub Repository</a></p>
      </section>

      <section className="contact-info">
        <a href="https://www.linkedin.com/in/annaduong17/">
          <img width={27} src="/images/icons/icon-linkedin.svg" alt="linkedin icon" />
        </a>
        <p>Connect with me on <a href="https://www.linkedin.com/in/annaduong17/" type="email">LinkedIn</a></p>
      </section>

      <section className="contact-info">
        <a href="/files/resume.pdf">
          <img width={30} src="/images/icons/icon-file.svg" alt="resume icon" />
        </a>
        <p>Download <a href="/files/anna-duong-resume.pdf" download>my resume</a></p>
      </section>
    </div>
  );
}

export default Contact;