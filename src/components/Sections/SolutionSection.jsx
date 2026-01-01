import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const solutionStyles = {
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
      linear-gradient(135deg, #4B532010 0%, transparent 40%),
      linear-gradient(45deg, transparent 60%, #6B7C3A08 100%)
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
  solutionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'start',
    position: 'relative',
  },
  leftColumn: {
    paddingRight: '20px',
  },
  rightColumn: {
    position: 'sticky',
    top: '100px',
  },
  solutionItem: {
    marginBottom: '24px',
    padding: '28px',
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
    width: '40px',
    height: '40px',
    backgroundColor: '#4B5320',
    color: 'white',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  solutionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '0',
    lineHeight: '1.4',
    paddingTop: '4px',
  },
  solutionDesc: {
    fontSize: '14px',
    color: '#5D6D7E',
    lineHeight: '1.6',
    paddingLeft: '56px',
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
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  dashboardTitle: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  dashboardStatus: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
  },
  dashboardImageContainer: {
    position: 'relative',
    width: '100%',
    height: '380px',
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
    marginTop: '60px',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(75, 83, 32, 0.08)',
    border: '1px solid rgba(75, 83, 32, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  calculatorHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  calculatorTitle: {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: '12px',
    lineHeight: '1.3',
  },
  calculatorSubtitle: {
    fontSize: '16px',
    color: '#5D6D7E',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  calculatorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '8px',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #E0E6ED',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#2C3E50',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
  },
  inputFocus: {
    borderColor: '#4B5320',
    boxShadow: '0 0 0 3px rgba(75, 83, 32, 0.1)',
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
  slider: {
    width: '100%',
    height: '6px',
    WebkitAppearance: 'none',
    appearance: 'none',
    backgroundColor: '#E0E6ED',
    borderRadius: '3px',
    outline: 'none',
  },
  sliderThumb: {
    width: '20px',
    height: '20px',
    backgroundColor: '#4B5320',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(75, 83, 32, 0.2)',
  },
  resultsContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center',
    marginTop: '40px',
    border: '1px solid rgba(75, 83, 32, 0.1)',
  },
  resultsTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '20px',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(75, 83, 32, 0.1)',
  },
  resultValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#4B5320',
    marginBottom: '8px',
  },
  resultLabel: {
    fontSize: '13px',
    color: '#5D6D7E',
    fontWeight: '500',
  },
  totalSavings: {
    backgroundColor: '#4B5320',
    color: 'white',
    padding: '25px',
    borderRadius: '16px',
    marginTop: '20px',
  },
  totalLabel: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    opacity: 0.9,
  },
  totalValue: {
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: '700',
    marginBottom: '4px',
  },
  totalSubtext: {
    fontSize: '14px',
    opacity: 0.8,
  },
  ctaButton: {
    backgroundColor: '#4B5320',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 8px 20px rgba(75, 83, 32, 0.2)',
    marginTop: '30px',
  },
};

const SolutionSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [inputs, setInputs] = useState({
    teachers: 15,
    students: 500,
    terms: 3,
    examsPerTerm: 4,
  });
  
  const itemsRef = useRef([]);

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

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

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
    <section style={solutionStyles.section} id="solution">
      <div style={solutionStyles.backgroundPattern}></div>
      
      <div style={solutionStyles.container}>
        <div style={solutionStyles.header}>
          <div style={solutionStyles.badge}>
            THE SOLUTION
          </div>
          <h2 style={solutionStyles.title}>
            Academic Excellence <span style={solutionStyles.accent}>Simplified</span>
          </h2>
          <p style={solutionStyles.subtitle}>
            Transform administrative burdens into strategic advantages with our integrated platform
          </p>
        </div>

        <div style={solutionStyles.solutionGrid}>
          <div style={solutionStyles.leftColumn}>
            {solutions.map((solution, index) => (
              <div 
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                style={{
                  ...solutionStyles.solutionItem,
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
                    ...solutionStyles.solutionGlow,
                    opacity: hoveredItem === index ? 1 : 0,
                  }}
                />
                
                <div style={solutionStyles.solutionContent}>
                  <div style={solutionStyles.solutionHeader}>
                    <div 
                      style={{
                        ...solutionStyles.solutionNumber,
                        transform: hoveredItem === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {solution.number}
                    </div>
                    <h3 style={solutionStyles.solutionTitle}>
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p style={solutionStyles.solutionDesc}>
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={solutionStyles.rightColumn}>
            <div style={solutionStyles.dashboardContainer}>
              <div style={solutionStyles.dashboardHeader}>
                <div style={solutionStyles.dashboardTitle}>
                  ADMINISTRATION DASHBOARD
                </div>
                <div style={solutionStyles.dashboardStatus}>
                  LIVE DEMO
                </div>
              </div>
              
              <div style={solutionStyles.dashboardImageContainer}>
                <Image
                  src="/dashboard.png"
                  alt="Syntra Admin Dashboard"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div style={solutionStyles.dashboardOverlay}></div>
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#5D6D7E',
              fontSize: '13px',
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
        <div style={solutionStyles.calculatorContainer}>
          <div style={solutionStyles.calculatorHeader}>
            <h2 style={solutionStyles.calculatorTitle}>
              Calculate Your Time & Cost Savings
            </h2>
            <p style={solutionStyles.calculatorSubtitle}>
              See how many hours and resources Syntra can save your school annually
            </p>
          </div>

          <div style={solutionStyles.calculatorGrid}>
            <div style={solutionStyles.inputGroup}>
              <label style={solutionStyles.inputLabel}>
                Number of Teachers
              </label>
              <div style={solutionStyles.inputWrapper}>
                <input
                  type="number"
                  style={solutionStyles.input}
                  value={inputs.teachers}
                  onChange={(e) => handleInputChange('teachers', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="100"
                />
              </div>
            </div>

            <div style={solutionStyles.inputGroup}>
              <label style={solutionStyles.inputLabel}>
                Number of Students
              </label>
              <div style={solutionStyles.inputWrapper}>
                <input
                  type="number"
                  style={solutionStyles.input}
                  value={inputs.students}
                  onChange={(e) => handleInputChange('students', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="5000"
                />
              </div>
            </div>

            <div style={solutionStyles.inputGroup}>
              <label style={solutionStyles.inputLabel}>
                Academic Terms Per Year
              </label>
              <div style={solutionStyles.inputWrapper}>
                <input
                  type="number"
                  style={solutionStyles.input}
                  value={inputs.terms}
                  onChange={(e) => handleInputChange('terms', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="4"
                />
                <span style={solutionStyles.inputSuffix}>terms</span>
              </div>
            </div>

            <div style={solutionStyles.inputGroup}>
              <label style={solutionStyles.inputLabel}>
                Exams Per Term
              </label>
              <div style={solutionStyles.inputWrapper}>
                <input
                  type="number"
                  style={solutionStyles.input}
                  value={inputs.examsPerTerm}
                  onChange={(e) => handleInputChange('examsPerTerm', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  min="1"
                  max="10"
                />
                <span style={solutionStyles.inputSuffix}>exams</span>
              </div>
            </div>
          </div>

          {/* Slider for manual adjustment */}
          <div style={solutionStyles.sliderGroup}>
            <div style={solutionStyles.sliderLabels}>
              <span style={solutionStyles.sliderLabel}>Small School</span>
              <span style={solutionStyles.sliderLabel}>Large School</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={inputs.teachers}
              onChange={(e) => handleInputChange('teachers', e.target.value)}
              style={{
                ...solutionStyles.slider,
                background: `linear-gradient(to right, #4B5320 0%, #4B5320 ${inputs.teachers}%, #E0E6ED ${inputs.teachers}%, #E0E6ED 100%)`,
              }}
            />
          </div>

          {/* Results */}
          <div style={solutionStyles.resultsContainer}>
            <h3 style={solutionStyles.resultsTitle}>
              Your Estimated Time Savings
            </h3>
            
            <div style={solutionStyles.resultsGrid}>
              <div style={solutionStyles.resultCard}>
                <div style={solutionStyles.resultValue}>
                  {savings.weekly}h
                </div>
                <div style={solutionStyles.resultLabel}>
                  Weekly Savings
                </div>
              </div>
              
              <div style={solutionStyles.resultCard}>
                <div style={solutionStyles.resultValue}>
                  {savings.monthly}h
                </div>
                <div style={solutionStyles.resultLabel}>
                  Monthly Savings
                </div>
              </div>
              
              <div style={solutionStyles.resultCard}>
                <div style={solutionStyles.resultValue}>
                  {savings.annual}h
                </div>
                <div style={solutionStyles.resultLabel}>
                  Annual Savings
                </div>
              </div>
            </div>

            <div style={solutionStyles.totalSavings}>
              <div style={solutionStyles.totalLabel}>
                TOTAL ANNUAL SAVINGS
              </div>
              <div style={solutionStyles.totalValue}>
                {savings.total} Hours
              </div>
              <div style={solutionStyles.totalSubtext}>
                Equivalent to ~₦{(savings.total * 5000).toLocaleString()} in staff costs*
              </div>
            </div>

            <button
              style={solutionStyles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#3a4318';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 25px rgba(75, 83, 32, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4B5320';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(75, 83, 32, 0.2)';
              }}
              onClick={() => window.open('#demo', '_self')}
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
        @media (max-width: 1024px) {
          .solution-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .right-column {
            position: relative;
            top: 0;
            order: -1;
          }
          
          .left-column {
            padding-right: 0;
          }
        }
        
        @media (max-width: 768px) {
          .solution-section {
            padding: 50px 0;
          }
          
          .calculator-container {
            padding: 30px 20px;
          }
          
          .dashboard-image-container {
            height: 280px;
          }
        }
        
        @media (max-width: 480px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
        
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
          box-shadow: 0 4px 8px rgba(75, 83, 32, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4B5320;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(75, 83, 32, 0.2);
          border: none;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;