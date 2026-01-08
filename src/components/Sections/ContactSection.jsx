import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const benefitsRef = useRef([]);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isSmallMobile = windowWidth <= 480;

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const benefits = [
    {
      icon: '📅',
      title: 'Personalized Demo',
      description: '30-minute walkthrough tailored to your school\'s specific needs.',
    },
    {
      icon: '📊',
      title: 'Detailed Proposal',
      description: 'Customized pricing and implementation plan for your requirements.',
    },
    {
      icon: '🛠️',
      title: 'Implementation Plan',
      description: 'Step-by-step timeline for setup, training, and launch.',
    },
  ];

  // Styles with responsive variations
  const styles = {
    section: {
      position: 'relative',
      padding: isSmallMobile ? '40px 0' : 
               isMobile ? '50px 0' : 
               '60px 0',
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
        linear-gradient(135deg, rgba(75, 83, 32, 0.03) 0%, transparent 50%),
        linear-gradient(225deg, rgba(107, 124, 58, 0.03) 0%, transparent 50%)
      `,
      zIndex: 0,
    },
    
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 12px' : 
               isMobile ? '0 16px' : 
               '0 24px',
      position: 'relative',
      zIndex: 1,
    },
    
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '40px',
    },
    
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      padding: '6px 18px',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '12px' : '13px',
      fontWeight: '600',
      marginBottom: isSmallMobile ? '12px' : '16px',
      letterSpacing: '0.5px',
      border: '1px solid rgba(75, 83, 32, 0.2)',
    },
    
    title: {
      fontSize: isSmallMobile ? '24px' : 
               isMobile ? '26px' : 
               'clamp(26px, 3vw, 36px)',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: isSmallMobile ? '12px' : '16px',
      lineHeight: '1.2',
    },
    
    accent: {
      color: '#4B5320',
    },
    
    subtitle: {
      fontSize: isSmallMobile ? '14px' : 
               isMobile ? '14px' : 
               'clamp(14px, 1.6vw, 16px)',
      color: '#5D6D7E',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      padding: '0 10px',
    },
    
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '30px' : '40px',
      alignItems: 'start',
    },
    
    formContainer: {
      backgroundColor: 'white',
      borderRadius: '16px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      padding: isSmallMobile ? '25px 20px' : 
               isMobile ? '30px 25px' : 
               '35px 30px',
      order: isMobile ? '2' : '1',
    },
    
    formHeader: {
      marginBottom: isSmallMobile ? '20px' : '25px',
    },
    
    formTitle: {
      fontSize: isSmallMobile ? '18px' : 
               isMobile ? '19px' : 
               '20px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '8px',
    },
    
    formSubtitle: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#5D6D7E',
      lineHeight: '1.5',
    },
    
    formGroup: {
      marginBottom: isSmallMobile ? '16px' : '20px',
    },
    
    label: {
      display: 'block',
      fontSize: isSmallMobile ? '12px' : '13px',
      fontWeight: '600',
      color: '#2C3E50',
      marginBottom: '6px',
    },
    
    input: {
      width: '100%',
      padding: isSmallMobile ? '12px 14px' : '14px 16px',
      border: '1px solid #E0E6ED',
      borderRadius: '8px',
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#2C3E50',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
    },
    
    textarea: {
      width: '100%',
      padding: isSmallMobile ? '12px 14px' : '14px 16px',
      border: '1px solid #E0E6ED',
      borderRadius: '8px',
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#2C3E50',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit',
    },
    
    submitButton: {
      width: '100%',
      padding: isSmallMobile ? '14px' : '14px',
      backgroundColor: '#4B5320',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: isSmallMobile ? '14px' : '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
    },
    
    benefitsSidebar: {
      paddingLeft: isMobile ? '0' : '20px',
      order: isMobile ? '1' : '2',
    },
    
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    
    benefitItem: {
      backgroundColor: 'white',
      borderRadius: '14px',
      border: '1px solid rgba(0,0,0,0.05)',
      padding: isSmallMobile ? '20px' : 
               isMobile ? '22px 20px' : 
               '25px',
      marginBottom: isMobile ? '15px' : '20px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    
    benefitGlow: {
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
    
    benefitContent: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      gap: isSmallMobile ? '12px' : '15px',
      alignItems: 'flex-start',
    },
    
    benefitIcon: {
      width: isSmallMobile ? '36px' : 
             isMobile ? '38px' : 
             '40px',
      height: isSmallMobile ? '36px' : 
              isMobile ? '38px' : 
              '40px',
      borderRadius: '10px',
      backgroundColor: 'rgba(75, 83, 32, 0.1)',
      color: '#4B5320',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '16px' : 
                isMobile ? '17px' : 
                '18px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    
    benefitText: {
      flex: 1,
    },
    
    benefitTitle: {
      fontSize: isSmallMobile ? '14px' : 
                isMobile ? '15px' : 
                '15px',
      fontWeight: '700',
      color: '#2C3E50',
      marginBottom: '6px',
    },
    
    benefitDescription: {
      fontSize: isSmallMobile ? '12px' : 
                isMobile ? '13px' : 
                '13px',
      color: '#5D6D7E',
      lineHeight: '1.5',
    },
    
    successMessage: {
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      border: '1px solid #4CAF50',
      borderRadius: '8px',
      padding: isSmallMobile ? '12px' : '15px',
      marginTop: '20px',
      textAlign: 'center',
    },
    
    successText: {
      fontSize: isSmallMobile ? '13px' : '14px',
      color: '#4CAF50',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    
    urgencyCard: {
      backgroundColor: 'rgba(75, 83, 32, 0.08)',
      borderRadius: '12px',
      border: '1px solid rgba(75, 83, 32, 0.15)',
      padding: isSmallMobile ? '16px' : '20px',
      textAlign: 'center',
      marginTop: isSmallMobile ? '15px' : '20px',
    },
    
    urgencyTitle: {
      fontSize: isSmallMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#4B5320',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    
    urgencyText: {
      fontSize: isSmallMobile ? '11px' : '12px',
      color: '#5D6D7E',
      lineHeight: '1.5',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    setFormData({
      name: '',
      school: '',
      email: '',
      phone: '',
      message: '',
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#4B5320';
    e.target.style.boxShadow = '0 0 0 2px rgba(75, 83, 32, 0.1)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#E0E6ED';
    e.target.style.boxShadow = 'none';
  };

  const handleBenefitMouseEnter = (index) => {
    setHoveredBenefit(index);
  };

  const handleBenefitMouseLeave = () => {
    setHoveredBenefit(null);
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            GET STARTED
          </div>
          <h2 style={styles.title}>
            Schedule Your <span style={styles.accent}>Demo</span>
          </h2>
          <p style={styles.subtitle}>
            See how Syntra can transform your school's academic management in 30 minutes.
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <div style={styles.formContainer}>
            <div style={styles.formHeader}>
              <h3 style={styles.formTitle}>
                Request Personalized Demo
              </h3>
              <p style={styles.formSubtitle}>
                We'll contact you within 24 hours to schedule
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="school">
                  School Name *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Syntra Academy"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Johndoe@yourschool.edu.ng"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="+000 000 000 0000"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">
                  Specific Needs or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tell us about your current challenges..."
                />
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                disabled={loading}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.backgroundColor = '#3a4318';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.backgroundColor = '#4B5320';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                    </svg>
                    Schedule Demo
                  </>
                )}
              </button>

              {submitted && (
                <div style={styles.successMessage}>
                  <p style={styles.successText}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Demo request received! We'll contact you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Benefits Sidebar */}
          <div style={styles.benefitsSidebar}>
            <ul style={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  ref={(el) => (benefitsRef.current[index] = el)}
                  style={{
                    ...styles.benefitItem,
                    transform: hoveredBenefit === index ? 'translateY(-5px)' : 'translateY(0)',
                    boxShadow: hoveredBenefit === index
                      ? '0 10px 25px rgba(75, 83, 32, 0.1), 0 0 0 1px rgba(75, 83, 32, 0.05)'
                      : '0 6px 20px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
                  }}
                  onMouseEnter={() => handleBenefitMouseEnter(index)}
                  onMouseLeave={handleBenefitMouseLeave}
                >
                  <div 
                    style={{
                      ...styles.benefitGlow,
                      opacity: hoveredBenefit === index ? 1 : 0,
                    }}
                  />
                  
                  <div style={styles.benefitContent}>
                    <div 
                      style={{
                        ...styles.benefitIcon,
                        transform: hoveredBenefit === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {benefit.icon}
                    </div>
                    
                    <div style={styles.benefitText}>
                      <h4 style={styles.benefitTitle}>
                        {benefit.title}
                      </h4>
                      <p style={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div style={styles.urgencyCard}>
              <h4 style={styles.urgencyTitle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Limited Availability
              </h4>
              <p style={styles.urgencyText}>
                We're onboarding 3 schools this month. Secure your spot for a personalized demo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #A0AEC0;
          opacity: 0.7;
        }
        
        input:focus,
        textarea:focus {
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;