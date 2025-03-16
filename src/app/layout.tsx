import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Theme from "@/providers/theme";
import Toast from "@/components/common/toasts/toast";
import { ViewTransitions } from "next-view-transitions";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BANHCAFE - Market",
  description: "Marketplace BANHCAFE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${openSans.className} bg-bg-primary`}
        >
          <Theme>
            {children}
          </Theme>

          <Toast />
        </body>
      </html>
    </ViewTransitions>
  );
}

