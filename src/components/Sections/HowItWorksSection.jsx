import { useState, useEffect, useRef } from 'react';

const howItWorksStyles = {
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
      linear-gradient(135deg, rgba(75, 83, 32, 0.02) 0%, transparent 50%),
      linear-gradient(45deg, transparent 70%, rgba(107, 124, 58, 0.02) 100%)
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
  timelineContainer: {
    position: 'relative',
    margin: '50px auto 60px',
    maxWidth: '900px',
  },
  timelineLine: {
    position: 'absolute',
    top: '50%',
    left: '50px',
    right: '50px',
    height: '2px',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    position: 'relative',
    zIndex: 2,
  },
  stepItem: {
    textAlign: 'center',
    padding: '0 8px',
  },
  stepCard: {
    backgroundColor: 'white',
    padding: '30px 20px',
    borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  stepGlow: {
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
  stepContent: {
    position: 'relative',
    zIndex: 1,
  },
  stepNumber: {
    width: '36px',
    height: '36px',
    backgroundColor: '#4B5320',
    color: 'white',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    fontWeight: '700',
    margin: '0 auto 20px',
    transition: 'all 0.3s ease',
  },
  stepIcon: {
    fontSize: '32px',
    marginBottom: '15px',
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  stepTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '10px',
    lineHeight: '1.4',
  },
  stepDescription: {
    fontSize: '13px',
    color: '#5D6D7E',
    lineHeight: '1.5',
  },
  processFlow: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px',
    marginTop: '50px',
    boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
    border: '1px solid rgba(75, 83, 32, 0.1)',
  },
  flowHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  flowTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '12px',
  },
  flowSubtitle: {
    fontSize: '15px',
    color: '#5D6D7E',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  flowSteps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  flowStep: {
    textAlign: 'center',
    flex: 1,
    minWidth: '150px',
    position: 'relative',
  },
  flowNumber: {
    width: '40px',
    height: '40px',
    backgroundColor: '#4B5320',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    margin: '0 auto 15px',
    position: 'relative',
    zIndex: 2,
  },
  flowText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2C3E50',
    lineHeight: '1.4',
  },
  flowArrow: {
    position: 'absolute',
    top: '20px',
    right: '-20px',
    color: '#4B5320',
    fontSize: '20px',
    opacity: 0.3,
  },
  supportCard: {
    marginTop: '50px',
    backgroundColor: 'rgba(75, 83, 32, 0.05)',
    borderRadius: '16px',
    padding: '35px',
    border: '1px solid rgba(75, 83, 32, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  supportIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '40px',
    opacity: 0.1,
  },
  supportTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '12px',
  },
  supportText: {
    fontSize: '15px',
    color: '#5D6D7E',
    lineHeight: '1.6',
    maxWidth: '700px',
  },
  timelineConnectors: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    left: '20%',
    right: '20%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  connector: {
    flex: 1,
    height: '2px',
    backgroundColor: 'rgba(75, 83, 32, 0.1)',
    margin: '0 10px',
  },
};

const HowItWorksSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepsRef = useRef([]);

  const steps = [
    {
      number: '1',
      icon: '⚙️',
      title: 'One-Time Setup',
      description: 'Configure your school structure—classes, subjects, staff roles. Set it once, use it forever.',
    },
    {
      number: '2',
      icon: '📚',
      title: 'Build Question Bank',
      description: 'Teachers create and organize questions by topic, difficulty, and subject. Reusable across sessions.',
    },
    {
      number: '3',
      icon: '📅',
      title: 'Schedule Exams',
      description: 'Drag-and-drop timetable creation. Automatic clash detection. Share schedules instantly.',
    },
    {
      number: '4',
      icon: '💻',
      title: 'Conduct CBT Exams',
      description: 'Students take exams on school computers. Real-time monitoring. Auto-submission when time ends.',
    },
    {
      number: '5',
      icon: '📈',
      title: 'Instant Results',
      description: 'Automatic grading. Results computed instantly. Professional report cards generated automatically.',
    },
  ];

  const flowSteps = [
    { number: '1', text: 'Setup Structure' },
    { number: '2', text: 'Create Content' },
    { number: '3', text: 'Schedule Exams' },
    { number: '4', text: 'Conduct CBT' },
    { number: '5', text: 'Get Reports' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.indexOf(entry.target);
            setTimeout(() => {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepMouseEnter = (index) => {
    setHoveredStep(index);
  };

  const handleStepMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <section style={howItWorksStyles.section} id="how-it-works">
      <div style={howItWorksStyles.backgroundPattern}></div>
      
      <div style={howItWorksStyles.container}>
        <div style={howItWorksStyles.header}>
          <div style={howItWorksStyles.badge}>
            PROCESS FLOW
          </div>
          <h2 style={howItWorksStyles.title}>
            From Setup to Results in <span style={howItWorksStyles.accent}>Days</span>
          </h2>
          <p style={howItWorksStyles.subtitle}>
            Your school can be running CBT exams within a week of starting with Syntra.
          </p>
        </div>

        <div style={howItWorksStyles.timelineContainer}>
          <div style={howItWorksStyles.timelineLine}></div>
          
          <div style={howItWorksStyles.stepsGrid}>
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                style={howItWorksStyles.stepItem}
              >
                <div 
                  style={{
                    ...howItWorksStyles.stepCard,
                    transform: visibleSteps.includes(index)
                      ? hoveredStep === index
                        ? 'translateY(-8px)'
                        : 'translateY(0)'
                      : 'translateY(20px)',
                    opacity: visibleSteps.includes(index) ? 1 : 0,
                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                    boxShadow: hoveredStep === index
                      ? '0 15px 35px rgba(75, 83, 32, 0.12), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                      : '0 8px 25px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
                  }}
                  onMouseEnter={() => handleStepMouseEnter(index)}
                  onMouseLeave={handleStepMouseLeave}
                >
                  <div 
                    style={{
                      ...howItWorksStyles.stepGlow,
                      opacity: hoveredStep === index ? 1 : 0,
                    }}
                  />
                  
                  <div style={howItWorksStyles.stepContent}>
                    <div 
                      style={{
                        ...howItWorksStyles.stepNumber,
                        transform: hoveredStep === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {step.number}
                    </div>
                    
                    <div 
                      style={{
                        ...howItWorksStyles.stepIcon,
                        transform: hoveredStep === index ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                      }}
                    >
                      {step.icon}
                    </div>
                    
                    <h3 style={howItWorksStyles.stepTitle}>
                      {step.title}
                    </h3>
                    
                    <p style={howItWorksStyles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={howItWorksStyles.processFlow}>
          <div style={howItWorksStyles.flowHeader}>
            <h3 style={howItWorksStyles.flowTitle}>
              Complete Academic Management Flow
            </h3>
            <p style={howItWorksStyles.flowSubtitle}>
              Seamless workflow from initial setup to final results and reporting
            </p>
          </div>
          
          <div style={howItWorksStyles.flowSteps}>
            {flowSteps.map((step, index) => (
              <>
                <div key={index} style={howItWorksStyles.flowStep}>
                  <div style={howItWorksStyles.flowNumber}>
                    {step.number}
                  </div>
                  <div style={howItWorksStyles.flowText}>
                    {step.text}
                  </div>
                  {index < flowSteps.length - 1 && (
                    <div style={howItWorksStyles.flowArrow}>
                      →
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>

        <div style={howItWorksStyles.supportCard}>
          <div style={howItWorksStyles.supportIcon}>
            🛠️
          </div>
          <h4 style={howItWorksStyles.supportTitle}>
            Complete Implementation Support
          </h4>
          <p style={howItWorksStyles.supportText}>
            We provide setup assistance, comprehensive staff training, and ongoing technical support 
            to ensure your school achieves maximum value from day one of implementation.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          
          .timeline-line {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 50px 0;
          }
          
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .process-flow {
            padding: 30px 20px;
          }
          
          .flow-steps {
            flex-direction: column;
            gap: 30px;
          }
          
          .flow-arrow {
            position: relative;
            top: 0;
            right: 0;
            transform: rotate(90deg);
            margin: 10px 0;
          }
          
          .support-card {
            padding: 25px;
          }
        }
        
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 0 auto;
          }
          
          .step-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;