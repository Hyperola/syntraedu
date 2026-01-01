import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [inputs, setInputs] = useState({
    teachers: 15,
    students: 500,
    terms: 3,
    examsPerTerm: 4,
  });
  const [windowWidth, setWindowWidth] = useState(0);
  
  const itemsRef = useRef([]);

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
            const index = itemsRef.current.indexOf(entry.target);
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const solutions = [
    {
      number: '01',
      title: 'One System, Total Control',
      description: 'Unified dashboard for exams, results, promotions, transcripts, and student records. Everything in one place, under your school\'s brand.',
    },
    {
      number: '02',
      title: 'Built for Nigerian Schools',
      description: 'Aligned with WAEC, NECO, and state exam boards. Supports Nigerian academic calendars and grading systems.',
    },
    {
      number: '03',
      title: 'Your Brand, Your Software',
      description: 'Parents and students see your school name and logo—not "Syntra." Builds trust and professionalism.',
    },
    {
      number: '04',
      title: 'Data Ownership Guaranteed',
      description: 'No subscription lock-in. You own the software and your data. Choose local or managed hosting.',
    },
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
        linear-gradient(135deg, #4B532010 0%, transparent 40%),
        linear-gradient(45deg, transparent 60%, #6B7C3A08 100%)
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
      padding: '0 10px',
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
    
    solutionGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '40px' : '50px',
      alignItems: 'start',
      position: 'relative',
    },
    
    leftColumn: {
      paddingRight: isMobile ? '0' : '20px',
      order: isMobile ? '2' : '1',
    },
    
    rightColumn: {
      position: isMobile ? 'relative' : 'sticky',
      top: isMobile ? '0' : '100px',
      order: isMobile ? '1' : '2',
      marginBottom: isMobile ? '30px' : '0',
    },
    
    solutionItem: {
      marginBottom: '24px',
      padding: isSmallMobile ? '20px' : '28px',
      backgroundColor: 'white',
      borderRadius: '16px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    
    solutionGlow: {
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
    
    solutionContent: {
      position: 'relative',
      zIndex: 1,
    },
    
    solutionHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '16px',
    },
    
    solutionNumber: {
      width: isSmallMobile ? '36px' : '40px',
      height: isSmallMobile ? '36px' : '40px',
      backgroundColor: '#4B5320',
      color: 'white',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '14px' : '16px',
      fontWeight: '700',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    
    solutionTitle: {
      fontSize: isSmallMobile ? '16px' : '18px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '0',
      lineHeight: '1.4',
      paddingTop: '4px',
    },
    
    solutionDesc: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      lineHeight: '1.6',
      paddingLeft: isSmallMobile ? '0' : '56px',
      marginTop: isSmallMobile ? '10px' : '0',
    },
    
    dashboardContainer: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
      border: '1px solid rgba(0,0,0,0.05)',
      position: 'relative',
    },
    
    dashboardHeader: {
      backgroundColor: '#4B5320',
      padding: isSmallMobile ? '12px 16px' : '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },
    
    dashboardTitle: {
      color: 'white',
      fontSize: isSmallMobile ? '12px' : '14px',
      fontWeight: '600',
      letterSpacing: '0.5px',
    },
    
    dashboardStatus: {
      backgroundColor: 'rgba(255,255,255,0.15)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: isSmallMobile ? '10px' : '12px',
      fontWeight: '500',
    },
    
    dashboardImageContainer: {
      position: 'relative',
      width: '100%',
      height: isSmallMobile ? '200px' : isMobile ? '250px' : '380px',
    },
    
    dashboardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 70%, rgba(75, 83, 32, 0.03) 100%)',
      pointerEvents: 'none',
    },
    
    calculatorContainer: {
      marginTop: isMobile ? '40px' : '60px',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: isSmallMobile ? '20px' : isMobile ? '25px' : '40px',
      boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
      border: '1px solid rgba(75, 83, 32, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    calculatorHeader: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '40px',
    },
    
    calculatorTitle: {
      fontSize: isSmallMobile ? '20px' : isMobile ? '24px' : 'clamp(24px, 3vw, 32px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '12px',
      lineHeight: '1.3',
    },
    
    calculatorSubtitle: {
      fontSize: isSmallMobile ? '14px' : '16px',
      color: '#5D6D7E',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    
    calculatorGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      marginBottom: '40px',
    },
    
    inputGroup: {
      marginBottom: '20px',
    },
    
    inputLabel: {
      display: 'block',
      fontSize: isSmallMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '8px',
    },
    
    inputWrapper: {
      position: 'relative',
    },
    
    input: {
      width: '100%',
      padding: isSmallMobile ? '12px 14px' : '14px 16px',
      border: '1px solid #E0E6ED',
      borderRadius: '10px',
      fontSize: isSmallMobile ? '14px' : '15px',
      color: '#2C3E50',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
    },
    
    inputSuffix: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#5D6D7E',
      fontSize: '14px',
      fontWeight: '500',
    },
    
    sliderGroup: {
      marginBottom: '30px',
      display: isSmallMobile ? 'none' : 'block',
    },
    
    sliderLabels: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
    },
    
    sliderLabel: {
      fontSize: '13px',
      color: '#5D6D7E',
    },
    
    resultsContainer: {
      backgroundColor: '#F8F9FA',
      borderRadius: '16px',
      padding: isSmallMobile ? '20px' : isMobile ? '25px' : '30px',
      textAlign: 'center',
      marginTop: '40px',
      border: '1px solid rgba(75, 83, 32, 0.1)',
    },
    
    resultsTitle: {
      fontSize: isSmallMobile ? '16px' : isMobile ? '17px' : '18px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '20px',
    },
    
    resultsGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: isMobile ? '15px' : '20px',
      marginBottom: '30px',
    },
    
    resultCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: isSmallMobile ? '15px' : '20px',
      border: '1px solid rgba(75, 83, 32, 0.1)',
    },
    
    resultValue: {
      fontSize: isSmallMobile ? '22px' : isMobile ? '24px' : '28px',
      fontWeight: '700',
      color: '#4B5320',
      marginBottom: '8px',
    },
    
    resultLabel: {
      fontSize: isSmallMobile ? '12px' : '13px',
      color: '#5D6D7E',
      fontWeight: '500',
    },
    
    totalSavings: {
      backgroundColor: '#4B5320',
      color: 'white',
      padding: isSmallMobile ? '20px' : '25px',
      borderRadius: '16px',
      marginTop: '20px',
    },
    
    totalLabel: {
      fontSize: isSmallMobile ? '12px' : '14px',
      fontWeight: '500',
      marginBottom: '8px',
      opacity: 0.9,
    },
    
    totalValue: {
      fontSize: isSmallMobile ? '24px' : isMobile ? '28px' : 'clamp(32px, 4vw, 48px)',
      fontWeight: '700',
      marginBottom: '4px',
    },
    
    totalSubtext: {
      fontSize: isSmallMobile ? '12px' : '14px',
      opacity: 0.8,
    },
    
    ctaButton: {
      backgroundColor: '#4B5320',
      color: 'white',
      border: 'none',
      padding: isSmallMobile ? '14px 30px' : '16px 40px',
      borderRadius: '10px',
      fontSize: isSmallMobile ? '14px' : '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxShadow: '0 8px 20px rgba(75, 83, 32, 0.2)',
      marginTop: '30px',
      width: isSmallMobile ? '100%' : 'auto',
    },
  };

  // Calculate time savings
  const calculateSavings = () => {
    const baseHours = 2; // Base hours saved per task
    const teacherHours = inputs.teachers * baseHours * 4; // 4 tasks per teacher
    const examHours = inputs.examsPerTerm * inputs.terms * 8; // 8 hours per exam processing
    const studentHours = inputs.students * 0.5 * inputs.terms; // 0.5 hours per student per term
    
    const weekly = (teacherHours + examHours + studentHours) / 40; // Divide by 40 weeks
    const monthly = weekly * 4;
    const annual = monthly * 12;
    
    return {
      weekly: Math.round(weekly * 10) / 10,
      monthly: Math.round(monthly),
      annual: Math.round(annual),
      total: Math.round(annual),
    };
  };

  const savings = calculateSavings();

  const handleInputChange = (field, value) => {
    const numValue = parseInt(value) || 0;
    setInputs(prev => ({
      ...prev,
      [field]: Math.min(Math.max(numValue, 1), field === 'students' ? 5000 : 100)
    }));
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#4B5320';
    e.target.style.boxShadow = '0 0 0 3px rgba(75, 83, 32, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#E0E6ED';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section style={styles.section} id="solution">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            THE SOLUTION
          </div>
          <h2 style={styles.title}>
            Academic Excellence <span style={styles.accent}>Simplified</span>
          </h2>
          <p style={styles.subtitle}>
            Transform administrative burdens into strategic advantages with our integrated platform
          </p>
        </div>

        <div style={styles.solutionGrid}>
          <div style={styles.leftColumn}>
            {solutions.map((solution, index) => (
              <div 
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                style={{
                  ...styles.solutionItem,
                  transform: visibleItems.includes(index)
                    ? hoveredItem === index
                      ? 'translateY(-5px)'
                      : 'translateY(0)'
                    : 'translateY(20px)',
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                  boxShadow: hoveredItem === index
                    ? '0 15px 35px rgba(75, 83, 32, 0.12), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                    : '0 8px 25px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  style={{
                    ...styles.solutionGlow,
                    opacity: hoveredItem === index ? 1 : 0,
                  }}
                />
                
                <div style={styles.solutionContent}>
                  <div style={styles.solutionHeader}>
                    <div 
                      style={{
                        ...styles.solutionNumber,
                        transform: hoveredItem === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {solution.number}
                    </div>
                    <h3 style={styles.solutionTitle}>
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p style={styles.solutionDesc}>
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.rightColumn}>
            <div style={styles.dashboardContainer}>
              <div style={styles.dashboardHeader}>
                <div style={styles.dashboardTitle}>
                  ADMINISTRATION DASHBOARD
                </div>
                <div style={styles.dashboardStatus}>
                  LIVE DEMO
                </div>
              </div>
              
              <div style={styles.dashboardImageContainer}>
                <Image
                  src="/dashboard.png"
                  alt="Syntra Admin Dashboard"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div style={styles.dashboardOverlay}></div>
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#5D6D7E',
              fontSize: isSmallMobile ? '11px' : '13px',
              fontStyle: 'italic',
              padding: '12px',
              backgroundColor: 'rgba(75, 83, 32, 0.03)',
              borderRadius: '10px',
              border: '1px dashed rgba(75, 83, 32, 0.1)',
            }}>
              Your custom branded dashboard • Real-time analytics
            </div>
          </div>
        </div>

        {/* Enhanced Time Savings Calculator */}
        <div style={styles.calculatorContainer}>
          <div style={styles.calculatorHeader}>
            <h2 style={styles.calculatorTitle}>
              Calculate Your Time & Cost Savings
            </h2>
            <p style={styles.calculatorSubtitle}>
              See how many hours and resources Syntra can save your school annually
            </p>
          </div>

          <div style={styles.calculatorGrid}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>
                Number of Teachers
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="number"
                  style={styles.input}
                  value={inputs.teachers}
                  onChange={(e) => handleInputChange('teachers', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="100"
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>
                Number of Students
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="number"
                  style={styles.input}
                  value={inputs.students}
                  onChange={(e) => handleInputChange('students', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="5000"
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>
                Academic Terms Per Year
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="number"
                  style={styles.input}
                  value={inputs.terms}
                  onChange={(e) => handleInputChange('terms', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="4"
                />
                <span style={styles.inputSuffix}>terms</span>
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>
                Exams Per Term
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="number"
                  style={styles.input}
                  value={inputs.examsPerTerm}
                  onChange={(e) => handleInputChange('examsPerTerm', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="10"
                />
                <span style={styles.inputSuffix}>exams</span>
              </div>
            </div>
          </div>

          {/* Slider for manual adjustment */}
          {!isSmallMobile && (
            <div style={styles.sliderGroup}>
              <div style={styles.sliderLabels}>
                <span style={styles.sliderLabel}>Small School</span>
                <span style={styles.sliderLabel}>Large School</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={inputs.teachers}
                onChange={(e) => handleInputChange('teachers', e.target.value)}
                style={{
                  width: '100%',
                  height: '6px',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  backgroundColor: '#E0E6ED',
                  borderRadius: '3px',
                  outline: 'none',
                  background: `linear-gradient(to right, #4B5320 0%, #4B5320 ${inputs.teachers}%, #E0E6ED ${inputs.teachers}%, #E0E6ED 100%)`,
                }}
              />
            </div>
          )}

          {/* Results */}
          <div style={styles.resultsContainer}>
            <h3 style={styles.resultsTitle}>
              Your Estimated Time Savings
            </h3>
            
            <div style={styles.resultsGrid}>
              <div style={styles.resultCard}>
                <div style={styles.resultValue}>
                  {savings.weekly}h
                </div>
                <div style={styles.resultLabel}>
                  Weekly Savings
                </div>
              </div>
              
              <div style={styles.resultCard}>
                <div style={styles.resultValue}>
                  {savings.monthly}h
                </div>
                <div style={styles.resultLabel}>
                  Monthly Savings
                </div>
              </div>
              
              <div style={styles.resultCard}>
                <div style={styles.resultValue}>
                  {savings.annual}h
                </div>
                <div style={styles.resultLabel}>
                  Annual Savings
                </div>
              </div>
            </div>

            <div style={styles.totalSavings}>
              <div style={styles.totalLabel}>
                TOTAL ANNUAL SAVINGS
              </div>
              <div style={styles.totalValue}>
                {savings.total} Hours
              </div>
              <div style={styles.totalSubtext}>
                Equivalent to ~₦{(savings.total * 5000).toLocaleString()} in staff costs*
              </div>
            </div>

            <button
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                if (isMobile) return;
                e.target.style.backgroundColor = '#3a4318';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 25px rgba(75, 83, 32, 0.25)';
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;
                e.target.style.backgroundColor = '#4B5320';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(75, 83, 32, 0.2)';
              }}
              onClick={() => window.open('https://wa.me/message/ELEFE6DTGLDJG1', '_self')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
              </svg>
              Book a Custom Savings Analysis
            </button>
            
            <div style={{
              marginTop: '20px',
              fontSize: '12px',
              color: '#5D6D7E',
              opacity: 0.7,
            }}>
              *Based on average hourly rate of ₦5,000 for administrative staff
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type=number] {
          -moz-appearance: textfield;
        }
        
        input[type="range"] {
          -webkit-appearance: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #4B5320;
          border-radius: 50%;
          cursor: pointer;
          boxShadow: 0 4px 8px rgba(75, 83, 32, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4B5320;
          border-radius: 50%;
          cursor: pointer;
          boxShadow: 0 4px 8px rgba(75, 83, 32, 0.2);
          border: none;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;