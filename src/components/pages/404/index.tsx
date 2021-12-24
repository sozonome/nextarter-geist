import { Button, Grid, Image, Link, Text } from "@geist-ui/react";
import NextLink from "next/link";

const Page404 = () => {
  return (
    <>
      <Image.Browser url="uh-oh">
        <Image
          width="600px"
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </Image.Browser>

      <Grid.Container justify="center" marginTop={2}>
        <Text small style={{ textAlign: "center" }}>
          <Link
            href="https://stories.freepik.com/web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Illustration by Freepik Stories
          </Link>
        </Text>
      </Grid.Container>

      <Grid.Container justify="center">
        <Grid margin="1rem 0" style={{ textAlign: "center" }}>
          <Text h2>Page not Found.</Text>

          <Text>It&apos;s Okay!</Text>
          <NextLink href="/" passHref>
            <a>
              <Button>Let&apos;s Head Back</Button>
            </a>
          </NextLink>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Page404;
