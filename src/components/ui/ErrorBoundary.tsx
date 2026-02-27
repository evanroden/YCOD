'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-8 text-center">
            <p className="font-display text-lg font-bold text-ycod-black/60 dark:text-white/60">
              Something went wrong loading this section.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 retro-btn bg-ycod-blue text-white text-sm"
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
