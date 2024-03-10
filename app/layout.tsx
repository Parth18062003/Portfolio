import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parth Kadam",
  description: "Hi, I'm Parth Kadam, a full stack developer and blockchain developer. I'm a passionate and creative developer with a strong interest in web development and blockchain technology.",
  keywords: "web developer, full stack developer, front end developer, back end developer, mern stack,Blockchain developer, Intern, Portfolio, Resume",
  other: {
    'theme-color': '#0c0c0c',
    'og:image': '/Assets/metaImage.png',
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Providers>
          <main className="bg-customwhite dark:bg-customblack">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
