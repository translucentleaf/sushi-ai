import React, { useState } from "react";

const MenuItem: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={(): void => setOpen(!open)}>
        Hi, click me to expand
      </button>
      {open ? <h1>Yay!</h1> : null}
    </div>
  );
};

export { MenuItem };
