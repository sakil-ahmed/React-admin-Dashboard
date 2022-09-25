import styled from "styled-components";
import { THEME } from "./../../common/Themes";

export const StyledAuth = styled.div`
  .or {
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    color: ${THEME.color.textSecondary};
    margin-top: 13px;
  }
  .button {
    border: none;
    outline: none;
    background: transparent;
    padding: 13px;
    border: 1px solid ${THEME.color.btnBorderColor};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    font-size: 13px;
    font-weight: 600;
    margin-top: 13px;
    cursor: pointer;
    &:hover {
      background-color: rgb(233, 233, 234);
    }
    svg {
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }
  .google {
    margin-top: 19px;
  }
`;
