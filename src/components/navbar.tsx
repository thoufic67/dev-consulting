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
import TheLinkPublicityBrandLogo from "@/assets/TheLinkPublicityBrandLogo.png";
import { Image } from "@heroui/image";

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
            <Image
              loading="lazy"
              src={TheLinkPublicityBrandLogo}
              alt="The Link Publicity Brand Logo"
              className="w-96 sm:w-48 rounded-lg p-1 border-box"
            />

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
            color="warning"
          >
            Book a call
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
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
        {/* <ThemeSwitch /> */}
      </NavbarItem>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
