function Text({ title, description, paragraph }) {
  return (
    <>
      <div className=" py-[170px] ">
        <div className="flex flex-col gap-5 max-w-lg">
          <h3 className="text-[#00A0B1] text-base ]">{title}</h3>
          <h1 className="text-white text-5xl leading-[53px] font-bold">
            {description}
          </h1>
          <p className="text-2xl leading-8 text-white">{paragraph}</p>
        </div>
      </div>
    </>
  );
}
export default Text;
