import { useState, useEffect, useRef } from 'react';

const trustStyles = {
  section: {
    position: 'relative',
    padding: '60px 0',
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
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    color: '#4B5320',
    padding: '6px 18px',
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '16px',
    letterSpacing: '0.5px',
    border: '1px solid rgba(75, 83, 32, 0.2)',
  },
  title: {
    fontSize: 'clamp(26px, 3vw, 36px)',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  accent: {
    color: '#4B5320',
  },
  subtitle: {
    fontSize: 'clamp(14px, 1.6vw, 16px)',
    color: '#5D6D7E',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  trustPoints: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '25px',
    marginBottom: '45px',
  },
  trustCard: {
    backgroundColor: 'white',
    borderRadius: '14px',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
    padding: '30px 25px',
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
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    color: '#4B5320',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '12px',
    lineHeight: '1.3',
  },
  cardDescription: {
    fontSize: '13px',
    color: '#5D6D7E',
    lineHeight: '1.6',
  },
  metricsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '45px',
  },
  metricCard: {
    backgroundColor: 'white',
    borderRadius: '14px',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
    padding: '25px',
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
    fontSize: 'clamp(32px, 3vw, 40px)',
    fontWeight: '800',
    color: '#4B5320',
    marginBottom: '8px',
    lineHeight: '1.1',
  },
  metricLabel: {
    fontSize: '13px',
    color: '#5D6D7E',
    fontWeight: '500',
    lineHeight: '1.4',
  },
  testimonialsContainer: {
    backgroundColor: 'rgba(75, 83, 32, 0.03)',
    borderRadius: '16px',
    border: '1px solid rgba(75, 83, 32, 0.1)',
    padding: '35px 30px',
    marginTop: '35px',
  },
  testimonialsHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  testimonialsTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '10px',
  },
  testimonialsSubtitle: {
    fontSize: '14px',
    color: '#5D6D7E',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
  },
  testimonialCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '25px',
    borderLeft: '3px solid #4B5320',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  testimonialQuote: {
    fontSize: '14px',
    color: '#5D6D7E',
    lineHeight: '1.6',
    fontStyle: 'italic',
    marginBottom: '18px',
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
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4B5320',
    fontWeight: '600',
    fontSize: '16px',
  },
  authorInfo: {},
  authorName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '3px',
  },
  authorRole: {
    fontSize: '12px',
    color: '#5D6D7E',
  },
};

const TrustSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [visibleElements, setVisibleElements] = useState([]);
  const cardsRef = useRef([]);
  const metricsRef = useRef([]);
  const testimonialsRef = useRef([]);

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

  useEffect(() => {
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
    <section style={trustStyles.section} id="trust">
      <div style={trustStyles.backgroundPattern}></div>
      
      <div style={trustStyles.container}>
        <div style={trustStyles.header}>
          <div style={trustStyles.badge}>
            PROVEN RELIABILITY
          </div>
          <h2 style={trustStyles.title}>
            Trusted by <span style={trustStyles.accent}>Nigerian Schools</span>
          </h2>
          <p style={trustStyles.subtitle}>
            Built on real experience with Nigerian secondary education requirements and standards.
          </p>
        </div>

        <div style={trustStyles.trustPoints}>
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...trustStyles.trustCard,
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
                  ...trustStyles.cardGlow,
                  opacity: hoveredCard === index ? 1 : 0,
                }}
              />
              
              <div style={trustStyles.cardContent}>
                <div 
                  style={{
                    ...trustStyles.cardIcon,
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {point.icon}
                </div>
                
                <h3 style={trustStyles.cardTitle}>
                  {point.title}
                </h3>
                
                <p style={trustStyles.cardDescription}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={trustStyles.metricsContainer}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              ref={(el) => (metricsRef.current[index] = el)}
              style={{
                ...trustStyles.metricCard,
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
                  ...trustStyles.metricGlow,
                  opacity: hoveredMetric === index ? 1 : 0,
                }}
              />
              
              <div style={trustStyles.metricContent}>
                <div style={trustStyles.metricValue}>
                  {metric.value}
                </div>
                <div style={trustStyles.metricLabel}>
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={(el) => (testimonialsRef.current[0] = el)}
          style={trustStyles.testimonialsContainer}
        >
          <div style={trustStyles.testimonialsHeader}>
            <h3 style={trustStyles.testimonialsTitle}>
              Trusted by School Leaders
            </h3>
            <p style={trustStyles.testimonialsSubtitle}>
              Real feedback from educational institutions using Syntra
            </p>
          </div>
          
          <div style={trustStyles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={(el) => (testimonialsRef.current[index + 1] = el)}
                style={{
                  ...trustStyles.testimonialCard,
                  opacity: visibleElements.includes(7 + index) ? 1 : 0,
                  transform: visibleElements.includes(7 + index) ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                }}
              >
                <div style={trustStyles.testimonialQuote}>
                  <span style={trustStyles.quoteMark}>"</span>
                  {testimonial.quote}
                </div>
                
                <div style={trustStyles.testimonialAuthor}>
                  <div style={trustStyles.authorAvatar}>
                    {testimonial.initial}
                  </div>
                  
                  <div style={trustStyles.authorInfo}>
                    <div style={trustStyles.authorName}>
                      {testimonial.author}
                    </div>
                    <div style={trustStyles.authorRole}>
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
        @media (max-width: 1024px) {
          .trust-points {
            grid-template-columns: repeat(2, 1fr);
            max-width: 500px;
            margin: 0 auto 40px;
          }
          
          .metrics-container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 400px;
            margin: 0 auto 40px;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 50px 0;
          }
          
          .trust-points {
            grid-template-columns: 1fr;
            max-width: 350px;
          }
          
          .metrics-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .testimonials-container {
            padding: 30px 25px;
          }
        }
        
        @media (max-width: 480px) {
          .section {
            padding: 40px 0;
          }
          
          .metrics-container {
            grid-template-columns: 1fr;
            max-width: 250px;
          }
          
          .testimonial-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;