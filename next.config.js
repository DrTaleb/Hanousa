/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: "https://server.hanousa.ir",
    LOCAL_URL: "https://hanousa.iran.liara.run",
  },
}
module.exports = nextConfig
