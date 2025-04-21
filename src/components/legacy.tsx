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
import { useMemo, useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";
import RightArrow from "@/assets/icons/RightArrow.png";
import RightChevron from "@/assets/icons/RightChevron.png";
import BlurDiv from "./blur-div";

interface LegacyCardProps {
  title: string;
  subtitle: string;
  image: string;
  chip: string[];
  id?: string;
}

const LegacyCard = ({ title, subtitle, image, chip, id }: LegacyCardProps) => {
  return (
    <Card
      className="min-w-72 md:min-w-96 max-w-96 scroll-snap-start shadow-none"
      id={id}
      data-card-position={
        title === "Orbit Cables"
          ? "first"
          : title === "Royal Enfield"
            ? "last"
            : "middle"
      }
    >
      <img
        loading="lazy"
        alt={title}
        className="object-cover min-w-96 rounded-none"
        src={image}
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
        <p className="text-sm">{subtitle}</p>
        <div className="flex gap-2">
          {chip.map((chip) => (
            <Chip
              key={chip}
              size="sm"
              variant="bordered"
              className="text-xs border-default-100/50 bg-default-100/50 text-white"
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
    title: "Tech Review Channel",
    subtitle: "200% subscriber growth in 6 months",
    image: OrbitCables,
    chip: ["1M+ Views Generated", "50K+ New Subscribers"],
  },
  {
    title: "Cooking Channel",
    subtitle: "400% increase in watch time",
    image: HelloSwitches,
    chip: ["Featured on YouTube Trending", "100K+ Engaged Community"],
  },
  {
    title: "Fitness Creator",
    subtitle: "300% revenue growth",
    image: Lynk,
    chip: ["500K+ Monthly Views", "45% Engagement Rate"],
  },
  {
    title: "Educational Content",
    subtitle: "1M+ views on educational series",
    image: OrbitSwitches,
    chip: ["90% Audience Retention", "200K+ Subscribers Growth"],
  },
  {
    title: "Gaming Channel",
    subtitle: "5x growth in channel membership",
    image: UnitedIndia,
    chip: ["300K+ Active Members", "2M+ Monthly Watch Hours"],
  },
  {
    title: "Lifestyle Vlogger",
    subtitle: "10x increase in brand collaborations",
    image: RoyalEnfield,
    chip: ["50+ Brand Partnerships", "1M+ Monthly Impressions"],
  },
];

interface LegacyProps {
  id?: string;
}

const Legacy = ({ id }: LegacyProps) => {
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      threshold: 1.0, // 100% visibility required
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const position = (entry.target as HTMLElement).dataset.cardPosition;

        if (position === "first") {
          setShowLeftGradient(!entry.isIntersecting);
        } else if (position === "last") {
          setShowRightGradient(!entry.isIntersecting);
        }
      });
    }, options);

    // Observe first and last cards
    const container = scrollContainerRef.current;
    if (container) {
      const firstCard = container.querySelector('[data-card-position="first"]');
      const lastCard = container.querySelector('[data-card-position="last"]');

      if (firstCard) observer.observe(firstCard);
      if (lastCard) observer.observe(lastCard);
    }

    return () => observer.disconnect();
  }, []);

  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  return (
    <section id={id}>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="p-2 text-sm border-1 border-default-500/60 rounded-xl">
          Our Legacy
        </div>
        <BlurDiv className="inline-block max-w-2xl text-center justify-center">
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
            of Outdoor Impact, Now Driving Digital&nbsp;
          </span>
          <span className={title({ size: "md" })}>success</span>
          <div className={subtitle({ class: "mt-4" })}>
            From streets to screens, we've built brand visibility for 30+ years.
            Explore our legacy in outdoor advertising before we take it digital.
          </div>
        </BlurDiv>
      </div>
      <div className="w-full overflow-hidden relative">
        <div
          className={`absolute flex justify-center items-center left-0 top-0 bottom-0 md:w-32 w-20 z-50 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 ${
            showLeftGradient ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-start items-center h-full">
            <Button
              variant="solid"
              color="primary"
              className=" z-50"
              isIconOnly
              onClick={() => {
                scrollContainerRef.current?.scrollBy({
                  left: -416, // 396px (card width) + 16px (gap)
                  behavior: "smooth",
                });
              }}
            >
              <Image
                src={RightChevron}
                alt="Left Arrow"
                className="rotate-180"
              />
            </Button>
          </div>
        </div>
        <div
          className={`absolute right-0 top-0 bottom-0 md:w-32 w-20 z-50 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 ${
            showRightGradient ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center items-center h-full">
            <Button
              variant="solid"
              color="primary"
              className="z-50 "
              isIconOnly
              onPress={() => {
                scrollContainerRef.current?.scrollBy({
                  left: 416, // 396px (card width) + 16px (gap)
                  behavior: "smooth",
                });
              }}
            >
              <Image src={RightChevron} alt="Right Arrow" />
            </Button>
          </div>
        </div>
        <motion.div className="flex justify-center">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-8 px-4 overflow-x-auto scrollbar-hide scroll-snap-type-x mandatory"
          >
            {Legacies.map((legacy) => (
              <LegacyCard key={legacy.title} {...legacy} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <BlurDiv className="inline-block max-w-4xl text-center justify-center">
          <span className={title({ size: "sm", italic: true, bold: false })}>
            At Dev Consulting, we focus on delivering real YouTube growth.
          </span>
          <br />
          <span className={title({ size: "sm" })}>
            Our goal is simple - to help your channel grow through expert
            strategy and optimization. From content planning to audience
            engagement, we ensure your YouTube channel reaches its full
            potential.
          </span>
        </BlurDiv>

        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            className: "mt-8",
            radius: "lg",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Get your Free Audit Today <img src={RightArrow} alt="Right Arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Legacy;
