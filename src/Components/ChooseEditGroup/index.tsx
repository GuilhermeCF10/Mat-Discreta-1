import React from "react";

import { Container, GroupsList } from "./styles";

import Group from "./Group";

import jsonGroups from "Database/groups.json";

const Background = require("Assets/background.jpg");

const Group1Image = require("Assets/group1.jpg");
const Group2Image = require("Assets/group2.jpg");
const Group3Image = require("Assets/group3.jpg");
const Group4Image = require("Assets/group4.jpg");
const Group5Image = require("Assets/group5.jpg");
const Group6Image = require("Assets/group6.jpg");

const MainApp: React.FC = () => {
  const photos = [
    Group1Image,
    Group2Image,
    Group3Image,
    Group4Image,
    Group5Image,
    Group6Image,
  ];

  const renderGroups = jsonGroups.map((eachGroup) => {
    return (
      <Group
        key={jsonGroups.indexOf(eachGroup) + 1}
        groupLink={"edit_grupo"+(jsonGroups.indexOf(eachGroup) + 1)}
        groupNumber={String(jsonGroups.indexOf(eachGroup) + 1)}
        title={eachGroup.name}
        content={eachGroup.content}
        photo={photos[jsonGroups.indexOf(eachGroup)]}
      />
    );
  });

  return (
    <>
      <Container>
        <GroupsList>{renderGroups}</GroupsList>
      </Container>
    </>
  );
};

export default MainApp;
