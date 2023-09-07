/** @type {import('next').NextConfig} */
const nextConfig =
{
        webpack: (config, { isServer }) => {
                config.module.rules.push({
                        test: /canvas.node$/,
                        loader: 'node-loader',
                });
                return config;
        },
};


module.exports = nextConfig



