import React from "react";
import NavLeft from "./NavLeft";
import { MdLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full h-screen flex gap-14 ">
      <div className="left">
        <div className="text font-['montserrat']">
          <h6 className="text font-bold text-sm italic pl-28 pt-[100px]">
            Contact
          </h6>
          <h1 className="text-[30px] font-bold uppercase tracking-wide pl-28">
            reach out me
          </h1>
          <h5 className="text-xs font-semibold leading-5 tracking-tighter pl-28 pt-7">
            249 King Sir, 05thFloor, Ultra Haouse Building <br />
            Melboune, VIC 3000, London.
          </h5>
        </div>
        <div className="detalis pl-28 pt-[50px] text-[19px]">
          <div className="pb-3 tracking-wide">
            <div className="flex gap-1 items-center ">
              <MdLocalPhone
                style={{
                  fontSize: "16px",
                }}
              />
              <h6 className="font-extrabold">+77 022 444 56 90</h6>
            </div>
          </div>
          <div className="tracking-wide">
            <div className="flex gap-2 items-center">
              <MdMailOutline
                style={{
                  fontSize: "16",
                }}
              />
              <h6 className="font-extrabold">jacob360@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className="socialnav flex gap-4 uppercase font-bold text-[12px] pl-28 pt-[44px] tracking-wide">
           <h4>Facebook</h4>
           <h4>twitter</h4>
           <h4>Instagram</h4>
           <h4>linkedin</h4>
        </div>
      </div>
      <div className="rightbox w-[550px] h-[360px] bg-gradient-to-r text-slate-50 from-purple-500 to-orange-500 mt-[90px]">
           <h1 className="text-[30px] uppercase font-bold pt-5 pl-14">any project?</h1>
           <div className="flex gap-6 text-xs">
            <div className="name uppercase font-bold w-[200px] h-[30px] ml-14 mt-7  border-b-2 border-slate-50">Name</div>
            <div className="email uppercase font-bold w-[200px] h-[30px]  mt-7  border-b-2 border-slate-50">email</div>
           </div>
           <div className="w-[400px] h-[60px] uppercase font-bold text-xs border-b-2 border-slate-50 ml-14 mt-12">Message</div>
           <h5 className="uppercase font-bold text-xs p-2 ml-14">attach file</h5>
           <button className="bg-black text-slate-50 text-xs p-2 pl-5 pr-5 ml-14 mt-[20px] tracking-wider flex gap-2">
              Submit now
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
  );
}

export default Contact;
