import { Chip } from "@heroui/chip";
import { title } from "./primitives";
import GradiantCircle from "./gradiant-circle";
import LinkPublicityLogo from "@/assets/Link publicity comparision.png";
import { Image } from "@heroui/image";
import BlurDiv from "./blur-div";
interface ComparisionProps {
  id?: string;
}

const ComparisonData = {
  otherAgencies: [
    "Generic YouTube advice",
    "Cookie-cutter content strategies",
    "Limited analytics and insights",
    "Basic channel optimization",
    "Minimal personal support",
  ],
  devConsulting: [
    "Expert YouTube consulting services",
    "Custom content strategy for your niche",
    "In-depth analytics and actionable insights",
    "Advanced channel optimization techniques",
    "Dedicated 1:1 coaching support",
  ],
};

const Comparision = ({ id }: ComparisionProps) => {
  return (
    <section id={id}>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="p-2 text-sm border-1 border-default-500/60 rounded-xl">
          Comparison
        </div>
        <BlurDiv className="inline-block max-w-2xl text-center justify-center">
          <span className={title({ size: "md" })}>
            But, why would you <br />
            want to
          </span>
          <span
            className={title({
              size: "md",
              color: "violet",
              italic: true,
              bold: false,
            })}
          >
            &nbsp;work with us?&nbsp;
          </span>
        </BlurDiv>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-8 md:py-10">
        <div className="items-center justify-center text-center">
          <h3 className="text-2xl text-default-500/60 mb-6 p-5">
            Other Agencies
          </h3>
          <div className="rounded-3xl w-[20rem] md:w-[27rem] p-8 border-1 border-default-500/60">
            {ComparisonData.otherAgencies.map((item) => (
              <div key={item} className="flex items-center gap-3 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-500"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-default-500/60">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl items-center justify-center text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-2xl font-bold">Dev Consulting</h3>
          </div>
          <div className="relative w-[20rem] md:w-[27rem] rounded-3xl p-8 border-1 border-default-500/50 overflow-hidden">
            <div className="absolute -top-[80%] -right-[80%] w-fit h-fit -z-10 blur-3xl">
              <div className="w-full h-full">
                <GradiantCircle isFullyVisible={true} />
              </div>
            </div>
            {ComparisonData.devConsulting.map((item) => (
              <div key={item} className="flex items-center gap-3 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparision;
