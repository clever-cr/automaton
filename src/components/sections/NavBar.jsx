import { Link } from "react-router-dom";
import StartButton from "../ui/StartButton";
import { BsChevronDown } from "react-icons/bs";

function NavBar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "Service",
      path: "/",
      icon: <BsChevronDown />,
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Contact Us",
      path: "/",

    },
    {
      name: "Page",
      path: "/page",
      icon: <BsChevronDown />,
    },
  ];
  return (
    <>
      <div className="flex  px-[210px] items-center justify-between py-[16px]">
        <img
          src="https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/elementor/thumbs/logo_automaton-pfwz6ha8ok02c9u0duxmjbyiv0ehz35r3t8kvgruo0.png"
          alt=""
        />

        <div className="flex items-center text-white gap-8">
          {links.map(({ name, path, icon }, index) => {
            return (
              <div className="flex items-center gap-2">
                <Link to={path} key={index}>
                  {name}
                </Link>
                <div className="text-sm  font-bold">{icon}</div>
              </div>
            );
          })}
          <StartButton text={"Get started"} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
