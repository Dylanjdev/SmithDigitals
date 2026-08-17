import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import "./GoogleRankingGuide.css";

const pageUrl = "https://smithdigitals.com/guides/how-to-rank-on-google-for-free/";
const pageTitle = "How to Rank on Google for Free | Smith Digitals";
const pageDescription =
  "Learn how small businesses can improve local Google visibility for free with a complete Business Profile, genuine reviews, useful content, and local SEO.";

const faqs = [
  {
    question: "How long does it take to rank on Google?",
    answer:
      "There is no guaranteed timeline. Results depend on competition, location, website quality, profile completeness, reviews, and how quickly Google discovers and evaluates your changes.",
  },
  {
    question: "Can I rank on Google without a website?",
    answer:
      "An eligible local business can appear through a verified Google Business Profile without a website, but a useful website gives Google and potential customers more information about your services, expertise, and service area.",
  },
  {
    question: "Is a Google Business Profile really free?",
    answer:
      "Yes. Eligible businesses can add, claim, verify, and manage a Google Business Profile at no charge. You do not have to pay Google for a better local ranking.",
  },
  {
    question: "Do keywords still matter for local SEO?",
    answer:
      "The language customers use still matters, but keywords should appear naturally in accurate service descriptions and helpful website content. Repeating phrases unnaturally or adding services to your business name can violate guidelines and hurt trust.",
  },
  {
    question: "How many Google reviews do I need?",
    answer:
      "There is no universal target. Focus on a steady flow of genuine reviews from real customers and respond professionally. The right benchmark depends on the businesses competing in your local market.",
  },
  {
    question: "Should I buy or incentivize Google reviews?",
    answer:
      "No. Reviews should reflect genuine experiences. Fake or incentivized engagement can be removed and may lead to restrictions on your Business Profile.",
  },
  {
    question: "Should I pay someone who promises a number-one ranking?",
    answer:
      "Be cautious. No provider controls Google's rankings, and Google says there is no way to request or pay for a better local ranking. A credible SEO partner should explain the work, measurement, risks, and realistic expectations.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How to Rank on Google for Free: A Beginner's Guide",
      description: pageDescription,
      image: "https://smithdigitals.com/og-image.jpg",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      mainEntityOfPage: pageUrl,
      articleSection: "Local SEO",
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
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
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
          name: "How to Rank on Google for Free",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function GoogleRankingGuide() {
  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="how to rank on Google for free, Google Business Profile, local SEO, rank higher on Google, small business SEO"
      />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="article:published_time" content="2026-08-05" />
      <Meta property="article:modified_time" content="2026-08-05" />
      <Meta property="article:author" content="Dylan Smith" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="twitter:description" content={pageDescription} />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <main className="guide-page">
        <header className="guide-hero">
          <div className="guide-shell">
            <nav className="guide-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Local SEO guide</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="guide-eyebrow">Local SEO · Beginner friendly · 12 minute read</p>
              <h1>How to rank on Google for free</h1>
              <p className="guide-deck">
                A practical guide for small business owners who want to get found in
                Google Search and Maps—without buying ads or chasing shortcuts.
              </p>
              <div className="guide-byline">
                <span className="guide-author-mark" aria-hidden="true">DS</span>
                <p>
                  Written by <strong>Dylan Smith</strong>
                  <span>Published and reviewed August 5, 2026</span>
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="guide-shell guide-layout">
          <article className="guide-article">
            <section className="guide-quick-answer" aria-labelledby="quick-answer-title">
              <p>Quick answer</p>
              <h2 id="quick-answer-title">Yes, a small business can improve its Google visibility for free.</h2>
              <p>
                Start with an accurate, verified Google Business Profile, earn genuine
                customer reviews, publish useful website content, and make it easy for
                Google to understand what you do and where you work. None of this
                guarantees a top position, but it builds the foundation Google recommends.
              </p>
            </section>

            <section id="what-ranking-means">
              <p className="guide-section-label">The starting point</p>
              <h2>What “ranking on Google” means for a local business</h2>
              <p>
                A local company can appear in standard organic search results, the map
                results, or a branded result for its own name. This guide focuses mainly
                on local visibility—the searches people make when they need a nearby
                provider, such as “plumber near me” or “web designer in Virginia.”
              </p>
              <p>
                You do not have to buy ads to qualify for those results. Organic and
                local visibility can be earned, but “free” still requires time, accurate
                information, useful content, and consistent maintenance.
              </p>
            </section>

            <section id="business-profile">
              <p className="guide-section-label">Your free local listing</p>
              <h2>What is a Google Business Profile?</h2>
              <p>
                A Google Business Profile is the listing an eligible business can manage
                on Google Search and Maps. It can display your business name, category,
                service area or address, hours, phone number, website, photos, services,
                updates, and customer reviews.
              </p>
              <div className="guide-note">
                <strong>Important eligibility note</strong>
                <p>
                  Business Profiles are intended for storefront and service-area businesses
                  that make in-person contact with customers. Online-only businesses are
                  generally not eligible. Review Google’s current eligibility rules before
                  creating a listing.
                </p>
              </div>
              <p>
                Eligible businesses can add or claim a profile at no charge. Begin at
                {" "}
                <a href="https://business.google.com/add" target="_blank" rel="noopener noreferrer">
                  Google’s Business Profile setup
                </a>
                {" "}and complete the verification steps offered for your business.
              </p>
            </section>

            <section id="ranking-factors">
              <p className="guide-section-label">How local search works</p>
              <h2>The three main local ranking factors</h2>
              <p>
                Google says local results are mainly based on relevance, distance, and
                prominence. No single setting controls your position; Google considers
                these signals together for each search.
              </p>
              <div className="guide-factor-grid">
                <article>
                  <span>01</span>
                  <h3>Relevance</h3>
                  <p>How closely your profile and website match what the person is searching for.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Distance</h3>
                  <p>How far your business is from the searcher or the location named in the search.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Prominence</h3>
                  <p>How established and well-known the business appears online and offline.</p>
                </article>
              </div>
              <p>
                You cannot optimize your way around physical distance, but you can improve
                relevance and prominence through complete information, helpful pages,
                authentic reviews, accurate citations, and links from reputable websites.
              </p>
            </section>

            <section id="free-steps">
              <p className="guide-section-label">The practical checklist</p>
              <h2>Seven free ways to improve your Google visibility</h2>
              <ol className="guide-steps">
                <li>
                  <div>
                    <h3>Claim and verify your Business Profile</h3>
                    <p>
                      Search for your exact business name first so you do not create a
                      duplicate. Claim the existing listing when one exists, then complete
                      Google’s verification process.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Complete every relevant field accurately</h3>
                    <p>
                      Add current hours, phone number, website, service area, accessibility
                      details, and a clear description. Keep this information consistent
                      with your website and other trusted directories.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Choose the most accurate categories and services</h3>
                    <p>
                      Select a primary category that describes the core business—not the
                      category with the biggest search volume. Add real secondary categories
                      and service descriptions where they apply.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Add useful, original photos</h3>
                    <p>
                      Show the storefront, team, process, products, or completed work when
                      appropriate. Accurate images help customers understand what to expect;
                      avoid generic stock photos that do not represent the business.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Ask real customers for honest reviews</h3>
                    <p>
                      Share your review link after a genuine interaction and respond to
                      feedback professionally. Never buy reviews, write them yourself, or
                      offer rewards in exchange for positive ratings.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Keep customers informed</h3>
                    <p>
                      Update holiday hours, add current photos, respond to reviews, and use
                      profile updates for meaningful news or offers. Treat the listing as a
                      customer information channel, not a place to repeat keywords.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Strengthen the website connected to your profile</h3>
                    <p>
                      Link to a fast, mobile-friendly website that clearly explains your
                      services, location or service area, experience, contact details, and
                      next step for customers.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section id="website-seo">
              <p className="guide-section-label">Beyond the map listing</p>
              <h2>Your website still matters</h2>
              <p>
                Your Business Profile and website support each other. The profile helps
                Google understand the local entity; the website gives you room to explain
                services, answer detailed questions, demonstrate expertise, and earn links.
              </p>
              <div className="guide-checklist">
                <h3>A strong local business website should:</h3>
                <ul>
                  <li>Use one clear, descriptive title and heading for each important page.</li>
                  <li>Explain each core service in original, customer-focused language.</li>
                  <li>State the real location or service area without creating copied doorway pages.</li>
                  <li>Display accurate contact details and a clear way to take the next step.</li>
                  <li>Work well on phones and load without unnecessary delays.</li>
                  <li>Link related pages together with descriptive, crawlable links.</li>
                  <li>Answer the questions customers ask before choosing a provider.</li>
                </ul>
              </div>
              <p>
                Google’s own SEO guidance recommends content that is easy to read,
                well-organized, original, current, helpful, reliable, and written for people.
                There is no preferred word count and no secret phrase that automatically
                moves a page to number one.
              </p>
            </section>

            <section id="action-plan">
              <p className="guide-section-label">Start today</p>
              <h2>A 90-minute local SEO action plan</h2>
              <div className="guide-timeline">
                <div><span>0–15 min</span><p>Find, claim, or begin verifying your Business Profile.</p></div>
                <div><span>15–35 min</span><p>Correct your hours, phone, website, address, and service area.</p></div>
                <div><span>35–50 min</span><p>Review the primary category, secondary categories, and services.</p></div>
                <div><span>50–65 min</span><p>Add several accurate, high-quality business photos.</p></div>
                <div><span>65–80 min</span><p>Create your review link and write a simple, honest request message.</p></div>
                <div><span>80–90 min</span><p>Check your website on a phone and fix the clearest customer roadblock.</p></div>
              </div>
            </section>

            <section id="avoid">
              <p className="guide-section-label">Avoid shortcuts</p>
              <h2>What not to do</h2>
              <ul className="guide-warning-list">
                <li>Do not buy, trade, or incentivize reviews.</li>
                <li>Do not add extra keywords or locations to your real business name.</li>
                <li>Do not create duplicate profiles for the same eligible business.</li>
                <li>Do not publish dozens of nearly identical city pages.</li>
                <li>Do not trust anyone who guarantees a specific ranking.</li>
              </ul>
              <p>
                Sustainable SEO is not a trick. It is the ongoing work of making your
                business easier to understand, easier to trust, and easier to choose.
              </p>
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

            <section id="sources" className="guide-sources">
              <p className="guide-section-label">Primary sources</p>
              <h2>Official Google resources</h2>
              <p>This guide was checked against Google’s documentation on August 5, 2026.</p>
              <ul>
                <li><a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer">Tips to improve your local ranking on Google</a></li>
                <li><a href="https://support.google.com/business/answer/7039811" target="_blank" rel="noopener noreferrer">Get started with Google Business Profile</a></li>
                <li><a href="https://support.google.com/business/answer/13763036" target="_blank" rel="noopener noreferrer">Business Profile eligibility and ownership guidelines</a></li>
                <li><a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google Search Central SEO Starter Guide</a></li>
                <li><a href="https://support.google.com/contributionpolicy/answer/7422880" target="_blank" rel="noopener noreferrer">Google Maps user-generated content policy</a></li>
              </ul>
            </section>
          </article>

          <aside className="guide-sidebar" aria-label="Guide navigation">
            <div>
              <p>In this guide</p>
              <nav>
                <a href="#what-ranking-means">What ranking means</a>
                <a href="#business-profile">Business Profiles</a>
                <a href="#ranking-factors">Ranking factors</a>
                <a href="#free-steps">Seven free steps</a>
                <a href="#website-seo">Website SEO</a>
                <a href="#action-plan">90-minute plan</a>
                <a href="#faq">FAQs</a>
              </nav>
              <Link to="/guides/local-seo-vs-regular-seo">Local SEO vs. regular SEO <span aria-hidden="true">↗</span></Link>
              <Link to="/services">Need help with SEO? <span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </div>

        <section className="guide-cta">
          <div className="guide-shell">
            <p>Want a clearer path to being found?</p>
            <h2>Turn the checklist into a focused local SEO plan.</h2>
            <div>
              <p>
                Smith Digitals can help connect your Business Profile, website,
                content, and measurement into one practical search strategy.
              </p>
              <Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
