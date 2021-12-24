import { Page, Text } from "@geist-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Page.Header>
      <Text h2>
        <Link href="/" passHref>
          nextarter-geist
        </Link>
      </Text>
    </Page.Header>
  );
};

export default Header;
