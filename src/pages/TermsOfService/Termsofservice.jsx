import React from "react";
import { bannerImgFive, bannerImgFour } from "../../assets/images/images";

export const Termsofservice = () => {
  return (
    <div className="py-10 lg:py-12 px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto mb-8">
          <img src={bannerImgFive} alt="" />
        </div>
        <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
          Terms of service
        </h2>
        <div className="mb-4">
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            the services provided by PLAYCOPE LTD. ("Company", "we", "our", or
            "us") through our website and platform offering football prediction
            services (the "Service"). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold pb-2">1. Subscription Services</p>
          <p className="pb-2">
            <strong>1.1. Subscription Plans:</strong> We offer various
            subscription plans for accessing our football prediction services.
            Details of these plans, including pricing and features, are
            available on our website.
          </p>
          <p className="pb-2">
            <strong>1.2. Subscription Terms:</strong> By subscribing to our
            Service, you agree to pay the applicable subscription fees and abide
            by the terms of your chosen subscription plan. Subscription fees are
            non-refundable once paid.
          </p>
          <p className="pb-2">
            <strong>1.3. Automatic Renewal:</strong> Subscription plans may
            automatically renew at the end of each subscription period unless
            you cancel your subscription prior to the renewal date. You are
            responsible for managing your subscription settings and ensuring
            timely cancellation if desired.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold pb-2">2. Use of Service</p>
          <p className="pb-2">
            <strong>2.1. Accuracy of Predictions:</strong> While we strive to
            provide accurate football predictions, we cannot guarantee the
            accuracy or reliability of the predictions provided. Predictions are
            for informational purposes only and should not be considered as
            financial or betting advice.
          </p>
          <p className="pb-2">
            <strong>2.2. Intellectual Property Right:</strong> All content and
            materials provided through the Service, including but not limited to
            predictions, analysis, and data, are the property of PLAYCOPE LTD.
            and are protected by intellectual property laws. You may not use,
            reproduce, or distribute any content from the Service without our
            prior written consent.
          </p>
          <p className="pb-2">
            <strong>2.3. Prohibited Activities:</strong> You agree not to engage
            in any activities that may disrupt or interfere with the proper
            functioning of the Service, including but not limited to hacking,
            data scraping, or unauthorized access to our systems.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold pb-2">3. Limitation of Liability</p>
          <p className="pb-2">
            <strong>3.1. Disclaimer:</strong> To the fullest extent permitted by
            law, we disclaim any warranties or representations regarding the
            accuracy, reliability, or suitability of the Service for any
            particular purpose. We shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of your
            use of the Service.
          </p>
          <p className="pb-2">
            <strong>3.2. Indemnification:</strong> You agree to indemnify and
            hold harmless PLAYCOPE LTD., its affiliates, and their respective
            officers, directors, employees, and agents from any claims, damages,
            or losses arising out of your use of the Service or violation of
            these Terms.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold pb-2">4. General Provisions</p>
          <p className="pb-2">
            <strong>4.1. Modification of Terms:</strong> We reserve the right to
            modify these Terms at any time. Changes will be effective upon
            posting on our website. It is your responsibility to study these
            Terms periodically for updates.
          </p>
          <p className="pb-2">
            <strong>4.2. Governing Law:</strong> These Terms shall be governed
            by and construed in accordance with the sport laws as recognized by
            FIFA, without regard to its conflict of laws principles.
          </p>
          <p className="pb-2">
            <stron>4.3. Contact Information:</stron> If you have any questions
            or concerns about these Terms or the Service, please contact us at
            info@playcope.com.
          </p>
          <p className="pb-2">
            By accessing or using the Service, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. If you do
            not agree to these Terms, you may not access or use the Service.
          </p>
        </div>
      </div>
    </div>
  );
};
