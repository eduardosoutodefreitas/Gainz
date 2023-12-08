import Link from "next/link";
import React from "react";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const Logo = ({ size = "medium" }: LogoProps) => {
  const logoSizeClass = {
    small: [117, 32],
    medium: [128, 42],
    large: [147, 79],
  }[size];

  return (
    <Link href='/'>
      <svg
        width={logoSizeClass[0]}
        height={logoSizeClass[1]}
        viewBox='0 0 132 47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M48.45 46.7C44.2167 46.7 40.75 45.35 38.05 42.65C36.05 40.65 34.7333 38.1333 34.1 35.1C30.9333 37.5 27.05 38.7 22.45 38.7C18.8167 38.7 15.5 37.9167 12.5 36.35C9.53333 34.75 7.2 32.5667 5.5 29.8C3.83333 27.0333 3 23.9167 3 20.45C3 16.9833 3.83333 13.8667 5.5 11.1C7.2 8.3 9.53333 6.13333 12.5 4.6C15.4667 3.06666 18.7833 2.3 22.45 2.3C27.05 2.3 31.1 3.43333 34.6 5.7L35.6 12.75H35.15C34.15 8.88333 31.8833 6.25 28.35 4.85C26.6167 4.15 24.65 3.8 22.45 3.8C17.95 3.8 14.2 5.36667 11.2 8.5C8.23333 11.6333 6.75 15.6167 6.75 20.45C6.75 25.25 8.25 29.2333 11.25 32.4C14.25 35.5667 17.9833 37.1667 22.45 37.2C24.6167 37.2 26.6833 36.8167 28.65 36.05C30.6167 35.2833 32.3 34.2167 33.7 32.85V24C33.7 23.2667 33.4833 22.7167 33.05 22.35C32.6167 21.95 32 21.75 31.2 21.75H30.4V21.25H40.2V21.75H39.45C38.6167 21.75 37.9833 21.95 37.55 22.35C37.1167 22.7167 36.9167 23.2667 36.95 24V31.7C37.15 36.9667 38.8667 40.7333 42.1 43C44.3667 44.6 47.3 45.4 50.9 45.4C52.4 45.4 54.0333 45.25 55.8 44.95L55.85 45.45C53.1833 46.2833 50.7167 46.7 48.45 46.7Z'
          fill='#7828C8'
        />
        <path
          d='M55.565 9.01L65.925 33.79H62.95L54.865 12.335L55.565 9.01ZM48.04 31.445C47.8767 31.9117 47.8533 32.3083 47.97 32.635C48.0867 32.9617 48.2733 33.2183 48.53 33.405C48.81 33.5683 49.09 33.65 49.37 33.65H49.685V34H42.65V33.65C42.65 33.65 42.7083 33.65 42.825 33.65C42.9183 33.65 42.965 33.65 42.965 33.65C43.5017 33.65 44.05 33.4867 44.61 33.16C45.1933 32.81 45.6717 32.2383 46.045 31.445H48.04ZM55.565 9.01L55.88 11.46L47.095 33.895H44.995L53.955 12.615C53.955 12.615 54.0133 12.475 54.13 12.195C54.27 11.8917 54.4217 11.53 54.585 11.11C54.7717 10.69 54.9233 10.2817 55.04 9.885C55.18 9.48833 55.25 9.19667 55.25 9.01H55.565ZM60.5 24.445V25.495H49.545V24.445H60.5ZM62.075 31.445H64.945C65.295 32.2383 65.7617 32.81 66.345 33.16C66.9283 33.4867 67.4883 33.65 68.025 33.65C68.025 33.65 68.0717 33.65 68.165 33.65C68.2583 33.65 68.305 33.65 68.305 33.65V34H60.43V33.65H60.745C61.1883 33.65 61.585 33.4633 61.935 33.09C62.285 32.6933 62.3317 32.145 62.075 31.445ZM74.987 9.5V34H72.712V9.5H74.987ZM72.817 31.445V34H70.017V33.65C70.017 33.65 70.087 33.65 70.227 33.65C70.3903 33.65 70.472 33.65 70.472 33.65C71.0787 33.65 71.592 33.44 72.012 33.02C72.4553 32.5767 72.6887 32.0517 72.712 31.445H72.817ZM72.817 12.055H72.712C72.6887 11.4483 72.4553 10.935 72.012 10.515C71.592 10.0717 71.0787 9.85 70.472 9.85C70.472 9.85 70.3903 9.85 70.227 9.85C70.087 9.85 70.017 9.85 70.017 9.85V9.5H72.817V12.055ZM74.882 31.445H74.987C75.0103 32.0517 75.232 32.5767 75.652 33.02C76.0953 33.44 76.6203 33.65 77.227 33.65C77.227 33.65 77.297 33.65 77.437 33.65C77.577 33.65 77.6587 33.65 77.682 33.65V34H74.882V31.445ZM74.882 12.055V9.5H77.682V9.85C77.6587 9.85 77.577 9.85 77.437 9.85C77.297 9.85 77.227 9.85 77.227 9.85C76.6203 9.85 76.0953 10.0717 75.652 10.515C75.232 10.935 75.0103 11.4483 74.987 12.055H74.882ZM84.1532 8.975L104.488 30.675L104.803 34.49L84.4682 12.825L84.1532 8.975ZM84.2232 31.515V34H81.3182V33.65C81.3182 33.65 81.4232 33.65 81.6332 33.65C81.8432 33.65 81.9598 33.65 81.9832 33.65C82.5665 33.65 83.0682 33.44 83.4882 33.02C83.9082 32.6 84.1182 32.0983 84.1182 31.515H84.2232ZM85.7282 31.515C85.7282 32.0983 85.9382 32.6 86.3582 33.02C86.7782 33.44 87.2798 33.65 87.8632 33.65C87.8865 33.65 88.0032 33.65 88.2132 33.65C88.4232 33.65 88.5282 33.65 88.5282 33.65V34H85.6232V31.515H85.7282ZM84.1532 8.975L85.6932 10.935L85.7282 34H84.1182V13.35C84.1182 12.16 84.0598 11.1333 83.9432 10.27C83.8498 9.40667 83.8032 8.975 83.8032 8.975H84.1532ZM104.803 9.5V30.01C104.803 30.7567 104.826 31.48 104.873 32.18C104.92 32.8567 104.966 33.4167 105.013 33.86C105.083 34.28 105.118 34.49 105.118 34.49H104.803L103.228 32.635V9.5H104.803ZM107.603 9.5V9.85C107.603 9.85 107.498 9.85 107.288 9.85C107.078 9.85 106.973 9.85 106.973 9.85C106.39 9.85 105.888 10.06 105.468 10.48C105.048 10.8767 104.826 11.3783 104.803 11.985H104.698V9.5H107.603ZM100.393 9.5H103.298V11.985H103.228C103.205 11.3783 102.983 10.8767 102.563 10.48C102.166 10.06 101.665 9.85 101.058 9.85C101.058 9.85 100.953 9.85 100.743 9.85C100.533 9.85 100.416 9.85 100.393 9.85V9.5ZM129.472 9.01C129.472 9.01 129.472 9.06833 129.472 9.185C129.472 9.27833 129.472 9.325 129.472 9.325L113.862 34H111.272V33.685L125.972 10.515H111.762V9.465H125.762C126.229 9.465 126.719 9.44167 127.232 9.395C127.769 9.34833 128.235 9.29 128.632 9.22C129.052 9.15 129.332 9.08 129.472 9.01ZM129.717 32.95L129.507 34H113.512V32.95H129.717ZM130.767 28.61L129.612 34H124.992L125.237 33.125L125.622 32.95C126.929 32.95 127.967 32.53 128.737 31.69C129.53 30.85 130.09 29.8233 130.417 28.61H130.767ZM114.177 10.515C113.594 10.5383 113.104 10.7483 112.707 11.145C112.31 11.5417 112.112 12.0317 112.112 12.615V13.245H111.762V10.41H114.177V10.515ZM111.762 8.835C111.995 8.92833 112.345 9.02167 112.812 9.115C113.302 9.20833 113.839 9.29 114.422 9.36C115.005 9.43 115.542 9.465 116.032 9.465L111.762 9.85V8.835Z'
          fill='currentColor'
        />
      </svg>
    </Link>
  );
};

export default Logo;
