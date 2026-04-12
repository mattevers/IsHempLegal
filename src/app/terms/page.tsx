import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for IsHempLegal.com — rules and disclaimers for using our hemp law information tool.",
  alternates: { canonical: "https://www.ishemplegal.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-white mb-2">
        Terms of Service
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Last updated: April 1, 2026
      </p>

      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using IsHempLegal.com (&ldquo;the Site&rdquo;), you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            2. Not Legal Advice
          </h2>
          <p>
            <strong className="text-white">
              The information on this Site is for general informational purposes
              only and does not constitute legal advice.
            </strong>{" "}
            We are not a law firm, and no attorney-client relationship is created
            by your use of this Site. Hemp and cannabis laws are complex, vary by
            jurisdiction, and change frequently. The legal status information
            provided on this Site may not reflect the most current legal
            developments.
          </p>
          <p className="mt-3">
            You should not rely solely on information from this Site to make
            legal, business, or purchasing decisions. Always consult with a
            qualified attorney or your local authorities to verify the current
            legal status of hemp products in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            3. Accuracy of Information
          </h2>
          <p>
            We make reasonable efforts to keep the legal information on this Site
            accurate and up to date. However, we do not warrant or guarantee the
            accuracy, completeness, or timeliness of any information provided. Laws
            change frequently, and there may be a delay between when a law changes
            and when our data is updated.
          </p>
          <p className="mt-3">
            Each state data record includes a &ldquo;Last Updated&rdquo; date.
            Use this date to assess the freshness of the information. If the date
            is more than 30 days old, we recommend independently verifying the
            information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            4. Affiliate Links
          </h2>
          <p>
            This Site may contain affiliate links to third-party retailers. If
            you click an affiliate link and make a purchase, we may receive a
            commission at no additional cost to you. Affiliate relationships do
            not influence the legal information we provide. We only link to
            retailers we believe to be reputable, but we do not endorse, verify,
            or guarantee any third-party products or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            5. Intellectual Property
          </h2>
          <p>
            All content on this Site — including text, graphics, logos, icons, and
            software — is the property of IsHempLegal.com or its content
            suppliers and is protected by US and international copyright laws.
            You may not reproduce, distribute, or create derivative works from
            our content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, IsHempLegal.com and its
            owners, operators, and affiliates shall not be liable for any
            direct, indirect, incidental, consequential, or punitive damages
            arising from your use of this Site, including but not limited to
            damages resulting from reliance on legal information provided,
            purchasing decisions, or business decisions based on our data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            7. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless IsHempLegal.com, its
            owners, and affiliates from any claims, damages, or expenses
            (including attorney fees) arising from your use of the Site or
            violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            8. Changes to Terms
          </h2>
          <p>
            We may update these Terms of Service at any time. Changes take effect
            immediately upon posting. Your continued use of the Site after
            changes constitutes acceptance of the new terms. We encourage you to
            review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            9. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by the laws of the United States.
            Any disputes arising from these terms or your use of the Site shall
            be resolved in the courts of the state in which the Site operator
            resides.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            10. Contact Us
          </h2>
          <p>
            If you have questions about these terms, contact us at{" "}
            <a
              href="mailto:legal@ishemplegal.com"
              className="text-green-400 hover:text-green-300 underline"
            >
              legal@ishemplegal.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
