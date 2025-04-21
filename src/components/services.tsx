import { subtitle, title } from "./primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import StrategyPlanning from "@/assets/background/FirstCardBg.png";
import VideoAnalysis from "@/assets/background/SecondCardBg.png";
import CoachingSupport from "@/assets/background/ThirdCardBg.png";
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
            We help you grow your YouTube channel with strategic planning,
            in-depth analysis, and personalized coaching. From content strategy
            to video optimization, our tailored approach drives real results and
            boosts your channel's growth.
          </span>
        </BlurDiv>
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strategy Planning Card */}
          <Card className="col-span-1 p-8 border-1 border-default-300/50 ">
            <img
              src={StrategyPlanning}
              alt="Strategy Planning"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <CardHeader className="pb-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center">
                Strategy Planning
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-default-500 text-center">
                Develop a comprehensive YouTube strategy tailored to your goals.
                From content calendars to audience targeting, we create
                actionable plans that drive channel growth and engagement.
              </p>
            </CardBody>
          </Card>

          {/* Video Analysis Card */}
          <Card className="col-span-1 p-8  border-1 border-default-300/50 ">
            <img
              src={VideoAnalysis}
              alt="Video Analysis"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <CardHeader className="pb-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center ">
                In-Depth Video Analysis
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-default-500 text-center">
                Get detailed insights into your video performance. We analyze
                metrics, audience retention, and engagement patterns to optimize
                your content for maximum impact and reach.
              </p>
            </CardBody>
          </Card>

          {/* Coaching Support Card */}
          <Card className="col-span-2 md:col-span-2  p-8  border-1 border-default-300/50 ">
            <img
              src={CoachingSupport}
              alt="Coaching Support"
              className="w-full h-full object-cover absolute top-0 left-0 blur-sm"
            />

            <div className=" absolute -bottom-10 -left-10 w-40 h-40 blur-[100px] rounded-full  bg-gradient-to-br from-red-600 to-green-600 text-white p-8" />

            <CardHeader className="pb-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center">
                1:1 Coaching Support
              </h2>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center">
              <p className="text-default-500 text-center max-w-lg">
                Get personalized guidance from our YouTube experts. We provide
                hands-on support for content creation, optimization, and channel
                growth strategies, ensuring your success on the platform.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
