import React from 'react'
import Button from '../../components/ui/Button/Button'

const Event = ({ eventData }) => {
    // Default data in case no props are provided
    const defaultData = {
        title: "Spardha: The Sports Fest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        category: "Sports Event",
        location: {
            venue: "Main Auditorium",
            address: "Rishihood University Campus"
        },
        image: {
            url: "https://placehold.co/580x400",
            alt: "Event Image",
            caption: "Event participants at the venue"
        },
        organizer: {
            name: "Rishihood University",
            url: "https://rishihood.edu.in/",
            profiles: [
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/67.jpg"
            ]
        },
        metadata: {
            publishDate: "July 14, 2025",
            lastUpdated: "12:00 p.m. IST"
        },
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        ]
    }

    // Merge provided eventData with default data
    const data = { ...defaultData, ...eventData }

    // Function to render content paragraphs
    const renderContent = (content) => {
        if (typeof content === 'string') {
            // If content is a single string, split by double newlines or return as single paragraph
            const paragraphs = content.split('\n\n').filter(p => p.trim() !== '')
            return paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6">
                    {paragraph.trim()}
                </p>
            ))
        } else if (Array.isArray(content)) {
            // If content is an array of paragraphs
            return content.map((paragraph, index) => (
                <p key={index} className="mb-6">
                    {paragraph}
                </p>
            ))
        } else {
            // Fallback for unexpected content format
            return <p className="mb-6">{String(content)}</p>
        }
    }
    return (
        <div className='container mx-auto px-4 lg:px-8 my-8 lg:my-16'>
            <div className='max-w-4xl mx-auto'>
                {/* Event Hero */}
                <div className='flex flex-col gap-2 text-left mb-8'>
                    <h1 className='w-full text-3xl md:text-4xl lg:text-5xl italic font-bold font-cheltenham leading-tight'>{data.title}</h1>
                    <p className='w-full text-lg md:text-xl lg:text-2xl text-text-secondary font-cheltenham leading-relaxed'>
                        {data.description}
                    </p>
                </div>

                <hr className='w-full my-6 border-gray-1' />

                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center p-2 border rounded-full border-gray-1'>
                            <img src="assets/icons/location.svg" alt="Location" className='w-5 h-5' />
                        </div>
                        <div>
                            <p className='font-semibold font-roboto-slab'>{data.location.venue}</p>
                            {data.location.address && (
                                <p className='text-sm font-roboto-slab text-text-secondary'>{data.location.address}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex items-center gap-3 flex-wrap'>
                        <Button variant="icon" className="p-3 hover:text-brand-red hover:border-brand-red hover:bg-transparent transition-colors duration-200">
                            <span className="font-roboto-slab">Apply now</span>
                        </Button>
                        <Button variant="icon" className="p-3 hover:border-brand-red hover:bg-transparent transition-colors duration-200 group">
                            <img src="assets/icons/share.svg" alt="Share" className='w-5 h-5 group-hover:brightness-0 group-hover:saturate-100 group-hover:sepia-100 group-hover:hue-rotate-[340deg] transition-all duration-200' />
                        </Button>
                        <Button variant="icon" className="p-3 hover:border-brand-red hover:bg-transparent transition-colors duration-200 group">
                            <img src="assets/icons/bookmark.svg" alt="Bookmark" className='w-5 h-5 group-hover:brightness-0 group-hover:saturate-100 group-hover:sepia-100 group-hover:hue-rotate-[340deg] transition-all duration-200' />
                        </Button>
                        <Button variant="icon" className="p-3 hover:border-brand-red hover:bg-transparent transition-colors duration-200 group">
                            <img src="assets/icons/gallery.svg" alt="Gallery" className='w-5 h-5 group-hover:brightness-0 group-hover:saturate-100 group-hover:sepia-100 group-hover:hue-rotate-[340deg] transition-all duration-200' />
                        </Button>
                    </div>
                </div>

                {/* Event Image */}
                <div className='my-8 lg:my-12 w-full'>
                    <img
                        className='w-full h-auto object-cover rounded-lg border border-gray-1'
                        src={data.image.url}
                        alt={data.image.alt || "Event image"}
                    />
                    {data.image.caption && (
                        <p className='text-sm font-roboto-slab text-text-secondary mt-3 italic text-center'>
                            {data.image.caption}
                        </p>
                    )}
                </div>

                {/* Club Organizers */}
                <div className='flex gap-4 mb-6'>
                    {data.organizer.profiles.map((profile, index) => (
                        <img
                            key={index}
                            className='w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-gray-1'
                            src={profile}
                            alt={`Club ${index + 1} logo`}
                        />
                    ))}
                </div>

                {/* By Whom */}
                <p className='w-full mt-5 font-franklin text-text-secondary'>
                    By <span className='text-text-primary font-semibold hover:text-text-primary transition-colors'>
                        <a href={data.organizer.url}>{data.organizer.name}</a>
                    </span>
                </p>

                {/* Meta Data */}
                <div className='flex flex-wrap w-full gap-3 lg:gap-5 my-4 text-xs font-roboto-slab text-text-secondary'>
                    <p>{data.metadata.publishDate}</p>
                    <p>•</p>
                    <p>Updated {data.metadata.lastUpdated}</p>
                </div>

                {/* Article Content */}
                <div className='mt-6 lg:mt-8 text-lg lg:text-xl xl:text-2xl font-roboto-slab text-text-secondary leading-relaxed space-y-6'>
                    {renderContent(data.content)}
                </div>
            </div>
        </div>
    )
}

export default Event