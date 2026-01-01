import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroStyles = {
  section: {
    position: 'relative',
    paddingTop: '80px',
    paddingBottom: '60px',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 15% 85%, rgba(75, 83, 32, 0.03) 0%, transparent 40%),
                      radial-gradient(circle at 85% 15%, rgba(107, 124, 58, 0.03) 0%, transparent 40%)`,
    zIndex: 0,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  content: {
    textAlign: 'left',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(75, 83, 32, 0.08)',
    color: '#4B5320',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
    animation: 'float 6s ease-in-out infinite',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #2C3E50 0%, #4B5320 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
  },
  highlight: {
    color: '#4B5320',
    WebkitTextFillColor: '#4B5320',
  },
  subtitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    color: '#5D6D7E',
    marginBottom: '28px',
    lineHeight: '1.6',
    maxWidth: '100%',
  },
  ctaButtons: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  primaryButton: {
    backgroundColor: '#4B5320',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 6px 20px rgba(75, 83, 32, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#4B5320',
    border: '1.5px solid rgba(75, 83, 32, 0.25)',
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
  },
  playIcon: {
    width: '16px',
    height: '16px',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
    maxWidth: '100%',
  },
  metric: {
    textAlign: 'left',
  },
  metricValue: {
    fontSize: 'clamp(24px, 3vw, 28px)',
    fontWeight: '700',
    color: '#4B5320',
    marginBottom: '6px',
  },
  metricLabel: {
    fontSize: '13px',
    color: '#7B8A8B',
    fontWeight: '500',
    letterSpacing: '0.3px',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'visible',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
    transform: 'perspective(1000px) rotateY(-5deg)',
    transition: 'transform 0.5s ease',
    height: 'clamp(350px, 40vw, 450px)',
    width: '100%',
  },
  floatingCard: {
    position: 'absolute',
    bottom: '-40px',
    right: '-20px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '14px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
    zIndex: 2,
    width: 'clamp(240px, 25vw, 280px)',
    animation: 'float 5s ease-in-out infinite',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#4B5320',
    marginBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  cardText: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.5',
  },
  icon: {
    width: '16px',
    height: '16px',
    color: '#4B5320',
  },
};

const floatingAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @media (max-width: 768px) {
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
  }
`;

// Media query styles as separate objects
const responsiveContainer = {
  base: heroStyles.container,
  tablet: {
    gridTemplateColumns: '1fr',
    gap: '60px',
    textAlign: 'center',
  },
  mobile: {
    padding: '0 16px',
    gap: '40px',
  },
};

const responsiveContent = {
  base: heroStyles.content,
  tablet: {
    textAlign: 'center',
  },
};

const responsiveSubtitle = {
  base: heroStyles.subtitle,
  tablet: {
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mobile: {
    fontSize: '16px',
    maxWidth: '90%',
  },
};

const responsiveCtaButtons = {
  base: heroStyles.ctaButtons,
  mobile: {
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
};

const responsivePrimaryButton = {
  base: heroStyles.primaryButton,
  mobile: {
    width: '100%',
    justifyContent: 'center',
    padding: '16px 24px',
  },
};

const responsiveSecondaryButton = {
  base: heroStyles.secondaryButton,
  mobile: {
    width: '100%',
    justifyContent: 'center',
    padding: '16px 24px',
  },
};

const responsiveMetricsGrid = {
  base: heroStyles.metricsGrid,
  tablet: {
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mobile: {
    gridTemplateColumns: '1fr',
    gap: '20px',
    maxWidth: '200px',
    margin: '40px auto 0',
  },
  mobileSmall: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    maxWidth: '100%',
  },
};

const responsiveImageContainer = {
  base: heroStyles.imageContainer,
  tablet: {
    transform: 'perspective(1000px) rotateY(0deg)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  mobile: {
    height: '300px',
    transform: 'perspective(1000px) rotateY(0deg)',
  },
};

const responsiveFloatingCard = {
  base: heroStyles.floatingCard,
  tablet: {
    right: '10px',
    bottom: '-30px',
  },
  mobile: {
    position: 'relative',
    right: 'auto',
    bottom: 'auto',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '300px',
    animation: 'none',
  },
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsSmallMobile(width <= 480);
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10,
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('resize', checkResponsive);
  }, [isMobile]);

  // Helper function to merge responsive styles
  const getResponsiveStyle = (styleObject) => {
    let style = { ...styleObject.base };
    
    if (isTablet && styleObject.tablet) {
      style = { ...style, ...styleObject.tablet };
    }
    
    if (isMobile && styleObject.mobile) {
      style = { ...style, ...styleObject.mobile };
    }
    
    if (isSmallMobile && styleObject.mobileSmall) {
      style = { ...style, ...styleObject.mobileSmall };
    }
    
    return style;
  };

  const handleMouseEnter = (e) => {
    if (isMobile) return;
    e.target.style.transform = 'translateY(-3px) scale(1.02)';
    e.target.style.boxShadow = '0 12px 30px rgba(75, 83, 32, 0.3)';
  };

  const handleMouseLeave = (e) => {
    if (isMobile) return;
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 6px 20px rgba(75, 83, 32, 0.2)';
  };

  const handleSecondaryHover = (e) => {
    if (isMobile) return;
    e.target.style.backgroundColor = 'rgba(75, 83, 32, 0.05)';
    e.target.style.borderColor = '#4B5320';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleSecondaryLeave = (e) => {
    if (isMobile) return;
    e.target.style.backgroundColor = 'transparent';
    e.target.style.borderColor = 'rgba(75, 83, 32, 0.25)';
    e.target.style.transform = 'translateY(0)';
  };

  const handleImageHover = (e) => {
    if (isMobile) return;
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.03)';
  };

  const handleImageLeave = (e) => {
    if (isMobile) return;
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
  };

  return (
    <>
      <style jsx>{floatingAnimation}</style>
      <section style={heroStyles.section}>
        <div style={heroStyles.backgroundPattern}></div>
        
        <div style={getResponsiveStyle(responsiveContainer)}>
          {/* Left Content */}
          <div style={getResponsiveStyle(responsiveContent)}>
            <div 
              style={heroStyles.badge}
              className={loaded ? 'animate' : ''}
            >
              🎓 School Management Reimagined
            </div>
            
            <h1 style={heroStyles.title}>
              Transform Your School's<br />
              <span style={heroStyles.highlight}>Academic Excellence</span> with AI
            </h1>
            
            <p style={getResponsiveStyle(responsiveSubtitle)}>
              Syntra delivers a complete, school-branded platform that revolutionizes 
              CBT exams, academic analytics, and student performance tracking—designed 
              specifically for the Nigerian education system.
            </p>
            
            <div style={getResponsiveStyle(responsiveCtaButtons)}>
              <button
                style={getResponsiveStyle(responsivePrimaryButton)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.open('#demo', '_self')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
                </svg>
                Request Personalized Demo
              </button>
              
              <button
                style={getResponsiveStyle(responsiveSecondaryButton)}
                onMouseEnter={handleSecondaryHover}
                onMouseLeave={handleSecondaryLeave}
                onClick={() => window.open('#video', '_self')}
              >
                <svg style={heroStyles.playIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Platform Tour
              </button>
            </div>
            
            {/* Trust Metrics */}
            <div style={getResponsiveStyle(responsiveMetricsGrid)}>
              <div style={heroStyles.metric}>
                <div style={heroStyles.metricValue}>100%</div>
                <div style={heroStyles.metricLabel}>School Ownership</div>
              </div>
              <div style={heroStyles.metric}>
                <div style={heroStyles.metricValue}>24/7</div>
                <div style={heroStyles.metricLabel}>Student Access</div>
              </div>
              <div style={heroStyles.metric}>
                <div style={heroStyles.metricValue}>0%</div>
                <div style={heroStyles.metricLabel}>Monthly Fees</div>
              </div>
            </div>
          </div>
          
          {/* Right Image with Floating Card */}
          <div
            style={{
              ...getResponsiveStyle(responsiveImageContainer),
              transform: isMobile 
                ? 'perspective(1000px) rotateY(0deg) scale(1)'
                : `perspective(1000px) rotateY(-5deg) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            }}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/students.jpeg"
                alt="Syntra Platform Dashboard Preview"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Floating Card */}
            {!isMobile && (
              <div style={getResponsiveStyle(responsiveFloatingCard)}>
                <div style={heroStyles.cardTitle}>
                  <svg style={heroStyles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Real-time Analytics
                </div>
                <p style={heroStyles.cardText}>
                  Monitor student performance, track progress, and generate 
                  comprehensive reports with one click.
                </p>
              </div>
            )}
            
            {/* Mobile version of floating card */}
            {isMobile && (
              <div style={{
                ...heroStyles.floatingCard,
                position: 'relative',
                right: 'auto',
                bottom: 'auto',
                marginTop: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                maxWidth: '300px',
                animation: 'none',
              }}>
                <div style={heroStyles.cardTitle}>
                  <svg style={heroStyles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Real-time Analytics
                </div>
                <p style={heroStyles.cardText}>
                  Monitor student performance, track progress, and generate 
                  comprehensive reports with one click.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Floating Elements - Only show on desktop */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              bottom: '80px',
              left: '5%',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(75, 83, 32, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '0.5s',
            }}></div>
            
            <div style={{
              position: 'absolute',
              top: '120px',
              right: '8%',
              width: '50px',
              height: '50px',
              background: 'radial-gradient(circle, rgba(107, 124, 58, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '1s',
            }}></div>
          </>
        )}
      </section>
    </>
  );
};

export default HeroSection;