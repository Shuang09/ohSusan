'use client'

import React, {useEffect, useState} from 'react';
import Box from './component/Box';
import { BoxLinks } from './component/OverviewBox';
import { FaAngleDoubleDown } from 'react-icons/fa';


var intro = 'Hi, I am';

var name = 'Susan Shuhang Yan';

const Overview = () => {

  const [fileContent, setFileContent] = useState<string | null>(null);
  useEffect(() => {

    const filePath = '/introduction.txt';

    // Read the content from the file
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch file content');
        }
        return response.text();
      })
      .then(data => {
        // Replace <br> with '\n' for line breaks
        setFileContent(data.replace(/\n/g, '<br>'));
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  }, []);

    const [showArrow, setShowArrow] = useState(true)
    useEffect(() => {
      const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowArrow(!isAtBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    }, [])

  return (
    <div>
      <h2 className="ml-10 font-mono tracking-wide">{intro}</h2>
      <h1 className="text-5xl font-mono tracking-wide ml-20 mt-10">{name}</h1>
      <div className="text-xl p-10 items-center ml-10">
        {fileContent !== null ? (
          // Use dangerouslySetInnerHTML to render HTML content
          <div dangerouslySetInnerHTML={{ __html: fileContent }} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className='flex items-center justify-center mb-5'>
        <div className="flex flex-col mb-5 item-center right-1/3">
          {/* Adjust the grid layout as needed */}
          {BoxLinks.map((box, index) => (
            <Box
              key={index}
              title={box.title}
              description={box.description}
              href={box.href}
              width="400px"
              height="200px"
            />
          ))}
        </div>
      </div>

      {showArrow && (
        <div className='fixed right-0 bottom-0 mb-4 mr-4'>
          <FaAngleDoubleDown size={32} color='white' />
        </div>
      )}
    </div>
  );
};

export default Overview