// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");
const nextConfig = {
  transpilePackages: ["antd-mobile"],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default withNextIntl(nextConfig);
