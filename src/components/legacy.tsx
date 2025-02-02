import { Card, CardFooter } from "@heroui/card";
import { subtitle, title } from "./primitives";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

interface LegacyCardProps {
  title: string;
  subtitle: string;
  image: string;
  chip: string[];
}

const LegacyCard = ({ title, subtitle, image, chip }: LegacyCardProps) => {
  return (
    <Card className=" max-w-xs" isFooterBlurred>
      <Image
        alt={title}
        className="object-cover min-w-96"
        height={300}
        src={image}
        width={300}
      />
      <CardFooter className="flex-col gap-2 justify-between bg-default-100/50 border-default-100/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        {/* <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button> */}

        <p className="text-sm">{title}</p>
        <p className="text-xs">{subtitle}</p>
        <div className="flex gap-2">
          {chip.map((chip) => (
            <Chip
              key={chip}
              size="sm"
              variant="bordered"
              className="text-[10px]"
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
    title: "Hello Switches",
    subtitle: "100+ localities reached",
    image: "https://heroui.com/images/hero-card.jpeg",
    chip: ["Showcased at 200% dealer locations"],
  },
  {
    title: "Orbit Cables",
    subtitle: "40% brand recall uplift",
    image: "https://picsum.photos/200/300",
    chip: ["50+ Routes Across Mumbai"],
  },
  {
    title: "Lynk",
    subtitle: "20% Increase in Calls",
    image: "https://picsum.photos/200/200",
    chip: ["250+ Autos in Chennai", "35% Brand Recall"],
  },
];
const Legacy = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Chip variant="bordered" size="sm">
          Our Legacy
        </Chip>
        <div className="inline-block max-w-2xl text-center justify-center animate-blur">
          <span className={title({ size: "md" })}>
            30+ Years of Outdoor Impact, Now Driving&nbsp;
          </span>
          <span
            className={title({
              size: "md",
              color: "violet",
              italic: true,
              bold: false,
            })}
          >
            Digital&nbsp;
          </span>
          <br />
          <span className={title({ size: "md" })}>success</span>
          <div className={subtitle({ class: "mt-4" })}>
            From streets to screens, we've built brand visibility for 30+ years.
            Explore our legacy in outdoor advertising before we take it digital.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 py-8 md:py-10 animate-scroll max-w-full overflow-auto">
        <div className="flex gap-8">
          {Legacies.map((legacy) => (
            <LegacyCard key={legacy.title} {...legacy} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Legacy;
