// src/App.jsx (1-73)
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedVariant, setSelectedVariant] = useState('default');

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="app">
      <div className="flexWrapper">
      <header>
        <h1>Design System Variant + React Analogy</h1>
        <p>It's a reasonable analogy to think of React's useState as a way of managing different variants of a Figma UI component with a state property. In React, useState allows you to manage the state of a component, which can include different visual representations or behaviors based on the current state.</p>
        <p>The selectedVariant state determines which card variant to display: the default variant, variant1 for an error state, variant2 for a success state, and variant3 for an informational state. This is similar to how you might use a state property in Figma to switch between different variants of a component.</p>
      </header>
      <main>
        <h2>Card Component Variants</h2>
        <div className="buttonGroup">
         <button
          className={`button ${selectedVariant === 'default' ? 'active' : ''}`}
          onClick={() => handleVariantChange('default')}
        >
          Default state
        </button>
        <button
          className={`button ${selectedVariant === 'variant1' ? 'active' : ''}`}
          onClick={() => handleVariantChange('variant1')}
        >
          Variant 1 (Error State)
        </button>
        <button
          className={`button ${selectedVariant === 'variant2' ? 'active' : ''}`}
          onClick={() => handleVariantChange('variant2')}
        >
          Variant 2 (Success State)
        </button>
        <button
          className={`button ${selectedVariant === 'variant3' ? 'active' : ''}`}
          onClick={() => handleVariantChange('variant3')}
        >
          Variant 3 (Informational State)
        </button>
        </div>
        <Card variant={selectedVariant} />
      </main>
    </div>
    </div>
  );
}

function Card({ variant }) {
  return (
    <div
      className={`card ${variant === 'default' ? '' : `card--${variant}`}`}
    >
      {variant === 'default' && (
        <React.Fragment>
          <h2>Default card component</h2>
        <p>This is the default card variant.</p>
        <button>Ok</button>
        </React.Fragment>
      )}
      {variant === 'variant1' && (
        <React.Fragment>
          <h2>Error!</h2>
          <p>Something went wrong. Please try again.</p>
          <button className="button button--error">Try Again</button>
        </React.Fragment>
      )}
      {variant === 'variant2' && (
        <React.Fragment>
          <h2>Success!</h2>
          <p>Your action was successful.</p>
          <button className="button button--success">Continue</button>
        </React.Fragment>
      )}
      {variant === 'variant3' && (
        <React.Fragment>
          <h2>Informational</h2>
          <p>Here is something you should know.</p>
          <button className="button button--info">Understood</button>
        </React.Fragment>
      )}
    </div>
    
  );
}

export default App;
