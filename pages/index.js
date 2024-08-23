import { Box, Flex, Grid, Link, Text, Heading, Button, Badge } from "theme-ui";
import React, { useState } from "react";
import Carousel from "../components/index/carousel";
import GitHub from "../components/index/github";
import Photo from "../components/common/photo";
import BGImg from "../components/common/BackgroundImage";
import OuternetImgFile from "../public/robots/midjourney1.jpeg";
import Comma from "../components/common/Comma";

export default function Home({ carouselCards, gitHubData }) {
  const [count, setCount] = useState(0);

  let images = [
    {
      alt: "Clubbers at Scifest, 2024",
      src: "/home/scifest-2024.jpg",
    },
    {
      alt: "Image description",
      src: "/home/assemble.jpg",
    },
    {
      alt: "Image description",
      src: "/home/assemble.jpg",
    },
    { alt: "Image description", src: "/home/assemble.jpg" },
    { alt: "Image description", src: "/home/assemble.jpg" },
  ];
  const nextImageIndex = (index) => (index + 1) % images.length;
  const prevImageIndex = (index) => (index - 1 + images.length) % images.length;
  return (
    <div>
      <div className="relative flex justify-center items-center bg-primary py-6">
        <div>
          <Box
            sx={{
              width: "90vw",
              maxWidth: [null, "layout"],
              position: "relative",
              mx: "auto",
              py: [4, 4, 4],
              textShadow: "text",
            }}
          >
            <Text
              variant="eyebrow"
              sx={{
                color: "sunken",
                pb: 2,
                position: "relative",
                display: "block",
              }}
              as="h4"
            >
              Welcome to UEF&nbsp;Robotics&nbsp;Club
            </Text>
            <Heading>
              <Text
                as="p"
                variant="title"
                sx={{
                  color: "white",
                  mb: [3, 4],
                  zIndex: 1,
                  textAlign: "left",
                  fontSize: ["42px", "52px", "64px"],
                  lineHeight: 1.2,
                  width: "100%",
                }}
              >
                We are a group of budding
                <Text
                  sx={{
                    color: "transparent",
                    ml: 2,
                    mr: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text
                    sx={{
                      px: 2,
                      backgroundColor: "red",
                      position: "absolute",
                      borderRadius: 10,
                      transform: "rotate(-3deg) translateY(-5px)",
                      color: "white",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                    aria-hidden="true"
                  >
                    engineers
                  </Text>
                  engineers
                </Text>
                <br sx={{ display: ["inline", "none", "none"] }} /> from around
                the world united by our love for coding and robotics.
              </Text>
              <Button
                variant="ctaLg"
                as="a"
                target="_blank"
                href="https://github.com/uefroboticsclub"
                mt={[3, 0, 0]}
                sx={{ transformOrigin: "center left" }}
              >
                Join our community
              </Button>
            </Heading>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: ["flex-start", "flex-start", "flex-end"],
              marginRight: 2,
              mt: [4, 3, 1],
            }}
          >
            <Badge
              as="a"
              target="_blank"
              rel="noopener"
              variant="pill"
              sx={{
                zIndex: "1",
                bg: "black",
                color: "white",
                opacity: 1,
                textDecoration: "none",
                fontWeight: "normal",
                ":hover": { opacity: 1 },
                transition: "0.3s ease",
              }}
              title="📸 Photo credit title"
            >
              Ideal image description here..
            </Badge>
          </Box>
        </div>
        <div
          style={{ transform: "translateX(-6%)" }}
          className="bottom-0 absolute w-full"
        ></div>
      </div>

      <div className="h-full">
        <div className="h-full bg-tertiary pb-12">
          <div className="lg:flex 3xl:w-2/3 mx-auto">
            <div className="lg:w-1/2 p-8 my-auto">
              <h2 className="pt-8 text-center font-bouquet text-5xl text-primary">
                🔎 Who are we?
              </h2>
              <div className="w-full mt-4 mx-auto bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg lg:text-xl text-dark">
                  We're a wild bunch obsessed with robots and pushing limits.
                  Inspired by crazy ideas like self-landing rockets and the raw
                  potential of AI, we're diving headfirst into the future, one
                  electrifying project at a time. Join us if you're a curious
                  mind with a hunger for the unknown ready to get your hands
                  dirty and craft the future with a healthy dose of mischief.
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
                  Now, more than ever, coding, engineering and digital design
                  are essential skills. Classes in school offer a solid start,
                  but they often don't encourage out-of-the-box cracking.
                  Learning online builds independence, but comes with confusion
                  and lack of community. Building (and{" "}
                  <i className="underline decoration-dotted decoration-secondary">
                    breaking
                  </i>
                  ) things <b>together</b> is the <i>best</i> way to learn.
                  That's why we're here.
                  <br></br>
                  <br></br>
                  Today's technology makes implementing anything in pure{" "}
                  <i>
                    <b>"C" </b>
                  </i>
                  fairly easy with machines doing much of the heavy lifting
                  (90%). Join us if you are tired of having a straightforward
                  good time and want to once in a while beat your head on the
                  wall or stay up too late stuck on something while learning.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex 3xl:w-2/3 mx-auto">
            <div className="lg:w-1/2 p-8 my-auto">
              <h2 className="pt-8 text-center font-bouquet text-5xl text-primary">
                💡 Can We Do More?
              </h2>
              <div className="w-full mt-4 mx-auto bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg lg:text-xl text-dark">
                  As human ingenuity and collaboration redefine possibility,
                  these innovations shine bright: from Starship and Cybertruck
                  to Varda re-entry, Figure, and SpaceX's flight suit, Waymo's
                  autonomous vehicles, Anduril's defense tech, Intel's
                  advancements, Blue Origin's space exploration, Neuralink's AI
                  integration, SpaceX's Starlink deployment, Meta Reality Labs',
                  Boston Dynamics' robots, Boom Supersonic's faster travel, and
                  NASA's Artemis mission, to SpaceX's Mars mission render –
                  together, they forge an unwavering, resplendent tomorrow,
                  where collaboration, vision, and innovation illuminate
                  boundless human potential – and we are
                  <i className="underline decoration-dotted decoration-secondary">
                    "extremely"
                  </i>{" "}
                  bullish on mankind.
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 my-auto">
              <video
                className="w-full mt-4 rounded-lg shadow-lg"
                controls={true}
                controlsList="nodownload"
                autoPlay={false}
                src="/robots/bullish.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Box as="section" sx={{ py: [4, 5, "82px"], color: "black" }}>
            <Box
              sx={{
                position: "relative",
                width: "90vw",
                maxWidth: "layout",
                margin: "auto",
              }}
            >
              <Text
                variant="title"
                as="h1"
                sx={{ fontSize: ["36px", "48px", "56px"] }}
              >
                Discover the{" "}
                <Text
                  as="span"
                  sx={{
                    borderRadius: "default",
                    px: 1,
                    mx: 0,
                    whiteSpace: ["wrap", "nowrap", "nowrap"],
                    color: "white",
                    background: (theme) => theme.util.gx("red", "orange"),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  joy of building
                </Text>
                , together.
              </Text>
              <Text
                variant="subtitle"
                as="p"
                sx={{
                  fontSize: ["18px", "20px", "22px"],
                  pb: [3, 3, 4],
                  maxWidth: "62ch",
                }}
              >
                Every week, we gather in-person to build, break, and learn stuff
                together with silicon, code, and electricity. Whether you’re a
                beginner builder or a seasoned pro, we invite you to join the
                collaborative chaos, there’s a place for you at the Club. Our
                community is built on the hacker's ethic: sharing knowledge,
                working together, and embracing the thrill of the unknown.
              </Text>
              <Grid
                columns={[1, 1, 1, "2.5fr 3fr"]}
                gap={[0, 3, 4]}
                pt={[3, 4]}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: ["300px", "300px", "300px", "100%"],
                    py: [3, 3, 3, 0],
                  }}
                  onClick={() => {
                    setCount(nextImageIndex(count));
                  }}
                >
                  <Box
                    sx={{ position: "absolute", width: "100%", height: "100%" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: ["300px", "300px", "100%"],
                        figure: {
                          position: "absolute",
                          transform:
                            count % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)",
                          height: "85%",
                          width: ["80%", "80%", "70%", "100%"],
                          marginLeft: ["10%", "10%", "15%", "0"],
                        },
                        zIndex: 3,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Photo
                        src={images[nextImageIndex(count + 1)].src}
                        alt={images[nextImageIndex(count + 1)].alt}
                        width={3000}
                        height={2550}
                        showAlt
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ position: "absolute", width: "100%", height: "100%" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: ["300px", "300px", "100%"],
                        figure: {
                          position: "absolute",
                          transform:
                            count % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
                          height: "85%",
                          width: ["80%", "80%", "70%", "100%"],
                          marginLeft: ["10%", "10%", "15%", "0"],
                        },
                        zIndex: 3,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Photo
                        src={images[nextImageIndex(count)].src}
                        alt={images[nextImageIndex(count)].alt}
                        width={3000}
                        height={2550}
                        showAlt
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ position: "absolute", width: "100%", height: "100%" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: ["300px", "300px", "100%"],
                        figure: {
                          position: "absolute",
                          transform:
                            count % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)",
                          height: "85%",
                          width: ["80%", "80%", "70%", "100%"],
                          marginLeft: ["10%", "10%", "15%", "0"],
                        },
                        zIndex: 3,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Photo
                        src={images[count].src}
                        alt={images[count].alt}
                        width={3000}
                        height={2550}
                        showAlt
                      />
                    </Box>
                  </Box>
                </Box>
                <Grid
                  columns="1fr"
                  sx={{
                    gridColumnGap: 3,
                    span: {
                      width: 36,
                      height: 36,
                      borderRadius: 24,
                      display: "inline-block",
                      fontSize: 2,
                      lineHeight: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      border: "3px solid currentColor",
                    },
                    p: { my: 0, fontSize: ["18px", "20px", "22px"] },
                    strong: { display: "block", fontSize: ["22px", 2, 3] },
                  }}
                  as="ul"
                >
                  <Grid
                    columns="auto 1fr"
                    sx={{
                      transitionDuration: "0.52s",
                      py: 2,
                      px: 2,
                      color: "inherit",
                      position: "relative",
                      textDecoration: "none",
                      borderRadius: "extra",
                    }}
                    as="li"
                  >
                    <Text as="span" color="red" aria-hidden="true">
                      1
                    </Text>
                    <Text as="p" variant="subtitle">
                      <strong sx={{ mb: 1 }}>
                        Connect with fellow builders
                      </strong>
                      Have a question about robots, silicon, coding or need
                      feedback on a project? Our community is here to help.
                    </Text>
                  </Grid>
                  <Grid
                    columns="auto 1fr"
                    sx={{
                      transitionDuration: "0.52s",
                      py: 2,
                      px: 2,
                      color: "inherit",
                      position: "relative",
                      textDecoration: "none",
                      borderRadius: "extra",
                    }}
                    as="li"
                  >
                    <Text as="span" color="orange" aria-hidden="true">
                      2
                    </Text>
                    <Text
                      as="p"
                      variant="subtitle"
                      sx={{
                        mt: 0,
                      }}
                    >
                      <strong sx={{ mb: 1 }}>
                        Build open source learning tools
                      </strong>
                      We build large open source projects together (
                      <Link
                        href="https://github.com/uefroboticsclub"
                        target="_blank"
                        color="secondary"
                      >
                        100k+&nbsp;commits a year
                      </Link>
                      ) like this website, robotics arm, AI-powered engine,
                      several software system, and more!
                    </Text>
                  </Grid>
                  <Grid
                    columns="auto 1fr"
                    sx={{
                      transitionDuration: "0.52s",
                      py: 2,
                      px: 2,
                      color: "inherit",
                      position: "relative",
                      textDecoration: "none",
                      borderRadius: "extra",
                    }}
                    as="li"
                  >
                    <Text as="span" color="yellow" aria-hidden="true">
                      3
                    </Text>
                    <Text as="p" variant="subtitle">
                      <strong sx={{ mb: 1 }}>
                        Meet and build with other members IRL
                      </strong>{" "}
                      Join the collective chaos in person and share your passion
                      for robotics and coding. Build, break, and learn together
                      with our robotics club.
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Carousel cards={carouselCards} />
          <Box>
            <Box py={[4, 5, "82px"]}>
              <Box
                sx={{
                  width: "90vw",
                  maxWidth: "layout",
                  margin: "auto",
                  position: "relative",
                }}
              >
                <Flex
                  sx={{
                    flexDirection: ["column", "column", "column", "row"],
                    justifyContent: gitHubData ? "center" : "flex-start",
                    alignItems: [
                      "flex-start",
                      "flex-start",
                      "flex-start",
                      "center",
                    ],
                    gap: "10px",
                  }}
                >
                  <Box sx={{ mb: [3, 0, 0] }}>
                    <Text
                      variant="title"
                      as="h2"
                      sx={{
                        fontSize: ["36px", "48px", "56px"],
                        maxWidth: "20ch",
                      }}
                    >
                      We build{" "}
                      <Text
                        as="span"
                        sx={{
                          borderRadius: "default",
                          mx: 0,
                          whiteSpace: "nowrap",
                          color: "orange",
                        }}
                      >
                        open source
                      </Text>{" "}
                      tools & intelligent 🤖 together
                    </Text>
                    <Text
                      variant="subtitle"
                      as="p"
                      sx={{
                        fontSize: ["18px", "20px", "22px"],
                        pb: [3, 0, 0],
                        maxWidth: "60ch",
                      }}
                    >
                      We collaborate to build intelligent robots, software,
                      hardware and learning tools for each other. Get involved
                      with these projects by building something with our tools
                      or contribute to the tools themselves.
                    </Text>
                  </Box>
                  {gitHubData && (
                    <Flex
                      sx={{
                        flexDirection: ["row", null, null, "column"],
                        gap: [1, 2, 2],
                        alignItems: [
                          "center",
                          "center",
                          "center",
                          "flex-start",
                        ],
                        flexWrap: "wrap",
                        width: ["100%", null, null, "fit-content"],

                        "& > a:nth-child(n+4)": {
                          display: ["none", null, null, "flex"],
                        },
                      }}
                    >
                      <Text
                        sx={{
                          fontSize: ["11px", "11px", "14px"],
                          textAlign: "left",
                          lineHeight: "90%",
                          fontStyle: "italic",
                          width: "fit-content",
                        }}
                      >
                        Live from GitHub
                      </Text>
                      {gitHubData
                        .filter((data) => !data.user.endsWith("[bot]"))
                        .slice(0, 4)
                        .map((data, key) => {
                          return (
                            <GitHub
                              type={data.type}
                              img={data.userImage}
                              user={data.user}
                              time={data.time}
                              url={data.url}
                              message={data.message}
                              key={key}
                              opacity={1 / (key / 2 + 1)}
                            />
                          );
                        })}
                    </Flex>
                  )}
                </Flex>
              </Box>
            </Box>
          </Box>
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
                href="mailto:uefrobotics@gmail.com"
                className="italic hover:underline decoration-wavy decoration-secondary"
              >
                Contact us
              </a>{" "}
              to learn more about sponsorships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const carouselCards = require("../lib/data/carousel.json");

  const { fetchGitHub } = require("./api/github");
  let gitHubData = await fetchGitHub();

  return {
    props: {
      carouselCards,
      gitHubData,
    },
  };
}
