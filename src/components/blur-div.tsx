import { motion } from "framer-motion";

const BlurDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 50, filter: "blur(10px)" }}
      whileInView={{ y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: "all" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurDiv;
