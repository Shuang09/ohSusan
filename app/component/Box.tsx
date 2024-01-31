// Box.tsx
import React from 'react';

interface BoxProps {
  title: string;
  description: string;
  href: string;
  width?: string;
  height?: string;
}

const Box: React.FC<BoxProps> = ({ title, description, href, width = '200px', height = '150px' }) => {
  return (
    <div style={{ width, height }} className="flex-col items-center justify-center mb-10">
      <div className="max-w-xs border p-4 rounded-lg shadow-lg">
        <button
          className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.href = href}
        >
          <h2 className="text-2xl mb-2">{title}</h2>
          <p className='text-grey'>{description}</p>
        </button>
      </div>
    </div>
  );
};

export default Box;
