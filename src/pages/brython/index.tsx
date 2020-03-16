/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import SourceCode from "../../components/source-code";
import {
  FunctionComponent,
  Fragment,
  useEffect,
  useState,
  FormEvent
} from "react";
import { withDefaultLayout } from "../../layouts/default-layout";
import useScript from "../../utils/use-script";

const pythonScript = `
from browser import alert, document

def handle_alert_from_react(alertText):
	alert(alertText)

document.brython_alert = handle_alert_from_react
`.trim();

const brythonInitScript = `
var interval = setInterval(function(){
  // Waiting for brython
  if (brython) {
    brython()
    // Brython initilized
    clearInterval(interval)
  }
}, 200);
`.trim();

const Brython: FunctionComponent = () => {
  const [alertString, setAlertString] = useState<string>("Hello from Python");
  useScript({ src: "/Brython-3.8.7/brython.js" });
  useScript({ src: "/Brython-3.8.7/brython_stdlib.js" });
  useScript({ text: pythonScript, type: "text/python" });
  useEffect(() => {
    // eslint-disable-next-line no-eval
    eval(brythonInitScript);
  }, []);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-eval
    eval(`document.brython_alert("${alertString}")`);
  };
  return (
    <Fragment>
      <h1>Brython</h1>
      <p>
        Demo of <a href="https://brython.info/">Brython</a> the Python 3
        implementation for client-side web programming. Try changing the text
        below and clicking the button. You should see an alert with the entered
        text.
      </p>
      <Box>
        <form
          onSubmit={handleOnSubmit}
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <input
            sx={{ mr: 2 }}
            type="text"
            name="name"
            value={alertString}
            onChange={e => setAlertString(e.target.value)}
          />
          <input type="submit" value="Run Python" />
        </form>
      </Box>
      <p>
        This is the python code that gets injected into document in a script
        tag. Note that we add a function to the document. We will call this
        later from javascript.
      </p>
      <SourceCode language="python" code={pythonScript} />
      <p>
        And this is how Brython is initilized from a react component.
        "useScript" is a utility that creates a script tag in document body
      </p>
      <SourceCode
        language={"typescript"}
        code={`
useScript({ src: "/Brython-3.8.7/brython.js" });
useScript({ src: "/Brython-3.8.7/brython_stdlib.js" });
useScript({ text: pythonScript, type: "text/python" });
useEffect(() => { eval(brythonInitScript) }, []);
        `.trim()}
      />
      <p>
        The evaluated "brythonInitScript" simply sets a loop to check until
        Brython loads then initilizes it;
      </p>
      <SourceCode language="javascript" code={brythonInitScript} />
      <p>
        Once the button is clicked we call the function added by python code
      </p>
      <SourceCode
        language="tsx"
        code={`document.brython_alert("\${alertString}")`}
      />
      <p>
        View the{" "}
        <a href="https://github.com/eralpkaraduman/lab.eralp.dev/blob/master/src/pages/brython/index.tsx">
          full source code
        </a>{" "}
        of this experiment
      </p>
    </Fragment>
  );
};

export default withDefaultLayout(Brython);
