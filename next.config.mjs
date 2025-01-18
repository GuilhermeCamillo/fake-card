import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  scope: '/app',
  sw: 'service-worker.js',
})(nextConfig);
