import React from "react";

import Box from "components/Containers/Box";
import HeaderCard from "components/Card/HeaderCard";
import TextCard from "components/Card/TextCard";
import Button from "components/Buttons/Button";

/**
 *
 * @param {Object} user Contains user's infos from github API
 * @returns {JSX}
 */

export default function Card({ user }: any) {
  function handleClick() {
    window.location.href = user.html_url;
  }

  const style = {
    width: "150px", // 100px seems to be too small
    height: "fit-content",
    flexDirection: "column",
    backgroundColor: "lightgrey", // TODO : use theme
    padding: "2%",
  };

  const userInfos = user ? [user?.id, user?.login] : [];

  return (
    <Box boxShadow borderRadius style={style}>
      <HeaderCard user={user} />
      <TextCard content={userInfos} />
      <Button onClick={handleClick} content="View profile" />
    </Box>
  );
}
