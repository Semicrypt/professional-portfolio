import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nwachukwu Ifeanyi Divine | Cloud & DevOps Engineer",
    template: "%s | Nwachukwu Ifeanyi Divine",
  },

  description:
    "Cloud and DevOps Engineer focused on AWS, Kubernetes, Docker, Terraform, Linux, CI/CD, cloud infrastructure, automation and observability.",

  applicationName: "Nwachukwu Ifeanyi Divine Portfolio",

  authors: [
    {
      name: "Nwachukwu Ifeanyi Divine",
    },
  ],

  creator: "Nwachukwu Ifeanyi Divine",
  publisher: "Nwachukwu Ifeanyi Divine",

  keywords: [
    "Nwachukwu Ifeanyi Divine",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Linux",
    "CI/CD",
    "GitHub Actions",
    "Amazon EKS",
    "Amazon RDS",
    "Cloud Infrastructure",
    "Infrastructure as Code",
    "Observability",
    "Nigeria",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Nwachukwu Ifeanyi Divine",
    title: "Nwachukwu Ifeanyi Divine | Cloud & DevOps Engineer",
    description:
      "Cloud and DevOps Engineer building reliable cloud infrastructure with AWS, Kubernetes, Docker, Terraform, Linux and CI/CD.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nwachukwu Ifeanyi Divine — Cloud & DevOps Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nwachukwu Ifeanyi Divine | Cloud & DevOps Engineer",
    description:
      "Cloud and DevOps Engineer building reliable cloud infrastructure with AWS, Kubernetes, Docker, Terraform, Linux and CI/CD.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
