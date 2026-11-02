import { Link } from "react-head";

export default function CanonicalLink({ href, ...props }) {
  const canonicalUrl = new URL(href);
  if (canonicalUrl.pathname !== "/" && !canonicalUrl.pathname.endsWith("/")) {
    canonicalUrl.pathname += "/";
  }

  return <Link {...props} href={canonicalUrl.href} />;
}
