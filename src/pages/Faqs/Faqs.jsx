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
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-[#2aa9e1] hover:bg-[#191922] text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Accordion.Title>
              <Accordion.Content className="bg-white">
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="text-black text-[15px] leading-[23px] pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
