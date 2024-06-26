import React from "react";
import { bannerImgThree } from "../../assets/images/images";
import { Helmet } from "react-helmet";

const DataProtectionPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Playcope - Data Protection Policy</title>
        <meta name="description" content="Data Protection Policy" />
      </Helmet>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgThree} alt="bannerImgThree" />
          </div>
          <h1 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            PLAYCOPE LTD DATA PROTECTION POLICY
          </h1>
          <div className="mb-4">
            <p className="font-bold pb-2">1. Introduction</p>
            <p>
              At PLAYCOPE LTD, we are committed to protecting the privacy and
              security of the personal data of our users. This Data Protection
              Policy outlines how we collect, use, disclose, and protect the
              personal data we gather through our Platform.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">2. Scope</p>
            <p>
              This policy applies to all personal data collected by PLAYCOPE LTD
              through our Platform
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">3. Collection of Personal Data</p>
            <p className="pb-2">
              We collect personal data from users when they interact with our
              website, including but not limited to:
            </p>
            <ul>
              <li>
                • Account registration information (e.g., name, email address)
              </li>
              <li>
                • Usage data (e.g., IP address, browser information, pages
                visited)
              </li>
              <li>• Payment information (if applicable)</li>
              <li>
                • Communication preferences (e.g., newsletter subscriptions)
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">4. Use of Personal Data</p>
            <p className="pb-2">
              We use personal data for the following purposes:
            </p>
            <ul>
              <li>• Providing and improving our services</li>
              <li>• Personalizing user experience</li>
              <li>
                • Communicating with users about their account and our services
              </li>
              <li>• Processing payments (if applicable)</li>
              <li>• Analyzing website usage and trends</li>
              <li>• Complying with legal obligations</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">5. Disclosure of Personal Data</p>
            <p className="pb-2">
              We may disclose personal data to the following parties:
            </p>
            <ul>
              <li>
                • Service providers who assist us in operating our website and
                providing our services
              </li>
              <li>
                • Legal authorities when required by law or to protect our
                rights
              </li>
              <li>
                • Third parties in connection with a business transaction, such
                as a merger or acquisition
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">6. Data Security</p>
            <p className="pb-2">
              We implement appropriate technical and organizational measures to
              protect the security and confidentiality of personal data,
              including encryption, access controls, and regular security
              assessments.
            </p>
            <p className="pb-2">
              In addition to our commitment to implementing appropriate
              technical and organizational measures, we continuously monitor and
              update our security protocols to adapt to emerging threats and
              industry best practices. Our staff undergo regular training to
              ensure compliance with our data security policies and procedures.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">7. Data Retention</p>
            <p className="pb-2">
              We retain personal data for as long as necessary to fulfil the
              purposes outlined in this policy or as required by law. Users can
              request deletion of their data at any time.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">8. User Rights</p>
            <p className="pb-2">
              Users have the following rights regarding their personal data:
            </p>
            <ul>
              <li>
                • Access: Users can request access to the personal data we hold
                about them.
              </li>
              <li>
                • Correction: Users can request correction of inaccurate or
                incomplete personal data.
              </li>
              <li>
                • Deletion: Users can request deletion of their personal data,
                subject to certain exceptions.
              </li>
              <li>
                • Objection: Users can object to the processing of their
                personal data for direct marketing or legitimate interests.
              </li>
              <li>
                • Data Portability: Users can request a copy of their personal
                data in a structured, machine-readable format.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">9. Cookies</p>
            <p className="pb-2">
              We use cookies and similar technologies to enhance user experience
              and analyze website usage. Users can manage cookie preferences
              through their browser settings.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">10. Changes to this Policy</p>
            <p className="pb-2">
              We may update this Data Protection Policy from time to time. We
              will notify users of any material changes by posting the revised
              policy on our website.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">11. Data Breach Response</p>
            <p className="pb-2">
              In the event of a data breach, we have established a comprehensive
              incident response plan to promptly assess and mitigate any
              potential impact on user data. This includes notifying affected
              users and relevant authorities in accordance with applicable laws
              and regulations.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">12. Contact Us</p>
            <p className="pb-2">
              If you have any questions or concerns about this policy or our
              data practices, please contact us at info@playcope.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataProtectionPolicy;
