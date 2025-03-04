import React, { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleScrollTop);
    return () => window.removeEventListener("scroll", toggleScrollTop);
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${visible ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;
