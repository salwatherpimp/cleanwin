"use client";

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Suppress fetch-related errors from dev overlay
    if (error.message && (
      error.message.includes('Failed to fetch') ||
      error.message.includes('fetch') ||
      error.message.includes('CORS') ||
      error.message.includes('stack-frame')
    )) {
      // Silently suppress these errors
      return;
    }

    // Log other error details but don't crash the app
    if (process.env.NODE_ENV === 'development') {
      console.warn('ErrorBoundary caught an error:', error);
      console.warn('Error info:', errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Don't render anything for dev overlay fetch errors
      if (this.state.error?.message?.includes('Failed to fetch')) {
        return this.props.children;
      }
      
      // For other errors, show a simple fallback
      return (
        <div style={{ 
          padding: '20px', 
          border: '1px solid #ff6b6b', 
          borderRadius: '4px', 
          backgroundColor: '#fff5f5',
          color: '#c53030',
          margin: '10px 0' 
        }}>
          <h3>Something went wrong</h3>
          <p>Error: {this.state.error?.message}</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '8px 16px',
              backgroundColor: '#c53030',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
