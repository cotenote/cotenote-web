/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  babel: {
    presets: ["next/babel"],
    plugins: [
      ["babel-plugin-styled-components", { ssr: true, displayName: true }],
    ],
  },
};

module.exports = nextConfig;
