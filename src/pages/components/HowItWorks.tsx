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
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Randomize!</h3>
          <p className="text-gray-600">Simply click the randomize button on the toolbar to generate a color palette.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">2</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Copy!</h3>
          <p className="text-gray-600">You can copy the hex code for any color you like by clicking on the color on the toolbar or palette drawer.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">3</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">Export!</h3>
          <p className="text-gray-600">Export your new favorite color palette as a PNG, copy the palette as CSS variables, or export every color palette you've seen this session as a CSV file.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;