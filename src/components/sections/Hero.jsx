import Text from "../ui/Text";
import Button from "../ui/Button";
import { BsDeviceSsd } from "react-icons/bs";

function Hero() {
  const statistics = [
    {
      number: "2010",
      description: "the year of foundation",
    },
    {
      number: "741+",
      description: "solutions delivered",
    },
    {
      number: "411+",
      description: "professionals and growing",
    },
    {
      number: "90%",
      description: "hold BS, MS, or PhD in Math/Computer Science",
    },
  ];
  return (
    <div className="px-[248px] relative">
      <div className="flex gap-80 ">
        <Text
          title={"ABOUT US"}
          description={
            "Artificial intelligence is not a matter of science fiction."
          }
          paragraph={
            "Nulla fames finibus orci fusce pede phasellus consectetur vulputate consequat"
          }
        />
        <div className="pt-[200px]">
          <Button />
        </div>
      </div>
      <div className="flex px-[100px] py-12 gap-[100px] absolute z-10 -bottom-28  bg-gradient-to-r from-[#0EA1A8] to-[#42BA3E]">
        {statistics.map(({ number, description }, index) => {
          return (
            <div className="text-white flex flex-col">
              <h1 className="text-[72px] font-semibold leading-[72px]">
                {number}
              </h1>
              <p className="text-sm leading-[22.4px] text-center">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Hero;
