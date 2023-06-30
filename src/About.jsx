import React from 'react';
import FormalPic from '../src/assets/Formal.jpeg'

const AboutMe = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              className="rounded-full w-48 h-48 mx-auto mb-6"
              src={FormalPic}
              alt="Profile"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-xl mb-6">
              Hi, I'm Md. Mamun Uddin, a Full Stack Web Developer with expertise in the MERN
              (MongoDB, Express, React, Node.js) stack. I have a passion for creating
              responsive and user-friendly web applications that deliver a great user
              experience.
            </p>
            <p className="text-xl mb-6">
              With several years of experience in web development, I have worked on various
              projects, ranging from small business websites to complex web applications.
              I'm skilled in front-end development using modern JavaScript frameworks like
              React. and I'm proficient in back-end development using Node.js and
              Express. I also have experience working with databases such as MongoDB.
            </p>
            <p className="text-xl">
              My goal is to build innovative and efficient web solutions that meet the
              client's requirements and exceed their expectations. I am a dedicated and
              detail-oriented developer, always striving for code quality and continuous
              improvement. I love learning new technologies and staying up-to-date with the
              latest trends in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
