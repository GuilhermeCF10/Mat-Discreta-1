import styled from "styled-components";

import { globalStyles } from "Global/globalStyles";

export const Container = styled.a`
  padding: 2px 0px;
  width: 49%;
  min-height: 160px;
  margin: 10px 5px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid ${globalStyles.paletteColors.lightBlack};
  background-color: ${globalStyles.paletteColors.darkLightWhite};
  text-decoration: none;
  color: #000;
`;
