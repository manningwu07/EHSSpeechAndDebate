import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import type { NavFooterContent } from "~/types/components";

export default function Footer({
  footer,
}: {
  footer: NavFooterContent["footer"];
}) {
  return (
    <footer className="flex w-full justify-center bg-[#2F4F2F] pb-4 pt-12 text-white md:pb-8 md:pt-24 lg:pb-12 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="mx-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-4 text-lg font-bold">EHS Speech & Debate</h3>
            <p className="text-sm text-gray-300">
              Empowering voices, shaping futures.
            </p>
          </div>
          {footer.links.map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="mb-4 text-lg font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href={footer.social.instagram}
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={footer.social.twitter}
                className="text-gray-300 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={footer.social.facebook}
                className="text-gray-300 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} EHS Speech & Debate. All rights
          reserved.
        </div>
        <div className="mt-4 flex justify-center">
          Created by&nbsp;
          <span>
            <Link href="/admin">Manning Wu</Link>
          </span>
          &nbsp;(Class of 2025)
        </div>
      </div>
    </footer>
  );
}
