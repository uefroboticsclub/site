import Link from "next/link";
import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      {/* Upper Banner */}
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
        ></div>
      </div>

      {/* Middle Content */}
      <div className="h-full">
        <div className="h-full bg-tertiary pb-12">
          <div className="lg:flex 3xl:w-2/3 mx-auto">
            <div className="lg:w-1/2 p-8 my-auto">
              <h2 className="pt-8 text-center font-bouquet text-5xl text-primary">
                🔎 Who are we?
              </h2>
              <div className="w-full mt-4 mx-auto bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg lg:text-xl">
                  Windy City Hacks is a free two-day event for programmers,
                  artists, designers, & other high schoolers in the Chicagoland
                  area to come together and build apps & games. We'll provide
                  workshops to learn, mentors to assist, food to eat, and prizes
                  to win. The next day, judges will pick the best demos to win
                  prizes!
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 my-auto">
              <img
                className="select-none border-4 border-primary object-cover rounded-lg mx-auto"
                src="/photos/group.jpg"
              />
            </div>
          </div>
          <div className="lg:flex 3xl:w-2/3 mx-auto">
            <div className="p-8 my-auto">
              <img
                className="select-none border-4 border-primary object-cover rounded-lg mx-auto my-auto"
                src="/photos/mentors.jpeg"
              />
            </div>
            <div className="lg:w-3/5 p-8 my-auto">
              <h2 className="lg:pt-8 text-center font-bouquet text-5xl text-primary">
                🤷 But why?
              </h2>
              <div className="w-full mt-4 mx-auto bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg lg:text-xl">
                  Now, more than ever, coding and digital design have become
                  vital skills. Classes in school are great, but don't offer a
                  way for you to think outside of the box. Learning online
                  builds independence, with confusion and lack of community.
                  Building (and{" "}
                  <i className="underline decoration-dotted decoration-secondary">
                    breaking
                  </i>
                  ) things <b>together</b> is the <i>best</i> way to learn.
                  That's why we're here.
                </p>
              </div>
            </div>
          </div>
          <h2
            className="pt-8 text-center font-bouquet text-5xl text-primary"
            id="faq"
          >
            🙋 FAQ
          </h2>
          <div className="mx-auto px-8 lg:w-2/3 lg:grid grid-cols-2 gap-6">
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                What is a hackathon?
              </h3>
              <p className="bottom-0 text-lg p-4">
                A hackathon is a two-day event where you can learn to code,
                build apps, and meet new friends. We'll have workshops, mentors,
                and prizes to help you along the way.
              </p>
            </div>
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                Who can come?
              </h3>
              <p className="bottom-0 text-lg p-4">
                If you're a high schooler, you can come! All skill levels are
                welcome, from complete beginner to expert. You can form teams,
                or fly solo. Just make sure to bring a valid school ID!
              </p>
            </div>
          </div>
          <div className="mt-4 mx-auto px-8 lg:w-2/3 lg:grid grid-cols-2 gap-6">
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                Hacking?!?!
              </h3>
              <p className="bottom-0 text-lg p-4">
                Not THAT type of hacking, we're not hacking into servers or
                databases. The word is being redefined to mean building
                "things", like websites, games, or apps!
              </p>
            </div>
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                How much does it cost?
              </h3>
              <p className="bottom-0 text-lg p-4">
                Nothing! Registration, attendence -- the entire event is 100%
                free, thanks to our generous sponsors. Food, drinks, workshops,
                and prizes are all included. Interested in sponsoring?{" "}
                <a
                  className="italic hover:underline decoration-wavy decoration-secondary"
                  href="mailto:andrew@windycityhacks.com"
                >
                  Contact us!
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 mx-auto px-8 lg:w-2/3 lg:grid grid-cols-2 gap-6">
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                What should I bring?
              </h3>
              <p className="bottom-0 text-lg p-4">
                First, yourself! Then, make sure to bring a computer, chargers,
                anything else that may help you hack. Don't forget a student ID!
                We'll be checking at the door.
              </p>
            </div>
            <div className="mt-4 mx-auto bg-white rounded-lg ring-2 ring-primary shadow-lg">
              <h3 className="bg-primary text-white p-4 text-xl font-semibold rounded-t">
                Who is organizing this? Will it be supervised?
              </h3>
              <p className="bottom-0 text-lg p-4">
                Windy City Hacks is independently organized by a group of high
                school students from the Chicagoland area, fiscally sponsored by
                an international nonprofit called{" "}
                <a
                  className="italic hover:underline decoration-wavy decoration-secondary"
                  href="https://the.hackfoundation.org/"
                  target="_blank"
                >
                  The Hack Foundation
                </a>
                . We'll have adult mentors and chaperones supervising the entire
                event.
              </p>
            </div>
          </div>
          <h2
            className="mt-16 text-center font-bouquet text-5xl text-primary"
            id="sponsors"
          >
            🤟 Sponsors
          </h2>
          <div className="mt-4 mx-8 lg:mx-auto lg:w-2/3 bg-white px-8 pt-8 rounded-lg shadow-lg">
            <div className="lg:grid grid-cols-3 gap-4 justify-center items-center mb-8 sm:mb-0">
              <a href="https://aws.amazon.com" target="_blank">
                <img
                  className="mx-auto max-h-16 mb-8 lg:mb-0"
                  src="/sponsors/aws.png"
                />
              </a>
              <a href="https://vercel.com" target="_blank">
                <img
                  className="mx-auto max-h-16 mb-8 lg:mb-0"
                  src="/sponsors/vercel.png"
                />
              </a>
              <a href="https://usefathom.com" target="_blank">
                <img
                  className="mx-auto max-h-24 mb-8 lg:mb-0"
                  src="/sponsors/fathom.png"
                />
              </a>
              <a href="https://developer.cisco.com/" target="_blank">
                <img className="mx-auto max-h-24" src="/sponsors/cisco.png" />
              </a>
              <a href="https://draftbit.com/" target="_blank">
                <img
                  className="mx-auto max-h-36"
                  src="/sponsors/draftbit.png"
                />
              </a>
              <a href="https://desmos.com/" target="_blank">
                <img
                  className="mx-auto max-h-12 mb-12 lg:mb-0"
                  src="/sponsors/desmos.png"
                />
              </a>
              <a href="https://codecrafters.io/" target="_blank">
                <img
                  className="mx-auto max-h-16 mt-4"
                  src="/sponsors/codecrafters.png"
                />
              </a>
              <a href="https://hackclub.com/" target="_blank">
                <img
                  className="mx-auto max-h-24"
                  src="/sponsors/hackclub.png"
                />
              </a>
              <a href="https://www.pcnation.com/" target="_blank">
                <img
                  className="mx-auto max-h-64"
                  src="/sponsors/pcNation.png"
                />
              </a>
              <a
                href="https://www.angazacenter.org/"
                target="_blank"
                className="text-center mx-auto"
              >
                <img className="max-h-36" src="/sponsors/angaza.png" />
              </a>
            </div>
            <p className="mt-8 pb-4 text-center">
              This could be <span className="text-secondary">YOU</span>!{" "}
              <a
                href="mailto:andrew@windycityhacks.com"
                className="italic hover:underline decoration-wavy decoration-secondary"
              >
                Contact us
              </a>{" "}
              to learn more about sponsorships.
            </p>
          </div>
          <h2 className="mt-16 text-center font-bouquet text-5xl text-primary">
            🤝 Leadership
          </h2>
          <div className="mt-4 mx-8 lg:mx-auto lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-8">
              <div className="text-center">
                <img
                  className=" select-none rounded-full mx-auto max-h-40"
                  src="/photos/andrew.jpeg"
                />
                <p className="mt-2 text-lg font-semibold">Andrew Wolf</p>
                <p className="text-sm mb-1 text-gray-500">
                  Stevenson High School
                </p>
                <div className="flex justify-center items-center">
                  <a href="mailto:andrew@windycityhacks.com">
                    <svg
                      className="h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                          stroke="#F95A5F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="select-none rounded-full mx-auto max-h-40"
                  src="/photos/connor.jpeg "
                />
                <p className="mt-2 text-lg font-semibold">Connor Lin</p>
                <p className="text-sm mb-1 text-gray-500">
                  Stevenson High School
                </p>
                <div className="flex justify-center items-center">
                  <a href="mailto:connor@windycityhacks.com">
                    <svg
                      className="h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                          stroke="#F95A5F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="select-none rounded-full mx-auto max-h-40"
                  src="/photos/mooky.jpg"
                />
                <p className="mt-2 text-lg font-semibold">Miles Klein</p>
                <p className="text-sm mb-1 text-gray-500">
                  Stevenson High School
                </p>
                <div className="flex justify-center items-center">
                  <a href="mailto:miles@windycityhacks.com">
                    <svg
                      className="h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                          stroke="#F95A5F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="select-none rounded-full mx-auto max-h-40"
                  src="/photos/jacob.jpg"
                />
                <p className="mt-2 text-lg font-semibold">Jacob Zerull</p>
                <p className="text-sm mb-1 text-gray-500">
                  Stevenson High School
                </p>
                <div className="flex justify-center items-center">
                  <a href="mailto:jacob@windycityhacks.com">
                    <svg
                      className="h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                          stroke="#F95A5F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Banner */}
      <div className="bg-primary pb-6">
        <h2 className="pt-16 text-center text-5xl text-white lg:flex justify-center items-center">
          Let's build
          <p className="mx-4 relative italic font-semibold underline lg:no-underline decoration-secondary">
            something amazing
            <img
              className="select-none hidden lg:block absolute top-7"
              src="/underline.svg"
            />
          </p>
          together.
        </h2>
        <div className="lg:w-2/3 mx-auto grid grid-rows-2 gap-8 md:grid-rows-none md:grid-cols-2 mt-12 md:mt-24">
          <div className="text-center my-auto">
            <p className="mt-2 mb-2 text-2xl lg:text-3xl text-center text-white/70">
              June 22nd-23rd, 2024
            </p>
            <a
              href="https://maps.app.goo.gl/9VjmWAJeGG5ngh417"
              target="_blank"
              className="hover:underline hover:decoration-wavy hover:decoration-secondary italic text-2xl lg:text-3xl text-center text-white/70"
            >
              University of Eastern Finland <br /> School of Computing <br />{" "}
              Länsikatu 15 <br /> Joensuu Science Park <br /> FI-80101 Joensuu
            </a>
          </div>
          <div className="text-center my-auto">
            <a
              href="/register"
              className="bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg"
            >
              Register Now
            </a>
            <br />
            <br />
            <br />
            <br />
            <a
              href="/discord"
              className="bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg"
            >
              Join the Discord
            </a>
          </div>
        </div>
        <div className="mt-16 text-center">
          <img className="select-none mx-auto px-4 h-16" src="/full_logo.png" />
          <div className="w-2/3 md:w-1/6 mx-auto mt-4 grid grid-cols-3 gap-0">
            <div className="mx-auto">
              <Link href="mailto:team@windycityhacks.com">
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                      stroke="#F95A5F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="mx-auto">
              <Link
                href="https://twitter.com/windycityhacks"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="h-8"
                  fill=""
                  viewBox="0 0 24 24"
                  id="twitter"
                  data-name="Flat Color"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="primary"
                      d="M21.63,6.92a1,1,0,0,0-.83-.2,8.31,8.31,0,0,1-1.1.17,4.49,4.49,0,0,0-8.55.52c-2.73.67-5.4-2.07-5.43-2.1a1,1,0,0,0-1-.27,1,1,0,0,0-.7.8,11.69,11.69,0,0,0,1.51,8.67A7.25,7.25,0,0,1,3,15a1,1,0,0,0-.89,1.46C2.3,16.83,4.18,20,11.58,20c5.84,0,8-5.2,8.36-8.38A4,4,0,0,0,22,7.7,1,1,0,0,0,21.63,6.92Z"
                      style={{ fill: "#F95A5F" }}
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="mx-auto">
              <Link
                href="https://instagram.com/windycityhacks"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                      fill="#F95A5F"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-2/3 mx-auto">
            <p className="mt-4 text-white/70">&copy; Windy City Hacks 2024</p>
            <a
              href="/fiscal_sponsorship_confirmation.pdf"
              target="_blank"
              className="text-white/70 hover:underline hover:decoration-wavy hover:decoration-secondary italic"
            >
              Fiscally sponsored by The Hack Foundation (EIN: 81-2908499)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
