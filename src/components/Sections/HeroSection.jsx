import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setLoaded(true);
    
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    
    if (windowWidth > 768) {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / windowWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10,
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isSmallMobile = windowWidth <= 480;

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      paddingTop: isMobile ? '60px' : '80px',
      paddingBottom: isMobile ? '40px' : '60px',
      minHeight: isMobile ? 'auto' : 'calc(100vh - 80px)',
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
      padding: isSmallMobile ? '0 12px' : isMobile ? '0 16px' : '0 20px',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '30px' : '40px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      width: '100%',
    },
    
    content: {
      textAlign: isMobile ? 'center' : 'left',
    },
    
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(75, 83, 32, 0.08)',
      color: '#4B5320',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '12px' : '14px',
      fontWeight: '600',
      marginBottom: '20px',
      animation: 'float 6s ease-in-out infinite',
      letterSpacing: '0.5px',
    },
    
    title: {
      fontSize: isSmallMobile ? '28px' : isMobile ? '32px' : 'clamp(32px, 5vw, 52px)',
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
      fontSize: isSmallMobile ? '14px' : isMobile ? '16px' : 'clamp(16px, 2vw, 18px)',
      color: '#5D6D7E',
      marginBottom: '28px',
      lineHeight: '1.6',
      maxWidth: isMobile ? '90%' : '100%',
      marginLeft: isMobile ? 'auto' : '0',
      marginRight: isMobile ? 'auto' : '0',
    },
    
    ctaButtons: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '16px' : '12px',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '40px',
      width: isMobile ? '100%' : 'auto',
    },
    
    buttonBase: {
      border: 'none',
      padding: isMobile ? '16px 24px' : '14px 32px',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      flexShrink: 0,
      width: isMobile ? '100%' : 'auto',
    },
    
    primaryButton: {
      backgroundColor: '#4B5320',
      color: 'white',
      boxShadow: '0 6px 20px rgba(75, 83, 32, 0.2)',
    },
    
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4B5320',
      border: '1.5px solid rgba(75, 83, 32, 0.25)',
    },
    
    playIcon: {
      width: '16px',
      height: '16px',
    },
    
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? 'repeat(3, 1fr)' : isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '15px' : '20px',
      marginTop: '40px',
      maxWidth: isMobile ? '100%' : '80%',
      marginLeft: isMobile ? 'auto' : '0',
      marginRight: isMobile ? 'auto' : '0',
    },
    
    metric: {
      textAlign: isMobile ? 'center' : 'left',
    },
    
    metricValue: {
      fontSize: isSmallMobile ? '22px' : isMobile ? '24px' : 'clamp(24px, 3vw, 28px)',
      fontWeight: '700',
      color: '#4B5320',
      marginBottom: '6px',
    },
    
    metricLabel: {
      fontSize: isSmallMobile ? '11px' : '13px',
      color: '#7B8A8B',
      fontWeight: '500',
      letterSpacing: '0.3px',
    },
    
    imageContainer: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'visible',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      transform: isMobile ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(-5deg)',
      transition: 'transform 0.5s ease',
      height: isSmallMobile ? '250px' : isMobile ? '300px' : 'clamp(350px, 40vw, 450px)',
      width: '100%',
      maxWidth: isMobile ? '500px' : '100%',
      margin: isMobile ? '0 auto' : '0',
    },
    
    floatingCard: {
      position: isMobile ? 'relative' : 'absolute',
      bottom: isMobile ? 'auto' : '-40px',
      right: isMobile ? 'auto' : '-20px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '14px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
      zIndex: 2,
      width: isSmallMobile ? '100%' : isMobile ? '280px' : 'clamp(240px, 25vw, 280px)',
      animation: isMobile ? 'none' : 'float 5s ease-in-out infinite',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      marginTop: isMobile ? '20px' : '0',
      marginLeft: isMobile ? 'auto' : '0',
      marginRight: isMobile ? 'auto' : '0',
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
      <section style={styles.section}>
        <div style={styles.backgroundPattern}></div>
        
        <div style={styles.container}>
          {/* Left Content */}
          <div style={styles.content}>
            <div style={styles.badge} className={loaded ? 'animate' : ''}>
              🎓 School Management Reimagined
            </div>
            
            <h1 style={styles.title}>
              Transform Your School's<br />
              <span style={styles.highlight}>Academic Excellence</span> with AI
            </h1>
            
            <p style={styles.subtitle}>
              Give your school its own custom learning platform. Run computer-based tests, 
              track student grades automatically, and get instant reports—all under your 
              school's name and logo. No monthly fees, ever.
            </p>
            
            <div style={styles.ctaButtons}>
              <button
                style={{ ...styles.buttonBase, ...styles.primaryButton }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.open('https://wa.me/message/ELEFE6DTGLDJG1', '_self')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
                </svg>
                Request Personalized Demo
              </button>
              
              <button
                style={{ ...styles.buttonBase, ...styles.secondaryButton }}
                onMouseEnter={handleSecondaryHover}
                onMouseLeave={handleSecondaryLeave}
                onClick={() => window.open('https://drive.google.com/file/d/1K6bbv4JYqN9Wn3bZqL_e9BqYZZYl4A8Q/view?usp=sharing', '_self')}
              >
                <svg style={styles.playIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Platform Tour
              </button>
            </div>
            
            {/* Trust Metrics */}
            <div style={styles.metricsGrid}>
              <div style={styles.metric}>
                <div style={styles.metricValue}>100%</div>
                <div style={styles.metricLabel}>School Ownership</div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricValue}>24/7</div>
                <div style={styles.metricLabel}>Student Access</div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricValue}>0%</div>
                <div style={styles.metricLabel}>Monthly Fees</div>
              </div>
            </div>
          </div>
          
          {/* Right Image with Floating Card */}
          <div
            style={{
              ...styles.imageContainer,
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
            <div style={styles.floatingCard}>
              <div style={styles.cardTitle}>
                <svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                Real-time Analytics
              </div>
              <p style={styles.cardText}>
                Monitor student performance, track progress, and generate 
                comprehensive reports with one click.
              </p>
            </div>
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