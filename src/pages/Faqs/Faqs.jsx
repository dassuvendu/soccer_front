import React from "react";
import { Accordion } from "flowbite-react";
import { bannerImgOne, bannerImgTwo } from "../../assets/images/images";

const faqs = () => {
  return (
    <>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgOne} alt="" />
          </div>
          <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            Faqs
          </h2>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                How can I join the PLAYCOPE community?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  joining PLAYCOPE is very easy. Simply sign up for an account
                  on our website and start exploring our predictions, analysis,
                  and community features. You can also follow us on our social
                  media handles to stay updated on the latest news and
                  happenings.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Is PLAYCOPE available on mobile devices?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  No, PLAYCOPE is coming to mobile devices in Q4 2024
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Do you offer free predictions?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  We are only focused on providing top services to our paid
                  subscribers. We hope to also provide a space for some free
                  picks in due course
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                How long will It take to gain access to predictions after
                Payment has been made?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  You will be given access to the games immediately after your
                  payment is confirmed.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Do you accept credit card or bank transfers?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Yes, we accept both credit card payments and bank transfers,
                  including bank deposits and USSD Payments
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                What time do you post predictions?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  We post our tips before 12:00 GMT.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                How are your predictions selected?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Our predictions are selected based on numerous factors such as
                  team/player strength, winning/losing streaks, home stadium
                  advantage, and previous meetings. Additionally, we utilize the
                  Poisson Distribution Formula to ensure that our subscribers
                  receive predictions with the highest probability.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                How accurate are your predictions?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  We are confident in the precision of our prediction, which
                  have consistently outperformed industry standards and exceeded
                  user expectations.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                What happens if I lose a bet?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Please note that refunds are not provided after payment has
                  been made. By subscribing to any of our packages, you
                  acknowledge that predictions and tips are provided for
                  informational purposes only. We do not accept responsibility
                  for any losses incurred as a result of using our services.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                How can I contact PlayCope Support?
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  You can contact us via: support@playcope.com
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default faqs;
