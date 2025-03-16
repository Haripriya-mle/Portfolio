import "../assets/css/style.css"; // Ensure this is correctly linked
import { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData.json";

const Blog = () => {
  const [blogs] = useState(blogData);

  return (
    <main className="main blog-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Blog</h1>
                <p className="mb-0">
                  Stay updated with the latest insights on AI, automation, and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Blog</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Blog List Section */}
      <section className="container py-5">
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-summary">{blog.summary}</p>
                  <Link to={`/blog/${blog.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
