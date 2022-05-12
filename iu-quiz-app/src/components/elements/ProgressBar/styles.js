import styled from "styled-components";
import theme from "../../../styles/theme";

export const ProgressBar = styled.div`
.wrapper {
  border: 2px solid ${theme.colors.primary};
}

.container {
  background-color: #fff;
}

.barCompleted {
  background-color: ${theme.colors.primary};
  width: 80%;
}

.label {
  font-size: 20px;
  color: ${theme.colors.primary};
}
`