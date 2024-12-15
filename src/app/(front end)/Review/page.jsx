"use client"; // Directive for Next.js

import React, { useState, useEffect, memo } from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import Link from 'next/link';
import {
  AccountCircleRounded as AccountIcon,
  Search as SearchIcon,
  Assistant as AssistantIcon,
  WorkHistory as WorkHistoryIcon,
  AccessTimeFilled as AccessTimeIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Navbar from '@/app/components/navbar.jsx';
import MessageIcon from '@mui/icons-material/Message';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ThemeToggle from '../../components/ThemeToggle'

// Review Section Component
const ReviewSection = memo(({ reviewer, date, reviewText, initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  return (
    <section className="mt-[1.5vw] bg-white text-black dark:bg-black dark:text-white flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-[1.15vw] leading-[1.7vw] font-semibold">{reviewer}</h1>
        <h2 className="text-[1.15vw] leading-[1.7vw] font-semibold">{date}</h2>
      </div>
      <Rating
        className="-z-10"
        value={rating}
        onChange={(_, newRating) => setRating(newRating)}
        precision={0.5}
        size="medium"
      />
      <p className="mt-[0.5vw] text-base">{reviewText}</p>
      <hr className="border-t border-gray-300 my-[1vw]" />
    </section>
  );
});

// Set displayName for memoized component
ReviewSection.displayName = 'ReviewSection';

// Overview Item Component
const OverviewItem = ({ icon: Icon, text }) => (
  <div className="flex items-center p-[0.75vw] text-[1.15vw] leading-[1.7vw] font-medium">
    <Icon className="mr-[0.75vw] text-purple-600" />
    <span>{text}</span>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <aside className="sticky top-[1vw] h-screen bg-white overflow-hidden">
    <div>
      <button
        className="text-[1.15vw] leading-[1.7vw] font-medium mb-[2vw] text-purple-600 hover:text-purple-800"
        onClick={() => alert("Back to Home Page")}
        aria-label="Back to Home"
      >
        Back to Home Page
      </button>
    </div>
    <div className="flex items-center justify-center flex-col">
      <img
        src="/girl.svg"
        alt="Photography and Videography Service"
        className="size-[12vw] object-cover rounded-full shadow-md"
      />
      <h1 className="mt-[1.5vw] text-[2vw] font-bold">Home Cleaning Services</h1>

      <div className="w-full mt-[1vw] h-[25vw] border border-gray-300">
        <div className="w-full h-[0.3vw] bg-purple-400"></div>
        <div className="flex justify-center gap-[2vw] pt-[1vw]">
          <ul>
            <li className="text-[1.1vw] font-medium">$199</li>
            <li className="font-medium">Starting price</li>
            <a href="#">View details</a>
          </ul>
          <ul>
            <li className="text-[1.1vw] font-medium">Plenty of availability</li>
            <a href="#">in the next 7 days</a>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="mt-[1vw] w-[20vw] h-[3vw] bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg shadow-md hover:bg-purple-700">
            Check availability
          </button>
          <div className="flex items-center gap-[0.5vw] mt-[1vw] mb-[1vw]">
            <div className="relative border-[0.12vw] h-[1.2vw] w-[1.2vw] border-black rounded-full flex items-center justify-center">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-green-500"></div>
            </div>
            <span className="text-base">Online Now</span>
          </div>
          <div className="w-[20vw] h-[0.1vw] bg-slate-300"></div>
          <div className="w-[20vw] border-[0.11vw] border-gray-300 mt-[1.5vw] rounded-md">
            <h1 className="pl-[1vw] pt-[1vw]">Neaar2you</h1>
            <p className="w-[18vw] pl-[1vw] pb-[1vw]">
              Lorem ipsum dolor sit amet corporis excepturi aut nisi minus quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

// Main Review Page Component
const ReviewPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      service: "Extra services",
      about: " Window cleaning, fridge cleaning, Oven cleaning, ect. "
    },
    {
      service: "Pets",
      about: "Pets in home"
    },
    {
      service: "Cleaning types",
      about: " Stander cleaning, Deep cleaning, Move out cleaning"
    },
  ]
  const rating = [
    {
      star: 5,
      percentage: 90
    },
    {
      star: 4,
      percentage: 50
    },
    {
      star: 3,
      percentage: 40
    },
    {
      star: 2,
      percentage: 30
    },
    {
      star: 1,
      percentage: 20
    },
  ]
  const reviews = [
    {
      reviewer: "Aarav Sharma",
      date: "10 October 2024",
      reviewText:
        "Amazing photography! The team was super professional, and the results were outstanding. Highly recommend!",
      initialRating: 5,
    },
    {
      reviewer: "Meera Patel",
      date: "12 October 2024",
      reviewText:
        "Good service overall, but some minor delays during the shoot. Still, the photos turned out great!",
      initialRating: 4,
    },
    {
      reviewer: "Rahul Verma",
      date: "8 October 2024",
      reviewText:
        "Loved the creativity! They captured every moment perfectly. Will hire them again for future events.",
      initialRating: 5,
    },
    {
      reviewer: "Sneha Rao",
      date: "7 October 2024",
      reviewText:
        "A decent experience, but communication could be improved. The end results were worth it, though.",
      initialRating: 3.5,
    },
    {
      reviewer: "Vikram Singh",
      date: "9 October 2024",
      reviewText:
        "Very friendly staff and excellent work quality. The videography was top-notch!",
      initialRating: 4.5,
    },
    {
      reviewer: "Ananya Gupta",
      date: "11 October 2024",
      reviewText:
        "Great experience! They managed to perfectly capture every special moment of our day.",
      initialRating: 4.8,
    },
  ];

  return (
    <div className="">
      <Navbar />
      <hr className="border-gray-300 my-[1vw]" />

      <main className="flex gap-[3.5vw] justify-center">
        <Sidebar className=" sticky top-[2vw] left-0 " />

        <section className="w-[60vw] px-[2vw] relative">
          {/* Sticky Navigation Links */}
          <nav className="sticky top-0 bg-white py-[1vw] z-10">
            <ul className="flex space-x-[4vw]">
              {['About', 'Photos', 'Service', 'Review', 'Q&A'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    scroll={false}
                    className="font-semibold hover:text-purple-500"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(item.toLowerCase());
                      if (target) {
                        const yOffset = -80;
                        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="border-gray-300 mt-[0.5vw]" />
          </nav>

          <div className=" -z-10">
            {/* About Section */}
            <div id="about" className="mt-[2vw]">
              <h2 className="text-[1.5vw] leading-[2vw] font-semibold">About</h2>
              <p className="mt-[1vw] text-[1vw] leading-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias laborum neque consectetur illo molestiae, fuga quaerat qui aspernatur corrupti earum! ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur? ipsum dolor sit amet, consectetur adipisicing elit. Sint, recusandae.
              </p>
              <div className="flex justify-between items-center mt-[1vw]">
                <a href="#" className="text-purple-500 hover:underline">Show more</a>
                <ShareIcon className="cursor-pointer" />
              </div>
            </div>


            {/* Overview Section */}
            <div className="mt-[4vw] flex ">
              <div>
                <h2 className="text-[1.5vw] leading-[2vw] font-semibold">Overview</h2>
                <div className="mt-[1vw]">
                  <div className="flex  items-center">
                    <OverviewItem icon={AssistantIcon} text="Roush Hour" />
                    <button className="bg-green-500 text-white w-[5vw] h-[1vw] rounded hover:bg-green-600 text-[0.7vw]">
                      Available
                    </button>
                  </div>
                  <OverviewItem icon={AccessTimeIcon} text="Hired 99 times" />
                  <OverviewItem icon={WorkHistoryIcon} text="5 years experience" />
                  <OverviewItem icon={PersonIcon} text="4 Employees" />
                  <OverviewItem icon={VerifiedIcon} text="Background checked" />
                  <OverviewItem icon={LocationOnIcon} text="15 Similar services done near you" />
                </div>
              </div>
              <div>
                <div className="w-[21vw] h-[17.5vw] ml-[3vw]">
                  <h1 className="text-[1.5vw] leading-[2vw] font-semibold pb-[0.5vw]">Service Hours</h1>
                  <div className="w-[21vw] border-[0.11vw] border-gray-300 pt-[0.5vw] rounded-[0.5vw]">
                    <div className="flex justify-center w-[21vw] gap-[8vw]">
                      <ul className="space-y-[1vw]">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                      </ul>
                      <ul className="space-y-[1vw]">
                        <li>6:00 am-8:00 pm</li>
                        <li>6:00 am-8:00 pm</li>
                        <li>6:00 am-8:00 pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div id="ratings" className="mt-[2vw]">
              <h2 className="text-[1.5vw] leading-[2vw] font-semibold">Ratings</h2>
              <div className="flex items-center justify-center mt-[2vw] gap-[2vw]">
                {rating.map((rate) => (
                  <div key={rate.star} className="flex flex-col items-center">
                    <h1 className="font-semibold">{rate.star} Star</h1>
                    <div className="w-[10vw] bg-slate-300 rounded-lg">
                      <div
                        className="bg-purple-400 rounded-lg h-[0.5vw]"
                        style={{ width: `${rate.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-[1vw]">{rate.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div id="review" className="mt-[4vw]">
              <h2 className="text-[1.5vw] leading-[2vw] font-semibold">Reviews</h2>
              {reviews.map((review, index) => (
                <ReviewSection key={index} {...review} />
              ))}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default ReviewPage;
