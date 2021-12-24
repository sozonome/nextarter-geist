import { Button, Grid, Image, Link, Snippet } from "@geist-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/nextarter-geist";

const CTASection = () => {
  return (
    <Grid.Container justify="center" gap={4}>
      <Grid xs={24} justify="center">
        <Link
          aria-label="Deploy to Vercel"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-geist"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-geist"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Grid>

      <Grid xs={24} justify="center">
        <Snippet text="npx degit sozonome/nextarter-geist <YOUR_APP_NAME>" />
      </Grid>

      <Link
        href="https://github.com/sozonome/nextarter-geist/generate"
        target="_blank"
      >
        <Button type="success">Use This Template</Button>
      </Link>

      <Grid xs={24} justify="center" alignItems="center">
        <Link href={repoLink} target="_blank">
          <Button icon={<AiFillGithub />} type="secondary">
            Open in Github
          </Button>
        </Link>
        <Link
          marginLeft={1}
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.shields.io/github/stars/sozonome/nextarter-geist?style=social"
            alt="github stars"
          />
        </Link>
      </Grid>
    </Grid.Container>
  );
};

export default CTASection;
