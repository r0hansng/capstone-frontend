import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const footerData = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Conferences', path: '/conferences' }
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Code of Conduct', path: '/code' },
    { name: 'License', path: '/license' },
  ],
  social: [
    { name: 'Instagram', path: 'https://instagram.com', external: true },
    { name: 'LinkedIn', path: 'https://linkedin.com', external: true },
    { name: 'Discord', path: 'https://discord.com', external: true },
    { name: 'YouTube', path: 'https://youtube.com', external: true },
  ],
  contact: {
    address: 'Newton School of Technology, Rishihood University, Delhi NCR, Sonipat, Haryana – 131021',
    email: 'softwaredevg.club@nst.rishihood.edu.in',
    phone: '+91 12345 67890'
  },
  account: [
    { name: 'Manage my account', icon: '/assets/icons/user.svg' },
    { name: 'Delete my account', icon: '/assets/icons/trash.svg' }
  ]
}

const DropdownSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className='lg:hidden'>
      <button
        onClick={onToggle}
        className='w-full font-franklin font-bold uppercase text-text-primary mb-2 text-sm tracking-wide py-2 border-b border-gray-1 text-left'
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}>
        <div className='pt-2 pb-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  const location = useLocation()

  const [openSections, setOpenSections] = useState({
    navigation: false,
    legal: false,
    social: false,
    contact: false,
    account: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Generate dynamic breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '')

    // If we're on home page, just show Home
    if (location.pathname === '/') {
      return [
        { name: 'Home', path: '/', isActive: true }
      ]
    }

    // Start with home breadcrumb for other pages
    const breadcrumbs = [
      { name: 'Home', path: '/', isActive: false }
    ]

    // Add intermediate segments
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1

      // Capitalize and format segment name
      const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

      breadcrumbs.push({
        name: segmentName,
        path: currentPath,
        isActive: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <footer className='container mx-auto px-4 my-8'>
      {/* Decorative lines */}
      <div className='mb-8'>
        <hr className='border-gray-2 border-2' />
        <hr className='border-gray-2 mt-1' />
      </div>

      {/* Main footer content */}
      <div className='border-b border-gray-1 pb-8 mb-6'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='font-brand text-3xl lg:text-4xl font-black text-brand-black'>NXTUP</h1>
        </div>

        {/* Breadcrumbs */}
        <div className='mb-8 pb-4 border-b border-gray-1'>
          <nav aria-label="Breadcrumb" className='text-sm'>
            <ol className='flex flex-wrap items-center gap-2'>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className='flex items-center gap-2'>
                  {index > 0 && (
                    <span className='text-text-secondary font-roboto-slab'>/</span>
                  )}
                  {crumb.isActive ? (
                    <span className='font-roboto-slab text-text-primary font-medium'>
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className='font-roboto-slab text-text-secondary hover:text-brand-red transition-colors duration-200'
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className='font-roboto-slab text-text-secondary text-xs mt-2'>
            {location.pathname === '/'
              ? 'Find all the information you need about our platform, policies, and ways to connect with us.'
              : `Navigate through ${breadcrumbs[breadcrumbs.length - 1]?.name || 'this page'} and discover more about our platform.`
            }
          </p>
        </div>

        {/* Mobile Dropdown Sections */}
        <div className='lg:hidden space-y-4'>
          {/* Navigation Dropdown */}
          <DropdownSection
            title="Navigation"
            isOpen={openSections.navigation}
            onToggle={() => toggleSection('navigation')}
          >
            <ul className='space-y-2'>
              {footerData.navigation.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm block py-1'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DropdownSection>

          {/* Legal Dropdown */}
          <DropdownSection
            title="Legal"
            isOpen={openSections.legal}
            onToggle={() => toggleSection('legal')}
          >
            <ul className='space-y-2'>
              {footerData.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm block py-1'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DropdownSection>

          {/* Social Dropdown */}
          <DropdownSection
            title="Connect"
            isOpen={openSections.social}
            onToggle={() => toggleSection('social')}
          >
            <ul className='space-y-2'>
              {footerData.social.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm block py-1'
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm block py-1'
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </DropdownSection>

          {/* Contact Dropdown */}
          <DropdownSection
            title="Contact Info"
            isOpen={openSections.contact}
            onToggle={() => toggleSection('contact')}
          >
            <div className='space-y-3'>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Address</h3>
                <p className='font-roboto-slab text-text-secondary text-sm leading-relaxed'>
                  {footerData.contact.address}
                </p>
              </div>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Email</h3>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className='font-roboto-slab text-text-secondary hover:text-brand-red transition-colors duration-200 text-sm'
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Phone</h3>
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className='font-roboto-slab text-text-secondary hover:text-brand-red transition-colors duration-200 text-sm'
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </DropdownSection>

          {/* Account Dropdown */}
          <DropdownSection
            title="Account"
            isOpen={openSections.account}
            onToggle={() => toggleSection('account')}
          >
            <div className='space-y-3'>
              {footerData.account.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 cursor-pointer group'>
                  <img
                    src={item.icon}
                    alt=""
                    className='w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200'
                  />
                  <span className='font-inter font-bold text-text-primary text-sm group-hover:text-brand-red transition-colors duration-200'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </DropdownSection>
        </div>

        {/* Desktop Grid Layout */}
        <div className='hidden lg:grid lg:grid-cols-6 gap-6'>

          {/* Navigation */}
          <div className='lg:col-span-1'>
            <h2 className='font-franklin font-bold uppercase text-text-primary mb-4 text-sm tracking-wide'>
              Navigation
            </h2>
            <ul className='space-y-2'>
              {footerData.navigation.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className='lg:col-span-1'>
            <h2 className='font-franklin font-bold uppercase text-text-primary mb-4 text-sm tracking-wide'>
              Legal
            </h2>
            <ul className='space-y-2'>
              {footerData.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className='lg:col-span-1'>
            <h2 className='font-franklin font-bold uppercase text-text-primary mb-4 text-sm tracking-wide'>
              Connect
            </h2>
            <ul className='space-y-2'>
              {footerData.social.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm'
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className='font-roboto-slab text-text-primary hover:text-brand-red hover:underline transition-colors duration-200 text-sm'
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='lg:col-span-2'>
            <h2 className='font-franklin font-bold uppercase text-text-primary mb-4 text-sm tracking-wide'>
              Contact Info
            </h2>
            <div className='space-y-3'>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Address</h3>
                <p className='font-roboto-slab text-text-secondary text-sm leading-relaxed'>
                  {footerData.contact.address}
                </p>
              </div>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Email</h3>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className='font-roboto-slab text-text-secondary hover:text-brand-red transition-colors duration-200 text-sm'
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div>
                <h3 className='font-roboto-slab font-semibold text-text-primary text-sm mb-1'>Phone</h3>
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className='font-roboto-slab text-text-secondary hover:text-brand-red transition-colors duration-200 text-sm'
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Account Management */}
          <div className='lg:col-span-1 lg:border-l lg:border-gray-1 lg:pl-6'>
            <h2 className='font-franklin font-bold uppercase text-text-primary mb-4 text-sm tracking-wide'>
              Account
            </h2>
            <div className='space-y-3'>
              {footerData.account.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 cursor-pointer group'>
                  <img
                    src={item.icon}
                    alt=""
                    className='w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200'
                  />
                  <span className='font-inter font-bold text-text-primary text-sm group-hover:text-brand-red transition-colors duration-200'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className='text-center py-6'>
        <p className='font-roboto-slab text-text-secondary text-sm'>
          Made with love by{' '}
          <a
            className="hover:underline hover:text-brand-red transition-colors duration-200"
            href="https://devclub-wbsite.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevClub, NST&lt;&gt;RU
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer