import React from "react";
import LingoJoe from "../src/assets/LingoJoe.png";
import ToyStore from "../src/assets/toy-store.png";
import ChineseFood from "../src/assets/Shape recipe.png";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;

const Project = () => {
  return (
    <FadeInDiv>
      <div>
        <p className="text-3xl mt-40 mb-28">
          Each project is a unique piece of development⚡
        </p>
        <div className="flex">
          <img className="w-1/2 mr-5 rounded" src={LingoJoe} alt="" />
          <div className="w-1/2">
            <p className="font-extrabold">Toy review website</p>
            <p>
              In this website
              <br />
              Students can browse and choose classes from the All Classes route.
              The chosen class is added to the My Added Classes route. After
              successful payment, the class is added to the My Class route.
            </p>
            <p>
              <span className="font-bold">Type: </span>Educational website
            </p>
            <p className="font-bold">Features:</p>
            <ul className="list-disc ml-6">
              <li>Authentication (including social login)</li>
              <li>Private Route</li>
              <li>Role-based Dashboard (Student, Instructor, Admin)</li>
              <li>Make Admin & Make Instructor feature</li>
              <li>JWT (JSON Web Tokens)</li>
              <li>Payment Gateway Integration</li>
            </ul>
            <p className="font-bold">Front-End Technologies:</p>
            <ul className="list-disc ml-6">
              <li>React</li>
              <li>Tailwind CSS + Daisy UI</li>
              <li>JavaScript</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>Firebase</li>
            </ul>
            <p className="font-bold">Back-End Technology:</p>
            <p>MERN Stack (MongoDB, Express, React, Node.js)</p>
            <div>
              <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mamunuddinbu">
                <div className="flex items-center btn btn-primary text-xl mr-2">
                  <p className="mr-2">Code: Front-End</p>
                  <AiOutlineGithub />
                </div>
              </a>
            </div>
            <div>
              <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mamunuddinbu">
                <div className="flex items-center btn btn-primary text-xl my-3 mr-2">
                  <p className="mr-2">Code: Back-End</p>
                  <AiOutlineGithub />
                </div>
              </a>
            </div>
            <div>
              <a href="https://summer-camp-69186.web.app/">
                <div className="flex items-center btn btn-primary text-xl mr-2">
                  Live Site: <BsGlobe2 />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toy Store */}

      <div className="flex mt-20">
        <img className="w-1/2 mr-5 rounded" src={ToyStore} alt="" />
        <div className="w-1/2">
          <p className="font-extrabold">Learning Toys Reviewing Website</p>
          <p>
            This website allows users to showcase their toys to others. Users
            can add their favorite toys, which are displayed in a tabular format
            under the "AllToy" route. Detailed information about each toy can be
            viewed in the "MyToys" route, which is accessible only to logged-in
            users. Upon successful login, users can see all the toys they have
            added and have the ability to update the price, name, and other
            information of a toy, as well as delete a toy. The "AddToy" route is
            also a private route where users can add new toys to the platform.
          </p>
          <p>
            <span className="font-bold">Type:</span> Reseller website
          </p>
          <p className="font-bold">Features:</p>
          <ul className="list-disc ml-6">
            <li>Authentication (Email-Password and Google login)</li>
            <li>Private Routes</li>
          </ul>
          <p className="font-bold">Front-End Technologies:</p>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>Tailwind CSS + Daisy UI</li>
            <li>JavaScript</li>
            <li>React Router</li>
            <li>Axios</li>
            <li>Firebase</li>
          </ul>
          <p className="font-bold">Back-End Technology:</p>
          <p>MERN Stack (MongoDB, Express, React, Node.js)</p>
          <div>
            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mamunuddinbu.git">
              <div className="flex items-center btn btn-primary text-xl mr-2">
                <p className="mr-2">Code: Front-End</p>
                <AiOutlineGithub />
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mamunuddinbu">
              <div className="flex items-center btn btn-primary text-xl my-3 mr-2">
                <p className="mr-2">Code: Back-End</p>
                <AiOutlineGithub />
              </div>
            </a>
          </div>
          <div>
            <a href="https://toymarketplace-1d816.web.app">
              <div className="flex items-center btn btn-primary text-xl mr-2">
                Live Site: <BsGlobe2 />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Chinese Food recipe */}
      <div className="flex mt-20">
        <img className="w-1/2 mr-5 rounded" src={ChineseFood} alt="" />
        <div className="w-1/2">
          <p className="font-extrabold">Chinese Food Reviewing Website</p>
          <p>
            This website showcase different Chinese Chefs and their recipe. The
            website has both private and public route. The Home route is a
            public route display all the chefs. User can see details about a
            chef by clicking View Recipe Details button. There are popular chef
            and featured chef as well.
          </p>
          <p>
            <span className="font-bold">Type:</span> Reviewing website
          </p>
          <p className="font-bold">Features:</p>
          <ul className="list-disc ml-6">
            <li>Authentication (Email-Password and Google login)</li>
            <li>Private Routes</li>
          </ul>
          <p className="font-bold">Front-End Technologies:</p>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>Tailwind CSS + Daisy UI</li>
            <li>JavaScript</li>
            <li>React Router</li>
            <li>Axios</li>
            <li>Firebase</li>
          </ul>
          <p className="font-bold">Back-End Technology:</p>
          <p>MERN Stack (MongoDB, Express, React, Node.js)</p>
          <div>
            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mamunuddinbu.git">
              <div className="flex items-center btn btn-primary text-xl mr-2">
                <p className="mr-2">Code: Front-End</p>
                <AiOutlineGithub />
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-mamunuddinbu">
              <div className="flex items-center btn btn-primary text-xl my-3 mr-2">
                <p className="mr-2">Code: Back-End</p>
                <AiOutlineGithub />
              </div>
            </a>
          </div>
          <div>
            <a href="https://stately-brigadeiros-73fea4.netlify.app/">
              <div className="flex items-center btn btn-primary text-xl mr-2">
                Live Site: <BsGlobe2 />
              </div>
            </a>
          </div>
        </div>
      </div>
    </FadeInDiv>
  );
};

export default Project;
