import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";

export default function NotFound() {
  return (
    <>
      <Title>Page Not Found | Smith Digitals</Title>
      <Meta name="description" content="The page you’re looking for could not be found." />
      <Meta name="robots" content="noindex, follow" />
      <main className="not-found-page">
        <h1>Page not found</h1>
        <p>That link may be outdated or the page may have moved.</p>
        <Link to="/">Return to the homepage</Link>
      </main>
    </>
  );
}
