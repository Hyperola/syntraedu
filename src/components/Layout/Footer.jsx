import { useState, useEffect } from 'react';

const footerStyles = {
  footer: {
    backgroundColor: '#4B5320', // Army Green
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '60px 0 30px',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '50px',
    marginBottom: '50px',
  },
  brandColumn: {
    gridColumn: 'span 2',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
  },
  logo: {
    width: '50px',
    height: '50px',
    backgroundColor: '#6B7C3A',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#FFFFFF',
    flexShrink: 0,
  },
  brandName: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  tagline: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '400px',
  },
  contactInfo: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
  },
  contactIcon: {
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    fontSize: '14px',
    color: '#FFFFFF',
    flexShrink: 0,
  },
  column: {},
  columnTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: '25px',
    position: 'relative',
  },
  columnTitleUnderline: {
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '40px',
    height: '3px',
    backgroundColor: '#FFFFFF',
    borderRadius: '2px',
  },
  linksList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  linkItem: {
    marginBottom: '12px',
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
  },
  linkHover: {
    color: '#FFFFFF',
    transform: 'translateX(5px)',
  },
  linkIcon: {
    marginRight: '8px',
    fontSize: '12px',
    opacity: '0',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  socialLinkHover: {
    backgroundColor: '#FFFFFF',
    color: '#4B5320',
    transform: 'translateY(-3px)',
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
  },
  accordionHeader: {
    display: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '15px 0',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  accordionContent: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, padding 0.3s ease',
  },
};

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    resources: false
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Auto-expand sections on mobile for better UX
    if (isMobile) {
      setOpenSections({ quickLinks: true, resources: true });
    } else {
      setOpenSections({ quickLinks: false, resources: false });
    }
  }, [isMobile]);

  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { text: 'Solution Overview', href: '#solution', icon: 'fas fa-rocket' },
    { text: 'How It Works', href: '#how-it-works', icon: 'fas fa-cogs' },
    { text: 'Benefits', href: '#benefits', icon: 'fas fa-star' },
    { text: 'Ownership', href: '#ownership', icon: 'fas fa-crown' },
    { text: 'Trust & Credibility', href: '#trust', icon: 'fas fa-shield-alt' },
  ];

  const resources = [
    { text: 'Case Studies', href: '#', icon: 'fas fa-chart-line' },
    { text: 'Implementation Guide', href: '#', icon: 'fas fa-book' },
    { text: 'FAQ', href: '#', icon: 'fas fa-question-circle' },
    { text: 'Support Center', href: '#', icon: 'fas fa-headset' },
    { text: 'Contact Sales', href: '#contact', icon: 'fas fa-phone' },
  ];

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    }
  };

  return (
    <>
      <style jsx global>{`
        @media (max-width: 1280px) {
          .footer-container {
            max-width: 1000px !important;
            padding: 0 24px !important;
          }
        }

        @media (max-width: 1024px) {
          .footer-main-content {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          .footer-brand-column {
            grid-column: span 2 !important;
          }
          .footer-column-title {
            font-size: 17px !important;
            margin-bottom: 20px !important;
          }
          .footer-social-link {
            width: 38px !important;
            height: 38px !important;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 50px 0 25px !important;
          }
          .footer-container {
            padding: 0 20px !important;
          }
          .footer-main-content {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            margin-bottom: 40px !important;
          }
          .footer-brand-column {
            grid-column: span 1 !important;
            margin-bottom: 30px !important;
          }
          .footer-brand {
            margin-bottom: 20px !important;
          }
          .footer-logo {
            width: 45px !important;
            height: 45px !important;
            font-size: 20px !important;
          }
          .footer-brand-name {
            font-size: 24px !important;
          }
          .footer-tagline {
            font-size: 15px !important;
            margin-bottom: 25px !important;
            max-width: 100% !important;
          }
          .footer-contact-item {
            font-size: 13px !important;
            margin-bottom: 12px !important;
          }
          .footer-contact-icon {
            width: 28px !important;
            height: 28px !important;
            font-size: 12px !important;
            margin-right: 10px !important;
          }
          .footer-accordion-header {
            display: flex !important;
            padding: 16px 0 !important;
          }
          .footer-accordion-content {
            max-height: ${openSections.quickLinks ? '500px' : '0'} !important;
            padding: ${openSections.quickLinks ? '15px 0' : '0'} !important;
          }
          .footer-links-resources {
            max-height: ${openSections.resources ? '500px' : '0'} !important;
            padding: ${openSections.resources ? '15px 0' : '0'} !important;
          }
          .footer-link {
            font-size: 13px !important;
            padding: 10px 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          }
          .footer-link-item {
            margin-bottom: 0 !important;
          }
          .footer-link-icon {
            opacity: 0.7 !important;
          }
          .footer-social-links {
            gap: 12px !important;
            margin-top: 25px !important;
          }
          .footer-social-link {
            width: 36px !important;
            height: 36px !important;
            font-size: 14px !important;
          }
          .footer-copyright {
            padding-top: 25px !important;
            font-size: 13px !important;
          }
          .accordion-icon {
            transition: transform 0.3s ease;
            font-size: 14px !important;
          }
          .accordion-icon.rotated {
            transform: rotate(180deg);
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 40px 0 20px !important;
          }
          .footer-container {
            padding: 0 16px !important;
          }
          .footer-brand-column {
            margin-bottom: 25px !important;
          }
          .footer-brand {
            margin-bottom: 15px !important;
          }
          .footer-logo {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
            margin-right: 12px !important;
          }
          .footer-brand-name {
            font-size: 22px !important;
          }
          .footer-tagline {
            font-size: 14px !important;
            margin-bottom: 20px !important;
            line-height: 1.5 !important;
          }
          .footer-contact-item {
            font-size: 12px !important;
            margin-bottom: 10px !important;
          }
          .footer-contact-icon {
            width: 26px !important;
            height: 26px !important;
            font-size: 11px !important;
          }
          .footer-accordion-header {
            font-size: 15px !important;
            padding: 14px 0 !important;
          }
          .footer-link {
            font-size: 12px !important;
            padding: 8px 0 !important;
          }
          .footer-social-links {
            gap: 10px !important;
            margin-top: 20px !important;
          }
          .footer-social-link {
            width: 34px !important;
            height: 34px !important;
            font-size: 13px !important;
          }
          .footer-copyright {
            padding-top: 20px !important;
            font-size: 12px !important;
          }
        }

        @media (max-width: 360px) {
          .footer-brand-name {
            font-size: 20px !important;
          }
          .footer-logo {
            width: 36px !important;
            height: 36px !important;
            font-size: 16px !important;
          }
          .footer-contact-item {
            font-size: 11px !important;
          }
          .footer-social-link {
            width: 32px !important;
            height: 32px !important;
            font-size: 12px !important;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .footer-link:hover {
            color: #FFFFFF !important;
            transform: translateX(5px) !important;
          }
          .footer-link:hover .footer-link-icon {
            opacity: 1 !important;
          }
          .footer-social-link:hover {
            background-color: #FFFFFF !important;
            color: #4B5320 !important;
            transform: translateY(-3px) !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .footer-link:active {
            color: #FFFFFF !important;
            transform: translateX(3px) !important;
          }
          .footer-link:active .footer-link-icon {
            opacity: 1 !important;
          }
          .footer-social-link:active {
            background-color: #FFFFFF !important;
            color: #4B5320 !important;
            transform: translateY(-2px) !important;
          }
        }

        /* Print styles */
        @media print {
          .footer {
            background-color: #FFFFFF !important;
            border-top: 2px solid #000 !important;
          }
          .footer-brand-name,
          .footer-column-title,
          .footer-link,
          .footer-contact-item,
          .footer-copyright {
            color: #000000 !important;
          }
          .footer-logo {
            background-color: #000000 !important;
          }
        }
      `}</style>

      <footer style={footerStyles.footer} className="footer">
        <div style={footerStyles.container} className="footer-container">
          <div style={footerStyles.mainContent} className="footer-main-content">
            {/* Brand Column */}
            <div style={footerStyles.brandColumn} className="footer-brand-column">
              <div style={footerStyles.brand} className="footer-brand">
                <div style={footerStyles.logo} className="footer-logo">S</div>
                <div style={footerStyles.brandName} className="footer-brand-name">Syntra</div>
              </div>
              <p style={footerStyles.tagline} className="footer-tagline">
                School-branded CBT & Academic Management System built specifically for Nigerian secondary schools.
              </p>
              <ul style={footerStyles.contactInfo} className="footer-contact-info">
                <li style={footerStyles.contactItem} className="footer-contact-item">
                  <div style={footerStyles.contactIcon} className="footer-contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  helloatsyntra@gmail.com
                </li>
                <li style={footerStyles.contactItem} className="footer-contact-item">
                  <div style={footerStyles.contactIcon} className="footer-contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  07018661724
                </li>
                <li style={footerStyles.contactItem} className="footer-contact-item">
                  <div style={footerStyles.contactIcon} className="footer-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  Lagos, Nigeria
                </li>
              </ul>
            </div>

            {/* Quick Links Column - Mobile Accordion */}
            <div style={footerStyles.column} className="footer-column">
              <button 
                style={footerStyles.accordionHeader}
                className="footer-accordion-header"
                onClick={() => toggleSection('quickLinks')}
                aria-expanded={openSections.quickLinks}
              >
                <span>Quick Links</span>
                <i className={`fas fa-chevron-down accordion-icon ${openSections.quickLinks ? 'rotated' : ''}`}></i>
              </button>
              <h4 style={footerStyles.columnTitle} className="footer-column-title">
                Quick Links
                <div style={footerStyles.columnTitleUnderline}></div>
              </h4>
              <div style={footerStyles.accordionContent} className="footer-accordion-content">
                <ul style={footerStyles.linksList} className="footer-links-list">
                  {quickLinks.map((link, index) => (
                    <li key={index} style={footerStyles.linkItem} className="footer-link-item">
                      <a 
                        href={link.href}
                        style={footerStyles.link}
                        className="footer-link"
                        onTouchStart={(e) => {
                          e.currentTarget.style.color = footerStyles.linkHover.color;
                          e.currentTarget.querySelector('.footer-link-icon').style.opacity = '1';
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.color = footerStyles.link.color;
                          e.currentTarget.querySelector('.footer-link-icon').style.opacity = '0.7';
                        }}
                      >
                        <i className={`${link.icon} footer-link-icon`} style={footerStyles.linkIcon}></i>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources Column - Mobile Accordion */}
            <div style={footerStyles.column} className="footer-column">
              <button 
                style={footerStyles.accordionHeader}
                className="footer-accordion-header"
                onClick={() => toggleSection('resources')}
                aria-expanded={openSections.resources}
              >
                <span>Resources</span>
                <i className={`fas fa-chevron-down accordion-icon ${openSections.resources ? 'rotated' : ''}`}></i>
              </button>
              <h4 style={footerStyles.columnTitle} className="footer-column-title">
                Resources
                <div style={footerStyles.columnTitleUnderline}></div>
              </h4>
              <div style={footerStyles.accordionContent} className="footer-links-resources">
                <ul style={footerStyles.linksList} className="footer-links-list">
                  {resources.map((link, index) => (
                    <li key={index} style={footerStyles.linkItem} className="footer-link-item">
                      <a 
                        href={link.href}
                        style={footerStyles.link}
                        className="footer-link"
                        onTouchStart={(e) => {
                          e.currentTarget.style.color = footerStyles.linkHover.color;
                          e.currentTarget.querySelector('.footer-link-icon').style.opacity = '1';
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.color = footerStyles.link.color;
                          e.currentTarget.querySelector('.footer-link-icon').style.opacity = '0.7';
                        }}
                      >
                        <i className={`${link.icon} footer-link-icon`} style={footerStyles.linkIcon}></i>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={footerStyles.socialLinks} className="footer-social-links">
              {['fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-instagram'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={footerStyles.socialLink}
                  className="footer-social-link"
                  onTouchStart={(e) => Object.assign(e.currentTarget.style, footerStyles.socialLinkHover)}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = footerStyles.socialLink.backgroundColor;
                    e.currentTarget.style.color = footerStyles.socialLink.color;
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div style={footerStyles.copyright} className="footer-copyright">
            <p>
              © {currentYear} Syntra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}