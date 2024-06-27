import React from 'react';

const HowItWorks = () => {
  return (
    <div className="my-10 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border-2">
      <h2 className="text-2xl font-bold text-[#4D59E3] mb-6 text-center">Quick, Simple, Notion-Avatar-Make Easily!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">1</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Random!</h3>
          <p className="text-gray-600">Simply click the Random button on the toolbar to generate a base Notion-Avatar.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">2</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Customize!</h3>
          <p className="text-gray-600">You can choose your styles to customize the face, nose, mouth, eyes, eyebrows, glasses, hair, head, beard, accessories, and facial details of your avatar. Also, you can open the palette to choose your avatar background shape and DIY your own color.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">3</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Download!</h3>
          <p className="text-gray-600">Download your new favorite Notion-Style Avatar as a PNG or SVG.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;