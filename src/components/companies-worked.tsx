import { Chip } from "@heroui/chip";

const CompaniesWorked = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Chip variant="bordered" size="sm">
        Trusted by Leading Brands
      </Chip>
      <div className="w-full overflow-hidden ">
        <div className="flex justify-center animate-scroll">
          <div className="flex items-center  gap-16 px-4 ">
            <p className="text-xl font-bold"> Kamai Elevators</p>
            <p className="text-xl font-bold"> ORBIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesWorked;
