import LiveEvents from '../../features/LiveEvents/LiveEvents'
import RatingModal from '../../components/RatingModal/RatingModal'
import EventCard from '../../components/EventCard/EventCard'
import ImportantNewsSection from '../../components/ImportantNewsSection/ImportantNewsSection'
import SidebarCard from '../../components/SidebarCard/SidebarCard'

const Home = () => {
    // Sample data - this would come from your backend
    const featuredEvent = {
        category: "Neutron",
        priority: "Priority Event",
        title: "Neutron Sets New Standards for Campus Innovation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Campus News Team",
        date: "July 28, 2025",
        image: {
            url: "https://placehold.co/400x300/f8f9fa/6c757d?text=Event+of+the+Month",
            alt: "Neutron Innovation Lab",
            caption: "Students collaborate in the Neutron Innovation Lab"
        },
        organizer: {
            name: "Neutron",
            socialLinks: [
                { platform: "Instagram", url: "#" },
                { platform: "LinkedIn", url: "#" },
                { platform: "Discord", url: "#" }
            ]
        },
        link: "#"
    };

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
        }
    ];

    const importantNews = [
        {
            title: "Student Leadership Program Opens Applications",
            description: "New partnership opportunities available for students interested in organizational leadership roles and campus development.",
            category: "Campus Life",
            timestamp: "2 hours ago",
            link: "#"
        },
        {
            title: "Research Symposium Showcases Innovation",
            description: "Faculty and students present groundbreaking research in technology, sustainability, and social impact initiatives.",
            category: "Academics",
            timestamp: "4 hours ago",
            link: "#"
        },
        {
            title: "Career Fair Connects Students with Industry",
            description: "Leading companies and startups seek talented graduates for internships and full-time positions.",
            category: "Career Services",
            timestamp: "6 hours ago",
            link: "#"
        }
    ];

    const sidebarCards = [
        {
            title: "Upcoming Event",
            content: {
                image: {
                    url: "https://placehold.co/400x200/f3f4f6/9ca3af?text=Upcoming+Event",
                    alt: "Upcoming Event"
                },
                title: "Masterclass on open source with Linus Torvalds",
                description: "Join us for an exclusive session with the creator of Linux as he shares insights on open source development and community building.",
                link: "#"
            }
        },
        {
            title: "Moments to Live for!",
            content: {
                image: {
                    url: "https://placehold.co/400x200/f3f4f6/9ca3af?text=Carousel+Image",
                    alt: "Campus Moments"
                },
                title: "Rishihood dominates Cognizance'25!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                link: "#"
            }
        }
    ];

    return (
        <>
            <LiveEvents />

            {/* News-style Layout */}
            <div className='max-w-7xl mx-auto px-4 py-6'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    {/* Main Content Area */}
                    <div className='col-span-1 lg:col-span-8'>
                        {/* Featured Event */}
                        <EventCard event={featuredEvent} isLarge={true} />

                        {/* Three Column Important Content Section */}
                        <ImportantNewsSection articles={importantNews} />

                        {/* First Two Rows of Event Cards Grid (4 cards) */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {events.slice(0, 4).map((event, index) => (
                                <EventCard key={index} event={event} />
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar - Hidden on mobile/tablet */}
                    <div className='hidden lg:block lg:col-span-4 lg:border-l lg:border-gray-1 lg:pl-6'>
                        {sidebarCards.map((card, index) => (
                            <SidebarCard
                                key={index}
                                title={card.title}
                                content={card.content}
                            />
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className='border-b border-gray-1 my-8'></div>

                {/* Full Width Section for Remaining Events */}
                {events.length > 4 && (
                    <div className='mt-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {events.slice(4).map((event, index) => (
                                <EventCard key={index + 4} event={event} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* <RatingModal /> */}
        </>
    )
}

export default Home