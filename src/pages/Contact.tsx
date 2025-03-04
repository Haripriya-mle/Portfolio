import "../assets/css/style.css"; // Ensure this is correctly linked
import { useState ,useEffect } from "react";
const Contact = () => {

  
    // State for form data and messages
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
      time:"",
      date:"",
    });
   
   


    useEffect(() => {
      const getDaySuffix = (day: number) => {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
          case 1: return "st";
          case 2: return "nd";
          case 3: return "rd";
          default: return "th";
        }
      };
    
      const formatCustomDate = (date: Date) => {
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();
        return `${day}${getDaySuffix(day)} ${month} ${year}`;
      };
      const updateDateTime = () => {
        const now = new Date();
        setFormData((prev) => ({
          ...prev,
          date: formatCustomDate(now),
          time: now.toLocaleTimeString(),
        }));
      };
  
      updateDateTime(); // Set the initial date and time
      const intervalId = setInterval(updateDateTime, 1000); // Update every second
  
      return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxb905g4MCNpy12PrVxFUhoQfKZj-aGpob25znbq0epqnqxQ6qPLar5RM9TUpJaUQbc/exec", {
          method: "POST",
          mode: "no-cors", // Change to "cors"
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), 
        
        });
        //const data = await response.text(); // Use .text() to read the response
    
        if (response.type=="opaque") {
          alert("Your message has been sent successfully!")
          
          setFormData({ name: "", email: "", subject: "", message: "" ,time: "",date: ""}); // Clear form
         
        } else {
          throw new Error("Failed to send message.");
        }
      } catch (error) {
      
        alert("Oops! Something went wrong. Please try again.");
      }
    };
  return (
    <main className="main contact-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact</h1>
                <p className="mb-0">
                
                Feel free to reach out for collaborations or just a friendly chat!
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Kallettumthara, V P Thuruth, Chendamangalam P O, Ernakulam</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+91 8590492620</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>haripriyakh2021@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                <i className="icon bi bi-linkedin flex-shrink-0"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p>
                    <a href="https://www.linkedin.com/in/haripriyakh" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/haripriyakh
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="600">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                 <input
                  type="hidden"
                  name="time"
                  className="form-control"                 
                  value={formData.time}
                  required
                /> <input
                type="hidden"
                name="date"
                className="form-control"
                value={formData.date}
                required
              />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows={6}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-md-12 text-center">
             
             
                <input type="submit" className="btn btn-primary" placeholder="Send Message"  />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
