import EventCard from '../../components/EventCard/EventCard'

const Competitions = () => {
    const competitions = [
        {
            title: "National Coding Championship 2025",
            description: "Test your programming skills against the best coders in the country. Compete in algorithmic challenges, data structures problems, and real-world coding scenarios.",
            author: "Coding Committee",
            date: "30 minutes ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Coding+Championship",
                alt: "Coding Championship",
                caption: "National Coding Championship 2025"
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
            title: "Business Case Study Competition",
            description: "Analyze real business challenges and present innovative solutions to industry experts. Teams compete to solve complex business problems with strategic thinking.",
            author: "Business Team",
            date: "2 hours ago",
            organizer: {
                name: "Business Club",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Hackathon: Build for Social Good",
            description: "48-hour intensive coding marathon to create technology solutions addressing social issues like education, healthcare, and environmental sustainability.",
            author: "Tech Team",
            date: "4 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Social+Hackathon",
                alt: "Social Hackathon",
                caption: "Build for Social Good Hackathon"
            },
            organizer: {
                name: "TechForGood",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Design Challenge: UI/UX Innovation",
            description: "Create outstanding user interfaces and experiences for mobile and web applications. Showcase your design thinking and creativity in this visual competition.",
            author: "Design Team",
            date: "6 hours ago",
            organizer: {
                name: "Design Studio",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Behance", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Startup Pitch Competition",
            description: "Present your startup idea to venture capitalists and industry leaders. Win funding, mentorship, and the opportunity to launch your dream business.",
            author: "Entrepreneurship Team",
            date: "8 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Startup+Pitch",
                alt: "Startup Pitch",
                caption: "Startup Pitch Competition"
            },
            organizer: {
                name: "E-Cell",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "YouTube", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Data Science & AI Challenge",
            description: "Solve complex data problems using machine learning and artificial intelligence. Work with real datasets to create predictive models and insights.",
            author: "AI Team",
            date: "10 hours ago",
            organizer: {
                name: "AI Club",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Photography Contest: Campus Life",
            description: "Capture the essence of campus life through your lens. Submit your best photographs showcasing student experiences, architecture, and campus culture.",
            author: "Photography Club",
            date: "12 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Photo+Contest",
                alt: "Photography Contest",
                caption: "Campus Life Photography Contest"
            },
            organizer: {
                name: "PhotoClub",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Flickr", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Debate Championship: Global Issues",
            description: "Engage in intellectual discourse on pressing global issues. Test your argumentation skills and knowledge in this prestigious debate competition.",
            author: "Debate Society",
            date: "14 hours ago",
            organizer: {
                name: "Debate Club",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Innovation Lab: Hardware Challenge",
            description: "Design and build innovative hardware solutions using Arduino, Raspberry Pi, and IoT technologies. Create prototypes that solve real-world problems.",
            author: "Hardware Team",
            date: "16 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Hardware+Challenge",
                alt: "Hardware Challenge",
                caption: "Innovation Lab Hardware Challenge"
            },
            organizer: {
                name: "Innovation Lab",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Discord", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Creative Writing Competition",
            description: "Express your creativity through words. Submit short stories, poetry, or essays on themes of innovation, change, and the future of humanity.",
            author: "Literary Club",
            date: "1 day ago",
            organizer: {
                name: "Writers Circle",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
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
                    Competitions
                </h1>
                <p className="text-sm lg:text-base font-roboto-slab text-text-secondary">
                    Battle of Minds: Students Compete in Premier Championships Across Multiple Disciplines
                </p>
            </div>

            {/* Competitions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitions.map((competition, index) => (
                    <EventCard key={index} event={competition} />
                ))}
            </div>
        </div>
    );
};

export default Competitions;
