import { Chip } from "@heroui/chip";
import { subtitle, title } from "./primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";

const HowWeHelp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
      <Chip variant="bordered" size="sm">
        Services
      </Chip>
      <div className="inline-block max-w-4xl text-center justify-center animate-blur">
        <span className={title({ size: "md" })}>How can we </span>
        <span className={title({ size: "md", italic: true, bold: false })}>
          help
        </span>
        <span className={title({ size: "md" })}> you?</span>
        <span className={subtitle({ fullWidth: true })}>
          We help you grow your brand with impactful outdoor advertising and
          targeted digital marketing. From vehicle branding to paid ads and SEO,
          our tailored strategies drive real results and boost your brands
          visibility
        </span>
      </div>
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Outdoor Advertising Card */}
        <Card className="col-span-1 p-8 border-1 border-default-300/50 ">
          <div className=" absolute -top-10 -left-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-purple-600 to-cyan-500 text-white p-8" />
          <CardHeader className="pb-2 justify-center items-center">
            <h2 className="text-3xl font-bold">Outdoor Advertising</h2>
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
          <div className=" absolute -top-10 -right-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-red-600 to-green-600 text-white p-8" />
          <CardHeader className="pb-2 justify-center items-center">
            <h2 className="text-3xl font-bold">Paid Advertising</h2>
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
          <div className=" absolute -top-10 -right-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-purple-600 to-cyan-500 text-white p-8" />

          <div className=" absolute -bottom-10 -left-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-red-600 to-green-600 text-white p-8" />

          <CardHeader className="pb-2 justify-center items-center   ">
            <h2 className="text-3xl font-bold">
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
  );
};

export default HowWeHelp;
