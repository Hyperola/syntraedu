import { useState, useEffect, useRef } from 'react';

const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const cardsRef = useRef([]);
  const metricsRef = useRef([]);

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
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    metricsRef.current.forEach((metric) => {
      if (metric) observer.observe(metric);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const stakeholders = [
    {
      title: 'School Leadership',
      subtitle: 'Owners, Principals & Administrators',
      icon: '👔',
      benefits: [
        'Full academic visibility & control',
        'Accurate, auditable records for inspections',
        'Professional branded system',
        'Data-driven strategic decisions',
        'Reduce admin costs by 40-60%',
      ],
    },
    {
      title: 'Teaching Staff',
      subtitle: 'Exam Officers & Subject Teachers',
      icon: '👩‍🏫',
      benefits: [
        'Save 10+ hours weekly on marking',
        'Easy test creation & question bank',
        'Focus on teaching, not paperwork',
        'Track student performance trends',
        'Reusable content across sessions',
      ],
    },
    {
      title: 'Students & Parents',
      subtitle: 'Primary Beneficiaries',
      icon: '🎓',
      benefits: [
        'Standardized CBT exam experience',
        'Instant results & transparent grading',
        'Clear academic progress tracking',
        'Professional digital reports',
        'WAEC/NECO exam preparation',
      ],
    },
  ];

  const impactMetrics = [
    { number: '70%', label: 'Time Saved on Results Processing' },
    { number: '0', label: 'Calculation Errors' },
    { number: '100%', label: 'Data Ownership & Control' },
    { number: '1', label: 'Unified System Platform' },
  ];

  const roiMetrics = [
    { value: '15+', description: 'Hours Saved Weekly' },
    { value: '40-60%', description: 'Reduced Admin Costs' },
    { value: '100%', description: 'Staff Adoption Rate' },
    { value: '1 Week', description: 'Implementation Time' },
  ];

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      padding: isSmallMobile ? '35px 0 25px 0' : 
               isMobile ? '40px 0 30px 0' : 
               '50px 0 40px 0',
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
        linear-gradient(135deg, rgba(75, 83, 32, 0.02) 0%, transparent 40%),
        linear-gradient(225deg, rgba(107, 124, 58, 0.02) 0%, transparent 40%)
      `,
      zIndex: 0,
    },
    
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 12px' : 
               isMobile ? '0 16px' : 
               '0 20px',
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
      padding: isSmallMobile ? '5px 14px' : '6px 16px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '11px' : '13px',
      fontWeight: '600',
      marginBottom: isSmallMobile ? '10px' : '14px',
      letterSpacing: '0.5px',
      border: '1px solid rgba(75, 83, 32, 0.2)',
    },
    
    title: {
      fontSize: isSmallMobile ? '22px' : 
               isMobile ? '24px' : 
               'clamp(26px, 3vw, 36px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '10px' : '14px',
      lineHeight: '1.2',
      padding: '0 10px',
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
    
    stakeholderContainer: {
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
                   '40px',
      maxWidth: isSmallMobile ? '400px' : 
                isMobile ? '500px' : 
                '100%',
      marginLeft: isSmallMobile ? 'auto' : '0',
      marginRight: isSmallMobile ? 'auto' : '0',
    },
    
    stakeholderCard: {
      backgroundColor: 'white',
      borderRadius: isSmallMobile ? '16px' : '18px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
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
    
    cardHeader: {
      padding: isSmallMobile ? '20px 20px 16px' : 
               isMobile ? '22px 22px 18px' : 
               '25px 25px 20px',
      background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
      position: 'relative',
    },
    
    cardIcon: {
      width: isSmallMobile ? '45px' : 
             isMobile ? '48px' : 
             '50px',
      height: isSmallMobile ? '45px' : 
              isMobile ? '48px' : 
              '50px',
      backgroundColor: 'rgba(255,255,255,0.15)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '22px' : 
                isMobile ? '23px' : 
                '24px',
      marginBottom: isSmallMobile ? '14px' : '16px',
    },
    
    cardTitle: {
      fontSize: isSmallMobile ? '16px' : 
                isMobile ? '17px' : 
                '18px',
      fontWeight: '700',
      color: 'white',
      marginBottom: '4px',
    },
    
    cardSubtitle: {
      fontSize: isSmallMobile ? '12px' : 
                isMobile ? '13px' : 
                '13px',
      color: 'rgba(255,255,255,0.85)',
      fontWeight: '500',
    },
    
    cardBody: {
      padding: isSmallMobile ? '20px' : 
               isMobile ? '22px' : 
               '25px',
    },
    
    benefitList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    
    benefitItem: {
      padding: isSmallMobile ? '10px 0' : '12px 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: isSmallMobile ? '12px' : '13px',
      color: '#5D6D7E',
    },
    
    benefitItemLast: {
      borderBottom: 'none',
    },
    
    benefitIcon: {
      color: '#4B5320',
      marginRight: isSmallMobile ? '10px' : '12px',
      fontSize: isSmallMobile ? '13px' : '15px',
      flexShrink: 0,
      marginTop: '1px',
      minWidth: '18px',
    },
    
    impactMetrics: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                          isMobile ? 'repeat(2, 1fr)' : 
                          'repeat(4, 1fr)',
      gap: isSmallMobile ? '15px' : 
           isMobile ? '15px' : 
           '20px',
      marginTop: isSmallMobile ? '25px' : 
                isMobile ? '30px' : 
                '40px',
      maxWidth: isSmallMobile ? '300px' : 
                isMobile ? '500px' : 
                '100%',
      marginLeft: isSmallMobile ? 'auto' : '0',
      marginRight: isSmallMobile ? 'auto' : '0',
    },
    
    metricCard: {
      backgroundColor: 'white',
      padding: isSmallMobile ? '20px' : 
               isMobile ? '22px' : 
               '25px',
      borderRadius: '14px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
    },
    
    metricNumber: {
      fontSize: isSmallMobile ? '24px' : 
                isMobile ? '26px' : 
                'clamp(28px, 2.5vw, 36px)',
      fontWeight: '700',
      color: '#4B5320',
      marginBottom: '6px',
      lineHeight: '1.1',
    },
    
    metricLabel: {
      fontSize: isSmallMobile ? '12px' : '13px',
      color: '#5D6D7E',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    
    roiCalculator: {
      marginTop: isSmallMobile ? '30px' : 
                isMobile ? '35px' : 
                '40px',
      backgroundColor: 'white',
      borderRadius: '18px',
      padding: isSmallMobile ? '25px 20px' : 
               isMobile ? '30px 25px' : 
               '30px',
      boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
      border: '1px solid rgba(75, 83, 32, 0.1)',
    },
    
    roiHeader: {
      textAlign: 'center',
      marginBottom: isSmallMobile ? '20px' : '25px',
    },
    
    roiTitle: {
      fontSize: isSmallMobile ? '20px' : 
                isMobile ? '21px' : 
                '22px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '8px',
    },
    
    roiSubtitle: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    
    roiGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                          isMobile ? 'repeat(2, 1fr)' : 
                          'repeat(auto-fit, minmax(180px, 1fr))',
      gap: isSmallMobile ? '15px' : 
           isMobile ? '15px' : 
           '20px',
    },
    
    roiMetric: {
      textAlign: 'center',
    },
    
    roiValue: {
      fontSize: isSmallMobile ? '22px' : 
                isMobile ? '23px' : 
                '24px',
      fontWeight: '700',
      color: '#4B5320',
      marginBottom: '6px',
    },
    
    roiDescription: {
      fontSize: isSmallMobile ? '11px' : '12px',
      color: '#5D6D7E',
      lineHeight: '1.5',
    },
    
    ctaSection: {
      marginTop: isSmallMobile ? '30px' : 
                isMobile ? '35px' : 
                '40px',
    },
    
    ctaCard: {
      backgroundColor: 'white',
      borderRadius: '18px',
      padding: isSmallMobile ? '25px 20px' : 
               isMobile ? '30px 25px' : 
               '30px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(75, 83, 32, 0.15)',
      boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
    },
    
    ctaBadge: {
      position: 'absolute',
      top: isSmallMobile ? '-8px' : '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#4B5320',
      color: 'white',
      padding: isSmallMobile ? '4px 16px' : '5px 18px',
      borderRadius: '20px',
      fontSize: isSmallMobile ? '11px' : '12px',
      fontWeight: '600',
      boxShadow: '0 3px 10px rgba(75, 83, 32, 0.2)',
      zIndex: 3,
    },
    
    ctaContent: {
      position: 'relative',
      zIndex: 2,
    },
    
    ctaTitle: {
      fontSize: isSmallMobile ? '18px' : 
                isMobile ? '19px' : 
                '20px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '10px' : '12px',
    },
    
    ctaText: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      maxWidth: '500px',
      margin: '0 auto 20px',
      lineHeight: '1.6',
    },
    
    ctaButton: {
      backgroundColor: '#4B5320',
      color: 'white',
      border: 'none',
      padding: isSmallMobile ? '12px 25px' : '14px 35px',
      borderRadius: '8px',
      fontSize: isSmallMobile ? '13px' : '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      boxShadow: '0 6px 18px rgba(75, 83, 32, 0.15)',
      position: 'relative',
      zIndex: 2,
      width: isSmallMobile ? '100%' : 'auto',
    },
    
    accentBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '6px',
      background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
      zIndex: 1,
    }
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
    <section style={styles.section} id="benefits">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            STAKEHOLDER BENEFITS
          </div>
          <h2 style={styles.title}>
            Everyone in Your School <span style={{ color: '#4B5320' }}>Wins</span>
          </h2>
          <p style={styles.subtitle}>
            Comprehensive benefits that deliver value to every level of your educational institution
          </p>
        </div>

        <div style={styles.stakeholderContainer}>
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...styles.stakeholderCard,
                transform: visibleCards.includes(index)
                  ? hoveredCard === index
                    ? 'translateY(-6px)'
                    : 'translateY(0)'
                  : 'translateY(15px)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                boxShadow: hoveredCard === index
                  ? '0 15px 30px rgba(75, 83, 32, 0.12), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                  : '0 8px 25px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)',
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
                <div style={styles.cardHeader}>
                  <div style={styles.cardIcon}>
                    {stakeholder.icon}
                  </div>
                  <h3 style={styles.cardTitle}>
                    {stakeholder.title}
                  </h3>
                  <p style={styles.cardSubtitle}>
                    {stakeholder.subtitle}
                  </p>
                </div>
                
                <div style={styles.cardBody}>
                  <ul style={styles.benefitList}>
                    {stakeholder.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        style={{
                          ...styles.benefitItem,
                          ...(benefitIndex === stakeholder.benefits.length - 1 ? styles.benefitItemLast : {}),
                        }}
                      >
                        <span style={styles.benefitIcon}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.impactMetrics}>
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              ref={(el) => (metricsRef.current[index] = el)}
              style={{
                ...styles.metricCard,
                transform: hoveredMetric === index ? 'translateY(-4px)' : 'translateY(0)',
                opacity: visibleCards.length > 0 ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.05}s`,
                boxShadow: hoveredMetric === index
                  ? '0 12px 25px rgba(75, 83, 32, 0.1), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                  : '0 6px 20px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleMetricMouseEnter(index)}
              onMouseLeave={handleMetricMouseLeave}
            >
              <div style={styles.metricNumber}>
                {metric.number}
              </div>
              <div style={styles.metricLabel}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.roiCalculator}>
          <div style={styles.roiHeader}>
            <h3 style={styles.roiTitle}>
              Quantifiable ROI Impact
            </h3>
            <p style={styles.roiSubtitle}>
              Measurable benefits that deliver tangible value to your institution
            </p>
          </div>
          
          <div style={styles.roiGrid}>
            {roiMetrics.map((metric, index) => (
              <div key={index} style={styles.roiMetric}>
                <div style={styles.roiValue}>
                  {metric.value}
                </div>
                <div style={styles.roiDescription}>
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT CTA SECTION */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaCard}>
            <div style={styles.accentBg}></div>
            <div style={styles.ctaBadge}>
              SCHEDULE DEMO
            </div>
            
            <div style={styles.ctaContent}>
              <h3 style={styles.ctaTitle}>
                Ready to Transform Your Institution?
              </h3>
              
              <p style={styles.ctaText}>
                Join forward-thinking schools that have automated academic management with Syntra
              </p>
              
              <button
                style={styles.ctaButton}
                onMouseEnter={(e) => {
                  if (isMobile) return;
                  e.target.style.backgroundColor = '#3a4318';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(75, 83, 32, 0.2)';
                }}
                onMouseLeave={(e) => {
                  if (isMobile) return;
                  e.target.style.backgroundColor = '#4B5320';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 18px rgba(75, 83, 32, 0.15)';
                }}
                onClick={() => window.open('https://wa.me/message/ELEFE6DTGLDJG1', '_self')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                </svg>
                Schedule Personalized Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;