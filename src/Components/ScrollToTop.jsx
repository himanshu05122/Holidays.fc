import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
  onClick={scrollToTop}
  style={{
    position: 'fixed',
    bottom: '40px',
    right: '30px',
    backgroundColor: 'white',
    color: 'pink',
    border: 'none',
    borderRadius: '50%',
    padding: '12px 15px',
    fontSize: '18px',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  }}
>
  ⮝
</button>

    )
  );
} 