import type { Metadata } from "next";
import SideBar from "../components/sideBar";
import "../globals.css";



export const metadata: Metadata = {
  title: "Appliz",
  description: "Appli for Friend Only",
};

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div>
        <SideBar />
        {children}
    </div>
   
  );
}
