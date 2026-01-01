// In your src/pages/_app.js, add this at the top:
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add Font Awesome for real icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;