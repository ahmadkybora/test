import type { Metadata } from "next";

import "./layout.scss";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Zharf-Switch",
  description: "Zharf-Switch User-Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Sidebar />
          <div className="main">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
