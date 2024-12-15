import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Page = () => {
  return (
    <div>
      <div className="flex w-[75vw] h-[38vw] rounded-3xl shadow-lg p-4">
        <div className="w-[30vw] h-[30vw] flex flex-col items-center">
          <div className="pt-[3vw]">
            <div className="w-[8vw] h-[8vw] relative">
              <img
                src="/robo.png"
                alt=""
                className="rounded-full w-[8vw] h-[8vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <ModeEditIcon
                className="absolute bottom-2 rounded-full bg-[var(--color-primary)] right-1 w-[2vw] h-[2vw] text-white"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center mt-2">
            <h1 className="text-center text-[2vw] font-semibold text-gray-800">Chandan Kumar</h1>
            <p className="p-[1vw] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ab?
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="text-[var(--color-primary)] hover:text-blue-600 transition duration-200" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="text-[var(--color-primary)] hover:text-blue-400 transition duration-200" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="text-[var(--color-primary)] hover:text-pink-600 transition duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[60vw]">
          <section className="w-[45vw] h-[21vw] rounded-3xl border-2 shadow-md mb-[3vw] mt-[1vw] p-4">
            <div>
              <div className="flex pl-[2vw] pt-[0.5vw]">
                <div className="pb-[0.5vw]">
                  <a
                    className="text-[1.2vw] text-[var(--color-primary)] hover:underline"
                    href=""
                  >
                    Current Plan
                  </a>
                  <h1 className="pb-[0.5vw] pt-[0.1vw] text-[2vw] font-semibold">
                    Premium
                  </h1>
                  <p className="pb-[0.5vw] pr-[4vw] text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt, corporis! ipsum dolor sit amet consectetur
                    adipisicing elit. Ut, pariatur.
                  </p>
                  <a
                    className="text-[1vw] text-[var(--color-primary)] hover:underline"
                    href=""
                  >
                    Next Payment: $512 on 25 October 2024
                  </a>
                </div>
                <div className="flex flex-col gap-y-[2vw] pr-[2vw] pt-[1vw] pb-[2vw]">
                  <button className="bg-slate-200 w-[15vw] rounded-xl h-[3vw] font-medium hover:bg-[var(--color-primary)] hover:text-white transition duration-200">
                    UPGRADES
                  </button>

                  <button className="bg-slate-200 w-[15vw] rounded-xl h-[3vw] font-medium hover:bg-[var(--color-primary)] hover:text-white transition duration-200">
                    SUBSCRIPTION
                  </button>
                </div>
              </div>
              <div className="bg-slate-200 h-[0.1vw] flex flex-col"></div>
              <div className="pl-[2vw] pt-[0.5vw] flex items-center space-x-[5.7vw]">
                <h1 className="text-lg text-[var(--color-primary)] font-normal">
                  Payment method
                </h1>
                <a href="" className="text-purple-400 hover:underline">
                  remove
                </a>
                <button className="bg-slate-200 w-[15vw] h-[3vw] rounded-xl font-medium hover:bg-[var(--color-primary)] hover:text-white transition duration-200">
                  CANCEL CARD
                </button>
              </div>
            </div>
          </section>

          <section className="w-[45vw] h-[8vw] rounded-3xl border-2 shadow-md">
            <h1 className="pl-[2vw] pt-[1vw] text-[1.5vw] font-semibold">
              Billing History
            </h1>
            <div>
              <ul className="mt-2 pl-[2vw] flex gap-x-[9vw] text-[var(--color-primary)] font-medium">
                <li>Date</li>
                <li>Types</li>
                <li>Transaction ID</li>
                <li>Price</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Fix: Adding a displayName property
Page.displayName = "Page";

export default Page;
