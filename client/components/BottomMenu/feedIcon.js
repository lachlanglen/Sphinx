import React from 'react';

const SVG = ({
  fill = '#fff',
  width = '100%',
  height = '100%',
  className = 'bottomMenu_icon_svg',
}) => (
  <svg
    viewBox="0 0 512 512"
    height={height}
    width={width}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="m60 272h332v-152h-332zm30-122h272v92h-272z" />
      <path d="m60 302h151v30h-151z" />
      <path d="m60 362h151v30h-151z" />
      <path d="m241 452h151v-150h-151zm30-120h91v90h-91z" />
      <path d="m60 422h151v30h-151z" />
      <path d="m60 0v60h-60v407c0 24.813 20.187 45 45 45h421.979c.172 0 .345-.001.518-.003 24.584-.268 44.503-20.351 44.503-44.997v-467zm-15 482c-8.271 0-15-6.729-15-15v-377h392v377c0 5.197.87 10.251 2.543 15zm437-15c0 8.174-6.571 14.841-14.708 14.997-4.094.084-7.857-1.43-10.75-4.244-2.929-2.85-4.542-6.669-4.542-10.753v-407h-362v-30h392z" />
    </g>
  </svg>
);

export default SVG;
