import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchIcon from '@mui/icons-material/Search';
import AssistantIcon from '@mui/icons-material/Assistant';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => (
    <nav className="bg-white h-[8vh] w-[90vw] flex justify-between items-center px-[2.5vw] font-inter text-[1.5vw] font-normal">
        <div className="flex items-center">
            <AccountCircleRoundedIcon className="w-[3vw] h-[3vw] text-gray-700" />
            <span className="ml-[1vw] text-[2vw] font-semibold" style={{ color: 'var(--color-primary)' }}>
                Near2you
            </span>
        </div>
        <ul className="flex space-x-[2vw]">
            {['Home', 'Service', 'Use case', 'Native'].map((item) => (
                <li key={item}>
                    <a href="#" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
        <div className="relative h-[2.5vw] w-[20vw]">
            <input
                type="text"
                placeholder="Search here"
                className="w-full h-full text-[20px] text-left border border-black text-gray-700 px-[2vw] pr-[3vw] rounded-xl hover:bg-gray-100 focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
            <SearchIcon className="absolute right-[1vw] top-1/2 transform -translate-y-1/2" style={{ color: 'var(--color-primary)' }} />
        </div>
        <AccountCircleRoundedIcon className="w-[3vw] h-[3vw]" style={{ color: 'var(--color-primary)' }} />
    </nav>
);

const OverviewItem = ({ icon: Icon, text }) => (
    <div className="p-4 text-[20px] font-normal flex items-center" style={{ color: 'var(--color-primary)' }}>
        <Icon className="mr-2" />
        <span>{text}</span>
    </div>
);

const Page = () => {
    return (
        <div className="min-h-screen">
            <section className="w-full h-[6vw] flex justify-center items-center">
                <Navigation />
            </section>
            <div className="mt-[1vw] w-full h-[1px] bg-[#647CA5]"></div>

            <section className="flex">
                <div className="w-[40vw] h-full flex flex-col items-center justify-center pb-[5vw]">
                    <div className="w-full flex justify-start">
                        <button
                            className="text-left text-[20px] font-medium pt-[1vw] pb-[3vw] pl-[3.5vw] bg-transparent border-none cursor-pointer hover:text-purple-500"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            Back to Home Page
                        </button>
                    </div>

                    <img
                        src="/girl.png"
                        alt="Description of image"
                        className="h-[500px] w-[500px]"
                    />
                    <h1 className="text-center text-[24px] pt-[2vw] pb-[2vw] font-bold font-sans" style={{ color: 'var(--color-primary)' }}>
                        Photography and Videography Service
                    </h1>
                    <button className="w-[500px] h-[4vw] rounded-lg text-[32px] text-white font-medium" style={{ backgroundColor: 'var(--color-primary)' }}>
                        Book Now
                    </button>
                </div>

                <div className="w-[60vw] pl-[2vw] pr-[4vw]">
                    <div>
                        <ul className="flex space-x-[5vw] pt-[3vw]">
                            {['About', 'Photos', 'Review', 'Specifications', 'Question & Answer'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="font-semibold hover:text-purple-500 hover:underline" style={{ color: 'var(--color-primary)' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-[0.5vw] w-[50vw] h-[2px] bg-[#647CA5]"></div>
                    <div>
                        <h1 className="pt-[2vw] text-[20px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                            About
                        </h1>
                        <p className="pt-[1vw] pb-[0.5vw] text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae. Et nostrum praesentium assumenda autem dicta ab totam tempore iste quis pariatur velit, aliquam consectetur eaque odio reprehenderit architecto tempora fugiat blanditiis. Placeat, sapiente, ratione cum veritatis facere similique vero, odio veniam nostrum consequatur ipsum fugiat. Ipsam ipsa alias modi.
                        </p>
                        <a href="#" className="text-[14px] hover:underline" style={{ color: 'var(--color-primary)' }}>
                            Show more
                        </a>
                    </div>
                    <div>
                        <h1 className="pt-[2vw] pb-[1vw] text-[20px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                            Overview
                        </h1>
                        <div className="grid grid-cols-2 gap-4">
                            <OverviewItem icon={AssistantIcon} text="Elite Pro" />
                            <OverviewItem icon={WorkHistoryIcon} text="5 years experience" />
                            <OverviewItem icon={AccessTimeFilledIcon} text="5 hour working time" />
                            <OverviewItem icon={PersonIcon} text="2-10 Staff" />
                        </div>
                    </div>

                    <div>
                        <h1 className="pb-[1.5vw] text-[20px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                            Photos(4)
                        </h1>
                        <div className="flex gap-6">
                            {Array(4)
                                .fill()
                                .map((_, index) => (
                                    <img key={index} src="/g1.png" alt="" className="h-[206px] w-[196px]" />
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
