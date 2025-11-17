import React from 'react'

const SidebarCard = ({ title, content }) => {
    return (
        <div className='mb-8'>
            <h3 className='text-base lg:text-lg font-cheltenham font-bold uppercase tracking-wide border-b border-gray-1 pb-2 mb-4'>
                {title}
            </h3>
            <div className='border border-gray-1 p-4'>
                <img
                    src={content.image.url}
                    alt={content.image.alt}
                    className='w-full h-40 object-cover border border-gray-1 mb-3'
                />
                <a href={content.link}>
                    <h4 className='text-base font-bold font-cheltenham mb-2 leading-tight cursor-pointer hover:text-brand-red transition-colors duration-300'>
                        {content.title}
                    </h4>
                </a>
                <p className='text-xs font-roboto-slab text-text-secondary mb-3'>
                    {content.description}
                </p>
                <a href={content.link} className='text-xs font-cheltenham text-text-primary hover:text-brand-red underline transition-colors duration-300'>
                    Read More
                </a>
            </div>
        </div>
    )
}

export default SidebarCard
