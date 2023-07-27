import StartButton from "../ui/StartButton";
import Text from "../ui/Text";

function About() {
  return (
    <div>
      <div className="bg-[#152132] ">
        <div className=" pt-[220px] px-[248px] flex items-center justify-between">
          <div className="w-[620px] h-[500px] relative">
            <img
              src="https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/young-man-programming-server-800x533.jpg"
              alt=""
            />
            <div className="bg-white absolute text-[#3e4c5a] p-8 right-0 bottom-16">
              <h1 className=" text-7xl font-semibold leading-[72px]">11</h1>
              <p className="text-2xl text-center">Years Experience</p>
            </div>
          </div>
          <Text
            title={"ABOUT AUTOMATON"}
            description={"Artificial Intelligence for Business Applications."}
            paragraph={
              "Augue feugiat nam elit non tellus dignissim per netus conubia. Hac ut ullamcorper a sodales diam. Fusce mollis eget mus convallis massa iaculis duis facilisis turpis purus adipiscing."
            }
          />
        </div>
      </div>
      <div className="bg-[url('https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/fiber-optical-network-cable.jpg')] bg-no-repeat bg-cover flex flex-col items-center">
        <Text description={"We’re helping to automate some of the world’s most complex and difficult problems."} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>
        <StartButton text={"Get Started"}/>
      </div>
    </div>
  );
}
export default About;