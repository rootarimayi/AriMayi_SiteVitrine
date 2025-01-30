/** @type {import('next').NextConfig} */
const nextConfig = {
distDir: "./dist",
webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    removeUnknownsAndDefaults: false,
                    // cleanupIDs: false
                  }
                }
              }
            ]
          }
        }
      }],
    });
    return config;
  },
  images: {
    domains: ["www.google.com"],
  },
};

export default nextConfig;
