const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
module.exports = nextConfig;

// const analyze = require("@next/bundle-analyzer");
// // const withBundleAnalyzer = analyze({
// //   enabled: process.env.ANALYZE === "true",
// // });

// module.exports = withBundleAnalyzer(nextConfig);