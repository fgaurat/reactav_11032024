'use client';
import Link from "@/node_modules/next/link";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <h1>Hello</h1>
   <Link
            href="/page01"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">Page 01</p>
          </Link>
   <Link
            href="/todo/2"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">todo 02</p>
          </Link>
   <Link
            href="/todo/3"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">todo 03</p>
          </Link>
   </>
  );
}
