import type { NextConfig } from "next";

const BASE_PATH = "/aliyoganew-test";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

