import styled from "styled-components";

import { globalStyles } from "Global/globalStyles";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${globalStyles.paletteColors.darkWhite}
`;
