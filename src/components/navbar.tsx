import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="md"
      position="sticky"
      shouldHideOnScroll={false}
      className="bg-default-100/50 backdrop-blur-lg w-fit mx-auto rounded-xl px-2 top-4 flex"
    >
      <NavbarContent
        className="basis-1/5 sm:basis-full gap-12 "
        justify="start"
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="bg-default-100/50 backdrop-blur-xl rounded-lg p-1 border-box"
            >
              <rect width="34" height="22" fill="url(#pattern0_1_5723)" />
              <defs>
                <pattern
                  id="pattern0_1_5723"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5723"
                    transform="matrix(0.00157978 0 0 0.00244148 0 -0.00904782)"
                  />
                </pattern>
                <image
                  id="image0_1_5723"
                  width="633"
                  height="417"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            {/* <p className="font-bold text-inherit">
              The<span className="font-extrabold">Link</span>Publicity
            </p> */}
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-8 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            size="sm"
            href={siteConfig.links.docs}
            variant="solid"
            color="primary"
          >
            Book a call
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarItem className="hidden sm:flex gap-2">
        {/* <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>*/}
        <ThemeSwitch />
      </NavbarItem>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
