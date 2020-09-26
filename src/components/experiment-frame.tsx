/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { Global, css } from "@emotion/core";
import { FunctionComponent, useEffect, useState } from "react";
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
  useEffect(() => {
    if (expanded) {
      window.scrollTo(0, 0);
    }
  }, [expanded]);
  return (
    <div
      className={expanded ? "experiment-frame-expanded" : "experiment-frame"}
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
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              border: "unset",
              borderRadius: "unset",
            }
          : {}),
      }}
    >
      {children}
      <Button
        variant="expermientExpand"
        sx={{
          position: "absolute",
          bottom: `0.5em`,
          right: `0.5em`,
          zIndex: expanded ? 101 : "auto",
        }}
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        <img
          alt={expanded ? "minimize" : "expand"}
          sx={{
            height: expanded ? "6em" : "2em",
          }}
          src={expanded ? MinimizeIcon : ExpandIcon}
        />
      </Button>
      {expanded && (
        <Global
          styles={css`
            #content > *:not(.experiment-frame-expanded) {
              display: none;
              padding: 0;
              margin: 0;
            }
            #sidebar {
              display: none;
            }
          `}
        />
      )}
    </div>
  );
};

export default ExperimentFrame;
