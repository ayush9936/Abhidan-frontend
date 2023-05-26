import React, { useState } from "react";
import Card from "./Card";
import {AiOutlineClose} from "react-icons/ai"

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  const [fullBlogModel, setFullBlogModel] = useState(false);
  const [blogData, setBlogData] = useState('');

  console.log("printing data", courses);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      console.log(allCourses);
      return allCourses;
    } else {
      return courses[category];
    }
  };

  console.log(fullBlogModel);

  const getfullBlog = (blog) => {
    setFullBlogModel(true);
    console.log(blog);
    setBlogData(blog);
  }
  return (
    <>
      <div className=" flex flex-wrap justify-center bg-white gap-4 mx-auto">
        {getCourses().map((couseData) => {
          return (
            <Card
              key={couseData.id}
              courseData={couseData}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
              setFullBlogModel={setFullBlogModel}
              setBlogData={setBlogData}
            />
          );
        })}
      </div>
      {fullBlogModel && (
        <>
          <div
            // tabindex="-1"
            className={`${
              fullBlogModel
                ? "fixed inset-0 h-full w-full z-10 bg-black opacity-50 cursor-default"
                : "hidden"
            }`}
          ></div>
          <div className="  z-20 w-full h-full  fixed top-0 flex justify-center items-center  ">
            <div className=" setScrollbar bg-white w-full h-[400px] lg:h-[500px] overflow-y-auto  md:w-1/2 max-w-3xl px-4 py-3 flex flex-col gap-4 rounded-lg ">
              <div className="">
                <img
                  src={blogData.image.url}
                  alt=""
                  className=" w-full h-[200px] md:h-[300px] rounded-md"
                />
              </div>
              <AiOutlineClose
                className="absolute top-2 right-2 md:top-5 md:right-10 text-gray-100 font-bold text-3xl cursor-pointer"
                onClick={() => setFullBlogModel(false)}
              />
              <h1 className="text-lg text-black font-semibold">
                {blogData.title}{" "}
              </h1>
              <p className="text-gray-600">{blogData.description} </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
