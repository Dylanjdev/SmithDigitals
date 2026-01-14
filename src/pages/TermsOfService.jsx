import "./TermsOfService.css";
import { Title, Meta, Link as MetaLink } from "react-head";

export default function TermsOfService() {
  return (
    <>
      {/* SEO META TAGS */}
      <Title>Terms of Service | Smith Digitals</Title>
      <Meta
        name="description"
        content="Read Smith Digitals' terms of service. Understand the terms and conditions for using our web design and SEO services."
      />
      <Meta name="robots" content="noindex, follow" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/terms-of-service" />

      <div className="terms-page">
        <h2>Terms of Service</h2>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <section>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using Smith Digitals' website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h3>2. Services Provided</h3>
          <p>
            Smith Digitals provides web design, development, SEO optimization, branding, and related digital services. Specific deliverables, timelines, and pricing will be outlined in individual project agreements or invoices.
          </p>
        </section>

        <section>
          <h3>3. Payment Terms</h3>
          <ul>
            <li>Payment is required before project commencement or as specified in the project agreement.</li>
            <li>All prices are in USD unless otherwise stated.</li>
            <li>Refunds are handled on a case-by-case basis and must be requested within 14 days of payment.</li>
            <li>Monthly subscription services require 30 days notice for cancellation.</li>
          </ul>
        </section>

        <section>
          <h3>4. Client Responsibilities</h3>
          <p>
            Clients are responsible for providing:
          </p>
          <ul>
            <li>Timely feedback and approvals</li>
            <li>All necessary content, images, and materials</li>
            <li>Domain registration and contributor access for DNS management</li>
            <li>Clear communication regarding project requirements and changes</li>
          </ul>
        </section>

        <section>
          <h3>5. Intellectual Property</h3>
          <p>
            Upon full payment, clients receive ownership of the final delivered website design and content. Smith Digitals retains the right to use completed work in our portfolio and marketing materials unless otherwise agreed in writing.
          </p>
          <p>
            Third-party assets (stock photos, fonts, plugins) remain the property of their respective owners and may require separate licensing.
          </p>
        </section>

        <section>
          <h3>6. Revisions and Changes</h3>
          <p>
            Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions or scope changes may incur extra fees at our standard hourly rate of $35/hour.
          </p>
        </section>

        <section>
          <h3>7. Project Timelines</h3>
          <p>
            We strive to meet all agreed-upon deadlines. However, timelines may be affected by client delays in providing feedback or materials. We are not liable for delays caused by circumstances beyond our control.
          </p>
        </section>

        <section>
          <h3>8. Hosting and Maintenance</h3>
          <p>
            Smith Digitals covers website hosting as part of our service packages. Domain registration remains the client's responsibility. Clients will invite us as a contributor to manage DNS records and connect the domain to our hosting infrastructure. Monthly maintenance plans are available and billed separately. Failure to maintain your website may result in security vulnerabilities or downtime.
          </p>
        </section>

        <section>
          <h3>9. Limitation of Liability</h3>
          <p>
            Smith Digitals is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.
          </p>
        </section>

        <section>
          <h3>10. Termination</h3>
          <p>
            Either party may terminate services with written notice. Clients are responsible for payment of all work completed up to the termination date. Deposits are non-refundable unless otherwise agreed.
          </p>
        </section>

        <section>
          <h3>11. Confidentiality</h3>
          <p>
            We respect the confidentiality of all client information and will not disclose sensitive business information to third parties without permission.
          </p>
        </section>

        <section>
          <h3>12. Governing Law</h3>
          <p>
            These Terms of Service are governed by the laws of the State of Virginia, United States. Any disputes will be resolved in the appropriate courts of Virginia.
          </p>
        </section>

        <section>
          <h3>13. Changes to Terms</h3>
          <p>
            Smith Digitals reserves the right to update these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date.
          </p>
        </section>

        <section>
          <h3>14. Contact Information</h3>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:dylanjsmith.dev@gmail.com">dylanjsmith.dev@gmail.com</a>.
          </p>
        </section>
      </div>
    </>
  );
}
