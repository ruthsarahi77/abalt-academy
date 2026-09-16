import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/publicaciones", destination: "/noticias", permanent: true },
      { source: "/actualidad", destination: "/noticias", permanent: true },
    ];
  },
};

export default nextConfig;
