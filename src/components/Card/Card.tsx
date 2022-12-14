import React from "react";

import { CardProps } from "./Card.types";
import style from "./style";

import Box from "components/Containers/Box";
import HeaderCard from "components/Card/HeaderCard";
import TextCard from "components/Card/TextCard";
import Button from "components/Buttons/Button";

/**
 *
 * @param {Object} user Contains user's infos from github API
 * @returns {JSX}
 */

export default function Card({
  id,
  login,
  imageUrl,
  profileUrl,
  duplicatedId,
  dataTestid,
}: CardProps) {
  function handleClick() {
    window.location.href = profileUrl;
  }

  const userInfos = [id, login];

  return (
    <Box boxShadow borderRadius style={style} dataTestid={dataTestid}>
      <HeaderCard
        id={id}
        imageUrl={imageUrl}
        dataTestid={`Checkbox_${dataTestid}`}
        duplicatedId={duplicatedId}
      />
      <TextCard content={userInfos} />
      <Button onClick={handleClick} content="View profile" />
    </Box>
  );
}
