import { Grid, Link, Text } from "@geist-ui/react";
import Image from "next/image";

import HelperImage from "./HelperImage";

const SomeImage = () => {
  return (
    <>
      <Grid.Container justify="center" gap={2}>
        <Image
          src="/Launching-amico.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
        <Grid xs={24} justify="center">
          <Text small style={{ textAlign: "center" }}>
            <Link
              href="https://stories.freepik.com/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Illustration by Freepik Stories
            </Link>
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container justify="center" alignItems="center" gap={2}>
        <HelperImage src="/nextjs-icon.svg" tooltipText="NextJS" />
        <HelperImage src="/ts-logo-512.svg" tooltipText="TypeScript" />
      </Grid.Container>
    </>
  );
};

export default SomeImage;
