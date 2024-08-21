import { Box, Container, Flex, Grid, Text } from "theme-ui";
import Bio from "../components/common/bio";
import { coreTeam, acknowledgements } from "../lib/data/team";

export default function Team({ team }) {
  return (
    <>
      <Box as="main" key="main" bg="primary">
        <Box bg="#BFE6EA" py={4}>
          <Container>
            <Flex
              sx={{
                bg: "#F95A5F",
                p: 3,
                borderRadius: "20px",
                mb: 3,
                gap: 3,
                flexWrap: ["wrap", null, null, "nowrap"],
              }}
            >
              <Text
                variant="headline"
                as="h3"
                sx={{
                  textAlign: "center",
                  fontSize: 3,
                  writingMode: [null, null, null, "vertical-rl"],
                  mr: [0, 0, 0, 1],
                  transform: [null, null, null, "rotate(180deg)"],
                  width: ["100%", null, null, "fit-content"],
                  my: ["0px!important", "0px!important", "0px!important", 3],
                }}
              >
                Advisors
              </Text>
              <Box sx={{ flexGrow: 1 }}>
                <Grid columns={[1, null, 2]} gap={2} mb={2}>
                  <Bio
                    img="/team/default.jpg"
                    name="Advisor One"
                    teamRole="Advisor"
                    subrole="Main Role"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    pronouns="he/him"
                    email="advisor1"
                    href="https://uef.fi/en"
                  />
                  <Bio
                    img="/team/default.jpg"
                    name="Advisor Two"
                    teamRole="Advisor"
                    subrole="Main Role"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    pronouns="she/her"
                    email="advisor2"
                    href="https://uef.fi/en"
                  />
                </Grid>
                <Grid columns={[1, null, 3]} gap={2}>
                  <Bio
                    img="/team/default.jpg"
                    name="Advisor Three"
                    teamRole="Advisor"
                    subrole="Main Role"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    pronouns="he/him"
                    href="https://uef.fi/en"
                  />
                  <Bio
                    img="/team/default.jpg"
                    name="Advisor Four"
                    teamRole="Advisor"
                    subrole="Main Role"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    pronouns="she/her"
                    href="https://uef.fi/en"
                  />
                  <Bio
                    img="/team/default.jpg"
                    name="Advisor Five"
                    teamRole="Advisor Five"
                    subrole="Main Role"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    pronouns="he/him"
                    href="https://uef.fi/en"
                  />
                </Grid>
              </Box>
            </Flex>
            <Box
              sx={{
                bg: "rgb(166 51 214 / 40%)",
                p: 3,
                borderRadius: "20px",
                mt: 3,
              }}
            >
              <Text
                variant="headline"
                mt={2}
                mb={3}
                as="h3"
                sx={{ textAlign: "center", fontSize: 4 }}
              >
                Core Team
              </Text>
              <Grid columns={[1, 2, null, 4]} gap={2}>
                {coreTeam.map((member) => (
                  <Bio
                    key={member.name}
                    img={member.img}
                    name={member.name}
                    teamRole={member.teamRole}
                    text={member.text}
                    pronouns={member.pronouns}
                    email={member.email}
                  />
                ))}
              </Grid>
            </Box>
            <br />
            <Box sx={{ textAlign: "center", mt: 2, mb: [3, 4] }}>
              <Text
                variant="title"
                color="orange"
                sx={{ lineHeight: "1em", fontSize: [4, 5, 6] }}
                as="h2"
              >
                Acknowledgements
              </Text>
              <Text
                variant="title"
                color="text"
                sx={{
                  lineHeight: "1.2",
                  fontSize: [1, 3, 4],
                  my: [3, 0, 0],
                  fontWeight: 400,
                  maxWidth: "600px",
                  width: "100%",
                  margin: "auto",
                }}
                as="h2"
              >
                Thank you to everyone who helped shape the Club and into what it
                is today...
              </Text>
            </Box>
            <Grid columns={[1, null, 2, 4]} gap={2}>
              {acknowledgements.map((member) => (
                <Bio
                  key={member.name}
                  name={member.name}
                  teamRole={member.teamRole}
                  text={member.text}
                  img={member.img}
                  pronouns={member.pronouns}
                  href={member.href}
                />
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}