/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { Global, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";
import ExpandIcon from "../svg/fullscreen-white-18dp.svg";
import MinimizeIcon from "../svg/fullscreen_exit-white-18dp.svg";

type Props = {
  width: number;
  height: number;
};

const ExperimentFrame: FunctionComponent<Props> = ({
  width,
  height,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      sx={{
        width: width,
        height: height,
        border: `1px solid black`,
        borderRadius: `5px`,
        marginBottom: `1.45rem`,
        backgroundColor: `black`,
        position: `relative`,
        ...(expanded
          ? {
              position: "absolute",
              zIndex: 100,
              top: window.pageYOffset,
              left: 0,
              width: "100%",
              height: "100%",
            }
          : {}),
      }}
    >
      {children}
      <Button
        variant="expermientExpand"
        sx={{
          position: "absolute",
          top: `0.5em`,
          left: `0.5em`,
          zIndex: 101,
        }}
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        <img
          alt={expanded ? "minimize" : "expand"}
          sx={{
            width: "2em",
          }}
          src={expanded ? MinimizeIcon : ExpandIcon}
        />
      </Button>
      {expanded && (
        <Global
          styles={css`
            * {
              overflow: hidden;
            }
          `}
        />
      )}
    </div>
  );
};

export default ExperimentFrame;
