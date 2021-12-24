import { Grid, Tooltip } from "@geist-ui/react";
import Image from "next/image";

type HelperImageProps = {
  tooltipText?: string;
  src: string;
};

const HelperImage = ({ tooltipText, src }: HelperImageProps) => {
  return (
    <Tooltip aria-label={tooltipText} text={tooltipText} placement="topEnd">
      <Grid>
        <Image
          src={src}
          alt={tooltipText}
          title={tooltipText}
          height={33}
          width={33}
        />
      </Grid>
    </Tooltip>
  );
};

export default HelperImage;
