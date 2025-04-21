import { subtitle } from "./primitives";
import { title } from "./primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import BlurDiv from "./blur-div";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import RightChevron from "@/assets/icons/RightChevron.png";

const MarketingPartnerCard = ({
  Mtitle,
  Msubtitle,
  src,
}: {
  Mtitle: string;
  Msubtitle: string;
  src: string;
}) => {
  return (
    <Card
      isBlurred
      className="w-96 border-1 border-default-100 bg-default-100/10"
    >
      <CardHeader className="flex flex-col items-center justify-center">
        <iframe
          loading="lazy"
          className="rounded-lg overflow-hidden w-full aspect-video"
          width="100%"
          height="100%"
          src={src}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title={""}
        ></iframe>
      </CardHeader>

      {/* <CardBody className="flex flex-col items-center justify-start">
        <div className="flex flex-col ">
          <span className="text-xl font-bold">{Mtitle}</span>
          <span className="text-sm text-default-500 mt-4">{Msubtitle}</span>
        </div>
      </CardBody> */}
    </Card>
  );
};

const MarketingPartners = [
  {
    Mtitle: "Tech Channel Growth Strategy",
    Msubtitle:
      "We helped a tech review channel optimize their content strategy and presentation, leading to a 200% increase in subscribers and consistent growth in views and engagement.",
    src: "https://www.youtube.com/embed/mk9YhTC3CaY",
  },
  {
    Mtitle: "Cooking Content Optimization",
    Msubtitle:
      "Through strategic content planning and audience analysis, we helped a cooking channel quadruple their watch time and build a highly engaged community of food enthusiasts.",
    src: "https://www.youtube.com/embed/Bfh3WL4dRA4",
  },
  {
    Mtitle: "Fitness Channel Transformation",
    Msubtitle:
      "Our comprehensive channel strategy helped a fitness creator triple their revenue through optimized content, better engagement, and strategic brand partnerships.",
    src: "https://www.youtube.com/embed/8cWIUadRltw",
  },
  {
    Mtitle: "Educational Series Success",
    Msubtitle:
      "We helped an educational content creator reach 1M+ views on their series through improved content structure, thumbnail optimization, and strategic video promotion.",
    src: "https://www.youtube.com/embed/YPvJAT7h-l8",
  },
  {
    Mtitle: "Gaming Channel Growth",
    Msubtitle:
      "Our strategies helped a gaming channel increase their membership revenue by 5x through improved community engagement and content optimization.",
    src: "https://www.youtube.com/embed/_Yt1BNwWWH8",
  },
  {
    Mtitle: "Lifestyle Content Strategy",
    Msubtitle:
      "We helped a lifestyle vlogger secure 50+ brand partnerships through strategic content planning and channel optimization, leading to significant revenue growth.",
    src: "https://www.youtube.com/embed/ITkWNozeqmQ",
  },
];

const MarketingPartner = () => {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      threshold: 1.0,
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

    const container = scrollContainerRef.current;
    if (container) {
      const firstCard = container.querySelector('[data-card-position="first"]');
      const lastCard = container.querySelector('[data-card-position="last"]');

      if (firstCard) observer.observe(firstCard);
      if (lastCard) observer.observe(lastCard);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      if (scrollContainerRef.current && !isAnimationPaused) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const containerWidth = scrollContainerRef.current.offsetWidth;

        await controls.start({
          x: -(scrollWidth - containerWidth),
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    startAnimation();
  }, [isAnimationPaused, controls]);

  const handleInteractionStart = () => {
    setIsAnimationPaused(true);
    controls.stop();
  };

  const handleInteractionEnd = () => {
    setIsAnimationPaused(false);
    if (scrollContainerRef.current) {
      controls.start({
        x: -(
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.offsetWidth
        ),
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="p-2 text-sm border-1 border-default-500/60 rounded-xl">
          Your YouTube Growth Partner
        </div>
        <BlurDiv className="inline-block max-w-4xl text-center justify-center">
          <span
            className={title({
              size: "md",
              color: "yellow",
              italic: true,
              bold: false,
            })}
          >
            Channel Growth&nbsp;
          </span>
          <span className={title({ size: "md" })}>
            That Drives Real Results&nbsp;
          </span>
          <br />

          <div className={subtitle({ class: "mt-4" })}>
            From strategy to execution, we help YouTubers achieve their growth
            goals. Here are some of the channels we've helped transform,
            delivering measurable results and sustainable growth.
          </div>
        </BlurDiv>
      </div>
      <div className="w-full overflow-hidden relative py-16">
        <div
          className={`absolute flex justify-center items-center left-0 top-0 bottom-0 md:w-32 w-20 z-50 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 ${
            showLeftGradient ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-start items-center h-full">
            <Button
              variant="solid"
              color="primary"
              isIconOnly
              onClick={() => {
                scrollContainerRef.current?.scrollBy({
                  left: -416,
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
              isIconOnly
              onClick={() => {
                scrollContainerRef.current?.scrollBy({
                  left: 416,
                  behavior: "smooth",
                });
              }}
            >
              <Image src={RightChevron} alt="Right Arrow" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-8 p-4 overflow-x-auto scrollbar-hide scroll-snap-type-x mandatory"
        >
          <motion.div
            className="flex justify-start gap-16"
            data-card-position="container"
          >
            {MarketingPartners.map((partner, index) => (
              <div
                key={partner.Mtitle}
                data-card-position={
                  index === 0
                    ? "first"
                    : index === MarketingPartners.length - 1
                      ? "last"
                      : "middle"
                }
              >
                <MarketingPartnerCard {...partner} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MarketingPartner;
