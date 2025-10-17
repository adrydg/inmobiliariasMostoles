import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { generateOrganizationSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LeadFormModalProvider } from "@/components/LeadFormModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LeadFormModalProvider>
          {children}
        </LeadFormModalProvider>
      </body>
    </html>
  );
}
