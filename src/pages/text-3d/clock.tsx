import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  Fragment,
  ReactNode
} from "react";
import useInterval from "../../utils/use-interval";

type State = {
  hour: string;
  minutes: string;
  seconds: string;
};

const initialState = {
  hour: "00",
  minutes: "00",
  seconds: "00"
};

const reducer = (state: State, action: { type: string }) => {
  const now = new Date();
  switch (action.type) {
    case "updateTime":
      return {
        ...state,
        hour: now
          .getHours()
          .toString()
          .padStart(2, "0"),
        minutes: now
          .getMinutes()
          .toString()
          .padStart(2, "0"),
        seconds: now
          .getSeconds()
          .toString()
          .padStart(2, "0")
      };
    default:
      return state;
  }
};

type ClockProps = {
  render: (hour: string, minutes: string, seconds: string) => ReactNode;
};

const Clock: FunctionComponent<ClockProps> = ({ render }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useInterval(() => {
    dispatch({ type: "updateTime" });
  }, 1000);
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>{render(state.hour, state.minutes, state.seconds)}</Fragment>
  );
};

export default Clock;
