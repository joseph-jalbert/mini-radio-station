import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Container from './components/Container';

function App() {
  return (
    <ErrorBoundary>
      <Container/>
    </ErrorBoundary>
  );
}

export default App;
