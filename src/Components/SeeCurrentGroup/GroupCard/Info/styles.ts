import styled from "styled-components";

import { globalStyles } from "Global/globalStyles";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  height: 20%;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.span`
  height: 80%;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
