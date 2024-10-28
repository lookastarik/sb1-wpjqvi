import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;