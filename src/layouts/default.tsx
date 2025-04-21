import { Navbar } from "@/components/navbar";
import { useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";
import TopGradient from "@/assets/background/TopGradient.png";
import FooterLogo from "@/assets/LinkPublicityFooter.png";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";

const Contact = [
  {
    label: "+91 9884177599",
    href: "tel:+91 9884177599",
  },
  {
    label: "info@linkpublicity.in",
    href: "mailto:info@linkpublicity.in",
  },
  {
    label: "17/1 A, Vallimmal Street, New Avadi Road, Kilpauk, Chennai 10",
    href: "https://maps.app.goo.gl/H9xGwyyzQQhW24HU8",
  },
];

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col overflow-x-hidden  h-screen">
      <img
        loading="lazy"
        src={TopGradient}
        alt="Top gradient background"
        className="absolute top-0 left-0 -z-10 min-w-[50vw] h-[50vh] object-cover blur-lg"
      />
      <Navbar />
      <main className=" container relative mx-auto max-w-7xl px-6 flex-grow pt-16 scroll-smooth">
        {children}
      </main>
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between px-8 sm:px-32 py-16 border-t-1 border-default-100 mt-32 gap-8 backdrop-blur-2xl">
        <div className="flex flex-col sm:flex-row gap-16 items-center justify-center">
          <p className="max-w-md text-sm text-default-400">
            Dev Consulting is a specialized YouTube consulting agency dedicated
            to helping content creators achieve their growth goals. We combine
            strategic planning, in-depth analytics, and personalized coaching to
            help channels maximize their potential and build engaged communities
            on YouTube.
          </p>
        </div>
        <div className="flex flex-row gap-16 items-center justify-center h-full">
          <div className="flex flex-col gap-2 h-full justify-between">
            <p className="text-sm">Pages</p>
            <Link href="/" className="text-xs text-default-400">
              Home
            </Link>
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-default-400"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.links.docs}
              className="text-xs text-default-400 text-[#E84B27]"
            >
              Get a free audit
            </Link>
          </div>
          <div className="flex flex-col gap-2 h-full justify-between">
            <p className="text-sm">Contact</p>
            {Contact.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-default-400 max-w-[12rem] break-words"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
