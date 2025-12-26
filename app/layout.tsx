import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Banner } from "fumadocs-ui/components/banner";
import HeaderVis from "@/components/navbar/header-vis";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Banner id="disclaimer">
            This app is unofficial and is not endorsed or supported by Hack
            Club.
          </Banner>
          <HeaderVis />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
