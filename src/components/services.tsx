import { subtitle, title } from "./primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import OutdoorAdvertising from "@/assets/background/FirstCardBg.png";
import PaidAdvertising from "@/assets/background/SecondCardBg.png";
import DigitalPresence from "@/assets/background/ThirdCardBg.png";
import BlurDiv from "./blur-div";

const HowWeHelp = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <div className="p-2 text-sm border-1 border-default-500/60 rounded-xl">
          Services
        </div>
        <BlurDiv className="inline-block max-w-4xl text-center justify-center">
          <span className={title({ size: "md" })}>How can we </span>
          <span
            className={title({
              size: "md",
              italic: true,
              bold: false,
              color: "violet",
            })}
          >
            help you?&nbsp;
          </span>

          <span className={subtitle({ fullWidth: true })}>
            We help you grow your brand with impactful outdoor advertising and
            targeted digital marketing. From vehicle branding to paid ads and
            SEO, our tailored strategies drive real results and boost your
            brands visibility
          </span>
        </BlurDiv>
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Outdoor Advertising Card */}
          <Card className="col-span-1 p-8 border-1 border-default-300/50 ">
            <img
              src={OutdoorAdvertising}
              alt="Outdoor Advertising"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <CardHeader className="pb-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center">
                Outdoor Advertising
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-default-500 text-center">
                Leverage high-visibility spaces to connect with your audience.
                From vehicle branding to billboards, we create impactful outdoor
                campaigns that turn heads and build brand recognition.
              </p>
            </CardBody>
          </Card>

          {/* Paid Advertising Card */}
          <Card className="col-span-1 p-8  border-1 border-default-300/50 ">
            <img
              src={PaidAdvertising}
              alt="Paid Advertising"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <CardHeader className="pb-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center ">
                Paid Advertising
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-default-500 text-center">
                Maximize your digital impact with paid ads. Our targeted Google
                Ads and social media campaigns are designed to increase
                visibility, boost conversions, and deliver measurable results.
              </p>
            </CardBody>
          </Card>

          {/* Digital Presence Card */}
          <Card className="col-span-2 md:col-span-2  p-8  border-1 border-default-300/50 ">
            <img
              src={DigitalPresence}
              alt="Digital Presence"
              className="w-full h-full object-cover absolute top-0 left-0 blur-sm"
            />

            <div className=" absolute -bottom-10 -left-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-red-600 to-green-600 text-white p-8" />

            <CardHeader className="pb-2 justify-center items-center   ">
              <h2 className="text-3xl font-bold text-center">
                Digital Presence Optimization
              </h2>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center">
              <p className="text-default-500 text-center max-w-lg">
                A strong online presence starts with the right foundation. We
                optimize your website, SEO, and social media strategy to improve
                reach, engagement, and ultimately, your brand's success.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
