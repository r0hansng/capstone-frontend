import React from 'react'

const EventCard = ({ event, isLarge = false }) => {
    if (isLarge) {
        return (
            <article className='border-b border-gray-1 pb-6 mb-6'>
                <div className={`grid grid-cols-1 ${event.image ? 'md:grid-cols-5' : ''} gap-6`}>
                    <div className={event.image ? 'md:col-span-2' : ''}>
                        <a href={event.link}>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-cheltenham leading-tight mb-3 cursor-pointer'>
                                {event.title}
                            </h1>
                        </a>
                        <p className='text-xs lg:text-sm font-roboto-slab text-text-secondary leading-relaxed mb-3'>
                            {event.description}
                        </p>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='text-sm text-text-primary font-roboto-slab font-medium'>
                                {event.organizer.name}
                            </div>
                            {event.organizer.socialLinks && event.organizer.socialLinks.length > 0 && (
                                <div className='flex gap-3 text-xs'>
                                    {event.organizer.socialLinks.map((link, index) => (
                                        <a key={index} href={link.url} className='text-text-secondary hover:text-brand-red transition-colors duration-300'>
                                            {link.platform}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='text-xs text-text-secondary font-roboto-slab mb-2'>
                            {event.author} • {event.date}
                        </div>
                        <a href={event.link} className='text-xs font-cheltenham text-text-primary hover:text-brand-red underline transition-colors duration-300'>
                            Read More →
                        </a>
                    </div>
                    {event.image && (
                        <div className='md:col-span-3 md:order-last order-first'>
                            <img
                                src={event.image.url}
                                alt={event.image.alt}
                                className='w-full h-72 md:h-80 lg:h-96 object-cover border border-gray-1'
                            />
                            <p className='text-xs text-text-secondary font-roboto-slab mt-1'>
                                {event.image.caption}
                            </p>
                        </div>
                    )}
                </div>
            </article>
        )
    }

    return (
        <article className='border border-gray-1 p-4 mb-4'>
            <div className='flex items-center gap-2 mb-2'>
                <span className='text-sm font-franklin font-bold text-text-primary'>
                    {event.organizer.name}
                </span>
                {event.organizer.socialLinks && event.organizer.socialLinks.length > 0 && (
                    <div className='flex gap-3 text-xs'>
                        {event.organizer.socialLinks.map((link, index) => (
                            <a key={index} href={link.url} className='text-text-secondary hover:text-brand-red transition-colors duration-300'>
                                {link.platform}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <a href={event.link}>
                <h2 className='text-base md:text-lg font-bold font-cheltenham mb-2 leading-tight cursor-pointer'>
                    {event.title}
                </h2>
            </a>

            <p className='text-xs font-roboto-slab text-text-secondary leading-relaxed mb-3'>
                {event.description}
            </p>

            {event.image && (
                <>
                    <img
                        src={event.image.url}
                        alt={event.image.alt}
                        className='w-full h-40 object-cover border border-gray-1 mb-2'
                    />
                    <p className='text-xs text-text-secondary font-roboto-slab mb-3 italic'>
                        {event.image.caption}
                    </p>
                </>
            )}

            <div className='text-xs text-text-secondary font-roboto-slab mb-2'>
                {event.author} • {event.date}
            </div>
            <a href={event.link} className='text-xs font-cheltenham text-text-primary hover:text-brand-red underline transition-colors duration-300'>
                Read More
            </a>
        </article>
    )
}

export default EventCard
