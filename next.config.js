/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  env: {
    GET_OPTION_ENDPOINT: process.env.GET_OPTION_ENDPOINT,
    ENDPOINT: process.env.ENDPOINT,
    POST_FORM: process.env.POST_FORM,
    KEY: process.env.KEY,
  },
};

module.exports = nextConfig;
