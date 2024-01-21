function ContactInfo() {
  return (
    <div>
      <section>
        <h2>Let's get in touch!</h2>
      </section>

      <section>
        <a href="mailto:aduong9417@gmail.com">
          <img src="/images/icons/icon-email.svg" alt="email icon" />
        </a>
        <p>Email me at <a href="mailto:aduong9417@gmail.com" type="email">aduong9417@gmail.com</a></p>
      </section>

      <section>
        <a href="https://github.com/annaduong17?tab=repositories">
          <img src="/images/icons/icon-github.svg" alt="github icon" />
        </a>
        <p>Check out my <a href="https://github.com/annaduong17?tab=repositories" type="email">GitHub Repository</a></p>
      </section>

      <section>
        <a href="https://www.linkedin.com/in/annaduong17/">
          <img src="/images/icons/icon-linkedin.svg" alt="linkedin icon" />
        </a>
        <p>Connect with me on <a href="https://www.linkedin.com/in/annaduong17/" type="email">LinkedIn</a></p>
      </section>

      <section>
        <a href="/files/resume.pdf">
          <img src="/images/icons/icon-file.svg" alt="resume icon" />
        </a>
        <p>Download <a href="/files/anna-duong-resume.pdf" download>my resume</a></p>
      </section>
    </div>
  );
}

export default ContactInfo;