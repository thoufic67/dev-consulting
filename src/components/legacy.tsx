import { Card, CardFooter } from "@heroui/card";
import { subtitle, title } from "./primitives";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import OrbitCables from "@/assets/legacy/Orbit Cables.png";
import HelloSwitches from "@/assets/legacy/Hello Switches.png";
import Lynk from "@/assets/legacy/Lynk.png";
import OrbitSwitches from "@/assets/legacy/Orbit Switches.png";
import UnitedIndia from "@/assets/legacy/United India.png";
import RoyalEnfield from "@/assets/legacy/Royal Enfield.png";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

interface LegacyCardProps {
  title: string;
  subtitle: string;
  image: string;
  chip: string[];
  id?: string;
}

const LegacyCard = ({ title, subtitle, image, chip, id }: LegacyCardProps) => {
  return (
    <Card className=" max-w-xs" id={id}>
      <Image
        loading="lazy"
        alt={title}
        className="object-cover min-w-96"
        src={image}
        isZoomed
      />
      <CardFooter className="flex-col gap-4 rounded-none justify-between shadow-none overflow-hidden py-4 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-default-100/50 text-white">
        {/* <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button> */}

        <p className="text-xl">{title}</p>
        <p className="text-xs">{subtitle}</p>
        <div className="flex gap-2">
          {chip.map((chip) => (
            <Chip
              key={chip}
              size="sm"
              variant="bordered"
              className="text-[10px] border-default-100/50 bg-default-100/50 text-white"
            >
              {chip}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

const Legacies = [
  {
    title: "Orbit Cables",
    subtitle: "40% brand recall uplift",
    image: OrbitCables,
    chip: ["20 Buses Branded", "50+ Routes Across Mumbai"],
  },
  {
    title: "Hello Switches",
    subtitle: "100+ localities reached",
    image: HelloSwitches,
    chip: ["Showcased at 200+ Dealer Locations"],
  },
  {
    title: "Lynk",
    subtitle: "20% Increase in Calls",
    image: Lynk,
    chip: ["250+ Autos in Chennai", "35% Brand Recall"],
  },
  {
    title: "Orbit Switches",
    subtitle: "Collaboration with Kodaikanal Police Dept.",
    image: OrbitSwitches,
    chip: ["40%+ uplift in local brand recognition"],
  },
  {
    title: "United India Insurance",
    subtitle: "25% Increase in Walk-In Inquiries",
    image: UnitedIndia,
    chip: ["20% Boost in Local Brand Awareness"],
  },
  {
    title: "Royal Enfield",
    subtitle: "30% Increase in Social Media Mentions",
    image: RoyalEnfield,
    chip: ["15% Increase in Test Rides", "40K+ Daily Impressions"],
  },
];

interface LegacyProps {
  id?: string;
}

const Legacy = ({ id }: LegacyProps) => {
  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  return (
    <section id={id}>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Chip variant="bordered" size="sm">
          Our Legacy
        </Chip>
        <div className="inline-block max-w-2xl text-center justify-center animate-blur">
          <span
            className={title({
              size: "md",
              color: "yellow",
              italic: true,
              bold: false,
            })}
          >
            30+ Years&nbsp;
          </span>
          <span className={title({ size: "md" })}>
            of Outdoor Impact, Now Driving Digial&nbsp;
          </span>
          <span className={title({ size: "md" })}>success</span>
          <div className={subtitle({ class: "mt-4" })}>
            From streets to screens, we've built brand visibility for 30+ years.
            Explore our legacy in outdoor advertising before we take it digital.
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{
            duration: isMobile ? 10 : 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          viewport={{ once: false, amount: "some" }}
          className="flex justify-center "
        >
          <div className="flex items-center gap-16 px-4">
            {Legacies.map((legacy) => (
              <LegacyCard key={legacy.title} {...legacy} />
            ))}
          </div>
        </motion.div>
      </div>
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
    </section>
  );
};

export default Legacy;
