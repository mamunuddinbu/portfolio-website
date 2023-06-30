import React from "react";
import { useTrail, animated } from "react-spring";
import { RiBootstrapFill, RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass } from "react-icons/fa";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

const IconCompo = () => {
  const icons = [
    <ImHtmlFive className="text-red-500" />,
    <ImCss3 className="text-blue-500" />,
    <FaSass className="text-pink-500" />,
    <RiBootstrapFill className="text-purple-500" />,
    <SiTailwindcss className="text-cyan-500" />,
    <RiJavascriptFill className="text-yellow-500" />,
    <FaReact className="text-blue-600" />,
    <SiMongodb className="text-green-500" />,
    <SiNodedotjs className="text-green-600" />,
    <SiExpress className="text-gray-600" />,
  ];

  const trail = useTrail(icons.length, {
    from: { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
    to: { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
  });

  return (
    <div className="flex text-5xl mt-10 w-11/12 mx-auto justify-between">
      <p className="text-3xl">Tech Stack |</p>
      {trail.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            transformOrigin: "center center",
          }}
        >
          {icons[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default IconCompo;
