import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {portfolioData } from './Portfolio';

const PortfolioDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find((item) => item.id === id);

  if (!project) {
    return <div className="container text-center py-5">Project not found.</div>;
  }

  return (
    <main className="main portfolio-details-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>{project.title}</h1>
                <p className="mb-0">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Portfolio Details</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Image Slider */}
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  {project.images && project.images.length > 0 ? (
                    project.images.map((image, index) => (
                      <div key={index} className="swiper-slide">
                        <img src={image} alt={`Project Image ${index + 1}`} />
                      </div>
                    ))
                  ) : (
                    <p>No images available.</p>
                  )}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Project Info */}
            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project Information</h3>
                <ul>
                  <li><strong>Category:</strong> {project.category}</li>
                  <li><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">Repo</a></li>
                  {project.blog && (
                    <li><strong>Blog:</strong> <a href={project.blog} target="_blank" rel="noopener noreferrer">Read More</a></li>
                  )}
                  {project.vlog && (
                    <li><strong>Vlog:</strong> <a href={project.vlog} target="_blank" rel="noopener noreferrer">Watch Video</a></li>
                  )}
                </ul>
              </div>
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetails;
