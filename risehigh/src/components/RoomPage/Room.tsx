const Room: React.FC = () => {
  return (
    <div className="relative bg-black ">
      <img
        src="/images/hero1.jpg"
        alt="room image"
        className="w-full bg-black opacity-25 h-full object-cover"
      />
      {/* checkout form */}
      <div className="absolute inset-0 flex flex-col px-8 lg:px-[8vw] gap-12 justify-center items-center text-center "></div>
    </div>
  );
};

export default Room;
