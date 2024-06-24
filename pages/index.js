import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      University of Eastern Finland Robotics Club
    </div>
  );
}
