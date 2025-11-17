import EventCard from '../../components/EventCard/EventCard'

const Conferences = () => {
    const conferences = [
        {
            title: "International Tech Conference 2025",
            description: "Join industry leaders and innovators as they discuss the future of technology, AI, and digital transformation in this premier tech conference.",
            author: "Tech Committee",
            date: "2 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Tech+Conference+2025",
                alt: "Tech Conference 2025",
                caption: "International Tech Conference 2025"
            },
            organizer: {
                name: "Tech Committee",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Startup Founders Conference",
            description: "Network with successful entrepreneurs, learn from their journeys, and discover the secrets to building successful startups in today's competitive market.",
            author: "Entrepreneurship Cell",
            date: "4 hours ago",
            organizer: {
                name: "E-Cell",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Global Climate Summit",
            description: "World-renowned climate scientists and policy makers gather to discuss sustainable solutions and environmental challenges facing our planet.",
            author: "Environmental Committee",
            date: "6 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Climate+Summit",
                alt: "Climate Summit",
                caption: "Global Climate Summit"
            },
            organizer: {
                name: "Green Initiative",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Digital Marketing Excellence Conference",
            description: "Learn the latest strategies in digital marketing, social media trends, and brand building from industry experts and successful marketers.",
            author: "Marketing Club",
            date: "8 hours ago",
            organizer: {
                name: "MarketingPro",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "YouTube", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Healthcare Innovation Conference",
            description: "Discover breakthrough medical technologies, telemedicine advances, and the future of healthcare delivery systems with leading medical professionals.",
            author: "Medical Committee",
            date: "12 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Healthcare+Innovation",
                alt: "Healthcare Innovation",
                caption: "Healthcare Innovation Conference"
            },
            organizer: {
                name: "MedTech Club",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Financial Markets & Investment Conference",
            description: "Expert insights on market trends, investment strategies, cryptocurrency, and wealth management from top financial advisors and analysts.",
            author: "Finance Committee",
            date: "1 day ago",
            organizer: {
                name: "Finanza",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Women in Leadership Conference",
            description: "Empowering women leaders across industries to share experiences, build networks, and inspire the next generation of female executives.",
            author: "Women's Committee",
            date: "1 day ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Women+Leadership",
                alt: "Women Leadership",
                caption: "Women in Leadership Conference"
            },
            organizer: {
                name: "Women's Council",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Data Science & AI Conference",
            description: "Explore machine learning, artificial intelligence, and data analytics with researchers and practitioners shaping the future of data science.",
            author: "Data Science Club",
            date: "2 days ago",
            organizer: {
                name: "DataClub",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Discord", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Cybersecurity Excellence Conference",
            description: "Learn about the latest cybersecurity threats, defense strategies, and ethical hacking techniques from security experts and industry professionals.",
            author: "Cybersecurity Team",
            date: "2 days ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Cybersecurity+Conference",
                alt: "Cybersecurity Conference",
                caption: "Cybersecurity Excellence Conference"
            },
            organizer: {
                name: "CyberSec Club",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Innovation & Design Thinking Conference",
            description: "Foster creativity and innovation through design thinking methodologies, user experience design, and creative problem-solving workshops.",
            author: "Design Committee",
            date: "3 days ago",
            organizer: {
                name: "Design Studio",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Behance", url: "#" }
                ]
            },
            link: "#"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Page Header */}
            <div className="border-b border-gray-1 pb-6 mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cheltenham text-text-primary mb-2">
                    Conferences
                </h1>
                <p className="text-sm lg:text-base font-roboto-slab text-text-secondary">
                    Global Leaders Convene: Industry Conferences Drive Innovation and Professional Growth
                </p>
            </div>

            {/* Conferences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferences.map((conference, index) => (
                    <EventCard key={index} event={conference} />
                ))}
            </div>
        </div>
    );
};

export default Conferences;
