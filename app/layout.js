import profile from "../data/profile.json";
import "./globals.css";

// Self-hosted font files (via @fontsource): bundled at build time, zero
// runtime requests to Google's font CDN, zero layout shift.
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";

const ogImage = "/images/profile.jpg";

const siteUrl = "https://ariyanjahangir.dev";
const description =
  "Ariyan Jahangir is a .NET (C#) software engineer building travel-technology platforms — GDS and NDC airline API integrations (Amadeus, Sabre), scalable backend systems, and applied machine-learning research.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ariyan Jahangir — Software Engineer",
    template: "%s — Ariyan Jahangir",
  },
  description,
  keywords: [
    "Ariyan Jahangir",
    "Software Engineer",
    ".NET Developer",
    "C# Developer",
    "Amadeus API",
    "Sabre API",
    "NDC integration",
    "GDS integration",
    "Travel technology engineer",
    "Dhaka Bangladesh software engineer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",

    url: siteUrl,

    siteName: "Ariyan Jahangir",

    title: "Ariyan Jahangir | Software Engineer",

    description,

    locale: "en_US",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Ariyan Jahangir",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: "@YOUR_TWITTER",

    title: "Ariyan Jahangir | Software Engineer",

    description,

    images: [ogImage],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    url: siteUrl,
    sameAs: profile.links.map((l) => l.url),
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
