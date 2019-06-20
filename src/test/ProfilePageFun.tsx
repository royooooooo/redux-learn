import React from "react";

const ProfilePageFun = (props: any) => {
  const showMessage = () => {
    alert("Followed" + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Follow</button>;
};
export default ProfilePageFun;
