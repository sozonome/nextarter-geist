import { Card, Grid, Text } from "@geist-ui/react";

const SomeText = () => {
  return (
    <Grid.Container gap={1} marginBottom={2}>
      <Grid xs={24}>
        <Text h2>Hello</Text>
      </Grid>

      <Grid xs={24}>
        <Card width="100%">
          This is a Next.js app with eist-UI and TypeScript setup.
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default SomeText;
