import React from "react";
import { bannerImgTwo } from "../../assets/images/images";

const AboutUs = () => {
  return (
    <>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgTwo} alt="" />
          </div>
          <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            About Us
          </h2>
          <p className="pb-4">
            Welcome to PLAYCOPE LTD, where passion for football meets the power
            of artificial intelligence. Founded by a team of avid football fans
            and data enthusiasts, we set out to revolutionize the way fans
            engage with the beautiful game.
          </p>
          <p className="pb-4">
            At PLAYCOPE LTD, we leverage cutting-edge AI algorithms and Poisson
            distribution to analyze vast amounts of historical data, current
            statistics, and real-time information to provide accurate and
            insightful predictions for football matches around the globe. Our
            goal is to empower football enthusiasts with the knowledge they need
            to make informed decisions, whether it's for betting, fantasy
            football, or simply enhancing the excitement of the game.
          </p>
          <p className="pb-4">
            Driven by a commitment to innovation and excellence, our team
            continuously refines and improves our predictive models to ensure
            the highest level of accuracy and reliability. We believe in
            transparency and integrity, which is why we strive to provide
            detailed explanations behind our predictions, allowing our users to
            understand the rationale behind each forecast.
          </p>
          <p className="pb-4">
            Join us on this exhilarating journey as we combine the thrill of
            football with the limitless possibilities of artificial
            intelligence. Whether you're a seasoned punter, a fantasy football
            aficionado, or just a passionate fan looking to gain deeper
            insights, PLAYCOPE LTD is your ultimate destination for intelligent
            football predictions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
