import { useState, useEffect, useRef } from 'react';

const HowItWorksSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const stepsRef = useRef([]);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

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

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      padding: isMobile ? '40px 0' : isTablet ? '50px 0' : '70px 0',
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
      padding: isSmallMobile ? '0 12px' : isMobile ? '0 16px' : '0 24px',
      position: 'relative',
      zIndex: 1,
    },
    
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '50px',
    },
    
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      padding: '6px 18px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '12px' : '13px',
      fontWeight: '600',
      marginBottom: '16px',
      letterSpacing: '0.5px',
      border: '1px solid rgba(75, 83, 32, 0.2)',
    },
    
    title: {
      fontSize: isSmallMobile ? '24px' : isMobile ? '28px' : 'clamp(28px, 3.5vw, 40px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '16px',
      lineHeight: '1.2',
    },
    
    accent: {
      color: '#4B5320',
    },
    
    subtitle: {
      fontSize: isSmallMobile ? '14px' : isMobile ? '15px' : 'clamp(15px, 1.8vw, 18px)',
      color: '#5D6D7E',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      padding: '0 10px',
    },
    
    timelineContainer: {
      position: 'relative',
      margin: isMobile ? '30px auto 40px' : '50px auto 60px',
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
      display: isSmallMobile ? 'none' : 'block',
    },
    
    stepsGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : 
                         isMobile ? 'repeat(2, 1fr)' : 
                         isTablet ? 'repeat(3, 1fr)' : 
                         'repeat(5, 1fr)',
      gap: isMobile ? '20px' : '20px',
      position: 'relative',
      zIndex: 2,
    },
    
    stepItem: {
      textAlign: 'center',
      padding: '0 8px',
    },
    
    stepCard: {
      backgroundColor: 'white',
      padding: isSmallMobile ? '20px 15px' : '30px 20px',
      borderRadius: '16px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      height: isSmallMobile ? 'auto' : '280px',
      display: 'flex',
      flexDirection: 'column',
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
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    
    stepNumber: {
      width: isSmallMobile ? '32px' : '36px',
      height: isSmallMobile ? '32px' : '36px',
      backgroundColor: '#4B5320',
      color: 'white',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '14px' : '15px',
      fontWeight: '700',
      margin: '0 auto 20px',
      transition: 'all 0.3s ease',
    },
    
    stepIcon: {
      fontSize: isSmallMobile ? '28px' : '32px',
      marginBottom: '15px',
      display: 'inline-block',
      transition: 'transform 0.3s ease',
    },
    
    stepTitle: {
      fontSize: isSmallMobile ? '15px' : '16px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '10px',
      lineHeight: '1.4',
    },
    
    stepDescription: {
      fontSize: isSmallMobile ? '12px' : '13px',
      color: '#5D6D7E',
      lineHeight: '1.5',
      flex: 1,
    },
    
    processFlow: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: isSmallMobile ? '25px' : isMobile ? '30px' : '40px',
      marginTop: isMobile ? '30px' : '50px',
      boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
      border: '1px solid rgba(75, 83, 32, 0.1)',
    },
    
    flowHeader: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '40px',
    },
    
    flowTitle: {
      fontSize: isSmallMobile ? '18px' : isMobile ? '19px' : '20px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '12px',
    },
    
    flowSubtitle: {
      fontSize: isSmallMobile ? '13px' : isMobile ? '14px' : '15px',
      color: '#5D6D7E',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    
    flowSteps: {
      display: isSmallMobile ? 'grid' : 'flex',
      gridTemplateColumns: isSmallMobile ? 'repeat(2, 1fr)' : 'none',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      gap: isSmallMobile ? '20px' : '0',
    },
    
    flowStep: {
      textAlign: 'center',
      flex: isSmallMobile ? 'none' : 1,
      minWidth: isSmallMobile ? 'auto' : '150px',
      position: 'relative',
      marginBottom: isSmallMobile ? '10px' : '0',
    },
    
    flowNumber: {
      width: isSmallMobile ? '36px' : '40px',
      height: isSmallMobile ? '36px' : '40px',
      backgroundColor: '#4B5320',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '14px' : '16px',
      fontWeight: '700',
      margin: '0 auto 15px',
      position: 'relative',
      zIndex: 2,
    },
    
    flowText: {
      fontSize: isSmallMobile ? '12px' : '14px',
      fontWeight: '500',
      color: '#2C3E50',
      lineHeight: '1.4',
    },
    
    flowArrow: {
      position: 'absolute',
      top: isSmallMobile ? 'auto' : '20px',
      bottom: isSmallMobile ? '0' : 'auto',
      right: isSmallMobile ? 'auto' : '-20px',
      left: isSmallMobile ? '50%' : 'auto',
      transform: isSmallMobile ? 'translateX(-50%) rotate(90deg)' : 'none',
      color: '#4B5320',
      fontSize: '20px',
      opacity: 0.3,
    },
    
    supportCard: {
      marginTop: isMobile ? '30px' : '50px',
      backgroundColor: 'rgba(75, 83, 32, 0.05)',
      borderRadius: '16px',
      padding: isSmallMobile ? '25px' : isMobile ? '30px' : '35px',
      border: '1px solid rgba(75, 83, 32, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    supportIcon: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: isSmallMobile ? '30px' : '40px',
      opacity: 0.1,
    },
    
    supportTitle: {
      fontSize: isSmallMobile ? '18px' : isMobile ? '19px' : '20px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '12px',
    },
    
    supportText: {
      fontSize: isSmallMobile ? '13px' : isMobile ? '14px' : '15px',
      color: '#5D6D7E',
      lineHeight: '1.6',
      maxWidth: '700px',
    },
  };

  const handleStepMouseEnter = (index) => {
    setHoveredStep(index);
  };

  const handleStepMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <section style={styles.section} id="how-it-works">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            PROCESS FLOW
          </div>
          <h2 style={styles.title}>
            From Setup to Results in <span style={styles.accent}>Days</span>
          </h2>
          <p style={styles.subtitle}>
            Your school can be running CBT exams within a week of starting with Syntra.
          </p>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine}></div>
          
          <div style={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                style={styles.stepItem}
              >
                <div 
                  style={{
                    ...styles.stepCard,
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
                      ...styles.stepGlow,
                      opacity: hoveredStep === index ? 1 : 0,
                    }}
                  />
                  
                  <div style={styles.stepContent}>
                    <div 
                      style={{
                        ...styles.stepNumber,
                        transform: hoveredStep === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {step.number}
                    </div>
                    
                    <div 
                      style={{
                        ...styles.stepIcon,
                        transform: hoveredStep === index ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                      }}
                    >
                      {step.icon}
                    </div>
                    
                    <h3 style={styles.stepTitle}>
                      {step.title}
                    </h3>
                    
                    <p style={styles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.processFlow}>
          <div style={styles.flowHeader}>
            <h3 style={styles.flowTitle}>
              Complete Academic Management Flow
            </h3>
            <p style={styles.flowSubtitle}>
              Seamless workflow from initial setup to final results and reporting
            </p>
          </div>
          
          <div style={styles.flowSteps}>
            {flowSteps.map((step, index) => (
              <div key={index} style={styles.flowStep}>
                <div style={styles.flowNumber}>
                  {step.number}
                </div>
                <div style={styles.flowText}>
                  {step.text}
                </div>
                {index < flowSteps.length - 1 && (
                  <div style={{
                    ...styles.flowArrow,
                    display: isSmallMobile ? (index < flowSteps.length - 1 && index % 2 === 0 ? 'block' : 'none') : 'block'
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.supportCard}>
          <div style={styles.supportIcon}>
            🛠️
          </div>
          <h4 style={styles.supportTitle}>
            Complete Implementation Support
          </h4>
          <p style={styles.supportText}>
            We provide setup assistance, comprehensive staff training, and ongoing technical support 
            to ensure your school achieves maximum value from day one of implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;