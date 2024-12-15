"use client";
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Rating from '@mui/material/Rating';
import Navbar from '@/app/components/navbar.jsx';
import PopPage from '@/app/components/poppage'; // Adjust the relative path as needed


const Page = () => {
    const [showPopup, setShowPopup] = useState(false); // Manage popup visibility
    const [value, setValue] = useState(0); // Manage progress or some other value
  
    // Function to handle button click (e.g., Cooking Services)
    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    // Function to handle popup close
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    // Function to update value inside the popup
    const handleProgressUpdate = (newValue) => {
      setValue(newValue);
    };
    return (
        <div className="min-h-screen">
            {/* <Navbar/> */}
            <Navbar showSearchInput={false} />
            `
            <section className="w-full flex justify-center items-center">
                <div className="w-[90vw] sm:w-full text-center pt-[4vw] sm:pt-4">
                    {/* Title */}
                    <h1 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-bold leading-normal pb-[3vh] sm:pb-4">
                        Find the right freelance service
                    </h1>

                    {/* Description */}
                    <p
                        className="font-normal max-w-screen-md mx-auto text-sm sm:text-base md:text-lg"
                        style={{
                            color: "var(--color-gray)", // Use the CSS variable
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* Search Bar */}
                    <div className="flex justify-center pt-[5vw] pb-[10vw] sm:pt-6 sm:pb-8">
                        <div className="relative h-[5vh] sm:h-12 lg:h-[10vh] w-[80vw] sm:w-full md:w-[50vw] lg:w-[50vw]">
                            <input
                                type="text"
                                placeholder="Enter an address, neighborhood, city, or ZIP code"
                                className="w-full h-full pl-4 pr-12 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-[2.8vw] sm:placeholder:text-sm lg:placeholder:text-lg lg:pl-6 lg:pr-16"
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 sm:w-20 lg:w-24 bg-[var(--color-primary)] rounded-r-full text-white">
                                <SearchIcon className="w-[3vw] sm:w-4 lg:w-6 h-[3vw] sm:h-4 lg:h-6" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full flex justify-center items-center">
                <div className="w-full flex justify-center items-center">
                    <div className="w-[82vw] sm:w-full pb-20">
                        {/* Button Rows */}
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            {[
                                "Cooking Services",
                                "Bartender Services",
                                "Entertainment Services",
                                "Home Cleaning and Organization Services",
                                "Pet Grooming and Walking Services",
                                "Concierge Services",
                                "Tech Support and Troubleshooting Services",
                                "Beauty and Wellness Services",
                                "Event Planning and Coordination Services",
                                "Photography and Videography Services",
                            ].map((service, index) => (
                                <button
                                    key={index}
                                    className="flex min-w-[150px] sm:min-w-[150px] lg:min-w-[250px] px-4 py-1 sm:px-4 sm:py-1 lg:px-8 lg:py-3 bg-white text-gray-800 rounded-full border border-gray-300 shadow-md text-sm sm:text-sm lg:text-lg font-medium transition-all duration-300"
                                    style={{
                                        "--color-primary": "#000000", // Black
                                        "--color-secondary": "#ffffff", // White
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "var(--color-primary)";
                                        e.target.style.color = "var(--color-secondary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "white";
                                        e.target.style.color = "gray";
                                    }}
                                    onClick={() => {
                                        if (service === "Cooking Services") {
                                            setShowPopup(true); // Open the popup for "Cooking Services"
                                        }
                                    }}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                        <div className="mt-[3vw] w-full h-[1.5px] bg-black"></div>
                    </div>

                    {/* Popup Component */}
                    {showPopup && (
                        <PopPage
                            onClose={() => setShowPopup(false)} // Close popup callback
                        />
                    )}
                </div>
            </section>



            <section className="w-full flex justify-center items-center">
                <div className="w-[full]  pb-[5vw]">
                    <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                    {/* Image Grid */}
                    <div className="flex flex-col gap-[3vw]">
                        {/* First Image Row */}
                        <div className="flex gap-[3vw]">
                            <div className="rounded-lg shadow-xl  overflow-hidden">
                                <img src="/image1.png" alt="Chef cooking" className="w-[28.5vw] h-auto object-cover" />
                            </div>
                            <div className="flex flex-col gap-[3vw]">
                                <div className="flex gap-[3vw]">
                                    {/* Second Image */}
                                    <div className="rounded-lg   shadow-xl overflow-hidden">
                                        <img src="/image2.png" alt="Bartender" className="w-[15.4vw] h-auto object-cover" />
                                    </div>
                                    {/* Third Image */}
                                    <div className="rounded-lg shadow-xl overflow-hidden">
                                        <img src="/image3.png" alt="Party scene" className="w-[15.4vw] h-auto object-cover" />
                                    </div>
                                    {/* Fourth Image */}
                                    <div className="rounded-lg shadow-xl overflow-hidden">
                                        <img src="/image4.png" alt="Tailor" className="w-[15.4vw] h-auto object-cover" />
                                    </div>
                                </div>
                                <div className="flex gap-[2.5vw] justify-center">
                                    {/* Fifth Image */}
                                    <div className="rounded-lg shadow-xl overflow-hidden">
                                        <img src="/image5.png" alt="Tech repair" className="w-[24.8vw] h-auto object-cover" />
                                    </div>
                                    {/* Sixth Image */}
                                    <div className="rounded-lg shadow-xl overflow-hidden">
                                        <img src="/image6.png" alt="Tech repair" className="w-[24.8vw] h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center items-center">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center min-h-[100vh] bg-white relative mt-32 sm:mt-4 lg:mt-0">
                    {/* Image Section */}
                    <div className="w-full pt-[28vw] lg:w-[40vw] relative flex justify-center">
                        <img
                            src="/man.png"
                            alt="Technician"
                            className="absolute bottom-0 z-10 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw] h-[74vw] sm:h-[45vw] md:h-[40vw] lg:h-[32vw]"
                        />
                    </div>



                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:ml-[2vw] mt-8 lg:mt-0">
                        <h1 className="text-[6vw] sm:text-[4.5vw] lg:text-[36px] font-bold text-gray-800 mb-[2vh] text-center lg:text-left">
                            Tech Support and Troubleshooting Service
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center lg:text-left mb-[3vh]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus dictum neque id lacinia. Maecenas tincidunt mi libero, eu facilisis libero euismod quis. Cras consequat quam quis arcu hendrerit, eu cursus tellus ullamcorper. Sed interdum mattis placerat. Etiam facilisis nisl non massa viverra dapibus. In interdum lacinia mi ut condimentum.
                        </p>

                        {/* Technician Avatars */}
                        <div className="flex justify-center lg:justify-start pt-[40px]">
                            <div className="flex -space-x-4 rtl:space-x-reverse">
                                {["/man1.png", "/man1.png", "/man1.png", "/man1.png", "/man1.png"].map(
                                    (src, index) => (
                                        <img
                                            key={index}
                                            className="w-[12vw] sm:w-[10vw] lg:w-[8vw] h-[12vw] sm:h-[10vw] lg:h-[8vw] border-2 rounded-full shadow-lg border-black"
                                            src={src}
                                            alt={`Technician ${index + 1}`}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full flex justify-center items-center mt-10 sm:mt-0">
                <div className="w-[90vw]  pb-[100px] pt-[1vw] px-[2vw]">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-[5vw] sm:mb-[4vw]">
                        What Our User Say About US
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center font-sans mb-[6vw] sm:mb-[5vw]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[70px]">

                        {/* Card 1 */}
                        <div className="h-[318px] w-[80vw] sm:w-[30vw] md:w-[25vw] rounded-3xl border-2 shadow-md relative flex flex-col items-center mt-16 sm:mt-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden absolute -top-12">
                                <img src="/robo.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <Rating
                                className="mt-16 sm:mt-20 md:mt-4 lg:mt-16" // Added margin-top to create a gap between the image and the rating on mobile
                                name="controlled"
                                value={value}
                                onChange={(event, newValue) => setValue(newValue)}
                                precision={0.5}
                                size="large"
                            />
                            <p className="px-[5vw] py-[1vw] text-var(--color-gray) font-normal text-center text-sm sm:text-base">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptate nulla consequatur repellendus numquam modi enim distinctio facilis, nam corrupti?
                            </p>
                            <a href="#" className="text-[var(--color-primary)] hover:underline flex items-left text-[16px] sm:text-[20px] gap-1">
                                Learn more
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="h-[318px] w-[80vw] sm:w-[30vw] md:w-[25vw] rounded-3xl border-2 shadow-md relative flex flex-col items-center mt-16 sm:mt-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden absolute -top-12">
                                <img src="/robo.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <Rating
                                className="mt-16 sm:mt-20 md:mt-4 lg:mt-16" // Added margin-top to create a gap between the image and the rating on mobile
                                name="controlled"
                                value={value}
                                onChange={(event, newValue) => setValue(newValue)}
                                precision={0.5}
                                size="large"
                            />
                            <p className="px-[5vw] py-[1vw] text-var(--color-gray) font-normal text-center text-sm sm:text-base">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptate nulla consequatur repellendus numquam modi enim distinctio facilis, nam corrupti?
                            </p>
                            <a href="#" className="text-[var(--color-primary)] hover:underline flex items-left text-[16px] sm:text-[20px] gap-1">
                                Learn more
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="h-[318px] w-[80vw] sm:w-[30vw] md:w-[25vw] rounded-3xl border-2 shadow-md relative flex flex-col items-center mt-16 sm:mt-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden absolute -top-12">
                                <img src="/robo.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <Rating
                                className="mt-16 sm:mt-20 md:mt-4 lg:mt-16" // Added margin-top to create a gap between the image and the rating on mobile
                                name="controlled"
                                value={value}
                                onChange={(event, newValue) => setValue(newValue)}
                                precision={0.5}
                                size="large"
                            />
                            <p className="px-[5vw] py-[1vw] text-var(--color-gray) font-normal text-center text-sm sm:text-base">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptate nulla consequatur repellendus numquam modi enim distinctio facilis, nam corrupti?
                            </p>
                            <a href="#" className="text-[var(--color-primary)] hover:underline flex items-left text-[16px] sm:text-[20px] gap-1">
                                Learn more
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full flex justify-center items-center">
                <div className="w-full bg-white pb-[5vw] flex items-center justify-center">
                    <div className="w-full px-4">
                        {/* Header Section */}
                        <div className="flex flex-wrap items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pb-[2vw] text-center sm:text-left mt-8 sm:ml-24">
                            <span className="text-[30px] sm:text-[40px] font-medium">
                                Case Studies
                            </span>
                            <span className="text-[16px] sm:text-[18px] font-medium sm:w-[35vw]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure corporis quae dignissimos?
                            </span>
                        </div>


                        {/* Case Study Cards */}
                        <div className="w-full flex flex-col sm:flex-row items-stretch sm:space-x-6 space-y-4 sm:space-y-0 sm:ml-24">
                            {/* Individual Card */}
                            {[
                                {
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic illo fugit accusantium facilis iste totam voluptates sit natus ipsa, quisquam vel dolorem! Quibusdam rem deserunt odio, tempora sint perferendis!",
                                },
                                {
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero ullam ratione sunt asperiores? Nisi voluptas quasi nulla enim, autem nesciunt illo, laborum mollitia numquam facere quaerat harum? Doloremque, culpa.",
                                },
                                {
                                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eius consectetur, dignissimos voluptatibus beatae aut eos iste velit placeat? A earum provident nulla consequatur amet error expedita alias, esse id.",
                                },
                            ].map((caseStudy, index) => (
                                <div
                                    key={index}
                                    className="w-full sm:w-[27vw] h-auto rounded-[20px] border shadow-md p-6 bg-white flex flex-col space-y-4"
                                >
                                    <p className="text-[14px] sm:text-[16px] text-[#023035]">
                                        {caseStudy.text}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[var(--color-primary)] hover:underline text-[16px]"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[var(--color-primary)] py-[4vh]">
                <div className="w-full max-w-screen-xl mx-auto px-[4vw] sm:px-[6vw] lg:px-[8vw]">
                    <div className="grid grid-cols-4 gap-[1.5vw]">
                        <div className="space-y-[1vh]">
                            <div className="w-[3vw] h-[3vw]">
                                <InstagramIcon className="w-full h-full text-[var(--color-secondary)]" />
                            </div>
                            <div className="flex space-x-[0.5vw]">
                                <a href="#" aria-label="Twitter" className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]">
                                    <XIcon className="h-[1.5vw] w-[1.5vw]" />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]">
                                    <InstagramIcon className="h-[1.5vw] w-[1.5vw]" />
                                </a>
                                <a href="#" aria-label="YouTube" className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]">
                                    <YouTubeIcon className="h-[1.5vw] w-[1.5vw]" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]">
                                    <LinkedInIcon className="h-[1.5vw] w-[1.5vw]" />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-[1vh]">
                            <h3 className="text-xs sm:text-[1.2vw] font-semibold text-[var(--color-secondary)]">
                                Use cases
                            </h3>
                            <ul className="mt-[0.5vh] space-y-[0.5vh]">
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        UI design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        UX design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Wireframing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Diagramming
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Brainstorming
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Online whiteboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Team collaboration
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="space-y-[1vh]">
                            <h3 className="text-xs sm:text-[1.2vw] font-semibold text-[var(--color-secondary)]">
                                Explore
                            </h3>
                            <ul className="mt-[0.5vh] space-y-[0.5vh]">
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Prototyping
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Development features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Design systems
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Collaboration features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Design process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        FigJam
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="space-y-[1vh]">
                            <h3 className="text-xs sm:text-[1.2vw] font-semibold text-[var(--color-secondary)]">
                                Resources
                            </h3>
                            <ul className="mt-[0.5vh] space-y-[0.5vh]">
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Best practices
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Colors
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Color wheel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Developers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                                    >
                                        Resource library
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Page;