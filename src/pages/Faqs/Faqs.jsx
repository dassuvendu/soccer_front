import React from "react";
import { Accordion } from "flowbite-react";
import { bannerImgTwo } from "../../assets/images/images";

const faqs = () => {
  return (
    <>
      <div className="relative px-8 lg:px-0">
        <div className="pt-[20px] pb-[20px] flex justify-center items-center">
          <img
            src={bannerImgTwo}
            alt="bannerImgTwo"
            className="w-full md:w-8/12 lg:w-4/12"
          />
        </div>
        <div className="absolute left-0 top-32 w-full">
          <h2 className="font-Bebas text-4xl md:text-8xl tracking-normal text-center mb-4 text-[#2aa9e1]">
            Faqs
          </h2>
        </div>
      </div>
      <div className="py-10 lg:py-24 px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            Faqs
          </h2> */}
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
