import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Steps from '../assets/Steps.webp'
import feature from '../assets/Features.webp'
import {Button} from "./index.js"


const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* How It Works Section */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-xl font-bold">1.</span>
              <p>Upload an image or video to start the deepfake detection process.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-xl font-bold">2.</span>
              <p>Our AI analyzes the content using advanced machine learning models.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-xl font-bold">3.</span>
              <p>Receive a detailed report with deepfake detection accuracy.</p>
            </div>
          </div>
          <Button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg 
          transition">Try Now</Button>
        </div>



    <div data-aos="fade-left">
        <img src={Steps} />
        </div>


        
    <div data-aos="fade-right">
        <img src={feature} className="width:500px"/>
        </div>




        {/* Key Features Section */}
        <div data-aos="fade-left" className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Real-time deepfake detection with high accuracy.</li>
            <li>Supports multiple media formats: images & videos.</li>
            <li>AI-powered facial and pattern recognition.</li>
            <li>Detailed reports with authenticity scores.</li>
            <li>Secure and privacy-focused analysis.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
