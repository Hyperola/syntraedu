import { useState, useEffect, useRef } from 'react';

const OwnershipSection = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredComparison, setHoveredComparison] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const cardsRef = useRef([]);

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
              }, index * 50);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '10px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const comparisonData = [
    {
      type: 'negative',
      title: 'Generic SaaS',
      subtitle: 'Subscription Model',
      icon: '❌',
      features: [
        'Monthly/yearly recurring fees',
        'Generic branding (not your school)',
        'Data on third-party servers',
        'Limited customization options',
        'Vendor lock-in risk',
        'Shared interface with all schools',
      ],
      highlightColor: 'rgba(255, 87, 87, 0.2)',
      iconColor: '#FF5757',
      iconBg: 'rgba(255, 87, 87, 0.1)',
    },
    {
      type: 'positive',
      title: 'Syntra Ownership',
      subtitle: 'Your Proprietary System',
      icon: '✅',
      features: [
        'One-time purchase (no recurring fees)',
        'Your school\'s name and logo',
        'Full data ownership and control',
        'Customized to your workflows',
        'No vendor lock-in (you own it)',
        'Looks like your proprietary system',
      ],
      highlightColor: 'rgba(75, 83, 32, 0.2)',
      iconColor: '#4B5320',
      iconBg: 'rgba(75, 83, 32, 0.1)',
    },
  ];

  const deploymentOptions = [
    {
      icon: '🏢',
      title: 'Local Server',
      description: 'Install on your school\'s infrastructure for maximum control and data security.',
      features: [
        'No internet required for exams',
        'Complete data sovereignty',
        'One-time payment, lifetime use',
        'Works on existing computers',
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud Hosting',
      description: 'We host on secure servers. Access from anywhere. We handle maintenance.',
      features: [
        'Access from any location',
        'Automatic updates & backups',
        'No server maintenance needed',
        'Scalable as your school grows',
      ],
    },
  ];

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      padding: isSmallMobile ? '25px 0 15px 0' : 
               isMobile ? '30px 0 20px 0' : 
               '40px 0 30px 0',
      backgroundColor: '#FAFAFA',
      overflow: 'hidden',
    },
    
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 80%, rgba(75, 83, 32, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(107, 124, 58, 0.03) 0%, transparent 50%)
      `,
      zIndex: 0,
    },
    
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 12px' : 
               isMobile ? '0 16px' : 
               '0 20px',
      position: 'relative',
      zIndex: 1,
    },
    
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '20px' : '25px',
    },
    
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      padding: '5px 16px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '11px' : '12px',
      fontWeight: '600',
      marginBottom: isSmallMobile ? '8px' : '12px',
      letterSpacing: '0.5px',
      border: '1px solid rgba(75, 83, 32, 0.15)',
    },
    
    title: {
      fontSize: isSmallMobile ? '22px' : 
               isMobile ? '24px' : 
               'clamp(24px, 2.8vw, 32px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '8px' : '10px',
      lineHeight: '1.2',
    },
    
    accent: {
      color: '#4B5320',
    },
    
    subtitle: {
      fontSize: isSmallMobile ? '13px' : 
               isMobile ? '14px' : 
               'clamp(13px, 1.4vw, 15px)',
      color: '#5D6D7E',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.5',
    },
    
    mainLayout: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '15px' : '20px',
      marginBottom: '20px',
    },
    
    comparisonSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '15px',
    },
    
    deploymentSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '15px',
    },
    
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 0.2s ease',
    },
    
    comparisonCard: {
      padding: isSmallMobile ? '16px' : '18px',
    },
    
    comparisonHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: isSmallMobile ? '10px' : '12px',
      marginBottom: isSmallMobile ? '12px' : '15px',
    },
    
    comparisonIcon: {
      width: isSmallMobile ? '28px' : '32px',
      height: isSmallMobile ? '28px' : '32px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '14px' : '16px',
      flexShrink: 0,
    },
    
    comparisonTitleWrapper: {
      flex: 1,
    },
    
    comparisonTitle: {
      fontSize: isSmallMobile ? '14px' : '15px',
      fontWeight: '700',
      marginBottom: '2px',
      lineHeight: '1.3',
    },
    
    comparisonSubtitle: {
      fontSize: isSmallMobile ? '10px' : '11px',
      fontWeight: '500',
      opacity: 0.8,
    },
    
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    
    featureItem: {
      padding: isSmallMobile ? '6px 0' : '8px 0',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: isSmallMobile ? '11px' : '12px',
      lineHeight: '1.4',
    },
    
    featureItemLast: {
      borderBottom: 'none',
    },
    
    featureIcon: {
      marginRight: '8px',
      fontSize: isSmallMobile ? '10px' : '12px',
      flexShrink: 0,
      minWidth: '14px',
      marginTop: '1px',
    },
    
    deploymentCard: {
      padding: isSmallMobile ? '16px' : '20px',
      cursor: 'pointer',
    },
    
    deploymentHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: isSmallMobile ? '10px' : '12px',
      marginBottom: isSmallMobile ? '12px' : '15px',
    },
    
    deploymentIcon: {
      width: isSmallMobile ? '36px' : '40px',
      height: isSmallMobile ? '36px' : '40px',
      borderRadius: '10px',
      backgroundColor: 'rgba(75, 83, 32, 0.08)',
      color: '#4B5320',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '16px' : '18px',
      flexShrink: 0,
    },
    
    deploymentTitle: {
      fontSize: isSmallMobile ? '14px' : '15px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '3px',
      lineHeight: '1.3',
    },
    
    deploymentDesc: {
      fontSize: isSmallMobile ? '11px' : '12px',
      color: '#5D6D7E',
      lineHeight: '1.5',
      marginBottom: isSmallMobile ? '10px' : '12px',
    },
    
    deploymentFeatures: {
      marginTop: '8px',
    },
    
    deploymentFeature: {
      padding: isSmallMobile ? '5px 0' : '6px 0',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: isSmallMobile ? '11px' : '12px',
      color: '#5D6D7E',
      lineHeight: '1.4',
    },
    
    deploymentFeatureIcon: {
      color: '#4B5320',
      marginRight: '7px',
      flexShrink: 0,
      marginTop: '1px',
      fontSize: '10px',
    },
    
    highlightBar: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '3px',
      borderRadius: '0 3px 3px 0',
    }
  };

  const handleOptionMouseEnter = (index) => {
    setHoveredOption(index);
  };

  const handleOptionMouseLeave = () => {
    setHoveredOption(null);
  };

  const handleComparisonMouseEnter = (index) => {
    setHoveredComparison(index);
  };

  const handleComparisonMouseLeave = () => {
    setHoveredComparison(null);
  };

  return (
    <section style={styles.section} id="ownership">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            OWNERSHIP MODEL
          </div>
          <h2 style={styles.title}>
            Your Brand, <span style={styles.accent}>Your System</span>
          </h2>
          <p style={styles.subtitle}>
            Full ownership and control under your brand, not a generic SaaS platform.
          </p>
        </div>

        <div style={styles.mainLayout}>
          {/* Left Side - Comparison Cards */}
          <div style={styles.comparisonSide}>
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  ...styles.card,
                  ...styles.comparisonCard,
                  transform: visibleCards.includes(index)
                    ? hoveredComparison === index
                      ? 'translateY(-2px) scale(1.005)'
                      : 'translateY(0)'
                    : 'translateY(8px)',
                  opacity: visibleCards.includes(index) ? 1 : 0.7,
                  transition: `all 0.25s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                  boxShadow: hoveredComparison === index
                    ? `0 6px 16px rgba(0,0,0,0.06), 0 0 0 1px ${item.highlightColor}`
                    : '0 4px 12px rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.02)',
                }}
                onMouseEnter={() => handleComparisonMouseEnter(index)}
                onMouseLeave={handleComparisonMouseLeave}
              >
                <div style={{
                  ...styles.highlightBar,
                  backgroundColor: item.highlightColor,
                }} />
                
                <div style={styles.comparisonHeader}>
                  <div 
                    style={{
                      ...styles.comparisonIcon,
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={styles.comparisonTitleWrapper}>
                    <h3 style={{
                      ...styles.comparisonTitle,
                      color: item.iconColor,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      ...styles.comparisonSubtitle,
                      color: item.type === 'negative' ? '#FF8A8A' : '#6B7C3A',
                    }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                <ul style={styles.featureList}>
                  {item.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      style={{
                        ...styles.featureItem,
                        ...(featureIndex === item.features.length - 1 ? styles.featureItemLast : {}),
                      }}
                    >
                      <span style={{
                        ...styles.featureIcon,
                        color: item.iconColor,
                      }}>
                        {item.type === 'negative' ? '✕' : '✓'}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side - Deployment Options */}
          <div style={styles.deploymentSide}>
            {deploymentOptions.map((option, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index + 2] = el)}
                style={{
                  ...styles.card,
                  ...styles.deploymentCard,
                  transform: visibleCards.includes(index + 2)
                    ? hoveredOption === index
                      ? 'translateY(-2px) scale(1.005)'
                      : 'translateY(0)'
                    : 'translateY(8px)',
                  opacity: visibleCards.includes(index + 2) ? 1 : 0.7,
                  transition: `all 0.25s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                  boxShadow: hoveredOption === index
                    ? '0 6px 16px rgba(75, 83, 32, 0.08), 0 0 0 1px rgba(75, 83, 32, 0.1)'
                    : '0 4px 12px rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.02)',
                }}
                onMouseEnter={() => handleOptionMouseEnter(index)}
                onMouseLeave={handleOptionMouseLeave}
              >
                <div style={{
                  ...styles.highlightBar,
                  backgroundColor: 'rgba(75, 83, 32, 0.15)',
                }} />
                
                <div style={styles.deploymentHeader}>
                  <div style={styles.deploymentIcon}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 style={styles.deploymentTitle}>
                      {option.title}
                    </h3>
                  </div>
                </div>
                
                <p style={styles.deploymentDesc}>
                  {option.description}
                </p>
                
                <div style={styles.deploymentFeatures}>
                  {option.features.map((feature, idx) => (
                    <div key={idx} style={styles.deploymentFeature}>
                      <span style={styles.deploymentFeatureIcon}>•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSection;