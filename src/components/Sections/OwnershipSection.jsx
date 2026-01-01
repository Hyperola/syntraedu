import { useState, useEffect, useRef } from 'react';

const ownershipStyles = {
  section: {
    position: 'relative',
    padding: '40px 0 30px 0',
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
    padding: '0 20px',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '25px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    color: '#4B5320',
    padding: '5px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '12px',
    letterSpacing: '0.5px',
    border: '1px solid rgba(75, 83, 32, 0.15)',
  },
  title: {
    fontSize: 'clamp(24px, 2.8vw, 32px)',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '10px',
    lineHeight: '1.2',
  },
  accent: {
    color: '#4B5320',
  },
  subtitle: {
    fontSize: 'clamp(13px, 1.4vw, 15px)',
    color: '#5D6D7E',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px',
  },
  comparisonSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  deploymentSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
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
    padding: '18px',
  },
  comparisonHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '15px',
  },
  comparisonIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    flexShrink: 0,
  },
  comparisonTitleWrapper: {
    flex: 1,
  },
  comparisonTitle: {
    fontSize: '15px',
    fontWeight: '700',
    marginBottom: '2px',
    lineHeight: '1.3',
  },
  comparisonSubtitle: {
    fontSize: '11px',
    fontWeight: '500',
    opacity: 0.8,
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    padding: '8px 0',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '12px',
    lineHeight: '1.4',
  },
  featureItemLast: {
    borderBottom: 'none',
  },
  featureIcon: {
    marginRight: '8px',
    fontSize: '12px',
    flexShrink: 0,
    minWidth: '14px',
    marginTop: '1px',
  },
  deploymentCard: {
    padding: '20px',
    cursor: 'pointer',
  },
  deploymentHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '15px',
  },
  deploymentIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(75, 83, 32, 0.08)',
    color: '#4B5320',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    flexShrink: 0,
  },
  deploymentTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '3px',
    lineHeight: '1.3',
  },
  deploymentDesc: {
    fontSize: '12px',
    color: '#5D6D7E',
    lineHeight: '1.5',
    marginBottom: '12px',
  },
  deploymentFeatures: {
    marginTop: '8px',
  },
  deploymentFeature: {
    padding: '6px 0',
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '12px',
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

const OwnershipSection = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredComparison, setHoveredComparison] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

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

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

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
    <section style={ownershipStyles.section} id="ownership">
      <div style={ownershipStyles.backgroundPattern}></div>
      
      <div style={ownershipStyles.container}>
        <div style={ownershipStyles.header}>
          <div style={ownershipStyles.badge}>
            OWNERSHIP MODEL
          </div>
          <h2 style={ownershipStyles.title}>
            Your Brand, <span style={ownershipStyles.accent}>Your System</span>
          </h2>
          <p style={ownershipStyles.subtitle}>
            Full ownership and control under your brand, not a generic SaaS platform.
          </p>
        </div>

        <div style={ownershipStyles.mainLayout}>
          {/* Left Side - Comparison Cards */}
          <div style={ownershipStyles.comparisonSide}>
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  ...ownershipStyles.card,
                  ...ownershipStyles.comparisonCard,
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
                  ...ownershipStyles.highlightBar,
                  backgroundColor: item.highlightColor,
                }} />
                
                <div style={ownershipStyles.comparisonHeader}>
                  <div 
                    style={{
                      ...ownershipStyles.comparisonIcon,
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={ownershipStyles.comparisonTitleWrapper}>
                    <h3 style={{
                      ...ownershipStyles.comparisonTitle,
                      color: item.iconColor,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      ...ownershipStyles.comparisonSubtitle,
                      color: item.type === 'negative' ? '#FF8A8A' : '#6B7C3A',
                    }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                <ul style={ownershipStyles.featureList}>
                  {item.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      style={{
                        ...ownershipStyles.featureItem,
                        ...(featureIndex === item.features.length - 1 ? ownershipStyles.featureItemLast : {}),
                      }}
                    >
                      <span style={{
                        ...ownershipStyles.featureIcon,
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
          <div style={ownershipStyles.deploymentSide}>
            {deploymentOptions.map((option, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index + 2] = el)}
                style={{
                  ...ownershipStyles.card,
                  ...ownershipStyles.deploymentCard,
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
                  ...ownershipStyles.highlightBar,
                  backgroundColor: 'rgba(75, 83, 32, 0.15)',
                }} />
                
                <div style={ownershipStyles.deploymentHeader}>
                  <div style={ownershipStyles.deploymentIcon}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 style={ownershipStyles.deploymentTitle}>
                      {option.title}
                    </h3>
                  </div>
                </div>
                
                <p style={ownershipStyles.deploymentDesc}>
                  {option.description}
                </p>
                
                <div style={ownershipStyles.deploymentFeatures}>
                  {option.features.map((feature, idx) => (
                    <div key={idx} style={ownershipStyles.deploymentFeature}>
                      <span style={ownershipStyles.deploymentFeatureIcon}>•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .main-layout {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .section {
            padding: 30px 0 20px 0;
          }
          
          .comparison-side,
          .deployment-side {
            gap: 12px;
          }
          
          .card {
            padding: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .section {
            padding: 25px 0 15px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .header {
            margin-bottom: 20px;
          }
          
          .title {
            font-size: 22px;
          }
          
          .subtitle {
            font-size: 14px;
          }
          
          .comparison-header,
          .deployment-header {
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default OwnershipSection;