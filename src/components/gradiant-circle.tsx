const GradiantCircle = ({
  isFullyVisible = true,
  from = "from-primary",
  to = "to-primary/50",
}) => {
  return (
    <div
      className={`${isFullyVisible ? "h-96" : "h-64"} overflow-hidden  -z-10`}
    >
      <div className="w-full h-full">
        <div
          className={`w-96 h-96 bg-gradient-to-r ${from} ${to} rounded-full`}
        >
          <div className="w-full h-full bg-radial-gradient from-white via-white/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default GradiantCircle;
