const eventsData = [
    {
        id: 1,
        title: "Inter clan sports",
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Started 2 hours ago
        endTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), // Ends in 6 hours
        description: "Annual inter-clan sports competition featuring various athletic events"
    },
    {
        id: 2,
        title: "Tech Workshop",
        startTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // Started 1 hour ago
        endTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // Ends in 4 hours
        description: "Hands-on workshop on modern web development technologies"
    },
    {
        id: 3,
        title: "Cultural Dance Competition",
        startTime: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // Started 3 hours ago
        endTime: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(), // Ends in 5 hours
        description: "Traditional and contemporary dance performances"
    },
    {
        id: 4,
        title: "Coding Bootcamp",
        startTime: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(), // Starts in 1 hour
        endTime: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // Ends in 8 hours
        description: "Intensive coding session with industry experts"
    },
    {
        id: 5,
        title: "Art Exhibition Opening",
        startTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // Started 30 minutes ago
        endTime: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(), // Ends in 7 hours
        description: "Student artwork showcase and gallery opening"
    },
    {
        id: 6,
        title: "Hackathon 2025",
        startTime: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // Started 4 hours ago
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), // Ends in 12 hours
        description: "24-hour coding competition with amazing prizes"
    },
    {
        id: 7,
        title: "Music Concert",
        startTime: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // Started 15 minutes ago
        endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // Ends in 3 hours
        description: "Live performances by campus bands and guest artists"
    },
    {
        id: 8,
        title: "Career Fair",
        startTime: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // Started 45 minutes ago
        endTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), // Ends in 6 hours
        description: "Meet with top companies and explore career opportunities"
    },
    {
        id: 9,
        title: "Debate Championship",
        startTime: new Date(Date.now() - 90 * 60 * 1000).toISOString(), // Started 1.5 hours ago
        endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // Ends in 2 hours
        description: "Inter-college debate competition on current affairs"
    },
    {
        id: 10,
        title: "Food Festival",
        startTime: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(), // Started 2.5 hours ago
        endTime: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // Ends in 8 hours
        description: "Taste cuisines from around the world prepared by students"
    }
]

const getTimeAgo = (startTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const diffInMinutes = Math.floor((now - start) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
}

const isEventLive = (startTime, endTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const end = new Date(endTime)

    return now >= start && now <= end
}

const getLiveEvents = () => {
    return eventsData.filter(event => isEventLive(event.startTime, event.endTime))
}

const LiveEvents = () => {
    const liveEvents = getLiveEvents().slice(0, 2) // Show only first 2 events

    return liveEvents.length === 0 ? null : (
        <div className='container mx-auto px-4'>
            <div className='lg:border-t border-b border-gray-600 py-4 mt-1 flex justify-center items-center gap-6 md:gap-14'>
                <h1 className='uppercase text-brand-red font-franklin font-bold'>Live</h1>
                {liveEvents.map(event => (
                    <div key={event.id} className='font-roboto-slab flex gap-2 md:gap-4'>
                        <h2 className='font-franklin text-sm md:text-base'>
                            {event.title}
                        </h2>
                        <p className='text-brand-red text-xs md:text-sm'>
                            {getTimeAgo(event.startTime)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LiveEvents