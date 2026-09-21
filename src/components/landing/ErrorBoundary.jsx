import { Component } from 'react';

// Catches render/lifecycle errors anywhere in its subtree so a bug in one
// section (e.g. a below-the-fold component) can never blank out the whole
// page. Without this, React unmounts the entire app on any uncaught error.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Keep this even in production: without it, a section failing on some
    // users' devices is invisible to us. Swap for a real error-reporting
    // call (Sentry, etc.) when one is wired up.
    console.error('Section failed to render:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render nothing rather than an error message — the rest of the page
      // (Hero, Navbar, everything outside this boundary) stays fully usable.
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}