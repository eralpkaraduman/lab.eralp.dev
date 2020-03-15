/** @jsx jsx */
import { jsx, Box } from "theme-ui";
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
`;

const brythonInitScript = `
var interval = setInterval(function(){
  console.debug("waiting for brython")
  if (brython) {
    brython()
    clearInterval(interval)
  }
}, 200);
`;

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
      <Box sx={{ width: 200 }}>
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
    </Fragment>
  );
};

export default withDefaultLayout(Brython);
