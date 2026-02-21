import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
		SERVER_URL: process.env.SERVER_URL
	}
};

export default nextConfig;
