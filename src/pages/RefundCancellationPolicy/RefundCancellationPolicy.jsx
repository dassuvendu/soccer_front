import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <>
      <div className="py-10 lg:py-24 px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            Refund Cancellation Policy
          </h2>
          <div className="mb-4">
            <p className="font-bold pb-2">1. Cancellation Policy</p>
            <p className="pb-2">
              At PlayCope we offer a no-contract subscription model, allowing
              users to cancel their subscription at any time without incurring
              any penalties or fees.
            </p>
            <ul>
              <li>
                • Users can cancel their subscription to our services at any
                time by accessing their account settings on our website.
              </li>
              <li>
                • Cancellations take effect immediately upon user request.
              </li>
              <li>
                • No refunds will be provided for any remaining portion of the
                subscription period upon cancellation.
              </li>
              <li>
                • Users will continue to have access to our prediction services
                until the end of the current subscription period following
                cancellation.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">2. Changes to Subscription</p>
            <p className="pb-2">
              Users can modify their subscription preferences, including
              upgrading or downgrading their subscription plan, through their
              account settings on our website. Any changes to subscription plans
              will take effect immediately, and users will be charged or
              refunded accordingly based on the new subscription terms.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold pb-2">3. Contact Us</p>
            <p className="pb-2">
              If you have any questions or concerns about our cancellation
              policy or your subscription, please contact our customer support
              team at support@playcope.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundCancellationPolicy;
