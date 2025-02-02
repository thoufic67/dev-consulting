import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";
import GradiantCircle from "@/components/gradiant-circle";
import CompaniesWorked from "@/components/companies-worked";
import Legacy from "@/components/legacy";
import HowWeHelp from "@/components/how-we-help";
import MarketingPartner from "@/components/marketing-partner";
import Comparision from "@/components/comparision";
import Process from "@/components/process";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-72">
        <div className="inline-block max-w-2xl text-center justify-center animate-blur">
          <span className={title()}>Is Your Digital Presence&nbsp;</span>
          <span
            className={title({ color: "violet", italic: true, bold: false })}
          >
            Holding You Back?&nbsp;
          </span>
          <br />
          <span className={title()}>Let's fix that</span>
          <div className={subtitle({ class: "mt-4" })}>
            We analyze your website, social media, SEO, and competitor
            performance to uncover gaps and opportunities. Get a detailed audit
            and a clear roadmap to elevate your digital presence.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "warning",
              radius: "lg",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Get your free, digital presence audit
          </Link>
        </div>

        {/* <div className="h-64 overflow-hidden blur-3xl -z-10">
          <div className="w-full h-full">
            <GradiantCircle isFullyVisible={false} />
          </div>
        </div> */}
      </section>

      <CompaniesWorked />
      <Legacy />

      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <div className="inline-block max-w-4xl text-center justify-center animate-blur">
          <span className={title({ size: "xs", italic: true, bold: false })}>
            At The Link Publicity, we focus on delivering real results.
          </span>
          <span className={title({ size: "xs" })}>
            Our goal is simple - to help your brand grow through effective
            digital marketing. From paid ads to social media, we make sure your
            brand gets noticed and reaches its full potential
          </span>
        </div>
        <Link
          isExternal
          className={buttonStyles({
            color: "warning",
            radius: "lg",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Get your free, digital presence audit
        </Link>
      </div>

      <HowWeHelp />

      <MarketingPartner />
      <Comparision />
      <Process />

      <Card
        isBlurred
        className="border-1 border-default-100 justify-center p-8 bg-default-100/10"
      >
        <CardHeader className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center  max-w-lg">
            <span className={title({ size: "md" })}>
              Ready to scale your brand to new heights?
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center justify-center text-center">
          <span className={subtitle({ class: "max-w-lg" })}>
            If you want to achieve ground-breaking growth with increased sales
            and profitability, then you're in the right place.
          </span>
        </CardBody>
        <CardFooter className="flex flex-col items-center justify-center">
          <Button
            as={Link}
            isExternal
            href={siteConfig.links.docs}
            variant="solid"
            color="warning"
          >
            Get your free, digital presence audit
          </Button>
        </CardFooter>
      </Card>

      <div className="w-full absolute -bottom-[5%] left-[40%] -z-10 blur-[100px]">
        <GradiantCircle />
      </div>
    </DefaultLayout>
  );
}
