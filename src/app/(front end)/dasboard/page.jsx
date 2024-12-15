'use client';
import React, { useState } from 'react';
import Navbar from '@/app/components/navbar.jsx';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import HelpIcon from '@mui/icons-material/Help';
import EditProfileForm from '@/app/components/EditProfileFrom';
import Billing from '@/app/(front end)/billing/page.jsx'; // Import Billing component

// Dummy Dashboard Component (cont1)
const Dashboard = () => <div>Dashboard</div>;
const EditProfile = () => (
    <div>
        <EditProfileForm />
    </div>
);
const Schedule = () => <div>Schedule Content</div>;
const Message = () => <div>Messages Content</div>;
const Help = () => <div>Help Content</div>;

const Page = () => {
    const [activeContent, setActiveContent] = useState('Dashboard'); // Initialize with 'Dashboard'

    // Function to handle sidebar item click
    const handleClick = (content) => {
        setActiveContent(content); // Set active content based on clicked item
    };

    // Render appropriate content based on activeContent state
    const renderContent = () => {
        switch (activeContent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Edit Profile':
                return <EditProfile />;
            case 'Schedule':
                return <Schedule />;
            case 'Message':
                return <Message />;
            case 'Billing':
                return <Billing />;
            case 'Help':
                return <Help />;
            default:
                return <div>Select an option from the sidebar</div>;
        }
    };

    return (
        <div>
            {/* Navbar */}
            <div className="sticky top-0 z-10 bg-white shadow   ">
         
                <Navbar />
            </div>

            <div className="flex">
                {/* Sidebar Section */}
                <section className="w-[20vw]">
                    <div
                        className="bg-white fixed left-0 z-40 h-full w-[20vw] shadow-lg border-2"
                        style={{ '--color-primary': '#000000' }}
                    >
                        <ul className="space-y-2 font-medium pt-[3vw]">
                            {['Dashboard', 'Edit Profile', 'Schedule', 'Message', 'Help'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        onClick={() => handleClick(item)}
                                        className={`flex items-center p-2 pl-[2vw] text-black rounded-lg transition-colors duration-200 ${
                                            activeContent === item
                                                ? 'bg-[var(--color-primary)] text-white'
                                                : 'hover:bg-[var(--color-primary)] hover:text-white'
                                        }`}
                                    >
                                        {/* Sidebar Icons */}
                                        {item === 'Dashboard' && <HomeIcon className="mr-2" />}
                                        {item === 'Edit Profile' && <AccountCircleIcon className="mr-2" />}
                                        {item === 'Schedule' && <EventAvailableIcon className="mr-2" />}
                                        {item === 'Message' && <LocalPostOfficeIcon className="mr-2" />}
                                        {item === 'Help' && <HelpIcon className="mr-2" />}
                                        <span className="ms-3">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-[80vw] h-[40vw] flex items-center justify-center">
                    <div
                        className="w-[75vw] h-[38vw] rounded-3xl border-2 shadow-md"
                        style={{ '--color-primary': '#000000' }}
                    >
                        {renderContent()} {/* Render content dynamically */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
