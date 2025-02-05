import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: thanachonfirst@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/thasup",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/thanachon-supasatian-278292159/",
  },
  {
    icon: faGlobe,
    url: "https://thanachon.me",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > prevScrollPosition) {
        headerRef.current.style.transform = 'translateY(-200px)';
      } else if (currentScrollPosition < prevScrollPosition) {
        headerRef.current.style.transform = 'translateY(0)';
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map((social, index) => {
                  return (
                    <a href={social.url} key={index} target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  )
                })
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
                <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
                <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
