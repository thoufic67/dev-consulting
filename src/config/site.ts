export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dev Consulting",
  description: "Dev Consulting",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "About",
    //   href: "#about",
    // },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Comparison",
      href: "#comparison",
    },
    {
      label: "Process",
      href: "#process",
    },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    docs: "https://docs.google.com/forms/d/e/1FAIpQLSexILmRGIqDISDLm7Mc9OOljgJh2bG99qnwEQuaDLdcYfIPcw/viewform?usp=header",
  },
};
