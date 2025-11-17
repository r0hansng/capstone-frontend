import EventCard from '../../components/EventCard/EventCard'

const Workshops = () => {
    const workshops = [
        {
            title: "Full-Stack Web Development Bootcamp",
            description: "Master modern web development with React, Node.js, and MongoDB in this comprehensive hands-on workshop covering frontend and backend technologies.",
            author: "Dev Team",
            date: "1 hour ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Web+Dev+Bootcamp",
                alt: "Web Development Bootcamp",
                caption: "Full-Stack Web Development Bootcamp"
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
            title: "Machine Learning Workshop for Beginners",
            description: "Learn the fundamentals of machine learning, data preprocessing, and model building using Python and popular ML libraries like scikit-learn.",
            author: "AI Team",
            date: "3 hours ago",
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
            title: "Digital Photography & Editing Workshop",
            description: "Enhance your photography skills and learn professional photo editing techniques using Adobe Photoshop and Lightroom from expert photographers.",
            author: "Photography Club",
            date: "5 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Photography+Workshop",
                alt: "Photography Workshop",
                caption: "Digital Photography Workshop"
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
            title: "Public Speaking & Communication Skills",
            description: "Overcome stage fright and develop confident public speaking abilities through practical exercises, speech techniques, and presentation skills training.",
            author: "Communication Team",
            date: "7 hours ago",
            organizer: {
                name: "Toastmasters",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Entrepreneurship & Business Planning Workshop",
            description: "Learn how to transform your business idea into a viable startup with guidance on business models, funding, and market validation strategies.",
            author: "Entrepreneurship Team",
            date: "9 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Business+Planning",
                alt: "Business Planning",
                caption: "Entrepreneurship Workshop"
            },
            organizer: {
                name: "E-Cell",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "Twitter", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "UI/UX Design Fundamentals",
            description: "Master user interface and user experience design principles using Figma and Adobe XD with hands-on projects and real-world case studies.",
            author: "Design Team",
            date: "11 hours ago",
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
            title: "Personal Finance & Investment Workshop",
            description: "Learn essential money management skills, investment strategies, and financial planning techniques to secure your financial future and build wealth.",
            author: "Finance Team",
            date: "13 hours ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Finance+Workshop",
                alt: "Finance Workshop",
                caption: "Personal Finance Workshop"
            },
            organizer: {
                name: "Finanza",
                socialLinks: [
                    { platform: "Instagram", url: "#" },
                    { platform: "LinkedIn", url: "#" },
                    { platform: "YouTube", url: "#" }
                ]
            },
            link: "#"
        },
        {
            title: "Creative Writing & Storytelling Workshop",
            description: "Develop your creative writing skills, learn storytelling techniques, and explore different literary genres with guidance from published authors.",
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
        },
        {
            title: "Mobile App Development with Flutter",
            description: "Build cross-platform mobile applications using Flutter framework and Dart programming language with practical project-based learning approach.",
            author: "Mobile Dev Team",
            date: "1 day ago",
            image: {
                url: "https://placehold.co/400x200/f8f9fa/6c757d?text=Flutter+Workshop",
                alt: "Flutter Workshop",
                caption: "Mobile App Development Workshop"
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
            title: "Data Visualization & Analytics Workshop",
            description: "Transform raw data into compelling visual stories using tools like Tableau, Power BI, and Python libraries for effective data communication.",
            author: "Analytics Team",
            date: "2 days ago",
            organizer: {
                name: "DataClub",
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
                    Workshops
                </h1>
                <p className="text-sm lg:text-base font-roboto-slab text-text-secondary">
                    Skills Revolution: Intensive Workshops Transform Student Capabilities in Tech and Innovation
                </p>
            </div>

            {/* Workshops Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.map((workshop, index) => (
                    <EventCard key={index} event={workshop} />
                ))}
            </div>
        </div>
    );
};

export default Workshops;
