import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css"; 
interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    image: string;
    images: string[]; // Added for PortfolioDetails page
    category: string;
    github: string;
    blog?: string;
    vlog?: string;
  }
  
  export const portfolioData: PortfolioItem[] = [
    {
      id: "qa-agent",
      title: "QA Interview Agent",
      description: "An AI-driven interview agent for role-specific Q&A.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/qa_agent.jpg`,
      images: [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/qa_agent.jpg`,
      
      ], // Added array
      category: "ML",
      github: "https://github.com/Haripriya-mle/qa_agent",
    },
    {
      id: "ats-resume",
      title: "ATS Resume & Cover Letter Generator",
      description: "A tool to generate ATS-friendly resumes and cover letters.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker.jpg`,
      images:  [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker.jpg`,
        `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker_2.jpg`,
        

      ],
      category: "ML",
      github: "https://github.com/Haripriya-mle/resumemaker",
      blog: "http://localhost:5173/Portfolio/blog/1",
      vlog: "https://youtu.be/AeiK1Hn3chc",
    },
    
    {
      id: "netflix",
      title: "netflix",
      description: "An AI-driven interview agent for role-specific Q&A.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/qa_agent.jpg`,
      images: [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/qa_agent.jpg`,
      
      ], // Added array
      category: "React",
      github: "https://github.com/haripriyabce/netflix",
    },
    {
      id: "olx",
      title: "olx",
      description: "A tool to generate ATS-friendly resumes and cover letters.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker.jpg`,
      images:  [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker.jpg`,
        `${import.meta.env.BASE_URL}/assets/img/portfolio/resumemaker_2.jpg`,
        

      ],
      category: "React",
      github: "https://github.com/haripriyabce/olx",
    },
    {
      id: "Adobe",
      title: "QA Interview Agent",
      description: "An AI-driven interview agent for role-specific Q&A.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/Adobe.png`,
      images: [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/Adobe.png`,
      
      ], // Added array
      category: "HTML",
      github: "https://github.com/haripriyabce/Adobe",
      live:"https://haripriyabce.github.io/Adobe/",
    },
    {
      id: "Zoho",
      title: "Zoho",
      description: "A tool to generate ATS-friendly resumes and cover letters.",
      image: `${import.meta.env.BASE_URL}/assets/img/portfolio/Zoho.png`,
      images:  [
        `${import.meta.env.BASE_URL}/assets/img/portfolio/Zoho.png`,
       
        

      ],
      category: "HTML",
      github: "https://github.com/haripriyabce/Zoho",
      live:"https://haripriyabce.github.io/Zoho/",
    },
  ];
  


// Available categories
const categories = ["All", "ML", "React", "HTML"];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === selectedCategory);

  return (
    <main className="main portfolio-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Portfolio</h1>
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
              <li className="current">Portfolio</li>
            </ol>
          </div>
        </nav>
      </div>
    <section id="portfolio" className="portfolio section py-5">
      <div className="container">
        
        
        {/* Filter Buttons */}
        <div className="isotope-layout">
            <ul className="portfolio-filters isotope-filters" >
            {categories.map((category) => (
            <li
              key={category}
              className={` ${
                selectedCategory === category ? "filter-active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
            </ul>
          
        </div>

        {/* Portfolio Items */}
        <div className="row gy-4 isotope-container">
          {filteredProjects.map((project, index) => (




            <div key={index} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src={project.image}
                  className="img-fluid"
                  alt={project.title}
                />
                <div className="portfolio-info">

                <h4>{project.title}</h4>
                  <p>{project.description}</p>
               
                  <Link to={`/portfol/${project.id}`} title="More Details" className="details-link"> <i className="bi bi-link-45deg"></i></Link>
                  {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-custom-primary"
  >
    GitHub
  </a>
)}

{project.blog && (
  <a
    href={project.blog}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-secondary mx-2"
  >
    Blog
  </a>
)}

{project.vlog && (
  <a
    href={project.vlog}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-danger"
  >
    Vlog
  </a>
)}

{project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success"
  >
    Live Demo
  </a>
)}
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

export default Portfolio;
