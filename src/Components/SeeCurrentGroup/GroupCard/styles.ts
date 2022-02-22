import styled from "styled-components";

import { globalStyles } from "Global/globalStyles";

export const Container = styled.li`
  padding: 10px 0px;
  width: 90%;
  min-height: 50vh;
  margin: 10px 5px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid ${globalStyles.paletteColors.lightBlack};
  background-color: ${globalStyles.paletteColors.darkLightWhite};
`;
