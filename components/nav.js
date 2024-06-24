import Link from "next/link";
import { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Donate", href: "/donate", external: true },
  { label: "Sign Up", href: "/register", external: true },
  { label: "2019", href: "https://2019.windyhacks.com", external: true },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log("UEF Robotics Club Website");
  });
  return (
    <nav className="text-white bg-primary py-4 flex justify-center items-center md:text-xl">
      {/* <nav className="dark:text-white bg-primary py-4 flex justify-center items-center md:text-xl"> */}
      {links.map(({ href, label, external }) =>
        external ? (
          <Link
            key={label}
            target="_blank"
            href={href}
            className={`ml-4 hover:underline decoration-wavy decoration-secondary`}
          >
            {label}
          </Link>
        ) : (
          <Link
            key={label}
            href={href}
            passHref
            className={`ml-4 hover:underline decoration-wavy decoration-secondary`}
          >
            {label}
          </Link>
        )
      )}
      {/* <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          document
            .querySelector("#theme_toggle")
            .classList.toggle("rotate-180");
        }}
        className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
        id="theme_toggle"
      >
        <CgDarkMode size={24} />
      </button> */}
    </nav>
  );
}
