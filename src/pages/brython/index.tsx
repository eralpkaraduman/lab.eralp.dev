/* eslint-disable no-eval */
/** @jsx jsx */
import { jsx, Box, Input, Button, Link } from "theme-ui";
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
import useEventListener from "../../utils/user-event-listener";

const pythonScript = `
from browser import alert, document, window

def handle_alert_from_react(alertText):
	alert(alertText)

document.brython_alert = handle_alert_from_react

ready_event = window.Event.new("BRYTHON_READY")
window.dispatchEvent(ready_event)
`.trim();

const brythonInitScript = `
var interval = setInterval(function(){
  // Waiting for brython
  if (!!window.brython) {
    brython()
    // Brython initilized
    clearInterval(interval)
  }
}, 200);
`.trim();

const Brython: FunctionComponent = () => {
  const [alertString, setAlertString] = useState<string>("Hello from Python");
  const [brythonReady, setBrythonReady] = useState<boolean>(false);
  useScript({ src: "/Brython-3.8.7/brython.js" });
  useScript({ text: pythonScript, type: "text/python" });
  useEventListener("BRYTHON_READY", () => setBrythonReady(true));
  useEffect(() => eval(brythonInitScript), []);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    eval(`document.brython_alert("${alertString}")`);
  };
  return (
    <Fragment>
      <h1>Brython</h1>
      <p>
        Demo of <Link href="https://brython.info/">Brython</Link> the Python 3
        implementation for client-side web programming. Try changing the text
        below and clicking the button. You should see an alert with the entered
        text.
      </p>

      <Box>
        {(brythonReady && (
          <form
            onSubmit={handleOnSubmit}
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Input
              sx={{ mr: 2 }}
              type="text"
              name="name"
              value={alertString}
              onChange={e => setAlertString(e.target.value)}
            />
            <Button disabled={!brythonReady} type="submit">
              Run Python
            </Button>
          </form>
        )) || (
          <p sx={{ color: "primary" }}>Python Runtime Is Getting Ready...</p>
        )}
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
useScript({ text: pythonScript, type: "text/python" });
useEventListener("BRYTHON_READY", () => setBrythonReady(true));
useEffect(() => eval(brythonInitScript), []);
        `.trim()}
      />
      <p>
        The evaluated "brythonInitScript" simply sets a loop to check until
        Brython loads then initilizes it;
      </p>
      <SourceCode language="javascript" code={brythonInitScript} />
      <p>
        When python code runs, it dispatches BRYTHON_READY event to let the
        react know. Then the input and button is rendered. Once the button is
        clicked we call the function added by python code. Python takes the text
        we put as an argument, uses it to the trigger the alert.
      </p>
      <SourceCode
        language="tsx"
        code={`document.brython_alert("\${alertString}")`}
      />
      <p>
        View the{" "}
        <Link href="https://github.com/eralpkaraduman/lab.eralp.dev/blob/master/src/pages/brython/index.tsx">
          full source code
        </Link>{" "}
        of this experiment
      </p>
    </Fragment>
  );
};

export default withDefaultLayout(Brython);
