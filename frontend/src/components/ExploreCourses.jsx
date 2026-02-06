import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiUikit } from "react-icons/si";
import { MdAppShortcut } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { SiLangchain } from "react-icons/si";
import { useNavigate } from "react-router-dom"

const ExploreCourses = () => {
  const navigate = useNavigate()
  return (

    <div className="w-screen min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-[30px] my-10">
      {/* left top div */}
      <div className="w-screen lg:w-[350px] lg:h-full h-[400px] flex flex-col items-start justify-center gap-2 md:px-10 px-5">
        <span className="text-[35px] font-semibold"> Explore </span>
        <span className="text-[35px] font-semibold"> Our Courses</span>
        <p className="text-[17px]">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          molestiae tempore quae quo facilis similique ratione sequi iure, sunt
          rem impedit magni, deserunt ab delectus reprehenderit perspiciatis
          porro eos illo!
        </p>
        <button className="px-5 py-2.5 border-2 bg-black border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-10 cursor-pointer mb-6" onClick={()=>navigate("/allcourses")}>
          {" "}
          Explore Courses <SiViaplay className="w-[30px] h-[30px] fill-white" />
        </button>
      </div>

      {/* right top div */}
      <div className="w-[720px] max-w-[90%] 1g:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] md:gap-[50px] gap-[26px] flex-wrap mb-[50px] lg:mb-0">
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center ">
            <TbDeviceDesktopAnalytics className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          Web Dev
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#d9fbe7] rounded-lg flex items-center justify-center ">
            <SiUikit className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          UI/UX Designing
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#fbd9e3] rounded-lg flex items-center justify-center ">
            <MdAppShortcut className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          App Dev
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#dcd9fb] rounded-lg flex items-center justify-center ">
            <SiCyberdefenders className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          Ethical Hacking
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#d9e8fb] rounded-lg flex items-center justify-center ">
            <SiOpenai className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          AI/ML
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#ffaaaa] rounded-lg flex items-center justify-center ">
            <VscGraph className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          Data Science
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#ecb8b8] rounded-lg flex items-center justify-center ">
            <FaAws className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          Cloud Computing
        </div>
        
        
        
        <div className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center">
          <div className="w-[100px] h-[90px] bg-[#8ebfff] rounded-lg flex items-center justify-center ">
            <SiLangchain className="w-[60px] h-[60px] text-[#6d6c6c] " />
          </div>
          Agentic AI
        </div>
        
      </div>
    </div>
  );
};

export default ExploreCourses;
