/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-geist",
  titleTemplate: "%s | nextarter-geist",
  defaultTitle: "nextarter-geist",
  description: "Next.js + geist-ui + TypeScript template",
  canonical: "https://nextarter-geist.sznm.dev",
  openGraph: {
    url: "https://nextarter-geist.sznm.dev",
    title: "nextarter-geist",
    description: "Next.js + geist-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-geist**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-geist.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-geist",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
