import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <div className="relative flex justify-center items-center bg-primary py-6">
        <div>
          <img
            className="select-none mx-auto px-4 sm:h-28 lg:h-48"
            src="/full_logo.png"
          />
          <div className="mt-4 text-white rounded-lg p-2 lg:p-4">
            <h2 className="text-center text-4xl text-white lg:flex justify-center items-center">
              Build
              <div className=" mx-3 relative italic font-semibold underline lg:no-underline decoration-secondary">
                something amazing
                <img
                  className="select-none hidden lg:block absolute top-6"
                  src="/underline.svg"
                />
              </div>
              in just 24 hours.
            </h2>
            <p className="mt-2 lg:mt-8 text-lg md:text-2xl text-center text-white/70">
              June 22-23rd, 2024
            </p>
            <div className="flex flex-col items-center justify-center">
              <a
                href="/register"
                className="mt-6 bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ transform: "translateX(-6%)" }}
          className="bottom-0 absolute w-full"
        >
          {/* <img className="object-fill" src="/cityscape.svg" /> */}
        </div>
      </div>
      University of Eastern Finland Robotics Club
    </div>
  );
}
