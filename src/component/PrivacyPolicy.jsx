import { privacyData } from "../data/PrivacyPolicy";
import { CommonHero } from "./shareComponents/CommonHero";

const PrivacyPolicy = () => {
  return (
    <section>
        <CommonHero description={"Privacy Policy"}/>
      <div className="container mx-auto p-8 text-gray-900 bg-white min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center">
          {privacyData.title}
        </h1>

        {privacyData.sections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            <p className="leading-relaxed">{section.content}</p>
          </section>
        ))}

        <footer className="text-sm text-gray-500 text-center mt-12">
          Last updated: {privacyData.lastUpdated}
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
