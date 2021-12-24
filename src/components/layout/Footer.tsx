import { Link, Page, Text } from "@geist-ui/react";

const Footer = () => {
  return (
    <Page.Footer marginTop={4}>
      <Text p>
        {new Date().getFullYear()} |{" "}
        <Link
          href="https://sznm.dev"
          color
          icon
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text b>sznm.dev</Text>
        </Link>
      </Text>
    </Page.Footer>
  );
};

export default Footer;
