import { Box, Container, Flex, Grid, Text } from "theme-ui";
import Bio from "../components/common/bio";
import { coreTeam, acknowledgements } from "../lib/data/team";

export default function Team({ team }) {
  return (
    <>
      <Box as="main" key="main" bg="primary">
        <Box bg="#BFE6EA" py={4}>
          <Container>
            
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
                    href={member.href}
                  />
                ))}
              </Grid>
            </Box>
            <br />  
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
                  
                </Grid>
                <Grid columns={[1, null, 3]} gap={2}>
                <Bio
                    img="/team/Ilkka Jormanainen.jpg"
                    name="Ilkka Jormanainen"
                    teamRole="Advisor"
                    subrole="University lecturer and Researcher"
                    text="I work as a university researcher in the educational and development technologies research group Information..."
                    pronouns="he/him"
                    email="ilkka.jormanainen@uef.fi"
                    href="https://uefconnect.uef.fi/henkilo/ilkka.jormanainen/"
                  />
                  <Bio
                    img="/team/Samuel-Yigzaw.png"
                    name="Samuel Yigzaw"
                    teamRole="Advisor"
                    subrole="University lecturer and Researcher"
                    text=""
                    pronouns="he/him"
                    email="samuel.yigzaw@uef.fi"
                    href="https://uefconnect.uef.fi/henkilo/samuel.yigzaw/"
                  />
                  <Bio
                    img="/team/Erkki Sutinen.jpg"
                    name="Erkki Sutinen"
                    teamRole="Advisor"
                    subrole="Professor"
                    text="Professor of Computer Science (Interaction design) at the University of Turku "
                    pronouns="he/him"
                    email="erkki.sutinen@utu.fi"
                    href="https://www.utu.fi/fi/ihmiset/erkki-sutinen"
                  />
                </Grid>
              </Box>
            </Flex>

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
                Thank you to everyone who helped shape the Club into what it
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