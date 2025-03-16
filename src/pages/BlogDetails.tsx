import "../assets/css/style.css"; // Ensure this is correctly linked
import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";
import { marked } from "marked"; 
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id || "0"));

  if (!blog) return <h2 className="text-center mt-5">Blog not found</h2>;
  const blogContent = marked(blog.content);
  // Example of related blogs (you can fetch them dynamically or from a static list)
  const relatedBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 3); // Display 3 related blogs

  return (
    <main className="main blogdetails-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container text-center">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-description">
              Stay updated with the latest insights on AI, automation, and technology.
            </p>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Blog Details</li>
            </ol>
          </div>
        </nav>
      </div>

      <section className="blog-content">
        <div className="container">
          <div className="blog-card">
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-date"><strong>Date:</strong> {blog.date}</p>
            <article
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="related-blogs">
        <div className="container">
          <h2 className="related-blogs-title">Related Blogs</h2>
          <div className="row">
            {relatedBlogs.map((relatedBlog) => (
              <div className="col-md-4" key={relatedBlog.id}>
                <div className="blog-card">
                  <h3 className="blog-title">{relatedBlog.title}</h3>
                  <p className="blog-summary">{relatedBlog.summary}</p>
                  <a href={`/blog/${relatedBlog.id}`} className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
