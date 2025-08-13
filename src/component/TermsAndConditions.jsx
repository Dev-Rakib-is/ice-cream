import { CommonHero } from "./shareComponents/CommonHero";

const TermsAndConditions = () => {
  return (
    <section>
      <CommonHero description={"Conditions"} />
      <div className="container mx-auto p-6 text-gray-900 bg-white min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed">
            By accessing and using this website, you agree to be bound by these
            Terms & Conditions. You must be at least 13 years old to use this
            website. You agree not to use the website for any unlawful or
            prohibited purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. Orders and Payments
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              You agree to provide accurate and complete information when
              placing an order.
            </li>
            <li>
              We will process and deliver orders according to the details
              provided.
            </li>
            <li>
              While we strive to ensure secure payment processing, we are not
              responsible for any payment issues or fraud that may occur.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. Delivery and Returns
          </h2>
          <p className="leading-relaxed">
            Delivery times may vary based on location and circumstances. Returns
            and refunds are subject to our Return Policy, which should be
            reviewed separately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All content on this website including text, images, logos, and
            designs are owned by [YourSiteName] and protected by copyright laws.
            Unauthorized use is prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            We are not liable for any damages or losses resulting from the use
            of this website or products purchased here. If you experience any
            issues with our products, please contact us directly for assistance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Privacy</h2>
          <p className="leading-relaxed">
            We respect your privacy and protect your personal information. We do
            not share your data with third parties without your consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify these Terms & Conditions at
            any time. Changes will be posted on this page and take effect
            immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            8. Contact Information
          </h2>
          <p className="leading-relaxed">
            If you have any questions or concerns, please contact us at:
          </p>
          <p className="font-bold py-3">
            Email: <span className="font-normal"> info@icedelights.com</span>
          </p>
          <p className="font-bold">
            Phone: <span className="font-normal"> +5689 2589 6325</span>
          </p>
        </section>

        <footer className="text-sm text-gray-500 text-center mt-10">
          Last updated: August 12, 2025
        </footer>
      </div>
    </section>
  );
};

export default TermsAndConditions;
