import "../assets/css/style.css"; // Ensure this is correctly linked

const Resume = () => {
  return (
    <main className="main resume-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Resume</h1>
                <p className="mb-0">
                  Software Developer with 5+ years of experience in web-based application
                  design and development. Skilled in Python, SQL, JavaScript, and
                  experienced in AI, ML, and deep learning projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Resume</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="resume" className="resume section">
        <div className="container">
          <div className="row">
            {/* Summary & Education */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Haripriya K H</h4>
                <p><em>
                  Accomplished software developer with a robust background in Python, SQL,
                  JavaScript, and AI/ML technologies. Strong foundation in deep learning, NLP,
                  and web-based application development. Committed to continuous learning
                  and exploring roles in AI and Data Science.
                </em></p>
                <ul>
                  <li>Ernakulam, Kerala, India</li>
                  <li>+91 8590492620</li>
                  <li>haripriyakh2021@gmail.com</li>
                  <li><a href="https://www.linkedin.com/in/haripriyakh/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology in Computer Science & Engineering</h4>
                <h5>2011 - 2015</h5>
                <p><em>Sree Narayana Gurukulam College of Engineering, Kerala</em></p>
              </div>
             
            </div>

            {/* Experience */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Developer</h4>
                <h5>Empire IT Services | March 2020 - Jun 2022</h5>
                <ul>
                  <li>Developed Magento E-commerce applications for various businesses.</li>
                  <li>Created websites for property builders and real estate firms.</li>
                  <li>Mentored interns and provided technical documentation.</li>
                </ul>
              </div>
              
              <div className="resume-item">
                <h4>Software Developer</h4>
                <h5>clickinfone.com | Dec 2018 - Apr 2019</h5>
                <ul>
                  <li>Gathered system requirements and developed website solutions.</li>
                  <li>Designed and coded new features using PHP/MySQL.</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>UTPARA Solutions | Nov 2017 - Nov 2018</h5>
                <ul>
                  <li>Developed Event Management & Petrol Pump Management applications.</li>
                  <li>Redesigned ERP solutions for finance and hotel management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
