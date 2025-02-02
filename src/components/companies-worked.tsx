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
      <Chip variant="bordered" size="sm">
        Trusted by Leading Brands
      </Chip>
      <div className="w-full overflow-hidden ">
        <div className="flex justify-center animate-fast-scroll sm:animate-scroll hover:animate-none focus-within:animate-none focus-within:overflow-x-auto">
          <div className="flex items-center gap-16 px-[calc(50vw-192px)]">
            {companies.map((company) => (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={company.image}
                  alt={company.name}
                  radius="none"
                  className="h-32 min-w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesWorked;
