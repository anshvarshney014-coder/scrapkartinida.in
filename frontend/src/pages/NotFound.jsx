import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-content flex flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl font-800 text-primary/30">404</p>
      <h1 className="mt-4 text-2xl font-700">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </div>
  );
}
