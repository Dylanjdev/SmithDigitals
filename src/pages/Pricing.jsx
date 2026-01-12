import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./Pricing.css";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "1 Page Website",
        "Basic SEO",
        "Responsive Design",
        "Email Support",
      ],
      checkoutLink: "https://buy.stripe.com/9B614p7QLfIk1DBaT81VK00",
    },
    {
      name: "Pro",
      price: "$599",
      features: [
        "3 Page Website",
        "Advanced SEO",
        "Responsive Design",
        "Google Business Setup",
        "Priority Support",
      ],
      checkoutLink: "https://buy.stripe.com/4gMfZjc711Rueqne5k1VK01",
    },
    {
      name: "Premium",
      price: "$999",
      features: [
        "Unlimited Pages",
        "Full SEO Optimization",
        "Branding & Logo Design",
        "Monthly Maintenance",
        "Priority Support",
      ],
      checkoutLink: "https://buy.stripe.com/eVqcN71sn8fS81Zd1g1VK02",
    },
    {
      name: "Custom & Budget-Friendly",
      price: "Flexible",
      features: [
        "Tailored to your needs",
        "Custom features & design",
        "Flexible pricing based on budget",
        "Personalized consultation",
      ],
    },
  ];

  const monthlyPlans = [
    {
      name: "Essential",
      price: "$50/mo",
      features: [
        "Website Updates",
        "Security Monitoring",
        "Plugin Updates",
        "Monthly Backups",
        "Email Support",
      ],
      checkoutLink: "https://buy.stripe.com/aFadRb5ID53G6XV6CS1VK03",
    },
    {
      name: "Professional",
      price: "$199/mo",
      features: [
        "Everything in Essential",
        "Content Updates (2-4/mo)",
        "SEO Monitoring",
        "Performance Optimization",
        "Priority Support",
      ],
      checkoutLink: "https://buy.stripe.com/aFa9AV9YT3ZCfurbXc1VK04",
    },
    {
      name: "Premium Care",
      price: "$399/mo",
      features: [
        "Everything in Professional",
        "Unlimited Content Updates",
        "Advanced SEO Management",
        "24/7 Monitoring",
        "Dedicated Account Manager",
      ],
      checkoutLink: "https://buy.stripe.com/4gM28t9YTbs481Zf9o1VK05",
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Pricing Plans | Smith Digitals | Affordable Web Design Packages</Title>
      <Meta
        name="description"
        content="Explore affordable web design and SEO packages from Smith Digitals. Choose from Basic, Pro, or Premium plans — or get a custom budget-friendly solution for your business."
      />
      <Meta
        name="keywords"
        content="web design pricing, website packages, SEO plans, affordable web development, Smith Digitals pricing"
      />
      <Meta property="og:title" content="Smith Digitals | Web Design Pricing Plans" />
      <Meta
        property="og:description"
        content="Affordable website design, SEO, and branding plans tailored for your business."
      />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/pricing" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Web Design Pricing Plans" />
      <Meta
        name="twitter:description"
        content="Explore flexible and affordable web design packages from Smith Digitals."
      />
      <Meta name="twitter:image" content="/og-image.png" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/pricing" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Smith Digitals Pricing Plans",
          url: "https://smithdigitals.com/pricing",
          description:
            "Explore affordable web design and SEO packages for small businesses.",
          provider: {
            "@type": "Organization",
            name: "Smith Digitals",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.png",
          },
          itemListElement: plans.map((plan, i) => ({
            "@type": "Offer",
            position: i + 1,
            name: plan.name,
            price: plan.price !== "Flexible" ? plan.price.replace("$", "") : "Varies",
            priceCurrency: plan.price !== "Flexible" ? "USD" : undefined,
            description: plan.features.join(", "),
            url: "https://smithdigitals.com/contact",
          })),
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="pricing-page">
        <h2>Website Design Plans</h2>
        <p className="pricing-subtitle">One-time investment to build your online presence</p>
        <div className="pricing-cards">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`pricing-card ${
                plan.name === "Custom & Budget-Friendly" ? "custom-plan" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 }}
            >
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              {plan.checkoutLink ? (
                <a 
                  href={plan.checkoutLink} 
                  className="pricing-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              ) : (
                <Link to="/contact" className="pricing-btn">
                  Get Started
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <h2 style={{ marginTop: '6rem' }}>Monthly Management Plans</h2>
        <p className="pricing-subtitle">Keep your website running smoothly with ongoing support</p>
        <div className="pricing-cards">
          {monthlyPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="pricing-card monthly-plan"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 }}
            >
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              {plan.checkoutLink ? (
                <a 
                  href={plan.checkoutLink} 
                  className="pricing-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </a>
              ) : (
                <Link to="/contact" className="pricing-btn">
                  Subscribe
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
