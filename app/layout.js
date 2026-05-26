import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bhumitvaghela.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bhumit Vaghela — Full-Stack Web Developer",
    template: "%s | Bhumit Vaghela",
  },
  description:
    "Portfolio of Bhumit Vaghela, a full-stack web developer from Gujarat, India. Building fast, clean digital products with React, Next.js, Node.js, and Python.",
  keywords: [
    "Bhumit Vaghela",
    "web developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "Python developer",
    "portfolio",
    "Gujarat",
    "India",
    "frontend developer",
    "backend developer",
    "freelance developer",
  ],
  authors: [{ name: "Bhumit Vaghela", url: BASE_URL }],
  creator: "Bhumit Vaghela",
  publisher: "Bhumit Vaghela",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Bhumit Vaghela — Portfolio",
    title: "Bhumit Vaghela — Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, clean digital products with React, Next.js, Node.js, and Python. Available for internships and junior dev roles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhumit Vaghela — Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhumit Vaghela — Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, clean digital products with React, Next.js, Node.js, and Python.",
    images: ["/og-image.png"],
    creator: "@bhumitvaghela",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bhumit Vaghela",
  url: BASE_URL,
  image: `${BASE_URL}/bhumit-photo.png`,
  sameAs: [
    "https://github.com/bhumit1311",
  ],
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-stack web developer from Veraval, Gujarat, India. Specializing in React, Next.js, Node.js, and Python development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Veraval",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "MongoDB",
    "REST APIs",
    "Framer Motion",
    "Tailwind CSS",
    "Firebase",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          MetaMask / browser wallet extensions inject into all pages automatically.
          This is a browser extension behaviour — not a code issue.
          The portfolio has zero Web3 code; any MetaMask errors can be safely ignored.
        */}
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
