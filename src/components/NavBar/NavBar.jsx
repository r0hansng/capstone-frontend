import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Button from "../ui/Button/Button"

// Import live events data and logic
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

const isEventLive = (startTime, endTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const end = new Date(endTime)
    return now >= start && now <= end
}

const getLiveEvents = () => {
    return eventsData.filter(event => isEventLive(event.startTime, event.endTime))
}

const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Conferences', path: '/conferences' }
]

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const navBottom = navRef.current.offsetTop + navRef.current.offsetHeight
                setIsScrolled(window.scrollY > navBottom)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Get current date for mobile display
    const getCurrentDate = () => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return new Date().toLocaleDateString('en-US', options)
    }

    // Check if there are live events
    const hasLiveEvents = getLiveEvents().length > 0

    return (
        <>
            <nav className='container mx-auto px-4 select-none' ref={navRef}>
                <div className='flex justify-between items-center py-4 border-b border-gray-200 lg:border-outline'>
                    {/* Desktop Layout */}
                    <div className='hidden lg:flex justify-between items-center w-full'>
                        {/* Logo */}
                        <h1 className='text-4xl font-black font-brand'>NXTUP</h1>

                        {/* Desktop Navigation */}
                        <ul className='flex gap-8 font-franklin text-xl text-text-primary'>
                            {
                                navigationLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={link.path}
                                            className='hover:text-brand-red transition-colors duration-200'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* Desktop Login Button */}
                        <Link to="/login">
                            <Button className="text-xl cursor-pointer font-franklin" size='lg'>
                                Log in
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Layout */}
                    <div className='lg:hidden flex justify-between items-center w-full'>
                        {/* Mobile Menu Button (Left) */}
                        <button
                            className='flex flex-col items-center justify-center w-8 h-8 space-y-1'
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>

                        {/* Logo (Center) */}
                        <h1 className='text-3xl font-black font-brand'>NXTUP</h1>

                        {/* Mobile Login Button (Right) */}
                        <Link to="/login">
                            <button
                                className='flex items-center justify-center w-8 h-8'
                                aria-label="Login"
                            >
                                <img
                                    src="/assets/icons/user.svg"
                                    alt="Login"
                                    className='w-6 h-6'
                                />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Date Display */}
                <div className={`lg:hidden py-3 border-b ${hasLiveEvents ? 'border-gray-200' : 'border-outline'}`}>
                    <p className='text-sm font-franklin font-bold text-text-primary'>
                        {getCurrentDate()}
                    </p>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className='py-4'>
                        <ul className='space-y-4'>
                            {
                                navigationLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={link.path}
                                            className='block py-2 font-franklin text-lg text-text-primary hover:text-brand-red transition-colors duration-200'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sticky Navigation Bar - Shows when scrolled */}
            <div className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center items-center py-3'>
                        {/* Desktop Sticky Navigation */}
                        <ul className='hidden lg:flex gap-6 font-cheltenham text-base text-text-primary'>
                            {
                                navigationLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={link.path}
                                            className='hover:text-brand-red transition-colors duration-200 px-3 py-2 rounded-md'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* Mobile Sticky Navigation */}
                        <div className='lg:hidden flex justify-start items-center w-full'>
                            {/* Mobile Hamburger for Sticky Nav */}
                            <button
                                className='flex flex-col items-center justify-center w-8 h-8 space-y-1'
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-outline transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu for Sticky Nav */}
                    <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen && isScrolled
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                        }`}>
                        <div className='py-4 border-t border-gray-200'>
                            <ul className='space-y-2'>
                                {
                                    navigationLinks.map((link, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={link.path}
                                                className='block py-2 px-4 font-cheltenham text-sm text-text-primary hover:text-brand-red transition-colors duration-200 rounded-md'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar