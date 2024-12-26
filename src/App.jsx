import { useState } from 'react';
import Hero from './Hero';
import Details from './components/kelixirr/Details';
import Toast from './components/VictorEZCodes/Toast';
import ProgressBar from './components/VictorEZCodes/ProgressBar';
import ThemeSwitcher from './components/VictorEZCodes/ThemeSwitcher';
import SearchFilter from './components/VictorEZCodes/SearchFilter';
import FormValidator from './components/VictorEZCodes/FormValidator';

function App() {
  const [showToast, setShowToast] = useState(false);
  const [progress] = useState(0);

  return (
    <>
      <Hero />
      <Details />
      
      {/* Toast Demo Section */}
      <div style={{ padding: '40px 20px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <h2>Toast Notifications Demo</h2>
        <button 
          onClick={() => setShowToast(true)}
          style={{ padding: '10px 20px', margin: '10px' }}
        >
          Show Toast
        </button>
        {showToast && (
          <Toast 
            message="Operation successful!" 
            type="success" 
            onClose={() => setShowToast(false)}
          />
        )}
      </div>

      {/* Progress Bar Demo Section */}
      <div style={{ padding: '40px 20px', borderTop: '1px solid var(--border-color)' }}>
        <ProgressBar progress={progress} />
      </div>

      {/* Theme Switcher Section */}
      <div style={{ 
        padding: '40px 20px',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--background-color)'
      }}>
        <ThemeSwitcher />
      </div>

      {/* Search Filter Section */}
      <div style={{ 
        padding: '40px 20px',
        background: 'var(--background-alt)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <SearchFilter />
      </div>

      {/* Form Validator Section */}
      <div style={{ 
        padding: '40px 20px',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--background-color)'
      }}>
        <FormValidator />
      </div>
    </>
  );
}

export default App;