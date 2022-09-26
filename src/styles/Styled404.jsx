import styled from "styled-components";
import { THEME } from "./../common/Themes";
import { media } from "./../common/Media";

export const Styled404 = styled.div`
  .page-container {
    padding: 19px 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    flex: auto;
    .page-text {
      display: flex;
      align-items: center;
      flex-direction: column;
      .heading-text {
        font-size: 50px;
        color: rgb(108, 93, 221);
        ${media.up("md")} {
          font-size: 80px;
        }
      }
      .text {
        font-size: 39px;
        font-weight: 700;
        line-height: 60px;
        ${media.up("md")} {
          font-size: 25px;
          line-height: 37px;
        }
      }
    }
    img {
      height: 50vh;
    }
    .button {
      a {
        display: flex;
        align-items: center;
        padding: 13px 39px;
        border-radius: 13px;
        color: rgb(108, 93, 221);
        background-color: #f0effb;
        font-size: 13px;
        font-weight: 600;
        transition: all 0.15s ease-in-out;
        svg {
          margin-right: 6px;
          height: 1rem;
          width: 1rem;
        }
        &:hover {
          color: ${THEME.color.bgLight};
          background-color: rgb(108, 93, 221);
        }
      }
    }
  }
`;
