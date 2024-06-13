import { useState } from "react";

export const SetProfile = (props) => {
  const [newUSername, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUserName(newUSername);
        }}
      >
        Submit
      </button>
      ;
    </div>
  );
};
