import { Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import profile from "./me.jpg";
import portfolio from "./portfolio";
import fashionify from "./fashionify";
import ftpserver from "./ftpserver";

export const ImageProfile = () => {
  return (
    <Image
      mx="auto"
      borderRadius="full"
      objectFit="cover"
      boxSize={{
        base: "160px",
        sm: "240px",
        md: "300px",
        lg: "320px",
        xl: "400px",
      }}
      src={profile}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Bedanta Gautom"
    />
  );
};

export const PortfolioImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={portfolio.light[2]}
      srcSet={`${
        colorMode === "light" ? portfolio.light[0] : portfolio.dark[0]
      } 400w, ${
        colorMode === "light" ? portfolio.light[1] : portfolio.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Portfolio Site"
    />
  );
};

export const FashionifyImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={fashionify.light[2]}
      srcSet={`${
        colorMode === "light" ? fashionify.light[0] : fashionify.dark[0]
      } 400w, ${
        colorMode === "light" ? fashionify.light[1] : fashionify.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Fashionify project"
    />
  );
};

export const FtpServerImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={ftpserver.light[2]}
      srcSet={`${
        colorMode === "light" ? ftpserver.light[0] : ftpserver.dark[0]
      } 400w, ${
        colorMode === "light" ? ftpserver.light[1] : ftpserver.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Ftp server project"
    />
  );
};
