import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;

  return (
    <Link to={nav === "Home" ? "/" : nav.toLowerCase()}>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        transition="all .2s ease"
        pos="relative"
        fontWeight="400"
        _hover={{
          color: "palette.accent",
        }}
      >
        {nav}
      </Text>
    </Link>
  );
}

export default NavLink;
