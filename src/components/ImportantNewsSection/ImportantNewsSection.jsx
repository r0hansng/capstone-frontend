const ImportantNewsSection = ({ articles }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-1 pb-6 mb-6'>
            {articles.map((article, index) => (
                <article
                    key={index}
                    className={`${index < articles.length - 1 ? 'lg:border-r lg:border-gray-1 lg:pr-4' : ''} ${index === articles.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                    <a href={article.link}>
                        <h3 className='text-sm lg:text-base font-bold font-cheltenham mb-2 leading-tight cursor-pointer'>
                            {article.title}
                        </h3>
                    </a>
                    <p className='text-xs font-roboto-slab text-text-secondary mb-2'>
                        {article.description}
                    </p>
                    <div className='text-xs text-text-secondary font-roboto-slab mb-1'>
                        {article.category} • {article.timestamp}
                    </div>
                    <a href={article.link} className='text-xs font-cheltenham text-text-primary hover:text-brand-red underline transition-colors duration-300'>
                        Read More
                    </a>
                </article>
            ))}
        </div>
    )
}

export default ImportantNewsSection
