import { SetProfile } from "./SetProfile";
export const Profile = (props) => {
  return (
    <div>
      <h1> welcome to profile page ..... </h1>
      <h2>{props.userName}</h2>
      <SetProfile setUserName={props.setUserName} />
    </div>
  );
};
