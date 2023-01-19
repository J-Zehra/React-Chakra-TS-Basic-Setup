import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { NavItems } from "../../utils/interfaces/AppInterfaces";
import breakPoints from "../../utils/interfaces/Breakpoints";
import NavLink from "./components/NavLink";

function Navbar(props: NavItems): ReactElement {
  const { logo, navLinks } = props;

  // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
  const [isSmallerThan850] = useMediaQuery("(max-width: 48em)");

  return (
    <Box w="100%" pos="fixed" h="5rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w={breakPoints}
      >
        {/* LOGO */}
        <Link href="#hero">
          <Image transition="all .3s ease" src={logo} />
        </Link>
        {/* NAVIGATION LINKS */}
        {isSmallerThan850 ? (
          <Text>Mobile View</Text>
        ) : (
          <HStack spacing="2rem">
            {navLinks.map((nav) => {
              return <NavLink nav={nav} key={nav} />;
            })}
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
