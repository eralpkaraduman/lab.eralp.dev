import { useEffect } from "react";

type UseScriptParams = {
  src?: string;
  text?: string;
  type?: string;
};

const useScript = ({ src, text, type }: UseScriptParams) => {
  useEffect(() => {
    const script = document.createElement("script");

    if (type) script.type = type;
    if (src) {
      script.src = src;
      script.async = true;
    }
    if (text) {
      script.text = text;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, text, type]);
};

export default useScript;
