import { motion } from "framer-motion";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import CanonicalLink from "../components/CanonicalLink";
import asensoArtwork from "../assets/appalachianacenso.png";
import mcguireArtwork from "../assets/project1.png";
import bbsArtwork from "../assets/bbslogo.jpg";
import smithLogo from "../assets/smithlogo-small.webp";
import "./GoogleRankingGuide.css";
import "./ResponsiveWebDesignGuide.css";

const pageUrl = "https://smithdigitals.com/guides/what-is-responsive-web-design/";
const pageTitle = "What Is Responsive Web Design? A 2026 Guide | Smith Digitals";
const pageDescription =
  "Learn how responsive web design works, why it matters, and how fluid grids, flexible images, media queries, and container queries shape modern websites.";

const faqs = [
  {
    question: "What is responsive web design in simple terms?",
    answer:
      "Responsive web design is a way of building websites so their layout, images, and content automatically adjust to fit any screen size, from a small phone to a large desktop monitor.",
  },
  {
    question: "How does responsive design differ from a mobile-friendly site?",
    answer:
      "A mobile-friendly site works on phones, but it may still rely on a mostly fixed layout. Responsive design uses a fluid system that adapts across the full range of screen and container sizes.",
  },
  {
    question: "Does responsive design affect Google rankings?",
    answer:
      "Responsive design supports the mobile usability, performance, and content consistency that search visibility depends on. It does not guarantee a ranking, but a poor mobile experience can make both discovery and conversion harder.",
  },
  {
    question: "What is the difference between responsive and adaptive design?",
    answer:
      "Responsive design uses flexible layouts that scale continuously. Adaptive design switches between a set of fixed layouts built for specific screen widths.",
  },
  {
    question: "Is responsive design still relevant in 2026?",
    answer:
      "Yes. Responsive design now includes tools such as container queries, CSS Grid, Flexbox, and fluid typography, making it even better suited to the growing range of screens and reusable components.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "What Is Responsive Web Design? A 2026 Guide",
      description: pageDescription,
      image: "https://smithdigitals.com/og-image.jpg",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      mainEntityOfPage: pageUrl,
      articleSection: "Web Design",
      author: {
        "@type": "Person",
        name: "Dylan Smith",
        url: "https://smithdigitals.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Smith Digitals LLC",
        url: "https://smithdigitals.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://smithdigitals.com/og-image.jpg",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://smithdigitals.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "What Is Responsive Web Design?",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function ResponsiveWebDesignGuide() {
  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="responsive web design, responsive website, mobile-first design, CSS media queries, container queries, web design 2026"
      />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="article:published_time" content="2026-11-04" />
      <Meta property="article:modified_time" content="2026-11-04" />
      <Meta property="article:author" content="Dylan Smith" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="twitter:description" content={pageDescription} />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <CanonicalLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <main className="guide-page responsive-guide">
        <header className="guide-hero responsive-guide-hero">
          <div className="guide-shell">
            <nav className="guide-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Web design guide</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="guide-eyebrow">Web design · 2026 guide · 11 minute read</p>
              <h1>What is responsive web design?</h1>
              <p className="guide-deck">
                One website, every screen. Learn how fluid layouts, flexible media,
                and modern CSS work together to create a durable digital experience.
              </p>
              <div className="guide-byline">
                <span className="guide-author-mark" aria-hidden="true">DS</span>
                <p>
                  Written by <strong>Dylan Smith</strong>
                  <span>Published and reviewed November 4, 2026</span>
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="guide-shell guide-layout">
          <article className="guide-article">
            <section className="guide-quick-answer" aria-labelledby="responsive-quick-answer">
              <p>Quick answer</p>
              <h2 id="responsive-quick-answer">Responsive design lets one website fit every screen.</h2>
              <p>
                Responsive web design is a development approach that automatically adjusts
                a site&apos;s layout, images, and content to the available space. The method,
                named by designer Ethan Marcotte in 2010, is built on fluid grids, flexible
                images, and CSS media queries. Together, those tools remove the need to build
                separate desktop and mobile websites.
              </p>
            </section>

            <section id="how-it-works">
              <p className="guide-section-label">The mechanics</p>
              <h2>How responsive web design actually works</h2>
              <p>
                Responsive web design combines fluid grids, flexible images, and CSS media
                queries into one layout system. Fluid grids use proportional widths instead
                of rigid pixel values, so columns and containers can resize with the space
                around them. Flexible images stay within their parent containers rather than
                overflowing on a smaller screen.
              </p>

              <figure className="responsive-device-showcase">
                <div className="responsive-device responsive-device-desktop">
                  <span className="responsive-device-bar" aria-hidden="true" />
                  <img
                    src={asensoArtwork}
                    alt="Appalachian Asenso client artwork shown in a desktop layout"
                    width="480"
                    height="480"
                  />
                </div>
                <div className="responsive-device responsive-device-tablet">
                  <span className="responsive-device-bar" aria-hidden="true" />
                  <img
                    src={asensoArtwork}
                    alt=""
                    aria-hidden="true"
                    width="480"
                    height="480"
                  />
                </div>
                <div className="responsive-device responsive-device-phone">
                  <span className="responsive-device-bar" aria-hidden="true" />
                  <img
                    src={asensoArtwork}
                    alt=""
                    aria-hidden="true"
                    width="480"
                    height="480"
                  />
                </div>
                <figcaption>Original Smith Digitals client artwork, adapting across three viewport shapes.</figcaption>
              </figure>

              <p>
                Media queries trigger changes at chosen widths, called breakpoints. A rule
                might switch a three-column layout to one column when the available width
                becomes too narrow. CSS Flexbox handles one-dimensional arrangements such as
                navigation and card rows, while CSS Grid is especially useful for layouts
                that need control across both rows and columns.
              </p>
              <p>
                Container queries take the same idea down to the component level. Instead of
                responding only to the browser viewport, a card or widget can respond to the
                width of its own parent. That means the same component can behave one way in
                a narrow sidebar and another way in a full-width section without becoming a
                second component.
              </p>
              <p>
                Fluid typography is another valuable technique. The CSS <code>clamp()</code>{" "}
                function lets text scale smoothly between a minimum and maximum size, reducing
                the need for a different font declaration at every breakpoint.
              </p>

              <div className="responsive-pro-tip">
                <span>Pro tip</span>
                <p>
                  Set breakpoints where the content starts to look crowded or broken—not at a
                  list of popular device widths. Content-based breakpoints work on today&apos;s
                  devices and on screen sizes that do not exist yet.
                </p>
              </div>

              <div className="responsive-table-wrap" role="region" aria-label="Media query and container query comparison" tabIndex="0">
                <table className="responsive-comparison-table">
                  <thead>
                    <tr><th>Feature</th><th>Media queries</th><th>Container queries</th></tr>
                  </thead>
                  <tbody>
                    <tr><th scope="row">Responds to</th><td>Viewport width</td><td>Parent container width</td></tr>
                    <tr><th scope="row">Best for</th><td>Page-level changes</td><td>Component-level changes</td></tr>
                    <tr><th scope="row">Browser support</th><td>Universal</td><td>Modern browsers</td></tr>
                    <tr><th scope="row">Complexity</th><td>Lower</td><td>Moderate</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="responsive-vs-adaptive">
              <p className="guide-section-label">Choose the right system</p>
              <h2>Responsive design vs. adaptive design</h2>
              <p>
                Responsive and adaptive design solve the same problem in different ways.
                Responsive design uses flexible layouts that adjust fluidly across the full
                range of screen sizes. Adaptive design uses several fixed layouts and selects
                the closest match for a particular device or width.
              </p>
              <p>
                Adaptive design can produce tightly optimized experiences for a known set of
                screens. The tradeoff is maintenance: every additional layout must be designed,
                tested, and kept consistent. Responsive design is more future-proof for most
                businesses because one flexible codebase can serve phones, tablets, laptops,
                large monitors, and screens that arrive later.
              </p>
              <div className="responsive-table-wrap" role="region" aria-label="Responsive and adaptive design comparison" tabIndex="0">
                <table className="responsive-comparison-table">
                  <thead>
                    <tr><th>Factor</th><th>Responsive design</th><th>Adaptive design</th></tr>
                  </thead>
                  <tbody>
                    <tr><th scope="row">Behavior</th><td>Scales continuously</td><td>Switches between fixed layouts</td></tr>
                    <tr><th scope="row">Maintenance</th><td>One flexible codebase</td><td>Multiple layouts to maintain</td></tr>
                    <tr><th scope="row">Future-proofing</th><td>Strong</td><td>New devices may require updates</td></tr>
                    <tr><th scope="row">Initial build</th><td>Usually faster</td><td>More upfront planning</td></tr>
                    <tr><th scope="row">Best fit</th><td>Most websites</td><td>Device-specific experiences</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                For most small businesses and entrepreneurs, responsive design is the better
                fit. It is simpler to maintain, keeps the brand experience consistent, and
                performs well across the devices customers already use.
              </p>
            </section>

            <section id="why-it-matters">
              <p className="guide-section-label">The business case</p>
              <h2>Why responsive design matters in 2026</h2>
              <p>
                A poor mobile experience creates immediate friction. Visitors who cannot read
                the page, use the navigation, complete a form, or tap a call-to-action are less
                likely to become customers. Responsive design removes those obstacles and makes
                the path from first visit to inquiry or purchase easier to follow.
              </p>
              <p>
                Search visibility is part of the same story. Google uses the mobile version of
                a page for indexing and ranking, so mobile usability, accessible content, and
                consistent information are core website concerns—not optional finishing touches.
              </p>

              <div className="responsive-benefit-grid">
                <article><span>01</span><h3>Better engagement</h3><p>Visitors can read, navigate, and act without pinching, zooming, or fighting the layout.</p></article>
                <article><span>02</span><h3>Stronger search foundation</h3><p>One consistent mobile-first page is easier to maintain and easier for search engines to understand.</p></article>
                <article><span>03</span><h3>Lower maintenance</h3><p>Updates apply across every device instead of being repeated across separate site versions.</p></article>
                <article><span>04</span><h3>Consistent brand</h3><p>The same visual system and message carry from the smallest phone to the widest desktop.</p></article>
              </div>

              <div className="responsive-pro-tip">
                <span>Future-ready</span>
                <p>
                  Fluid layouts also adapt more gracefully to foldable phones, wide displays,
                  embedded browsers, and other formats that do not fit a traditional phone,
                  tablet, and desktop checklist.
                </p>
              </div>
            </section>

            <section id="best-practices">
              <p className="guide-section-label">Build it well</p>
              <h2>Responsive web design best practices</h2>
              <p>
                Start with a mobile-first strategy: design the smallest useful version first,
                then add space and complexity as the layout grows. This forces the project to
                prioritize the content and actions that matter most while keeping the initial
                experience lean.
              </p>
              <p>
                Add breakpoints only when the content needs them. Slowly resize the layout and
                watch for lines that become unreadable, navigation that no longer fits, awkward
                empty space, or components that begin to collide. The page itself will tell you
                where its breakpoints belong.
              </p>
              <div className="guide-checklist">
                <h3>A durable responsive build should:</h3>
                <ul>
                  <li>Use fluid type with relative units and <code>clamp()</code> where it improves readability.</li>
                  <li>Keep images inside their containers and provide explicit dimensions to reduce layout shift.</li>
                  <li>Use efficient formats such as WebP or AVIF when they suit the image.</li>
                  <li>Give buttons and links generous touch targets and clear focus states.</li>
                  <li>Avoid fixed-width containers that create horizontal scrolling.</li>
                  <li>Test with browser tools and follow up on real phones and tablets.</li>
                  <li>Respect reduced-motion preferences and accessibility settings.</li>
                </ul>
              </div>
              <p>
                Common mistakes include locking columns to fixed pixel widths, treating desktop
                as the default experience, shrinking text too far on phones, and hiding useful
                content just to make a layout fit. A responsive page should preserve the value
                of the content, not merely squeeze it into a smaller rectangle.
              </p>
              <div className="responsive-pro-tip">
                <span>Test beyond emulators</span>
                <p>
                  Browser developer tools are excellent for fast iteration. Physical devices
                  still reveal details they cannot fully reproduce, including tap accuracy,
                  mobile browser chrome, font rendering, and real connection conditions.
                </p>
              </div>
            </section>

            <section id="component-shift">
              <p className="guide-section-label">A designer&apos;s perspective</p>
              <h2>The shift I did not see coming</h2>
              <p>
                When I started working on responsive projects, the conversation was almost
                entirely about breakpoints: one width for small phones, another for tablets,
                and another for laptops. The assumption was that covering those widths meant
                covering the web.
              </p>
              <p>
                That way of thinking is now too limited. The bigger shift is from viewport-level
                thinking to component-level thinking. Container queries let a component respond
                to the space it actually receives. A card can work in a sidebar, a compact grid,
                or a wide feature section without being rebuilt for each location.
              </p>
              <p>
                Fluid typography had a similar effect on how I approach text. Instead of writing
                several font-size declarations for each heading, I can define a useful range and
                let the browser scale between it. The result feels smoother and leaves behind a
                cleaner, more maintainable system.
              </p>
              <p>
                The challenge that remains is consistency across actual devices. A layout that
                looks right at one phone width can still expose an edge case a few pixels away.
                Real-device testing is how those gaps surface.
              </p>
              <blockquote className="responsive-pullquote">
                <p>
                  Stop treating responsive design as a checklist of devices. Treat it as a system
                  of flexible relationships between content and space.
                </p>
                <cite>— Dylan</cite>
              </blockquote>
            </section>

            <section id="smith-digitals-approach">
              <p className="guide-section-label">How we build</p>
              <h2>Responsive websites for small businesses</h2>
              <p>
                Smith Digitals works with small businesses and entrepreneurs that need a website
                to perform wherever customers find it. Every build starts with a mobile-first
                structure, uses modern CSS techniques, and is checked across a practical range of
                layouts before launch.
              </p>

              <div className="responsive-project-strip" aria-label="Selected Smith Digitals client artwork">
                <figure>
                  <img src={mcguireArtwork} alt="McGuire Landscaping client artwork" width="1240" height="993" loading="lazy" />
                  <figcaption>Local services</figcaption>
                </figure>
                <figure>
                  <img src={bbsArtwork} alt="BBS Bakery client artwork" width="873" height="881" loading="lazy" />
                  <figcaption>Local commerce</figcaption>
                </figure>
                <figure className="responsive-project-brand">
                  <img src={smithLogo} alt="Smith Digitals" width="512" height="512" loading="lazy" />
                  <figcaption>Strategy + design + build</figcaption>
                </figure>
              </div>

              <p>
                If you are ready to see what a properly built responsive site can do for your
                business, explore the <Link to="/services">full service catalog</Link> or review
                the <Link to="/pricing">web design packages</Link>. Smith Digitals combines web
                design with SEO, analytics, automation, and digital marketing to create a more
                complete online presence.
              </p>
            </section>

            <section id="takeaways">
              <p className="guide-section-label">The essentials</p>
              <h2>Key takeaways</h2>
              <div className="responsive-table-wrap" role="region" aria-label="Responsive design key takeaways" tabIndex="0">
                <table className="responsive-comparison-table responsive-takeaway-table">
                  <thead><tr><th>Point</th><th>What to remember</th></tr></thead>
                  <tbody>
                    <tr><th scope="row">Core pillars</th><td>Fluid grids, flexible images, and media queries form the foundation.</td></tr>
                    <tr><th scope="row">Mobile-first</th><td>Start with the smallest useful layout, then add complexity as space grows.</td></tr>
                    <tr><th scope="row">Breakpoints</th><td>Let the content—not a device list—decide where the layout changes.</td></tr>
                    <tr><th scope="row">Business value</th><td>A usable site supports engagement, conversions, search, and maintainability.</td></tr>
                    <tr><th scope="row">Modern components</th><td>Container queries make reusable interface pieces more independent and durable.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <p className="guide-section-label">Common questions</p>
              <h2>Frequently asked questions</h2>
              <div className="guide-faq-list">
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section id="recommended" className="guide-sources">
              <p className="guide-section-label">Keep exploring</p>
              <h2>Recommended next reads</h2>
              <ul>
                <li><Link to="/case-studies/stone-mountain-yogurt">Stone Mountain Yogurt case study</Link></li>
                <li><Link to="/case-studies/mcguires-landscaping">McGuire&apos;s Lawn &amp; Landscaping case study</Link></li>
                <li><Link to="/guides/how-to-rank-on-google-for-free">How to rank on Google for free</Link></li>
                <li><Link to="/services">Digital marketing and web design services</Link></li>
              </ul>
            </section>
          </article>

          <aside className="guide-sidebar" aria-label="Guide navigation">
            <div>
              <p>In this guide</p>
              <nav>
                <a href="#how-it-works">How it works</a>
                <a href="#responsive-vs-adaptive">Responsive vs. adaptive</a>
                <a href="#why-it-matters">Why it matters</a>
                <a href="#best-practices">Best practices</a>
                <a href="#component-shift">The component shift</a>
                <a href="#takeaways">Key takeaways</a>
                <a href="#faq">FAQs</a>
              </nav>
              <Link to="/services">Explore web design services <span aria-hidden="true">↗</span></Link>
              <Link to="/pricing">See ways to work together <span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </div>

        <section className="guide-cta">
          <div className="guide-shell">
            <p>Ready for a website that fits the real world?</p>
            <h2>Build one experience that works everywhere.</h2>
            <div>
              <p>
                Smith Digitals creates fast, responsive websites with a clear strategy,
                thoughtful structure, and room to grow.
              </p>
              <Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
