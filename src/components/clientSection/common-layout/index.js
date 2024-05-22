"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";

export default function CommonLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
