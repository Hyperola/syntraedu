import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const headerStyle = {
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    '@media (max-width: 768px)': {
      padding: '0 20px',
      height: '70px',
    },
    '@media (max-width: 480px)': {
      padding: '0 16px',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    '@media (max-width: 768px)': {
      gap: '12px',
    },
  },
  logoWrapper: {
    position: 'relative',
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(75, 83, 32, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '@media (max-width: 768px)': {
      width: '40px',
      height: '40px',
    },
  },
  brandName: {
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
    transition: 'opacity 0.3s ease',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
    '@media (max-width: 480px)': {
      fontSize: '22px',
    },
  },
  nav: {
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      gap: '32px',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navMobile: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      position: 'relative',
    },
  },
  navLink: {
    color: '#2C3E50',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0.3px',
    position: 'relative',
    padding: '8px 0',
    transition: 'color 0.3s ease',
    '@media (max-width: 1024px)': {
      fontSize: '14px',
    },
  },
  navLinkMobile: {
    color: '#2C3E50',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '12px 0',
    display: 'block',
    width: '100%',
    transition: 'color 0.3s ease',
  },
  navLinkUnderline: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '0%',
    height: '2px',
    background: 'linear-gradient(90deg, #4B5320, #6B7C3A)',
    transition: 'width 0.3s ease',
    borderRadius: '2px',
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: '#4B5320',
    border: '2px solid #4B5320',
    padding: '10px 28px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginLeft: '32px',
    letterSpacing: '0.3px',
    '@media (max-width: 1024px)': {
      marginLeft: '24px',
      padding: '10px 24px',
      fontSize: '14px',
    },
    '@media (max-width: 768px)': {
      margin: '20px 0 0',
      width: '100%',
      padding: '12px 24px',
    },
  },
  ctaButtonHover: {
    backgroundColor: '#4B5320',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(75, 83, 32, 0.25)',
  },
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#4B5320',
    cursor: 'pointer',
    padding: '8px',
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileMenu: {
    position: 'fixed',
    top: '70px',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 999,
  },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (e) => {
    e.target.style.color = '#4B5320';
    const underline = e.target.querySelector('.underline');
    if (underline) underline.style.width = '100%';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#2C3E50';
    const underline = e.target.querySelector('.underline');
    if (underline) underline.style.width = '0%';
  };

  const handleCtaHover = (e) => {
    Object.assign(e.target.style, headerStyle.ctaButtonHover);
  };

  const handleCtaLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#4B5320';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#solution', text: 'Solution' },
    { href: '#how-it-works', text: 'How It Works' },
    { href: '#benefits', text: 'Benefits' },
    { href: '#demo', text: 'Demo' },
  ];

  return (
    <header style={headerStyle.header}>
      <div style={headerStyle.container}>
        {/* Logo & Brand */}
        <Link href="/" style={headerStyle.logoContainer}>
          <div style={headerStyle.logoWrapper}>
            <Image
              src="/syntra.jpeg"
              alt="Syntra Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 40px, 50px"
              priority
            />
          </div>
          <span style={headerStyle.brandName}>Syntra</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav style={headerStyle.nav}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              style={headerStyle.navLink}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.text}
              <span className="underline" style={headerStyle.navLinkUnderline}></span>
            </Link>
          ))}
          
          {/* CTA Button */}
          <button 
            style={headerStyle.ctaButton}
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaLeave}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={headerStyle.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={headerStyle.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              style={headerStyle.navLinkMobile}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <button 
            style={headerStyle.ctaButton}
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaLeave}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}