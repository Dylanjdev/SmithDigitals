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
        "1 Website",
        "Basic SEO",
        "Responsive Design",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "$599",
      features: [
        "Up to 3 Websites",
        "Advanced SEO",
        "Responsive Design",
        "Google Business Setup",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      features: [
        "Unlimited Websites",
        "Full SEO Optimization",
        "Branding & Logo Design",
        "Monthly Maintenance",
        "Priority Support",
      ],
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
        <h2>Pricing Plans</h2>
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
              <Link to="/contact" className="pricing-btn">
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
