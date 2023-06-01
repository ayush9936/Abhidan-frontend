import React, { useState,useEffect } from "react";
import Images from "../../DummyData/GalleryImages.json";
import {AiOutlineClose} from "react-icons/ai"
import {Dna} from "react-loader-spinner";
import Footer from "../Footer/Footer"


const Gallery = () => {

  const [imgmodel, setImgmodel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },2000)
    
  }, [])
  

  const getImg=(imgSrc) => {
    setTempimgSrc(imgSrc);
    setImgmodel(true);
  }
  return (
    <>
      {/* <div className="container-fluid"></div> */}
      {/* image Model */}
      <div>
        {imgmodel && (
          <>
            <div
              className={`${
                imgmodel
                  ? "fixed flex justify-center py-5 z-10 bg-black w-full h-full overflow-hidden bg-opacity-50 "
                  : "hidden"
              }`}
              onClick={() => setImgmodel(false)}
            >
              <div className="absolute top-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl  ">
                <img
                  src={tempimgSrc}
                  alt=""
                  className="rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full h-screen max-h-[70vh]   sm:max-w-md md:max-w-2xl "
                />
                <AiOutlineClose className="absolute top-1 right-1 text-gray-600 font-bold text-3xl" />
              </div>
            </div>
          </>
        )}
      </div>
      {/* Images */}
    {loading ? (
     <div className="flex justify-center">
       <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
     </div>
    )
  :
  (
<div className="px-3 py-1">
        <div className="w-full"></div>
        <div className=" columns-1 md:columns-2 lg:columns-3 m-3 mt-3 ">
          {Images.map((img, index) => (
            <>
              <div
                className="py-2 "
                key={index}
                onClick={() => getImg(img.imgSrc)}
              >
                <img
                  src={img.imgSrc}
                  alt=""
                  className="w-full rounded-md  hover:opacity-90 "
                />
              </div>
            </>
          ))}
        </div>
<Footer/>
      </div>
        
  )}
      

    
    </>
  );
};

export default Gallery;




