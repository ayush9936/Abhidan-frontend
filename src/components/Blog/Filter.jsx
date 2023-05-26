import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlinePlus} from "react-icons/ai"






const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  const [createBlogModel, setCreateBlogModel] = useState(false);

   function filterHandler(title) {
     setCategory(title);
   }

  return (
    <div>
      <div className=" w-full flex flex-wrap max-w-max space-x-4 md:space-x-8 gap-y-4 mx-auto px-4 py-4 bg-white justify-centre">
        <button
          className="text-lg flex justify-center items-center px-4 py-2 rounded-md font-medium text-white  hover:bg-green-600 border-2  border-green-300 bg-green-500 "
          onClick={() => setCreateBlogModel(true)}
        >
          Create Blog
          <AiOutlinePlus className='text-xl font-bold ml-1' />
        </button>
        {filterData.map((data) => {
          return (
            <button
              className={`text-lg px-3 py-2 rounded-md font-medium  hover:bg-opacity-50 border-2
              ${
                category === data.title
                  ? "bg-opacity-60  bg-yellow-500 border-yellow-500"
                  : "bg-opacity-40 border-yellow-300  text-gray-800"
              } 
              transiation-all duration-300`}
              key={data.id}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </button>
          );
        })}
      </div>
      {createBlogModel && (
        <>
          <div
            // tabindex="-1"
            className={`${
              createBlogModel
                ? "fixed inset-0 h-full w-full z-10 bg-black opacity-50 cursor-default"
                : "hidden"
            }`}
          ></div>
          <div className="  z-20 w-full h-full fixed top-0 flex justify-center items-center  ">
            <div className="bg-white w-full md:w-1/2 max-w-3xl px-4 py-3 flex flex-col gap-4 rounded-lg ">
              <h1 className="text-center text-xl font-bold ">Create Post</h1>
              <form className="flex flex-col shadow-xl border rounded-md px-2 py-2 gap-3 w-full">
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="w-full rounded-[5px] border mt-2 bg-gray-500 cursor-pointer text-gray-200 file:bg-yellow-500 file:border-none placeholder:bg-red-500"
                />
                <label htmlFor="title">
                  <textarea
                    name="title"
                    id="title"
                    className="w-full resize-none px-2 py-1 border-[1px] outline-yellow-400 border-yellow-400 rounded-md"
                  >
                    Title
                  </textarea>
                </label>
                <label htmlFor="subTitle">
                  <textarea className="w-full resize-none px-2 py-1 border-[1px] outline-yellow-400 border-yellow-400 rounded-md">
                    write Something here..
                  </textarea>
                </label>
                <div className="flex gap-3 justify-end mr-4">
                  <button
                    className="px-2 py-1 border-[2px] border-red-400 hover:border-red-600 text-red-400 hover:text-red-600  rounded-md text-lg font-semibold"
                    onClick={() => setCreateBlogModel(false)}
                  >
                    Cancel
                  </button>
                  <button className="px-3 py-1 border bg-green-500 hover:bg-green-600 rounded-md text-gray-200 text-lg font-semibold"
                  onClick={() => toast.success("Post created!")}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Filter