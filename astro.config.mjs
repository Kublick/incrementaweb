import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    image(),
    // partytown({
    //   // Adds dataLayer.push as a forwarding-event.
    //   config: {
    //     forward: ["dataLayer.push", "fbq"],
    //     resolveUrl(url, location) {
    //       if (
    //         url.hostname.includes("google-analytics") ||
    //         url.hostname.includes("connect.facebook.net") ||
    //         url.hostname.includes("www.googletagmanager.com")
    //       ) {
    //         const proxyUrl = new URL(
    //           "https://cdn.builder.codes/api/v1/js-proxy"
    //         );
    //         proxyUrl.searchParams.append("url", url.href);
    //         proxyUrl.searchParams.append(
    //           "apiKey",
    //           abfebca9fdcf4536ac17a116edb9e66b
    //         );
    //         console.log("proxyUrl", proxyUrl);
    //         console.log("url.href", url.href);
    //         console.log("url", url);

    //         proxyUrl.searchParams.append("url", url.href);
    //         return proxyUrl;
    //       }
    //       return url;
    //     },
    //   },
    // }),
  ],
});
