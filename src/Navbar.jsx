import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1oxPP-a2battKU6riL9yF4r1DcexdhBVK';
    link.download = 'resume.pdf';
    link.click();
  };
  

  return (
    <div className="navbar bg-slate-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Mamun.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={handleDownload}>Download Resume</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
