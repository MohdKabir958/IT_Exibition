

import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import heroimg from "../assets/img.webp"
import {Button} from "../components/index"

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6 md:px-12">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8" data-aos="fade-down">
        DeepFake or Reality?
      </h1>
      <p className="text-lg text-center max-w-2xl mb-6" data-aos="fade-up">
        Upload your image or video and let AI detect whether it’s real or AI-generated.
      </p>

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl w-full">
        {/* Left Side Text */}
        <div className="flex flex-col space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center ring-2" data-aos="fade-right">
            <h3 className="text-xl font-semibold">AI-Powered Detection</h3>
            <p className="text-sm opacity-80">
              Our advanced AI model scans images and videos to detect deepfakes.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center ring-2" data-aos="fade-right">
            <h3 className="text-xl font-semibold">Fast & Reliable</h3>
            <p className="text-sm opacity-80">
              Get instant results with high accuracy and reliability.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center shadow-xl shadow-blue-500/50">
          <img
            src={heroimg}
            alt="Deepfake Detection"
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-xl"
            data-aos="zoom-in"

          />
        </div>

        {/* Right Side Text */}
        <div className="flex flex-col space-y-6 ">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center ring-2" data-aos="fade-left ">
            <h3 className="text-xl font-semibold ">Secure & Private</h3>
            <p className="text-sm opacity-80">
              Your data remains private with our secure detection technology.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center ring-2" data-aos="fade-left">
            <h3 className="text-xl font-semibold">Works on Everything</h3>
            <p className="text-sm opacity-80">
              Supports images and videos from any device.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Button
        className="mt-18 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
        data-aos="slide-up"
      >
        Try Now - Upload & Detect
      </Button>

     

    </section>
  );
};

export default HeroSection;