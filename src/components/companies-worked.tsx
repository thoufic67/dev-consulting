import { Chip } from "@heroui/chip";
import Kamai from "@/assets/companies/Kamai.png";
import Pothys from "@/assets/companies/Pothys.png";
import Nippon from "@/assets/companies/Nippon.png";
import Orbit from "@/assets/companies/Orbit.png";
import Aircel from "@/assets/companies/Aircel.png";
import CocaCola from "@/assets/companies/Coca-Cola.png";
import Parle from "@/assets/companies/Parle.png";
import LIC from "@/assets/companies/LIC.png";
import Vodafone from "@/assets/companies/Vodafone.png";
import Poorvika from "@/assets/companies/Poorvika.png";
import Lynk from "@/assets/companies/Lynk.png";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import BlurDiv from "./blur-div";

const companies = [
  {
    name: "Kamai",
    image: Kamai,
  },
  {
    name: "Pothys",
    image: Pothys,
  },
  {
    name: "Nippon Paint",
    image: Nippon,
  },
  {
    name: "Aircel",
    image: Aircel,
  },
  {
    name: "Coca Cola",
    image: CocaCola,
  },
  {
    name: "Parle",
    image: Parle,
  },
  {
    name: "LIC",
    image: LIC,
  },
  {
    name: "Vodafone",
    image: Vodafone,
  },
  {
    name: "Poorvika",
    image: Poorvika,
  },
  {
    name: "Orbit",
    image: Orbit,
  },
  {
    name: "Lynk",
    image: Lynk,
  },
];

const CompaniesWorked = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="text-sm text-default-500/80 rounded-xl">
        Trusted by Leading Brands
      </div>
      <BlurDiv className="w-full overflow-hidden">
        <motion.div
          className="flex justify-center focus-within:overflow-x-auto"
          initial={{ x: 0 }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex items-center gap-16 px-[calc(50vw-192px)]">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  draggable={false}
                  loading="lazy"
                  src={company.image}
                  alt={company.name}
                  radius="none"
                  className="h-32 min-w-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </BlurDiv>
    </div>
  );
};

export default CompaniesWorked;
