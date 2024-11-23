import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Hey there!!
        </p>

        <AnimatedTitle
          title="This<b> is </b><b>S</b><b>A</b>NKET BAGAD - <br /> A F<b>u</b>ll St<b>a</b>ck J<b>a</b>vascript Devel<b>o</b>per "
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            With An Added Flavour of DEVOPS and CLOUD
          </p>
          <p className="text-gray-500">
           Have Worked on 18+ Live Projects Based On AI, SaaS, IoT and Management.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
