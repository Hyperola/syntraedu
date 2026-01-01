import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
  },
  logoWrapper: {
    position: 'relative',
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(75, 83, 32, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  brandName: {
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
    transition: 'opacity 0.3s ease',
  },
  nav: {
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
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
    fontSize: '28px',
    color: '#4B5320',
    cursor: 'pointer',
    padding: '8px',
    display: 'none', // HIDDEN BY DEFAULT
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    zIndex: 1001,
  },
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    zIndex: 1000,
    animation: 'slideDown 0.3s ease-out',
  },
  mobileMenuLink: {
    color: '#2C3E50',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    padding: '16px 0',
    display: 'block',
    width: '100%',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },
  overlay: {
    position: 'fixed',
    top: '80px',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease-out',
  },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#solution', text: 'Solution' },
    { href: '#how-it-works', text: 'How It Works' },
    { href: '#benefits', text: 'Benefits' },
    { href: '#demo', text: 'Demo' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Desktop first approach - default styles are for desktop */

        /* Tablet styles */
        @media (max-width: 1280px) {
          .container {
            padding: 0 24px !important;
          }
        }

        @media (max-width: 1024px) {
          .nav {
            gap: 32px !important;
          }
          .navLink {
            font-size: 14px !important;
          }
          .ctaButton {
            margin-left: 24px !important;
            padding: 10px 24px !important;
            font-size: 14px !important;
          }
        }

        /* Mobile styles - hide desktop nav, show hamburger */
        @media (max-width: 768px) {
          .container {
            height: 70px !important;
            padding: 0 20px !important;
          }
          .logoContainer {
            gap: 12px !important;
          }
          .logoWrapper {
            width: 40px !important;
            height: 40px !important;
          }
          .brandName {
            font-size: 24px !important;
          }
          
          /* Hide desktop navigation on mobile */
          .nav {
            display: none !important;
          }
          
          /* Show hamburger menu button on mobile */
          .mobileMenuButton {
            display: flex !important;
          }
          
          .mobileMenu {
            top: 70px !important;
          }
          .overlay {
            top: 70px !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px !important;
          }
          .brandName {
            font-size: 22px !important;
          }
          .mobileMenu {
            padding: 20px 16px !important;
          }
          .mobileMenuLink {
            font-size: 16px !important;
            padding: 14px 0 !important;
          }
          .ctaButton {
            margin: 16px 0 0 !important;
            padding: 12px 24px !important;
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .brandName {
            font-size: 20px !important;
          }
          .mobileMenuButton {
            width: 44px !important;
            height: 44px !important;
            font-size: 24px !important;
          }
        }

        .mobileMenuButton:hover {
          background-color: rgba(75, 83, 32, 0.05);
        }

        .mobileMenuLink:hover {
          color: #4B5320 !important;
          padding-left: 8px !important;
        }

        .logoContainer:hover .logoWrapper {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(75, 83, 32, 0.2);
        }

        .logoContainer:hover .brandName {
          opacity: 0.9;
        }
      `}</style>

      <header style={{
        ...headerStyle.header,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.08)' : '0 4px 30px rgba(0, 0, 0, 0.05)',
      }}>
        <div style={headerStyle.container} className="container">
          {/* Logo & Brand */}
          <Link href="/" style={headerStyle.logoContainer} className="logoContainer">
            <div style={headerStyle.logoWrapper} className="logoWrapper">
              <Image
                src="/syntra.jpeg"
                alt="Syntra Logo"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 40px, 50px"
                priority
              />
            </div>
            <span style={headerStyle.brandName} className="brandName">Syntra</span>
          </Link>
          
          {/* Desktop Navigation - hidden on mobile via CSS */}
          <nav style={headerStyle.nav} className="nav">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                style={headerStyle.navLink}
                className="navLink"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {link.text}
                <span className="underline" style={headerStyle.navLinkUnderline}></span>
              </Link>
            ))}
            
            {/* CTA Button - part of desktop nav */}
            <button 
              style={headerStyle.ctaButton}
              className="ctaButton"
              onMouseEnter={handleCtaHover}
              onMouseLeave={handleCtaLeave}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button - hidden on desktop, shown on mobile via CSS */}
          <button 
            style={headerStyle.mobileMenuButton}
            className="mobileMenuButton"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            style={headerStyle.overlay} 
            className="overlay"
            onClick={closeMobileMenu}
            role="presentation"
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={headerStyle.mobileMenu} className="mobileMenu">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                style={headerStyle.mobileMenuLink}
                className="mobileMenuLink"
                onClick={closeMobileMenu}
              >
                {link.text}
              </Link>
            ))}
            <button 
              style={headerStyle.ctaButton}
              className="ctaButton"
              onMouseEnter={handleCtaHover}
              onMouseLeave={handleCtaLeave}
              onClick={closeMobileMenu}
            >
              Get Started
            </button>
          </div>
        )}
      </header>
    </>
  )
}