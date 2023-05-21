import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-hot-toast";

const Card = (props) => {
  const course = props.courseData;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // logic
    if (likedCourses.includes(course.id)) {
      // agar phele se like hai to unlike krna hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      // agar phele se like nhi hai
      // like krna hai ye course
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Sucessfully!");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-xl px-2 py-1 relative border shadow-xl overflow-y-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} className="rounded-md w-[300px] h-[225px] " />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center">
          <button>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize={"1.8rem"} onClick={clickHandler} />
            ) : (
              <FcLikePlaceholder fontSize={"1.8rem"} onClick={clickHandler} />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-black font-semibold text-lg leading-6">
          {course.title.length > 40 ?
            course.title.substr(0, 100) + "...." :
          course.title}
        </p>
        <p className="mt-2 text-black">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
