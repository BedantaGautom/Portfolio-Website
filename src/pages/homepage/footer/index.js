import React from "react";
import {
  Box,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import {
  IconLinkedin,
  IconGithubAlt,
  IconGlobe
} from "../../../assets/icons/imported/IconSocials";

const SocialLink = ({ name, href, icon, ...props }) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return (
    <Box as="li" listStyleType="none">
      <Link
        listStyleType="none"
        p=".5em"
        aria-label={name}
        {...props}
        href={href}
        // target="_blank"
        // rel="noopener"
        // rel="noreferrer"
      >
        <Icon as={icon} />
      </Link>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" mb="16px" display="grid" placeItems="center">
      <Stack as="ul" mb="16px" direction="row" spacing={4}>
        <SocialLink
          name="LinkedIn"
          href="https://www.linkedin.com/in/bedanta-gautom-2001/"
          target="_blank"
          icon={IconLinkedin}
        />
        <SocialLink
          name="Github"
          href="https://github.com/BedantaGautom"
          target="_blank"
          icon={IconGithubAlt}
        />
        <SocialLink
          name="Website"
          href="https://www.youtube.com/channel/UCQDUHOvgodaEqjHm9Ihn87w"
          target="_blank"
          icon={IconGlobe}
        />
      </Stack>
      <Box display="grid" placeItems="center">
        <Link href="https://github.com/BedantaGautom" target="_blank">
          Designed & Coded by Bedanta Gautom
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
