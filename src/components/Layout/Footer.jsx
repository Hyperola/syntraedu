const footerStyles = {
  footer: {
    backgroundColor: '#4B5320', // Army Green
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '60px 0 30px',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      padding: '0 16px',
    },
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '50px',
    marginBottom: '50px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
      marginBottom: '40px',
    },
  },
  brandColumn: {
    gridColumn: 'span 2',
    '@media (max-width: 1024px)': {
      gridColumn: 'span 2',
    },
    '@media (max-width: 768px)': {
      gridColumn: 'span 1',
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    '@media (max-width: 768px)': {
      marginBottom: '20px',
    },
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
    '@media (max-width: 768px)': {
      width: '45px',
      height: '45px',
      fontSize: '20px',
    },
  },
  brandName: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#FFFFFF',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  tagline: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '400px',
    '@media (max-width: 768px)': {
      fontSize: '15px',
      marginBottom: '25px',
    },
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
    '@media (max-width: 768px)': {
      fontSize: '13px',
      marginBottom: '12px',
    },
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
    '@media (max-width: 768px)': {
      width: '28px',
      height: '28px',
      fontSize: '12px',
    },
  },
  column: {
    '@media (max-width: 768px)': {
      marginTop: '10px',
    },
  },
  columnTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: '25px',
    position: 'relative',
    '@media (max-width: 768px)': {
      fontSize: '16px',
      marginBottom: '20px',
    },
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
    '@media (max-width: 768px)': {
      marginBottom: '10px',
    },
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      fontSize: '13px',
    },
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
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      gap: '12px',
      marginTop: '25px',
    },
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
    '@media (max-width: 768px)': {
      width: '36px',
      height: '36px',
      fontSize: '14px',
    },
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
    '@media (max-width: 768px)': {
      paddingTop: '25px',
      fontSize: '13px',
    },
  },
};

export default function Footer() {
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

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.mainContent}>
          {/* Brand Column */}
          <div style={footerStyles.brandColumn}>
            <div style={footerStyles.brand}>
              <div style={footerStyles.logo}>S</div>
              <div style={footerStyles.brandName}>Syntra</div>
            </div>
            <p style={footerStyles.tagline}>
              School-branded CBT & Academic Management System built specifically for Nigerian secondary schools.
            </p>
            <ul style={footerStyles.contactInfo}>
              <li style={footerStyles.contactItem}>
                <div style={footerStyles.contactIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                helloatsyntra@gmail.com
              </li>
              <li style={footerStyles.contactItem}>
                <div style={footerStyles.contactIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                07018661724
              </li>
              <li style={footerStyles.contactItem}>
                <div style={footerStyles.contactIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                Lagos, Nigeria
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div style={footerStyles.column}>
            <h4 style={footerStyles.columnTitle}>
              Quick Links
              <div style={footerStyles.columnTitleUnderline}></div>
            </h4>
            <ul style={footerStyles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index} style={footerStyles.linkItem}>
                  <a 
                    href={link.href}
                    style={footerStyles.link}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, footerStyles.linkHover);
                      e.currentTarget.querySelector('.link-icon').style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = footerStyles.link.color;
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.querySelector('.link-icon').style.opacity = '0';
                    }}
                  >
                    <i className={`${link.icon} link-icon`} style={footerStyles.linkIcon}></i>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div style={footerStyles.column}>
            <h4 style={footerStyles.columnTitle}>
              Resources
              <div style={footerStyles.columnTitleUnderline}></div>
            </h4>
            <ul style={footerStyles.linksList}>
              {resources.map((link, index) => (
                <li key={index} style={footerStyles.linkItem}>
                  <a 
                    href={link.href}
                    style={footerStyles.link}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, footerStyles.linkHover);
                      e.currentTarget.querySelector('.link-icon').style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = footerStyles.link.color;
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.querySelector('.link-icon').style.opacity = '0';
                    }}
                  >
                    <i className={`${link.icon} link-icon`} style={footerStyles.linkIcon}></i>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={footerStyles.socialLinks}>
            {['fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-instagram'].map((icon, index) => (
              <a
                key={index}
                href="#"
                style={footerStyles.socialLink}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, footerStyles.socialLinkHover)}
                onMouseLeave={(e) => {
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
        <div style={footerStyles.copyright}>
          <p>
            © {currentYear} Syntra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}