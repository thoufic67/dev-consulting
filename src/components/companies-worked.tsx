import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";
import BlurDiv from "./blur-div";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";

const YoutubeIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const socialChannels = [
  {
    name: "Dev Got Money",
    platform: "YouTube",
    followers: "17K Subscribers",
    url: "https://youtube.com/@devgotmoney",
    image:
      "https://yt3.googleusercontent.com/j7ibZ6r_fiE1_cvQl_miHNG1IO7B21udcQTdc6V2FKfrPLc2-1mq4zTAaWDPsVXXzW3fhojJfYs=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Lights of Life",
    platform: "YouTube",
    followers: "317K Subscribers",
    url: "https://www.youtube.com/@Lights.of.life.",
    image:
      "https://yt3.googleusercontent.com/6GZCm03uM1jlB2Kjr2aT-xwOIlYjny6gsd12oxQqPLwjTZxEa5cpIl0fV4ZDIZYiCC0uGoLtDg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Call Me Alza",
    platform: "YouTube",
    followers: "287K Subscribers",
    url: "https://youtube.com/@callmealza",
    image:
      "https://yt3.googleusercontent.com/QFH9aYD4IW0krGo_LA-ysNpNyIoSgMeXXVexreD4kSg6lggdCBxVQ2pUGuLdhTJbymzXLlko=s160-c-k-c0x00ffffff-no-rj",
  },

  {
    name: "Dev Got Money",
    platform: "Instagram",
    followers: "8K Followers",
    url: "https://www.instagram.com/dev.gotmoney",
    image:
      "https://yt3.googleusercontent.com/j7ibZ6r_fiE1_cvQl_miHNG1IO7B21udcQTdc6V2FKfrPLc2-1mq4zTAaWDPsVXXzW3fhojJfYs=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Lights of Life",
    platform: "Instagram",
    followers: "50K Followers",
    url: "https://www.instagram.com/lightsoflife.see",
    image:
      "https://yt3.googleusercontent.com/6GZCm03uM1jlB2Kjr2aT-xwOIlYjny6gsd12oxQqPLwjTZxEa5cpIl0fV4ZDIZYiCC0uGoLtDg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Midnight Perfection",
    platform: "Instagram",
    followers: "34K Followers",
    url: "https://www.instagram.com/midnight.perfection",
    image: "https://ui-avatars.com/api/?name=midnightperfection",
  },
];

const CompaniesWorked = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="text-sm text-default-500/80 rounded-xl">
        Our Growing Community
      </div>
      <BlurDiv className="w-full overflow-x-auto scrollbar-hide">
        <motion.div
          className="w-full flex justify-center focus-within:overflow-x-auto"
          initial={{ x: 0 }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex items-center gap-16 p-4">
            {socialChannels.map((channel, index) => (
              <Link
                key={index}
                href={channel.url}
                isExternal
                className="no-underline"
              >
                <motion.div
                  className="flex flex-col items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Avatar
                    src={channel.image}
                    name={channel.name}
                    className="w-24 h-24"
                    color={
                      channel.platform === "YouTube" ? "danger" : "secondary"
                    }
                    classNames={{
                      base: "transition-transform",
                      img: "object-cover",
                    }}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-base font-medium text-foreground">
                      {channel.name}
                    </span>
                    <div className="flex flex-col items-center gap-1.5">
                      <Chip
                        variant="flat"
                        color={
                          channel.platform === "YouTube"
                            ? "danger"
                            : "secondary"
                        }
                        size="sm"
                        classNames={{
                          base: "transition-colors",
                          content: "font-medium flex items-center gap-1.5",
                        }}
                      >
                        {channel.platform === "YouTube" ? (
                          <YoutubeIcon />
                        ) : (
                          <InstagramIcon />
                        )}
                        {channel.platform}
                      </Chip>
                      <span className="text-sm text-default-500">
                        {channel.followers}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </BlurDiv>
    </div>
  );
};

export default CompaniesWorked;
