import React, { useEffect, useState } from 'react'
import logo from "./Helpus.jpg";
import logotemp from "./help.jpg";
import { FcLike } from "react-icons/fc"
import {BiCommentDetail} from "react-icons/bi"
import { IoMdShareAlt } from "react-icons/io";
import Filter from './Filter';
import { filterData } from "../../DummyData/Blog";
import {toast} from "react-hot-toast"
import Spinner from './Spinner';
import Cards from './Cards';
import  apiUrl  from './data.json';


const Blog = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  console.log("printing url",apiUrl);
  
    async function fetchData() {
      setLoading(true);
      try {
        // let response = await fetch(apiUrl);
        // let output = await response.json();

        setCourses(apiUrl.data);
      } catch (error) {
        toast.error("Network Error");
      }

      setLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
      <div className='w-full bg-white'>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="  mx-auto  min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </>
  );
}

export default Blog


  