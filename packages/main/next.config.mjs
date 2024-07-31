/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: "main",
  //       filename: "static/chunks/remoteEntry.js",
  //       shared: {
  //         "next/config": {
  //           singleton: true,
  //           eager: true,
  //         },
  //       },
  //     })
  //   );
  //   return config;
  // },
};

export default nextConfig;
