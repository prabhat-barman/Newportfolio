/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { FaDribbble } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Home(formData) {
  console.log(formData?.formData?.formData?.firstName);
  return (
    <div className="main w-full h-screen">
      <div className="left">
        <div className="text font-['montserrat']">
          <h1 className="uppercase font-medium text-5xl mt-28 ml-32 leading-none tracking-wide">
            my name <br /> is{" "}
            <span className="font-extrabold">
              {formData?.formData?.formData?.firstName}
            </span>{" "}
            <br /> {formData?.formData?.formData?.lastName}...
          </h1>
          <h3 className="font-bold italic mt-2 ml-32 text-lg tracking-tight">
            {formData?.formData?.formData?.position}
            <span className="font-normal ml-32mt-8 not-italic">
              based on
            </span>{" "}
            {formData?.formData?.formData?.location}
          </h3>
          <div className="but">
            <button className="bg-black text-white text-xs p-2 tracking-wider px-6 ml-32 mt-8 flex gap-2">
              Let's talk with me
              <FaArrowUp
                style={{
                  backgroundImage: "linear-gradient(tomato,maroon, purple)",
                  padding: "3px",
                  fontSize: "18",
                  rotate: "90deg",
                  color: "beige",
                }}
              />
            </button>
          </div>
        </div>
        <div className="details ml-32 mt-14 flex gap-14">
          <div className="flex gap-1 items-center ">
            <MdLocalPhone
              style={{
                fontSize: "13px",
              }}
            />
            <h6 className="text-xs font-bold italic">
              +91 {formData?.formData?.formData?.phone}
            </h6>
          </div>
          <div className="flex gap-2 items-center">
            <MdMailOutline
              style={{
                fontSize: "12",
              }}
            />
            <h6 className="text-xs font-bold italic">
              {formData?.formData?.formData?.email}
            </h6>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="socialmedia flex flex-col gap-3 absolute right-8 top-44 items-center">
          <FaInstagram
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              fontSize: "24px",
              borderRadius: "50%",
            }}
          />
          <FaDribbble
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              fontSize: "24px",
              borderRadius: "50%",
            }}
          />
          <FaFacebookF
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              fontSize: "24px",
              borderRadius: "50%",
              rotate: "-90deg",
            }}
          />
          <div className="smline w-0.5 h-20 bg-black opacity-15 mt-1"></div>
        </div>
        <div className="img w-[50vh] h-[80vh] top-12 right-44 absolute truncate object-cover">
          <img src="./images/jacobphoto.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
