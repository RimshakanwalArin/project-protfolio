import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";

const About = () => {
  return (
    <main className="px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mt-12 lg:mt-24">
        Passion Fuels Purpose!
      </h1>

      <div className="mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold">BIOGRAPHY</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Hi I am Coder a web developer and UI/UX designer with a
              passion for creating beautiful functional and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients
              visions to life.
              <br />
              <br />
              I believe that design is about more than just making things look
              pretty – its about solving problems and creating intuitive
              enjoyable experiences for users.
              <br />
              <br />
              Whether I am working on a website mobile app or other digital
              product I bring my commitment to design excellence and
              user-centered thinking to every project. I look forward to
              bringing my skills and passion to your next project.
            </p>
          </div>

          {/* Right Side: Image and Stats */}
          <div className="flex flex-col lg:w-1/2 items-center lg:items-start space-y-8">
            <Image
              src="/face.jpeg"
              alt="portfolio img"
              width={300}
              height={300}
              className="border border-black shadow-2xl shadow-slate-950"
            />

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-extrabold text-5xl lg:text-7xl flex items-center justify-center">
                  40 <FaPlus className="text-2xl lg:text-3xl ml-1" />
                </p>
                <p className="mt-2 text-lg">Certified Clients</p>
              </div>

              <div>
                <p className="font-extrabold text-5xl lg:text-7xl flex items-center justify-center">
                  50 <FaPlus className="text-2xl lg:text-3xl ml-1" />
                </p>
                <p className="mt-2 text-lg">Projects Completed</p>
              </div>

              <div>
                <p className="font-extrabold text-5xl lg:text-7xl flex items-center justify-center">
                  2 <FaPlus className="text-2xl lg:text-3xl ml-1" />
                </p>
                <p className="mt-2 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
