import "../assets/css/style.css"; // Ensure this is correctly linked
const skillsData = [
    { name: "Python", value: 85 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 70 },
    { name: "TypeScript", value: 75 },
    { name: "Django", value: 85 },
    { name: "Machine Learning", value: 80 },
  ];
const About = () => {
  return (
    <main className="main about-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About</h1>
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
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={`${import.meta.env.BASE_URL}/assets/img/me.jpg`} className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 content">
              <h2>Software Developer & AI Enthusiast</h2>
              <p className="fst-italic py-3">
                Passionate about AI, machine learning, and full-stack web development.
                Experienced in Python, Django, and data science methodologies.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 February 1992</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>linkedin:</strong> <span>www.linkedin.com/in/haripriyakh</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8590492620</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ernakulam, India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech in Computer Science</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>haripriyakh2021@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Over 5 years of experience in software design, development, and AI-based
                projects. Expertise in web technologies, AI model implementation, and
                software architecture design. Looking forward to innovative roles in AI &
                data science.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div>
          <span>My</span> <span className="description-title">Skills</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

export default About;
