/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

type Props = {
  language: Language;
  code: string;
  lineNumbersEnabled?: boolean;
  lineRange?: [number, number] | null;
};

const isLineInRange = (lineNumber: number, [fromLine, toLine]: number[]) =>
  lineNumber >= fromLine && lineNumber <= toLine;

const SourceCode: FunctionComponent<Props> = ({
  language,
  code,
  lineNumbersEnabled,
  lineRange
}) => {
  const shouldRenderLine = (lineNumber: number) =>
    lineRange ? isLineInRange(lineNumber, lineRange) : true;
  return (
    <div
      css={{
        fontFamily: "sans-serif",
        textAlign: "center"
      }}
    >
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            css={{
              overflowX: "auto",
              overflowY: "hidden",
              textAlign: "left",
              margin: "1em 0",
              padding: "0.5em",
              lineHeight: 1.3
            }}
            className={className}
            style={style}
          >
            {tokens.map((line, i) =>
              !shouldRenderLine(i + 1) ? (
                <Fragment />
              ) : (
                <div {...getLineProps({ line, key: i })}>
                  {lineNumbersEnabled && (
                    <span
                      css={{
                        display: "inline-block",
                        width: "2em",
                        userSelec: "none",
                        opacity: 0.3
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            )}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

SourceCode.defaultProps = {
  lineNumbersEnabled: false,
  lineRange: null
} as Partial<Props>;

export default SourceCode;
