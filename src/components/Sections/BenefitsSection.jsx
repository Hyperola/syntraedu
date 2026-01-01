import { useState, useEffect, useRef } from 'react';

const benefitsStyles = {
  section: {
    position: 'relative',
    padding: '50px 0 40px 0', // Reduced from 70px 0
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
    padding: '0 20px', // Reduced from 24px
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px', // Reduced from 50px
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    color: '#4B5320',
    padding: '6px 16px', // Reduced from 18px
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '14px', // Reduced from 16px
    letterSpacing: '0.5px',
    border: '1px solid rgba(75, 83, 32, 0.2)',
  },
  title: {
    fontSize: 'clamp(26px, 3vw, 36px)', // Reduced sizes
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '14px', // Reduced from 16px
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: 'clamp(14px, 1.6vw, 16px)', // Reduced sizes
    color: '#5D6D7E',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  stakeholderContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '25px', // Reduced from 30px
    marginBottom: '40px', // Reduced from 60px
  },
  stakeholderCard: {
    backgroundColor: 'white',
    borderRadius: '18px', // Reduced from 20px
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.05)', // Reduced from 10px 30px
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
    padding: '25px 25px 20px', // Reduced padding
    background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
    position: 'relative',
  },
  cardIcon: {
    width: '50px', // Reduced from 60px
    height: '50px', // Reduced from 60px
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: '10px', // Reduced from 12px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Reduced from 28px
    marginBottom: '16px', // Reduced from 20px
  },
  cardTitle: {
    fontSize: '18px', // Reduced from 20px
    fontWeight: '700',
    color: 'white',
    marginBottom: '6px', // Reduced from 8px
  },
  cardSubtitle: {
    fontSize: '13px', // Reduced from 14px
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  cardBody: {
    padding: '25px', // Reduced from 30px
  },
  benefitList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  benefitItem: {
    padding: '12px 0', // Reduced from 14px
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '13px', // Reduced from 14px
    color: '#5D6D7E',
  },
  benefitItemLast: {
    borderBottom: 'none',
  },
  benefitIcon: {
    color: '#4B5320',
    marginRight: '12px', // Reduced from 14px
    fontSize: '15px', // Reduced from 16px
    flexShrink: 0,
    marginTop: '2px',
    minWidth: '18px', // Reduced from 20px
  },
  impactMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px', // Reduced from 25px
    marginTop: '40px', // Reduced from 50px
  },
  metricCard: {
    backgroundColor: 'white',
    padding: '25px', // Reduced from 30px
    borderRadius: '14px', // Reduced from 16px
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.04)', // Reduced from 8px 25px
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  metricNumber: {
    fontSize: 'clamp(28px, 2.5vw, 36px)', // Reduced sizes
    fontWeight: '700',
    color: '#4B5320',
    marginBottom: '6px', // Reduced from 8px
    lineHeight: '1.1',
  },
  metricLabel: {
    fontSize: '13px', // Reduced from 14px
    color: '#5D6D7E',
    fontWeight: '500',
    lineHeight: '1.4',
  },
  roiCalculator: {
    marginTop: '40px', // Reduced from 60px
    backgroundColor: 'white',
    borderRadius: '18px', // Reduced from 20px
    padding: '30px', // Reduced from 40px
    boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)', // Reduced from 15px 40px
    border: '1px solid rgba(75, 83, 32, 0.1)',
  },
  roiHeader: {
    textAlign: 'center',
    marginBottom: '25px', // Reduced from 30px
  },
  roiTitle: {
    fontSize: '22px', // Reduced from 24px
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '10px', // Reduced from 12px
  },
  roiSubtitle: {
    fontSize: '14px', // Reduced from 15px
    color: '#5D6D7E',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  roiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Reduced from 200px
    gap: '20px', // Reduced from 25px
  },
  roiMetric: {
    textAlign: 'center',
  },
  roiValue: {
    fontSize: '24px', // Reduced from 28px
    fontWeight: '700',
    color: '#4B5320',
    marginBottom: '6px', // Reduced from 8px
  },
  roiDescription: {
    fontSize: '12px', // Reduced from 13px
    color: '#5D6D7E',
    lineHeight: '1.5',
  },
  // COMPACT CTA SECTION
  ctaSection: {
    marginTop: '40px', // Reduced from 50px
  },
  ctaCard: {
    backgroundColor: 'white',
    borderRadius: '18px', // Reduced from 20px
    padding: '30px', // Reduced from 45px
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(75, 83, 32, 0.15)',
    boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)', // Reduced shadow
  },
  ctaBadge: {
    position: 'absolute',
    top: '-10px', // Reduced from -12px
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#4B5320',
    color: 'white',
    padding: '5px 18px', // Reduced padding
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 3px 10px rgba(75, 83, 32, 0.2)', // Reduced shadow
    zIndex: 3,
  },
  ctaContent: {
    position: 'relative',
    zIndex: 2,
  },
  ctaTitle: {
    fontSize: '20px', // Reduced from 24px
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '12px', // Reduced from 15px
  },
  ctaText: {
    fontSize: '14px', // Reduced from 16px
    color: '#5D6D7E',
    maxWidth: '500px',
    margin: '0 auto 20px', // Reduced from 25px
    lineHeight: '1.6',
  },
  ctaButton: {
    backgroundColor: '#4B5320',
    color: 'white',
    border: 'none',
    padding: '14px 35px', // Reduced padding
    borderRadius: '8px', // Reduced from 10px
    fontSize: '14px', // Reduced from 15px
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px', // Reduced from 12px
    boxShadow: '0 6px 18px rgba(75, 83, 32, 0.15)', // Reduced shadow
    position: 'relative',
    zIndex: 2,
  },
  accentBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px', // Thin accent line
    background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
    zIndex: 1,
  }
};

const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const cardsRef = useRef([]);
  const metricsRef = useRef([]);

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
    { value: '100%', description: 'Staff Adopton Rate' },
    { value: '1 Week', description: 'Implementation Time' },
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

    return () => observer.disconnect();
  }, []);

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
    <section style={benefitsStyles.section} id="benefits">
      <div style={benefitsStyles.backgroundPattern}></div>
      
      <div style={benefitsStyles.container}>
        <div style={benefitsStyles.header}>
          <div style={benefitsStyles.badge}>
            STAKEHOLDER BENEFITS
          </div>
          <h2 style={benefitsStyles.title}>
            Everyone in Your School <span style={{ color: '#4B5320' }}>Wins</span>
          </h2>
          <p style={benefitsStyles.subtitle}>
            Comprehensive benefits that deliver value to every level of your educational institution
          </p>
        </div>

        <div style={benefitsStyles.stakeholderContainer}>
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...benefitsStyles.stakeholderCard,
                transform: visibleCards.includes(index)
                  ? hoveredCard === index
                    ? 'translateY(-6px)' // Reduced from -8px
                    : 'translateY(0)'
                  : 'translateY(15px)', // Reduced from 20px
                opacity: visibleCards.includes(index) ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                boxShadow: hoveredCard === index
                  ? '0 15px 30px rgba(75, 83, 32, 0.12), 0 0 0 1px rgba(75, 83, 32, 0.05)' // Reduced shadow
                  : '0 8px 25px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div 
                style={{
                  ...benefitsStyles.cardGlow,
                  opacity: hoveredCard === index ? 1 : 0,
                }}
              />
              
              <div style={benefitsStyles.cardContent}>
                <div style={benefitsStyles.cardHeader}>
                  <div style={benefitsStyles.cardIcon}>
                    {stakeholder.icon}
                  </div>
                  <h3 style={benefitsStyles.cardTitle}>
                    {stakeholder.title}
                  </h3>
                  <p style={benefitsStyles.cardSubtitle}>
                    {stakeholder.subtitle}
                  </p>
                </div>
                
                <div style={benefitsStyles.cardBody}>
                  <ul style={benefitsStyles.benefitList}>
                    {stakeholder.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        style={{
                          ...benefitsStyles.benefitItem,
                          ...(benefitIndex === stakeholder.benefits.length - 1 ? benefitsStyles.benefitItemLast : {}),
                        }}
                      >
                        <span style={benefitsStyles.benefitIcon}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={benefitsStyles.impactMetrics}>
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              ref={(el) => (metricsRef.current[index] = el)}
              style={{
                ...benefitsStyles.metricCard,
                transform: hoveredMetric === index ? 'translateY(-4px)' : 'translateY(0)', // Reduced from -5px
                opacity: visibleCards.length > 0 ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.05}s`,
                boxShadow: hoveredMetric === index
                  ? '0 12px 25px rgba(75, 83, 32, 0.1), 0 0 0 1px rgba(75, 83, 32, 0.05)' // Reduced shadow
                  : '0 6px 20px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleMetricMouseEnter(index)}
              onMouseLeave={handleMetricMouseLeave}
            >
              <div style={benefitsStyles.metricNumber}>
                {metric.number}
              </div>
              <div style={benefitsStyles.metricLabel}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div style={benefitsStyles.roiCalculator}>
          <div style={benefitsStyles.roiHeader}>
            <h3 style={benefitsStyles.roiTitle}>
              Quantifiable ROI Impact
            </h3>
            <p style={benefitsStyles.roiSubtitle}>
              Measurable benefits that deliver tangible value to your institution
            </p>
          </div>
          
          <div style={benefitsStyles.roiGrid}>
            {roiMetrics.map((metric, index) => (
              <div key={index} style={benefitsStyles.roiMetric}>
                <div style={benefitsStyles.roiValue}>
                  {metric.value}
                </div>
                <div style={benefitsStyles.roiDescription}>
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT CTA SECTION */}
        <div style={benefitsStyles.ctaSection}>
          <div style={benefitsStyles.ctaCard}>
            <div style={benefitsStyles.accentBg}></div>
            <div style={benefitsStyles.ctaBadge}>
              SCHEDULE DEMO
            </div>
            
            <div style={benefitsStyles.ctaContent}>
              <h3 style={benefitsStyles.ctaTitle}>
                Ready to Transform Your Institution?
              </h3>
              
              <p style={benefitsStyles.ctaText}>
                Join forward-thinking schools that have automated academic management with Syntra
              </p>
              
              <button
                style={benefitsStyles.ctaButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3a4318';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(75, 83, 32, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4B5320';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 18px rgba(75, 83, 32, 0.15)';
                }}
                onClick={() => window.open('#demo', '_self')}
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

      <style jsx>{`
        @media (max-width: 1024px) {
          .stakeholder-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .impact-metrics {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 40px 0 30px 0;
          }
          
          .stakeholder-container {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto 30px;
          }
          
          .impact-metrics {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 30px auto 0;
            gap: 15px;
          }
          
          .roi-calculator {
            padding: 25px 20px;
            margin-top: 30px;
          }
          
          .roi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .cta-card {
            padding: 25px 20px;
            margin-top: 30px;
          }
          
          .cta-badge {
            padding: 4px 16px;
            font-size: 11px;
          }
        }
        
        @media (max-width: 480px) {
          .section {
            padding: 35px 0 25px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .header {
            margin-bottom: 30px;
          }
          
          .roi-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
          }
          
          .cta-title {
            font-size: 18px;
          }
          
          .cta-text {
            font-size: 13px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;