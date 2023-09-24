import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { ImageProfile } from "../../../../assets/images";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  Body,
  Bullet,
  Heading2,
  Heading3,
} from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");
  const { secondary } = useColorSwitcher();

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>about</Heading2>
        </SectionHeader>
      </Box>
      <Stack
        align="center"
        spacing={16}
        direction={{ base: "column-reverse", xl: "row" }}
        justify={{ base: "space-between", xl: "space-evenly" }}
      >
        <Box
          bg={lightGreyBg}
          rounded="full"
          display="grid"
          placeItems="center"
          p={{ base: "8px", md: "16px" }}
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p="8px" w={{ base: "100%", xl: "50%" }}>
          <Body mb="2em" align="justify">
            Hello! I'm Bedanta Gautom, a hardworking college student seeking internships and employment. Bringing forth a motivated attitude
and a variety of powerful skills. Able to effectively self-manage during independent projects, as well as
collaborate in a team setting. Committed to utilizing my skills to further the mission of the company.
          </Body>
          <Box>
            <Heading3>What I've been up to:</Heading3>
            <Stack as="ul">
              <Bullet as="li">Building this!</Bullet>
              <Bullet as="li">Getting deeper into MERN Stack Devloppment</Bullet>
              <Bullet as="li">Learning GraphQL</Bullet>
              <Bullet as="li">
                Live Coding on{" "}
                {/* <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://www.twitch.tv/gregogun"
                >
                  Twitch
                </Link> */}
              </Bullet>
              {/* <Bullet as="li">
                Starting the{" "}
                <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://chingu.io/"
                >
                  Chingu Voyage 28
                </Link>
              </Bullet> */}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
