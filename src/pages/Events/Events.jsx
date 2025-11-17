import React from 'react'
import EventCard from '../../components/EventCard/EventCard'

const Events = () => {
    // Sample events data - this would come from your backend API
    const events = [
        {
            title: "Spardha: The Sports Fest",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Sports Team",
            date: "2 hours ago",
            organizer: {
                name: "Spardha",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "DevClub is hiring for new Mentors. Want to build something big? Apply Now!",
            description: "Aspiring to looking for a new & dynamic. Apply Now!",
            author: "Dev Team",
            date: "4 hours ago",
            organizer: {
                name: "DevClub",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Discord", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Trust is round the corner! Choose your team now!",
            description: "",
            author: "Trust Team",
            date: "6 hours ago",
            organizer: {
                name: "Trust",
                socialLinks: [
                    { platform: "Instagram", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Learn about finance, investing and more with Finanza!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Finance Team",
            date: "8 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Finanza+Club+Banner",
                alt: "Finanza Club Banner",
                caption: "Finanza Club Banner"
            },
            organizer: {
                name: "Finanza",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" },
                    { platform: "YouTube", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Guest Lecture on Investment Banking by David Solomons",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Finance Team",
            date: "12 hours ago",
            organizer: {
                name: "Finanza",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" },
                    { platform: "YouTube", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Learn the basics of Web-Dev with HTML/ CSS & JS Bootcamp",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Dev Team",
            date: "1 day ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=DevClub+Banner",
                alt: "DevClub Banner",
                caption: "DevClub Banner"
            },
            organizer: {
                name: "DevClub",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Discord", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Make your first PR! With DCODE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Dev Team",
            date: "2 days ago",
            organizer: {
                name: "DevClub",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Discord", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Annual Cultural Fest - Fusion 2025",
            description: "Experience the vibrant tapestry of cultures from around the world in our most anticipated annual event. Join us for three days of music, dance, food, and celebration.",
            author: "Cultural Committee",
            date: "3 days ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Cultural+Fest",
                alt: "Cultural Fest Banner",
                caption: "Fusion 2025 Cultural Fest"
            },
            organizer: {
                name: "Cultural Committee",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "Facebook", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Startup Pitch Competition 2025",
            description: "Present your innovative startup ideas to industry experts and investors. Win funding and mentorship opportunities to kickstart your entrepreneurial journey.",
            author: "Entrepreneurship Cell",
            date: "4 days ago",
            organizer: {
                name: "E-Cell",
                socialLinks: [
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "International Conference on AI and Machine Learning",
            description: "Join leading researchers and industry professionals for cutting-edge discussions on artificial intelligence, machine learning, and their real-world applications.",
            author: "CS Department",
            date: "5 days ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=AI+Conference",
                alt: "AI Conference Banner",
                caption: "AI/ML Conference 2025"
            },
            organizer: {
                name: "Computer Science Dept",
                socialLinks: [
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" },
                    { platform: "Website", url: "#" }
                ]
            },
            link: "#"
        }
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            {/* Page Header */}
            <div className='border-b border-gray-1 pb-6 mb-8'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold font-cheltenham text-text-primary mb-2'>
                    Events
                </h1>
                <p className='text-sm lg:text-base font-roboto-slab text-text-secondary'>
                    Breaking: Major Events Shape Student Experience Across Universities Nationwide
                </p>
            </div>

            {/* Events Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Events
