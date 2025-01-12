import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="container mx-auto text-center px-4 py-16">
      <h3 className="text-3xl font-bold mb-4">Get In Touch With Us</h3>
      <p className="text-lg mb-8">
        We're here to help! Whether you have questions, need assistance, or want
        to share your feedback, reach out to us today.
      </p>

      <div className="flex flex-col md:flex-row justify-center lg:px-52">
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <div className="flex items-center space-x-4">
            <FaLocationDot className="text-3xl text-[#B88E2F]" />
            <div>
              <h6 className="font-semibold text-xl">Address</h6>
              <p className="text-gray-700">
                236 5th SE Avenue, New <br /> York NY10000, United <br /> States
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BsFillTelephoneFill className="text-3xl text-[#B88E2F]" />
            <div>
              <h6 className="font-semibold text-xl">Phone</h6>
              <p className="text-gray-700">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaClock className="text-3xl text-[#B88E2F]" />
            <div>
              <h6 className="font-semibold text-xl">Working Time</h6>
              <p className="text-gray-700">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Your Name</span>
            </div>
            <input
              type="text"
              placeholder="Type Name"
              className="input input-bordered w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#B88E2F]"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email Address</span>
            </div>
            <input
              type="email"
              placeholder="Type Email"
              className="input input-bordered w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#B88E2F]"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Subject</span>
            </div>
            <input
              type="text"
              placeholder="This is optional"
              className="input input-bordered w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#B88E2F]"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              placeholder="Hi! i’d like to ask about"
              className="input input-bordered w-full h-36 py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#B88E2F]"
            ></textarea>
          </label>
          <div className="flex">
            <button className="btn px-8 py-2 text-white bg-[#B88E2F]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
