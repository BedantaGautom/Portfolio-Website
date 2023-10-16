import React from "react";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";
import { PrimaryButton, SecondaryButton } from "../button";
import { Body, Bullet, Heading3 } from "../typography";

export const SkillCard = ({ icon, name = "Insert Name", ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      display="grid"
      placeItems="center"
      m="auto"
      w={{ base: "90%", md: "100%" }}
      color={!icon && "default.light"}
      border={colorMode === "dark" && "2px"}
      borderColor={colorMode === "dark" && "default.light"}
      mb="32px"
      bg="default.dark"
      py="24px"
    >
      <Flex w="100%" align="center">
        <Box display="grid" placeItems="center" w="30%">
          <Icon w="32px" h="32px" as={icon} />
        </Box>
        <Box w="70%">
          <Text fontSize="20px" fontWeight="bold" color="default.light">
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export const ProjectCard = ({ media, ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <Box p="1em" {...props}>
      {media && media}
    </Box>
  );
};

export const ProjectInfoCard = ({
  name,
  info,
  live,
  repo,
  length,
  ...props
}) => {
  return (
    <Stack
      maxW={{ xxl: "40%" }}
      spacing={{ base: 8, xxl: 0 }}
      justify="space-between"
      p="1em"
      {...props}
      fontSize={{ base: "md", md: "lg" }}
    >
      <Stack spacing={8}>
        <Heading3 {...props} textAlign={{ md: "center" }}>
          {name}
        </Heading3>
        {info.length !== 0 && (
          <Stack spacing={8} as="ul">
            {info.map((item, index) => (
              <Stack spacing={3} direction="row" as="li" key={index}>
                <Bullet />
                <Body>{item}</Body>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
      {live !== null && repo !== null && (
        <Stack
          justify={!live && { md: "center", xl: "left" }}
          align="center"
          spacing={8}
          direction={{ base: "column", md: "row" }}
        >
          {live !== null && (
            <PrimaryButton w="100%" as="a" href={live} target="_blank">
              LIVE SITE
            </PrimaryButton>
          )}
          {repo !== null && (
            <SecondaryButton w="100%" as="a" href={repo} target="_blank">
              GITHUB REPO
            </SecondaryButton>
          )}
        </Stack>
      )}
    </Stack>
  );
};
