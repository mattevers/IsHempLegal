import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for IsHempLegal.com — how we collect, use, and protect your information.",
  alternates: { canonical: "https://ishemplegal.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">
        Last updated: April 1, 2026
      </p>

      <div className="prose-custom space-y-6 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            1. Who We Are
          </h2>
          <p>
            IsHempLegal.com (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is an informational website that provides
            hemp and cannabinoid legal status information across the United
            States. Our website is located at https://ishemplegal.com.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            2. Information We Collect
          </h2>
          <p>
            <strong className="text-white">Information you provide:</strong> When
            you purchase a compliance report, we collect payment information
            through our payment processor, Stripe. We do not store your credit
            card number, CVV, or full payment details on our servers. We receive
            your email address and the state you selected for the report.
          </p>
          <p className="mt-3">
            <strong className="text-white">
              Information collected automatically:
            </strong>{" "}
            When you visit our site, we may collect standard web analytics data
            including your IP address, browser type, device type, pages visited,
            referring URL, and time spent on the site. This data is collected
            through Google Analytics and is used in aggregate to improve our
            service.
          </p>
          <p className="mt-3">
            <strong className="text-white">Cookies:</strong> We use essential
            cookies required for the site to function and analytics cookies
            (Google Analytics) to understand how visitors use our site. You can
            manage your cookie preferences through the cookie consent banner or
            your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To process your compliance report purchase and deliver the PDF</li>
            <li>To improve our website and user experience</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To respond to inquiries or support requests</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or trade your personal information to third
            parties. We do not send marketing emails unless you explicitly opt
            in.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            4. Third-Party Services
          </h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong className="text-white">Stripe</strong> — payment
              processing. Stripe&apos;s privacy policy:{" "}
              <a
                href="https://stripe.com/privacy"
                className="text-green-400 hover:text-green-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
            </li>
            <li>
              <strong className="text-white">Google Analytics</strong> — website
              analytics. Google&apos;s privacy policy:{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-green-400 hover:text-green-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong className="text-white">Vercel</strong> — website hosting.
              Vercel&apos;s privacy policy:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-green-400 hover:text-green-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            5. Data Retention
          </h2>
          <p>
            Analytics data is retained according to Google Analytics&apos;
            default retention settings. Payment records are retained by Stripe
            per their data retention policies and as required for tax and legal
            purposes. We do not maintain a user database or accounts on our
            servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            6. Your Rights
          </h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Request access to personal data we hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of analytics tracking via cookie settings</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:privacy@ishemplegal.com"
              className="text-green-400 hover:text-green-300 underline"
            >
              privacy@ishemplegal.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed at individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe a child has provided us with personal data, please contact us
            and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated &ldquo;Last updated&rdquo; date.
            Your continued use of the site after changes constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at{" "}
            <a
              href="mailto:privacy@ishemplegal.com"
              className="text-green-400 hover:text-green-300 underline"
            >
              privacy@ishemplegal.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
