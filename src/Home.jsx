import React from "react";
import kaptai from "./assets/Kaptai-3.png";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { RiBootstrapFill, RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass } from "react-icons/fa";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { SiNodedotjs } from 'react-icons/si';

import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import IconCompo from "./components/IconCompo";

const Home = () => {
  return (
    <div>
      <div className="flex items-center mx-auto justify-center mt-48">
        <div>
          <p className="text-5xl">
            Full Stack <br /> Developer👋
          </p>
          <p className="mt-4">
            Hi, I'm Md. Mamun Uddin. <br /> A passionate Full Stack Web Developer{" "}
            <br /> specialized in MERN.
          </p>
          <div className="flex text-3xl gap-6 mt-8">
            <a href="https://www.linkedin.com/in/md-mamun-uddin">
              <BsLinkedin />
            </a>
            <a href="https://github.com/mamunuddinbu">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <img className="w-1/5 rounded-2xl ml-24" src={kaptai} alt="" />
      </div>

      <IconCompo></IconCompo>
    </div>
  );
};

export default Home;
