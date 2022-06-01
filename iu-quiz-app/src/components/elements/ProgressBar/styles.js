import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const ProgressBar = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.primary};
`

export const Percentage = styled.div`
  height: 20px;
  background-color: ${theme.colors.primary};
  transition: 0.5s;
  ${({ percentage }) =>
  percentage &&
  css`
      width: ${percentage}%;
  `}
`