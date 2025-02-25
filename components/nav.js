import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "Our Team", href: "/team" },
  { label: "Calender", href: "/calender" },
  {
    label: "Join Us",
    href: "https://forms.office.com/e/vZeQzgmYju?origin=lprLink",
    external: true,
  },
  
  
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setTheme("light");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setTheme]);

  return (
    <nav
      className={`text-white py-4 flex justify-center items-center md:text-xl sticky top-0 z-50 ${
        hasScrolled ? "nav-opacity" : "bg-primary"
      }`}
    >
      <div className="">
        <Link href="/" passHref>
          <img src="/logo_uef.svg" alt="Logo" className="h-8" />
        </Link>
      </div>
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
    </nav>
  );
}
