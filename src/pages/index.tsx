import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Suspense, lazy, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import FooterBlur from "@/assets/background/FooterBlur.png";
import { useLocation } from "react-router-dom";
import RightArrow from "@/assets/icons/RightArrow.png";
import BlurDiv from "@/components/blur-div";

// Lazy load components
const CompaniesWorked = lazy(() => import("@/components/companies-worked"));
const Legacy = lazy(() => import("@/components/legacy"));
const HowWeHelp = lazy(() => import("@/components/services"));
const MarketingPartner = lazy(() => import("@/components/marketing-partner"));
const Comparision = lazy(() => import("@/components/comparision"));
const Process = lazy(() => import("@/components/process"));

export default function IndexPage() {
  const locationHash = useLocation().hash;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const validSections = siteConfig.navItems.map((item) => item.href);
    const hash = locationHash.replace("#", "");

    if (validSections.includes(locationHash)) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hash === "") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationHash]);

  return (
    <DefaultLayout>
      <section
        className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-[20dvh]"
        ref={sectionRef}
      >
        <BlurDiv className="inline-block max-w-3xl text-center justify-center">
          <span className={title({ size: "lg" })}>
            Ready to Grow Your YouTube Channel?{" "}
            <span className={title({ size: "lg", italic: true })}>
              Let's make it happen.
            </span>
          </span>
          <div className={subtitle({ class: "mt-4 ", size: "xs" })}>
            We analyze your YouTube content, audience engagement, and competitor
            performance to uncover growth opportunities. Get expert guidance and
            a clear strategy to elevate your YouTube presence.
          </div>
        </BlurDiv>

        <BlurDiv className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "lg",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Get your free YouTube channel audit
          </Link>
        </BlurDiv>

        {/* <div className="h-64 overflow-hidden blur-3xl -z-10">
          <div className="w-full h-full">
            <GradiantCircle isFullyVisible={false} />
          </div>
        </div> */}
      </section>

      <Suspense fallback={<div className="min-h-[400px]" />}>
        <CompaniesWorked />
        <Legacy id="about" />
        <HowWeHelp id="services" />
        <MarketingPartner />
        <Comparision id="comparison" />
        <Process id="process" />
      </Suspense>

      <Card className="border-1 border-default-100 justify-center p-8 bg-default-100/10 backdrop-blur-3xl brightness-80">
        <CardHeader className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center  max-w-lg">
            <span className={title({ size: "md" })}>
              Ready to take your YouTube channel to the next level?
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center justify-center text-center">
          <span className={subtitle({ class: "max-w-lg" })}>
            If you want to achieve breakthrough growth with increased views,
            subscribers, and engagement, then you're in the right place.
          </span>
        </CardBody>
        <CardFooter className="flex flex-col items-center justify-center">
          <Button
            as={Link}
            isExternal
            href={siteConfig.links.docs}
            variant="solid"
            color="primary"
          >
            Get your Free Channel Audit Today{" "}
            <img src={RightArrow} alt="Right Arrow" />
          </Button>
        </CardFooter>
      </Card>

      <img
        src={FooterBlur}
        alt="Footer Blur"
        className="w-[50rem] object-cover absolute -bottom-80 right-40 -z-10"
      />
    </DefaultLayout>
  );
}
