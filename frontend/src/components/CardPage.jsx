import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardPage = () => {
  const { courseData } = useSelector((state) => state.course);
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    setPopularCourses(courseData?.slice(0, 6));
  }, [courseData]);
  return (
    <div className="relative flex items-center justify-center flex-col">
      <h1 className="md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-5">
        Our Popular Courses
      </h1>
      <span className="lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] mb-[30px] px-5">
        Explore top-rated courses designed to boost your skills, enhance
        careers, and unl;ock opportunities in tech, AI, business, and beyond.
      </span>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:py-12 lg:px-32 md:p-8 p-2 mb-10">
        {popularCourses?.map((course, index) => (
          <Card
            key={course._id || index}
            thumbnail={course.thumbnail}
            title={course.title}
            category={course.category}
            price={course.price}
            id={course._id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
