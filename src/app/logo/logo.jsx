"use client"
import 'react'
import styles from './logo.module.css'
import Link from 'next/link';

const MainLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448.59 157.05"
    width={props.width}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:#000;stroke-width:0}.cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px}"
        }
        
      </style>
    </defs>
    <g id="Lines">
      <path
        d="M357.12 141.02c7.69-.02 15.11 9.97 22.24 9.98 7.74 0 15.17-9.99 22.25-9.96 7.81.02 15.18 10.06 22.19 10.09 7.92.04 15.39-9.9 22.29-9.85M2.5 141.28c8.72-.03 17.47 9.93 26.17 9.91 8.72-.03 17.4-10.05 26.11-10.07s17.45 9.96 26.16 9.94c8.72-.02 17.41-10.03 26.12-10.04S124.49 151 133.2 151s17.42-10 26.13-10c8.71 0 17.41 10.01 26.12 10.02 8.71 0 17.43-9.98 26.15-9.96 8.71.02 17.39 10.03 26.11 10.06 8.7.02 17.44-9.95 26.16-9.93s17.38 10.06 26.1 10.09"
        className="cls-2"
      />
    </g>
    <g id="Text">
      <path
        d="m113.26 39.15-2.35-.1c.47 3.01-1.98 8.37-6.68 8.37s-9.97-7.34-19.29-7.34c-6.49 0-14.21 3.11-18.35 10.91 3.01-14.68 17.78-10.54 17.78-21.45V.1h-20.6v63.79h2.35c0-4.52 1.13-9.41 7.72-9.41s8.66 10.07 22.67 10.07c17.97 0 18.54-16.94 16.75-25.4ZM145.43 12.32c-16.84 0-28.13 10.73-28.13 26.07s11.29 26.16 28.13 26.16 28.04-10.73 28.04-26.16-11.29-26.07-28.04-26.07Zm13.37 47.24c-5.36 3.39-12.42-4.14-20.42-16.66-8-12.61-11.76-22.21-6.4-25.68 5.36-3.39 12.42 4.14 20.42 16.75 7.9 12.52 11.85 22.21 6.4 25.59ZM196.61 25.4c-13.55-3.39-11.38-10.73-5.83-10.73 6.49 0 10.35 13.08 17.78 13.08 8.09 0 9.88-10.25 9.88-14.77H216c0 2.82-3.11 4.24-6.68 4.24-6.59 0-9.98-4.9-18.54-4.9-7.53 0-14.11 7.72-13.83 15.81.28 10.73 9.69 16.66 18.54 18.35 10.44 1.98 13.83 6.02 14.68 9.6.75 3.29-1.32 5.55-3.67 5.74-6.59.56-6.49-15.53-18.72-15.53-9.98 0-10.26 12.99-10.26 17.6h2.35c0-3.48 1.88-5.46 5.84-5.46 6.49 0 8.94 6.12 17.5 6.12 11.85 0 16.18-8.85 16.47-17.88.38-11.95-8.75-17.6-23.06-21.27ZM250.14 29.54v-14.4h14.02v-2.17h-14.02V0h-2.26c0 6.21-5.08 12.98-18.26 12.98h-6.58v2.17h6.58v28.89c0 16.18 8.38 20.51 16.38 20.51s8.75-7.53 13.36-7.53c4.23 0 4.33 2.64 4.33 6.78h2.17c1.32-10.35.56-23.33-11.67-23.33-8.46 0-10.82 11.38-17.31 11.38-3.86 0-4.9-2.63-4.52-5.18.94-6.02 17.78-4.99 17.78-17.12ZM315.62 63.89V.1h-20.6v63.79h20.6ZM319.95 12.98v50.91h20.6V24.46c.1-3.76.85-6.58 3.58-7.43 5.55-1.78 10.44.94 7.52 20.23-1.22 8.28-2.16 16.37 2.35 22.11 8 9.98 24.28 2.73 30.58-5.55l-1.41-1.51c-3.01 3.01-6.12 3.67-8.56 1.51-3.67-3.2-3.11-8.47-1.98-16 2.35-14.68-6.02-25.5-22.3-25.5-7.24 0-12.32 6.21-17.88 7.53-5.45 1.32-10.16.75-10.16-6.87h-2.35ZM31.18 81.02C23.56 67.75 14.15 67.56 5.87 67.56H3.52v63.79h20.51v-1.79c0-22.49-15.43-12.04-17.88-51l17.6 30.96c8.85 15.53 27.76 6.96 27.76 21.83h2.35V67.56H33.35v1.78c0 22.02 14.58 12.99 17.59 48.18-1.22-2.92-2.92-6.12-5.08-10.16-3.95-7.34-9.78-17.59-14.68-26.34ZM85.94 79.8c-16.84 0-28.13 10.73-28.13 26.07s11.29 26.16 28.13 26.16 28.04-10.73 28.04-26.16S102.69 79.8 85.94 79.8Zm13.36 47.24c-5.36 3.39-12.42-4.14-20.42-16.66-8-12.61-11.76-22.21-6.4-25.68 5.36-3.39 12.42 4.14 20.42 16.75 7.9 12.52 11.85 22.21 6.4 25.59ZM137.12 92.88c-13.55-3.39-11.38-10.73-5.83-10.73 6.49 0 10.35 13.08 17.78 13.08 8.09 0 9.88-10.25 9.88-14.77h-2.44c0 2.82-3.11 4.24-6.68 4.24-6.59 0-9.98-4.9-18.54-4.9-7.53 0-14.11 7.72-13.83 15.81.28 10.73 9.69 16.66 18.54 18.35 10.44 1.98 13.83 6.02 14.68 9.6.75 3.29-1.32 5.55-3.67 5.74-6.59.56-6.49-15.53-18.72-15.53-9.98 0-10.26 12.99-10.26 17.6h2.35c0-3.48 1.88-5.46 5.84-5.46 6.49 0 8.94 6.12 17.5 6.12 11.85 0 16.18-8.85 16.47-17.88.38-11.95-8.75-17.6-23.06-21.27ZM190.65 97.02v-14.4h14.02v-2.17h-14.02V67.47h-2.26c0 6.21-5.08 12.98-18.26 12.98h-6.58v2.17h6.58v28.89c0 16.18 8.38 20.51 16.38 20.51s8.75-7.53 13.36-7.53c4.23 0 4.33 2.64 4.33 6.78h2.17c1.32-10.35.56-23.33-11.67-23.33-8.46 0-10.82 11.38-17.31 11.38-3.86 0-4.9-2.63-4.52-5.18.94-6.02 17.78-4.99 17.78-17.12ZM242.77 79.8c-10.82 0-16.75 6.78-22.67 6.78-3.11 0-4.14-2.63-4.14-6.12h-2.45c-1.69 15.62 2.17 20.51 10.16 20.51 12.23 0 7.9-16.47 14.11-18.25 5.93-1.69 8.85 2.44 6.58 19.48-2.44-.28-5.08-.38-8-.38-17.59 0-26.16 5.17-26.16 14.96s7.62 14.96 24.37 14.96c7.9 0 10.35-2.54 10.91-6.12 7.34 11.67 24.94 4.42 31.52-4.33l-1.41-1.51c-3.01 3.01-6.12 3.67-8.56 1.51-3.67-3.2-3.2-8.47-1.98-16 2.35-14.68-6.12-25.5-22.3-25.5Zm.28 35.1c0 5.74.75 12.23-1.5 13.27-3.67 1.78-7.72-.94-11.1-9.5-2.63-6.49-2.17-11.76 1.5-13.55 2.64-1.32 7.25-1.41 12.14-.75v.38c-.56 3.48-.94 6.96-1.04 10.16Z"
        className="cls-1"
      />
      <path
        d="M269.01 67.57v63.79h20.61V82.71c0-12.23-18.26-2.07-18.26-15.15h-2.35ZM350.45 148.6c1.56-2.45 2.49-5.37 2.49-8.67 0-13.65-11.76-26.44-28.6-22.58-8.46 1.98-17.41 6.21-17.41 1.69 0-4.24 9.13-4.33 13.27-4.33h1.32c17.6 0 28.41-6.11 28.41-17.5 0-3.76-1.32-7.43-3.76-9.88-2.73-3.48 0-6.87 7.34-5.27v-2.07c-6.97-8.47-16.94-4.24-14.77 2.54-4.61-1.79-10.35-2.73-17.22-2.73-17.6 0-28.42 6.02-28.42 17.41 0 8.66 6.21 14.21 16.75 16.47-3.1 1.03-5.17 2.92-5.17 6.3 0 7.24 10.54 12.98 23.05 14.11 12.05 1.13 22.86-1.51 22.3 5.46-.19 2.92-1.5 4.8-5.36 4.8-6.49 0-19.48-11.29-35.19-11.29-9.68 0-14.23 8.13-15.01 16.6m-.01 0c-.21 2.24-.15 4.5.15 6.64h2.16c0-4.14 1.41-6.68 5.55-6.68 11.38 0 22.67 7.43 31.99 7.43 6.38 0 12.75-3.13 16.14-8.46m-19.9-36.99c-4.14 2.07-8.19.28-14.68-9.98-5.55-8.94-7.62-16.75-3.39-18.82 4.23-1.98 8.28-.19 14.68 10.07 5.55 8.85 7.62 16.66 3.39 18.73Z"
        className="cls-1"
      />
      <path
        d="M353.78 131.36h20.6V98.99c0-6.68-5.64-6.68-10.63-7.43-5.36-.84-8.47-2.44-9.97-4.42v44.23Zm22.39-53.26c0-6.68-4.8-11.29-12.04-11.29s-12.04 4.61-12.04 11.29 4.8 11.2 12.04 11.2 12.04-4.61 12.04-11.2ZM410.8 79.8c-10.82 0-16.75 6.78-22.67 6.78-3.11 0-4.14-2.63-4.14-6.12h-2.45c-1.69 15.62 2.17 20.51 10.16 20.51 12.23 0 7.9-16.47 14.11-18.25 5.93-1.69 8.85 2.44 6.58 19.48-2.44-.28-5.08-.38-8-.38-17.59 0-26.16 5.17-26.16 14.96s7.62 14.96 24.37 14.96c7.9 0 10.35-2.54 10.91-6.12 7.34 11.67 24.94 4.42 31.52-4.33l-1.41-1.51c-3.01 3.01-6.12 3.67-8.56 1.51-3.67-3.2-3.2-8.47-1.98-16 2.35-14.68-6.12-25.5-22.3-25.5Zm.28 35.1c0 5.74.75 12.23-1.5 13.27-3.67 1.78-7.72-.94-11.1-9.5-2.63-6.49-2.17-11.76 1.5-13.55 2.64-1.32 7.25-1.41 12.14-.75v.38c-.56 3.48-.94 6.96-1.04 10.16Z"
        className="cls-1"
      />
      <path
        d="M357.12 141.02c7.69-.02 15.11 9.97 22.24 9.98 7.74 0 15.17-9.99 22.25-9.96 7.81.02 15.18 10.06 22.19 10.09 7.92.04 15.39-9.9 22.29-9.85M2.5 141.28c8.72-.03 17.47 9.93 26.17 9.91 8.72-.03 17.4-10.05 26.11-10.07s17.45 9.96 26.16 9.94c8.72-.02 17.41-10.03 26.12-10.04S124.49 151 133.2 151s17.42-10 26.13-10c8.71 0 17.41 10.01 26.12 10.02 8.71 0 17.43-9.98 26.15-9.96 8.71.02 17.39 10.03 26.11 10.06 8.7.02 17.44-9.95 26.16-9.93s17.38 10.06 26.1 10.09"
        className="cls-2"
      />
    </g>
  </svg>
)
export default MainLogo