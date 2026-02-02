import React from "react";
import Nav from "../components/Nav";
import home from "../assets/home1.jpg";
import { SiViaplay } from "react-icons/si";
import ai from "../assets/ai.png";
import ai1 from "../assets/SearchAi.png";
import Logos from "../components/Logos";
import ExploreCourses from "../components/ExploreCourses";


const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full lg:h-[140vh] h-[70vh] relative">
        <Nav />
        <img
          src={home}
          className="object-cover md:object-fill w-full lg:h-full h-[50vh]"
          alt=""
        />

        <span className="lg:text-[70px] absolute md:text-[40px] lg:top-[10%] top-[15%] w-full flex items-center justify-center text-white font-bold text-[20px]">
          Grow Your Skills to Advance{" "}
        </span>

        <span className="lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[18%]  top-[20%] w-full flex items-center justify-center text-white font-bold">
          Your Carrier Path
        </span>

        <div className="absolute lg:top-[30%] top-[75%] md:top-[80%] w-full flex items-center justify-center gap-3 flex-wrap">
          <button className="px-5 py-2.5 border-2 lg:border-white border-black lg:text-white text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer">
            View All Courses <SiViaplay className="w-[30px] h-[30px] lg:fill-white fill-black" />
          </button>
          <button className="px-5 py-2.5 lg:bg-white bg-black lg:text-black text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center">
            Search With Ai <img src={ai} className="w-[30px] h-[30px] rounded-full hidden lg:block" alt="" />  <img src={ai1} className="w-[30px] h-[30px] rounded-full lg:hidden " alt="" />
          </button>
        </div>

      </div>
        <Logos/>
        <ExploreCourses/>
    </div>
  );
};

export default Home;
