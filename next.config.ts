import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/get-estimate",               destination: "/free-estimate",                permanent: true },
      { source: "/suffolk-county-tick-control", destination: "/tick-spraying-suffolk-county", permanent: true },
      { source: "/nassau-county-tick-control",  destination: "/tick-spraying-nassau-county",  permanent: true },
    ];
  },
};

export default nextConfig;
