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
      className="w-96 h-[29rem] border-1 border-default-100 bg-default-100/10 p-4"
    >
      <CardHeader className="flex flex-col items-center justify-center">
        <iframe
          loading="lazy"
          className="rounded-lg overflow-hidden"
          width="100%"
          height="100%"
          src={src}
          title={Mtitle}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </CardHeader>

      <CardBody className="flex flex-col items-center justify-start">
        <div className="flex flex-col ">
          <span className="text-xl font-bold">{Mtitle}</span>
          <span className="text-sm text-default-500 mt-4">{Msubtitle}</span>
        </div>
      </CardBody>
    </Card>
  );
};

const MarketingPartners = [
  {
    Mtitle: "Aesthetic Video Shots for Tea2Go",
    Msubtitle:
      "We created visually captivating shots for Tea2Go, focusing on the beauty of their products. From the rich colors of the tea to the serene ambiance, the video highlights the brand's premium experience.",
    src: "https://www.youtube.com/embed/yHa9e-bhnds",
  },
  {
    Mtitle: "Influencer Marketing for Heaven's Park",
    Msubtitle:
      "We boosted Heaven's Park's reach through influencer marketing and a powerful video. This campaign led to expanded brand visibility and the opening of multiple new branches.",
    src: "https://www.youtube.com/embed/oFepyHtYvfc",
  },
  {
    Mtitle: "30-Second Ad for Kamai Elevators",
    Msubtitle:
      "We created a dynamic 30-second ad that showcased Kamai Elevators' reliability and innovation, elevating their brand in a competitive market. The video highlights the brand's cutting-edge solutions and customer-focused approach.",
    src: "https://www.youtube.com/embed/KD4g7p2vq9s",
  },
  {
    Mtitle: "Stop-Motion Magic for Tea2Go",
    Msubtitle:
      "We crafted a fun and dynamic stop-motion video for Tea2Go, bringing their tea creations to life in a playful and eye-catching way. This unique approach captured the brand's creativity and energy.",
    src: "https://www.youtube.com/embed/-iPLuzwIDfI",
  },
  {
    Mtitle: "Influencer-Led COVID Vaccination Awareness Campaign",
    Msubtitle:
      "We collaborated with a popular influencer to raise awareness about COVID-19 vaccination, encouraging people to get vaccinated through engaging and informative content. The campaign drove high engagement and helped spread a critical public health message.",
    src: "https://www.youtube.com/embed/O6-PXhMyHpw",
  },
  {
    Mtitle: "Kamai Elevators – Reliable Solutions in Motion",
    Msubtitle:
      "We produced a captivating AVC highlighting Kamai Elevators' cutting-edge technology and commitment to safety and efficiency. The video aimed to solidify Kamai's position as a leader in the elevator industry.",
    src: "https://www.youtube.com/embed/xaOIiGXr1qQ",
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
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="p-2 text-sm border-1 border-default-500/60 rounded-xl">
          Your One-Stop Marketing Partner
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
            Video Production&nbsp;
          </span>
          <span className={title({ size: "md" })}>
            That Drives Your Brand's Story&nbsp;
          </span>
          <br />

          <div className={subtitle({ class: "mt-4" })}>
            From concept to creation, we bring your brand's story to life
            through high-quality video content. Here are some of the YouTube
            videos we've helped produce, capturing attention and driving
            engagement.
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
              className="bg-[#FF4533] z-50"
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
              className="bg-[#FF4533] z-50"
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
          className="flex gap-8 px-4 overflow-x-auto scrollbar-hide scroll-snap-type-x mandatory"
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
