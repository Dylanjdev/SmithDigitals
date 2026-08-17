import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import "./Pricing.css";

export default function Pricing() {
  const engagements = [
    {
      number: "01",
      name: "Flagship Build",
      type: "Project engagement",
      description:
        "For businesses ready to reposition, relaunch, or build a serious digital foundation from the ground up.",
      features: [
        "Discovery and strategic direction",
        "Positioning and content architecture",
        "Custom visual design and development",
        "SEO, analytics, and launch infrastructure",
      ],
    },
    {
      number: "02",
      name: "Growth Sprint",
      type: "Focused engagement",
      description:
        "For a clear, high-leverage problem that needs senior attention, fast decisions, and a defined finish line.",
      features: [
        "Conversion and performance audits",
        "Landing pages and campaign systems",
        "SEO or paid media foundations",
        "Automation and integration builds",
      ],
    },
    {
      number: "03",
      name: "Digital Partner",
      type: "Ongoing engagement",
      description:
        "For businesses that need an experienced digital operator embedded in the work as priorities evolve.",
      features: [
        "Monthly strategic priorities",
        "Website and conversion optimization",
        "Campaign, content, and search support",
        "Reporting, testing, and iteration",
      ],
    },
  ];

  const principles = [
    {
      title: "Scoped around outcomes",
      desc: "The shape of the engagement follows the business goal, not a padded deliverables list.",
    },
    {
      title: "Direct senior access",
      desc: "You work with me—the person setting the direction and building the work—at every step.",
    },
    {
      title: "Clear milestones",
      desc: "Every engagement has a defined path, decision points, and visibility into what is moving.",
    },
    {
      title: "Built for momentum",
      desc: "The work is designed to launch cleanly, measure what matters, and improve after release.",
    },
  ];

  return (
    <>
      <Title>Ways to Work Together | Smith Digitals</Title>
      <Meta
        name="description"
        content="Explore project, sprint, and ongoing digital engagements with Smith Digitals—a founder-led studio for strategy, brand, web, growth, and automation."
      />
      <Meta
        name="keywords"
        content="digital studio engagement, custom web design project, growth sprint, digital strategy retainer, Smith Digitals"
      />
      <Meta property="og:title" content="Ways to Work Together | Smith Digitals" />
      <Meta
        property="og:description"
        content="Flexible project, sprint, and ongoing engagements shaped around the business outcome."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/pricing" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Ways to Work Together | Smith Digitals" />
      <Meta
        name="twitter:description"
        content="Three flexible ways to bring founder-led strategy, design, technology, and growth into your business."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/pricing" />

      <main className="pricing-page engagement-page">
        <section className="engagement-hero">
          <p className="inner-page-eyebrow">Ways to work together</p>
          <h1>The right engagement for the problem in front of you.</h1>
          <p>
            No bloated retainers. No mystery handoffs. I scope every engagement
            around the outcome, the complexity, and the pace the business actually
            needs.
          </p>
        </section>

        <section className="engagement-list">
          {engagements.map((engagement, index) => (
            <motion.article
              key={engagement.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="engagement-heading">
                <span>{engagement.number}</span>
                <div>
                  <p>{engagement.type}</p>
                  <h2>{engagement.name}</h2>
                </div>
              </div>
              <p className="engagement-description">{engagement.description}</p>
              <ul>
                {engagement.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact">Discuss this engagement ↗</Link>
            </motion.article>
          ))}
        </section>

        <section className="engagement-principles">
          <div className="engagement-principles-heading">
            <p className="inner-page-eyebrow">Every engagement</p>
            <h2>Senior attention is the baseline.</h2>
          </div>
          <div>
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="client-portal-callout">
          <div>
            <p className="client-portal-eyebrow">Existing client?</p>
            <h2>Your billing, in one secure place.</h2>
            <p>
              Review your active subscription, update payment details, or manage
              your plan through the Stripe Client Portal.
            </p>
          </div>
          <a
            href="https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400"
            className="client-portal-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open client portal ↗
          </a>
        </section>

        <section className="inner-page-cta">
          <p>Have a challenge that does not fit a neat box?</p>
          <h2>Good. Start there.</h2>
          <Link to="/contact">Tell me what needs to change ↗</Link>
        </section>
      </main>
    </>
  );
}
