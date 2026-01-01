import { useState, useEffect, useRef } from 'react';

const problemStyles = {
  section: {
    position: 'relative',
    padding: '70px 0',
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
      linear-gradient(135deg, #4B532015 0%, transparent 50%),
      linear-gradient(45deg, transparent 70%, #6B7C3A10 100%)
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
    marginBottom: '50px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#4B5320',
    color: 'white',
    padding: '6px 18px',
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '16px',
    letterSpacing: '0.5px',
    boxShadow: '0 4px 12px rgba(75, 83, 32, 0.2)',
  },
  title: {
    fontSize: 'clamp(28px, 3.5vw, 40px)',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  accent: {
    color: '#4B5320',
  },
  subtitle: {
    fontSize: 'clamp(15px, 1.8vw, 18px)',
    color: '#5D6D7E',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    position: 'relative',
  },
  problemCard: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
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
  numberContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'rgba(75, 83, 32, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  number: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#4B5320',
  },
  problemTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '12px',
    lineHeight: '1.4',
  },
  problemDescription: {
    fontSize: '14px',
    color: '#5D6D7E',
    lineHeight: '1.6',
  },
  separator: {
    width: '32px',
    height: '2px',
    backgroundColor: 'rgba(75, 83, 32, 0.2)',
    margin: '16px 0',
    borderRadius: '1px',
    transition: 'all 0.3s ease',
  },
  solutionPanel: {
    marginTop: '60px',
    padding: '40px',
    background: 'linear-gradient(135deg, #4B5320 0%, #6B7C3A 100%)',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(75, 83, 32, 0.15)',
  },
  solutionContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  solutionIcon: {
    fontSize: '32px',
    marginBottom: '20px',
    display: 'inline-block',
  },
  solutionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: 'white',
    marginBottom: '16px',
  },
  solutionText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '500px',
    margin: '0 auto 24px',
    lineHeight: '1.6',
  },
  solutionButton: {
    backgroundColor: 'white',
    color: '#4B5320',
    border: 'none',
    padding: '14px 36px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
  floatingElement: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    transform: 'rotate(45deg)',
    zIndex: 1,
  },
};

const ProblemSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  const problems = [
    {
      number: '01',
      title: 'Manual Result Computation',
      description: 'Hours calculating results with high error risk, affecting student grades and school credibility.',
      icon: '⚡',
    },
    {
      number: '02',
      title: 'Exam Scheduling Headaches',
      description: 'Constant clashes and timetable conflicts that disrupt the entire academic calendar.',
      icon: '📅',
    },
    {
      number: '03',
      title: 'Repetitive Data Entry',
      description: 'No permanent database leads to inconsistencies and lost information across terms.',
      icon: '🔄',
    },
    {
      number: '04',
      title: 'Delayed Report Cards',
      description: 'Manual processes delay results distribution, affecting parent-school communication.',
      icon: '⏱️',
    },
    {
      number: '05',
      title: 'Student Exam Anxiety',
      description: 'Paper-based exams and technical issues during external CBTs affect student performance.',
      icon: '😓',
    },
    {
      number: '06',
      title: 'No Centralized System',
      description: 'Multiple disjointed tools with no single source of truth for academic data.',
      icon: '🏫',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 50);
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section style={problemStyles.section} id="problem">
      <div style={problemStyles.backgroundPattern}></div>
      
      <div style={problemStyles.container}>
        <div style={problemStyles.header}>
          <div style={problemStyles.badge}>
            CHALLENGES WE SOLVE
          </div>
          <h2 style={problemStyles.title}>
            Academic Management <span style={problemStyles.accent}>Pain Points</span>
          </h2>
          <p style={problemStyles.subtitle}>
            Common administrative challenges that drain resources and hinder academic excellence
          </p>
        </div>

        <div style={problemStyles.grid}>
          {problems.map((problem, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...problemStyles.problemCard,
                transform: visibleCards.includes(index)
                  ? hoveredCard === index
                    ? 'translateY(-8px)'
                    : 'translateY(0)'
                  : 'translateY(20px)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                boxShadow: hoveredCard === index
                  ? '0 15px 35px rgba(75, 83, 32, 0.12), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                  : '0 8px 25px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                style={{
                  ...problemStyles.cardGlow,
                  opacity: hoveredCard === index ? 1 : 0,
                }}
              />
              
              <div style={problemStyles.cardContent}>
                <div 
                  style={{
                    ...problemStyles.numberContainer,
                    backgroundColor: hoveredCard === index 
                      ? 'rgba(75, 83, 32, 0.12)' 
                      : 'rgba(75, 83, 32, 0.08)',
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <div style={problemStyles.number}>
                    {problem.number}
                  </div>
                </div>
                
                <h3 style={problemStyles.problemTitle}>
                  {problem.title}
                </h3>
                
                <div 
                  style={{
                    ...problemStyles.separator,
                    backgroundColor: hoveredCard === index
                      ? '#4B5320'
                      : 'rgba(75, 83, 32, 0.2)',
                    width: hoveredCard === index ? '48px' : '32px',
                  }}
                />
                
                <p style={problemStyles.problemDescription}>
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Callout - More Professional */}
        <div style={problemStyles.solutionPanel}>
          {/* Floating Elements */}
          <div style={{ ...problemStyles.floatingElement, top: '20px', left: '20px' }}></div>
          <div style={{ ...problemStyles.floatingElement, bottom: '20px', right: '20px' }}></div>
          
          <div style={problemStyles.solutionContent}>
            <div style={{ 
              ...problemStyles.solutionIcon,
              animation: 'pulse 2s infinite',
            }}>
              🎯
            </div>
            
            <h3 style={problemStyles.solutionTitle}>
              Streamlined Solution
            </h3>
            
            <p style={problemStyles.solutionText}>
              Syntra eliminates these inefficiencies with an integrated platform designed for Nigerian educational institutions.
            </p>
            
            <button
              style={problemStyles.solutionButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onClick={() => window.open('#solution', '_self')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              View Solution
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.1); 
          }
        }
        
        @media (max-width: 768px) {
          .problem-section {
            padding: 50px 0;
          }
          
          .solution-panel {
            padding: 32px 24px;
            margin-top: 40px;
          }
          
          .solution-title {
            font-size: 22px;
          }
        }
        
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
          
          .problem-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;