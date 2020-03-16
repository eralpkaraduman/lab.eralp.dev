/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

type Props = {
  language: Language;
  code: string;
  lineNumbersEnabled?: boolean;
};

const SourceCode: FunctionComponent<Props> = ({
  language,
  code,
  lineNumbersEnabled
}) => {
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
              overflow: "scroll",
              textAlign: "left",
              margin: "1em 0",
              padding: "0.5em",
              lineHeight: 1.3
            }}
            className={className}
            style={style}
          >
            {tokens.map((line, i) => (
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
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

SourceCode.defaultProps = {
  lineNumbersEnabled: false
} as Partial<Props>;

export default SourceCode;
