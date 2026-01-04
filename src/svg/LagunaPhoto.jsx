const LagunaPhoto = ({ textClassName = "text-base" }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <img src="public/img/logo.png" className="w-[5rem]" />
        <h1
          className={`font-open-sans-regular font-bold leading-5 text-black text-lg font-dmsans-bold ${textClassName}`}
        >
          Laguna Lake Development Authority
        </h1>
      </div>
    </>
  );
};

export default LagunaPhoto;
