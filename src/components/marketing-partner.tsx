import { subtitle } from "./primitives";
import { Chip } from "@heroui/chip";
import { title } from "./primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState } from "react";

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
      className="w-96 border-1 border-default-100 bg-default-100/10 p-4"
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

      <CardBody className="flex flex-col items-center justify-center">
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

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Chip variant="bordered" size="sm">
          Your One-Stop Marketing Partner
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
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className={`flex justify-center animate-fast-scroll sm:animate-scroll hover:animate-none focus-within:animate-none focus-within:overflow-x-auto`}
        >
          <div className="flex items-center gap-16 px-[calc(50vw-192px)]">
            {MarketingPartners.map((partner) => (
              <MarketingPartnerCard key={partner.Mtitle} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingPartner;
