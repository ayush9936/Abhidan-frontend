import React from 'react'
import { Link } from 'react-router-dom';
import './Gallery.css';
import Images from '../../DummyData/GalleryImages.json'
import Footer from '../Footer/Footer';
import {videoLink} from "../../DummyData/Blog"


const Gallery = () => {
  return (
    <>
      {/* <div className="container-fluid"></div> */}
      <div className="px-3 py-1">
        <div className="w-full">
        </div>
        <div className=" columns-lg m-3 mt-3">
          {Images.map((img, index) => (
            <>
              <div className="py-2">
                <img src={img.img} alt="" className="w-full rounded-md  " />
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Gallery
