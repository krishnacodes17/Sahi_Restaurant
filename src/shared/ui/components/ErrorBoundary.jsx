import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111111] px-5 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 text-5xl">
            💥
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Something went wrong
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
            An unexpected error occurred. Please try again.
          </p>

          <button
            type="button"
            onClick={this.handleRetry}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
