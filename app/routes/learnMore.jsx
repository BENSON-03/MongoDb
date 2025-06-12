import React from "react";

export default function LearnMore() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto text-gray-800 bg-white sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Learn More About Us
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">
          🚗 Welcome to [YourCarHub] — A Vision by Benson Obaga
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Founded by <strong>Benson Obaga</strong>, [YourCarHub] is more than
          just a car selling website — it’s a movement reshaping how people buy
          and sell vehicles in a digital world. With a passion for innovation
          and a mission to simplify automotive transactions, Benson created this
          platform to empower individuals, families, and communities across the
          region.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
          🌍 Our Social Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">
              1. Empowering Individuals Through Access
            </h3>
            <p className="text-base leading-relaxed">
              [YourCarHub] makes car ownership more accessible by offering a
              wide range of affordable, verified vehicles. Everyone has a fair
              chance to own a reliable vehicle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              2. Boosting the Economy
            </h3>
            <p className="text-base leading-relaxed">
              By supporting local sellers and dealerships, [YourCarHub]
              contributes to small business growth and job creation — from auto
              mechanics to transporters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              3. Promoting Transparency and Trust
            </h3>
            <p className="text-base leading-relaxed">
              We set new standards for safety and trust. Listings are reviewed,
              and a feedback system builds confidence between buyers and
              sellers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              4. Encouraging Smart, Sustainable Choices
            </h3>
            <p className="text-base leading-relaxed">
              We promote eco-friendly car options and educate users about
              sustainability and car maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">5. Digital Inclusion</h3>
            <p className="text-base leading-relaxed">
              Our mobile-first design helps people in remote areas access and
              engage with the platform seamlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          🧑‍💼 About the Founder: Benson Obaga
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Benson Obaga is a visionary entrepreneur and tech enthusiast with a
          belief in technology’s power to drive change. [YourCarHub] is his tool
          for building connections, opportunities, and smarter mobility
          solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          📈 Looking Ahead
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          We’re adding AI recommendations, real-time support, and financing. As
          we grow, our positive impact continues to expand.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          📲 Join the Movement
        </h2>
        <p className="text-lg leading-relaxed">
          Ready to drive change? Explore, buy, or sell with confidence on
          [YourCarHub]. We’re not just moving cars — we’re moving society
          forward.
        </p>
      </section>
    </div>
  );
}
