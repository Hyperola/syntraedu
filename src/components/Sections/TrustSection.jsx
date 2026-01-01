import { useState, useEffect, useRef } from 'react';

const TrustSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [visibleElements, setVisibleElements] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const cardsRef = useRef([]);
  const metricsRef = useRef([]);
  const testimonialsRef = useRef([]);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isSmallMobile = windowWidth <= 480;

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [
              ...cardsRef.current,
              ...metricsRef.current,
              ...testimonialsRef.current
            ].indexOf(entry.target);
            
            if (index !== -1) {
              setTimeout(() => {
                setVisibleElements((prev) => [...new Set([...prev, index])]);
              }, index * 50);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    [...cardsRef.current, ...metricsRef.current, ...testimonialsRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const trustPoints = [
    {
      icon: '🎯',
      title: 'Built for Nigerian Schools',
      description: 'Designed specifically for WAEC, NECO, and state exam board requirements. Understands Nigerian academic systems.',
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Role-based access control, encrypted data, and secure authentication. Your data remains protected.',
    },
    {
      icon: '🚀',
      title: 'Proven Implementation',
      description: 'Tested and refined with real schools. Smooth adoption and maximum value from day one.',
    },
  ];

  const metrics = [
    { value: '50+', label: 'Trusted Schools' },
    { value: '100k+', label: 'Exams Processed' },
    { value: '99.9%', label: 'System Reliability' },
    { value: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      quote: "Our teachers gained 15+ hours weekly back from manual marking. Results processing went from weeks to hours.",
      author: 'Principal Adebayo',
      role: 'Greenfield College',
      initial: 'A',
    },
    {
      quote: "The branded system improved our school's professional image with parents. Automated reports are transformative.",
      author: 'Mrs. Chukwu',
      role: 'Royal Academy',
      initial: 'C',
    },
  ];

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      padding: isSmallMobile ? '40px 0' : 
               isMobile ? '50px 0' : 
               '60px 0',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
    },
    
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        linear-gradient(135deg, rgba(75, 83, 32, 0.03) 0%, transparent 50%),
        linear-gradient(225deg, rgba(107, 124, 58, 0.03) 0%, transparent 50%)
      `,
      zIndex: 0,
    },
    
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 12px' : 
               isMobile ? '0 16px' : 
               '0 24px',
      position: 'relative',
      zIndex: 1,
    },
    
    header: {
      textAlign: 'center',
      marginBottom: isSmallMobile ? '30px' : 
                   isMobile ? '35px' : 
                   '40px',
    },
    
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      padding: isSmallMobile ? '5px 14px' : '6px 18px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '11px' : '13px',
      fontWeight: '600',
      marginBottom: isSmallMobile ? '12px' : '16px',
      letterSpacing: '0.5px',
      border: '1px solid rgba(75, 83, 32, 0.2)',
    },
    
    title: {
      fontSize: isSmallMobile ? '22px' : 
               isMobile ? '24px' : 
               'clamp(26px, 3vw, 36px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '12px' : '16px',
      lineHeight: '1.2',
      padding: '0 10px',
    },
    
    accent: {
      color: '#4B5320',
    },
    
    subtitle: {
      fontSize: isSmallMobile ? '13px' : 
               isMobile ? '14px' : 
               'clamp(14px, 1.6vw, 16px)',
      color: '#5D6D7E',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      padding: '0 10px',
    },
    
    trustPoints: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                          isMobile ? '1fr' : 
                          isTablet ? 'repeat(2, 1fr)' : 
                          'repeat(3, 1fr)',
      gap: isSmallMobile ? '20px' : 
           isMobile ? '20px' : 
           '25px',
      marginBottom: isSmallMobile ? '30px' : 
                   isMobile ? '35px' : 
                   '45px',
      maxWidth: isSmallMobile ? '400px' : 
                isMobile ? '500px' : 
                '100%',
      marginLeft: isSmallMobile ? 'auto' : '0',
      marginRight: isSmallMobile ? 'auto' : '0',
    },
    
    trustCard: {
      backgroundColor: 'white',
      borderRadius: isSmallMobile ? '12px' : '14px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
      padding: isSmallMobile ? '25px 20px' : 
               isMobile ? '28px 23px' : 
               '30px 25px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    
    cardGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(75, 83, 32, 0.03) 0%, rgba(107, 124, 58, 0.03) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: 0,
    },
    
    cardContent: {
      position: 'relative',
      zIndex: 1,
    },
    
    cardIcon: {
      width: isSmallMobile ? '40px' : 
             isMobile ? '44px' : 
             '48px',
      height: isSmallMobile ? '40px' : 
              isMobile ? '44px' : 
              '48px',
      borderRadius: '10px',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '20px' : 
                isMobile ? '21px' : 
                '22px',
      marginBottom: isSmallMobile ? '16px' : '20px',
      transition: 'all 0.3s ease',
    },
    
    cardTitle: {
      fontSize: isSmallMobile ? '15px' : 
                isMobile ? '16px' : 
                '17px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '8px' : '12px',
      lineHeight: '1.3',
    },
    
    cardDescription: {
      fontSize: isSmallMobile ? '12px' : '13px',
      color: '#5D6D7E',
      lineHeight: '1.6',
    },
    
    metricsContainer: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                          isMobile ? 'repeat(2, 1fr)' : 
                          'repeat(4, 1fr)',
      gap: isSmallMobile ? '15px' : 
           isMobile ? '15px' : 
           '20px',
      marginBottom: isSmallMobile ? '30px' : 
                   isMobile ? '35px' : 
                   '45px',
      maxWidth: isSmallMobile ? '300px' : 
                isMobile ? '500px' : 
                '100%',
      marginLeft: isSmallMobile ? 'auto' : '0',
      marginRight: isSmallMobile ? 'auto' : '0',
    },
    
    metricCard: {
      backgroundColor: 'white',
      borderRadius: isSmallMobile ? '12px' : '14px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
      padding: isSmallMobile ? '20px' : 
               isMobile ? '22px' : 
               '25px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    
    metricGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(75, 83, 32, 0.03) 0%, rgba(107, 124, 58, 0.03) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: 0,
    },
    
    metricContent: {
      position: 'relative',
      zIndex: 1,
    },
    
    metricValue: {
      fontSize: isSmallMobile ? '26px' : 
                isMobile ? '28px' : 
                'clamp(32px, 3vw, 40px)',
      fontWeight: '800',
      color: '#4B5320',
      marginBottom: isSmallMobile ? '6px' : '8px',
      lineHeight: '1.1',
    },
    
    metricLabel: {
      fontSize: isSmallMobile ? '11px' : '13px',
      color: '#5D6D7E',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    
    testimonialsContainer: {
      backgroundColor: 'rgba(75, 83, 32, 0.03)',
      borderRadius: isSmallMobile ? '14px' : '16px',
      border: '1px solid rgba(75, 83, 32, 0.1)',
      padding: isSmallMobile ? '25px 20px' : 
               isMobile ? '30px 25px' : 
               '35px 30px',
      marginTop: isSmallMobile ? '25px' : 
                isMobile ? '30px' : 
                '35px',
    },
    
    testimonialsHeader: {
      textAlign: 'center',
      marginBottom: isSmallMobile ? '25px' : '30px',
    },
    
    testimonialsTitle: {
      fontSize: isSmallMobile ? '18px' : 
                isMobile ? '19px' : 
                '20px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '8px' : '10px',
    },
    
    testimonialsSubtitle: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    
    testimonialsGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                          isMobile ? '1fr' : 
                          'repeat(2, 1fr)',
      gap: isSmallMobile ? '20px' : 
           isMobile ? '20px' : 
           '25px',
    },
    
    testimonialCard: {
      backgroundColor: 'white',
      borderRadius: isSmallMobile ? '10px' : '12px',
      padding: isSmallMobile ? '20px' : 
               isMobile ? '22px' : 
               '25px',
      borderLeft: '3px solid #4B5320',
      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    },
    
    testimonialQuote: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginBottom: isSmallMobile ? '15px' : '18px',
      position: 'relative',
    },
    
    quoteMark: {
      position: 'absolute',
      top: '-8px',
      left: '-8px',
      fontSize: '24px',
      color: '#4B5320',
      opacity: 0.2,
      fontFamily: 'serif',
    },
    
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
    },
    
    authorAvatar: {
      width: isSmallMobile ? '36px' : '40px',
      height: isSmallMobile ? '36px' : '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      marginRight: isSmallMobile ? '10px' : '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4B5320',
      fontWeight: '600',
      fontSize: isSmallMobile ? '14px' : '16px',
    },
    
    authorInfo: {},
    
    authorName: {
      fontSize: isSmallMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '2px',
    },
    
    authorRole: {
      fontSize: isSmallMobile ? '11px' : '12px',
      color: '#5D6D7E',
    },
  };

  const handleCardMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleMetricMouseEnter = (index) => {
    setHoveredMetric(index);
  };

  const handleMetricMouseLeave = () => {
    setHoveredMetric(null);
  };

  return (
    <section style={styles.section} id="trust">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            PROVEN RELIABILITY
          </div>
          <h2 style={styles.title}>
            Trusted by <span style={styles.accent}>Nigerian Schools</span>
          </h2>
          <p style={styles.subtitle}>
            Built on real experience with Nigerian secondary education requirements and standards.
          </p>
        </div>

        <div style={styles.trustPoints}>
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...styles.trustCard,
                transform: visibleElements.includes(index)
                  ? hoveredCard === index
                    ? 'translateY(-6px)'
                    : 'translateY(0)'
                  : 'translateY(15px)',
                opacity: visibleElements.includes(index) ? 1 : 0,
                transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                boxShadow: hoveredCard === index
                  ? '0 12px 25px rgba(75, 83, 32, 0.1), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                  : '0 6px 20px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div 
                style={{
                  ...styles.cardGlow,
                  opacity: hoveredCard === index ? 1 : 0,
                }}
              />
              
              <div style={styles.cardContent}>
                <div 
                  style={{
                    ...styles.cardIcon,
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {point.icon}
                </div>
                
                <h3 style={styles.cardTitle}>
                  {point.title}
                </h3>
                
                <p style={styles.cardDescription}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.metricsContainer}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              ref={(el) => (metricsRef.current[index] = el)}
              style={{
                ...styles.metricCard,
                transform: visibleElements.includes(index + 3)
                  ? hoveredMetric === index
                    ? 'translateY(-4px)'
                    : 'translateY(0)'
                  : 'translateY(10px)',
                opacity: visibleElements.includes(index + 3) ? 1 : 0,
                transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                boxShadow: hoveredMetric === index
                  ? '0 10px 22px rgba(75, 83, 32, 0.08), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                  : '0 6px 20px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleMetricMouseEnter(index)}
              onMouseLeave={handleMetricMouseLeave}
            >
              <div 
                style={{
                  ...styles.metricGlow,
                  opacity: hoveredMetric === index ? 1 : 0,
                }}
              />
              
              <div style={styles.metricContent}>
                <div style={styles.metricValue}>
                  {metric.value}
                </div>
                <div style={styles.metricLabel}>
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={(el) => (testimonialsRef.current[0] = el)}
          style={styles.testimonialsContainer}
        >
          <div style={styles.testimonialsHeader}>
            <h3 style={styles.testimonialsTitle}>
              Trusted by School Leaders
            </h3>
            <p style={styles.testimonialsSubtitle}>
              Real feedback from educational institutions using Syntra
            </p>
          </div>
          
          <div style={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={(el) => (testimonialsRef.current[index + 1] = el)}
                style={{
                  ...styles.testimonialCard,
                  opacity: visibleElements.includes(7 + index) ? 1 : 0,
                  transform: visibleElements.includes(7 + index) ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                }}
              >
                <div style={styles.testimonialQuote}>
                  <span style={styles.quoteMark}>"</span>
                  {testimonial.quote}
                </div>
                
                <div style={styles.testimonialAuthor}>
                  <div style={styles.authorAvatar}>
                    {testimonial.initial}
                  </div>
                  
                  <div style={styles.authorInfo}>
                    <div style={styles.authorName}>
                      {testimonial.author}
                    </div>
                    <div style={styles.authorRole}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .author-avatar {
            width: 32px;
            height: 32px;
            font-size: 13px;
          }
          
          .testimonial-card {
            padding: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;