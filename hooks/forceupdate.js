import { useState } from "react";

// react hook to force component/page rerender
export const useForceUpdate = () => {
  // set state to 0
  const [value, setValue] = useState(0);

  // return updated state value forcing component/page to rerender
  return () => setValue((value) => value + 1);
};
