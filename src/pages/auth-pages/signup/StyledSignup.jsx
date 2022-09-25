import styled from "styled-components";
import { THEME } from "./../../../common/Themes";
import { media } from "./../../../common/Media";

export const StyledSignup = styled.div`
  background-color: ${THEME.color.bgBlue};
  .row {
    .card-container {
      max-width: 100%;
      margin: 0 auto;
      margin-bottom: 3rem;
      ${media.up("md")} {
        width: 66%;
      }
      ${media.up("lg")} {
        width: 50%;
      }
      ${media.up("xl")} {
        width: 33.33333333%;
      }
      .card-shadow {
        background-color: ${THEME.color.bgLight};
        border-radius: 2rem;
        /* Card */
        .card-body {
          padding: 1.5rem;
          /* Logo */
          .logo {
            margin: 2rem 0;
            img {
              margin: 0 auto;
            }
          }
          /* Button */
          .auth-button {
            background: ${THEME.color.btnBgSecondaty};
            display: flex;
            align-items: center;
            padding: 13px 7px;
            border-radius: 0.875rem;
            .btn-col {
              width: 50%;
              padding: 0 6px;
              button {
                width: 100%;
                border-radius: 0.875rem;
                border: none;
                outline: none;
                padding: 8px 16px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
              }
              /* Login */
              .login-btn {
                background: transparent;
                &:hover {
                  background-color: ${THEME.color.bgDark};
                  color: ${THEME.color.bgLight};
                }
              }
              /* Sign UP */
              .signup-btn {
                background-color: ${THEME.color.bgDark};
                color: ${THEME.color.bgLight};
                &:hover {
                  background-color: ${THEME.color.btnHoverActive};
                }
              }
            }
          }
          /* Hedaing */
          .heading {
            font-weight: 700;
            text-align: center;
            margin-top: 39px;
            margin-bottom: 7px;
            font-size: 23px;
            color: ${THEME.color.textPrimary};
            ${media.up("md")} {
              font-size: 32px;
            }
          }
          .desc {
            text-align: center;
            margin-bottom: 39px;
            font-weight: 500;
            font-size: 17px;
            color: ${THEME.color.textSecondary};
            ${media.up("md")} {
              font-size: 19px;
            }
          }
          /* Sign Up Form */
          form {
            .form-group {
              position: relative;
              margin-top: 19px;
              transition: all 0.2s ease-in-out;
              .form-control {
                width: 100%;
                border: none;
                outline: none;
                box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
                padding: 13px;
                height: 47px;
                border-radius: 13px;
                background-color: ${THEME.color.inputBg};
                font-size: 13px;
                transition: all 0.2s ease-in-out;
                font-weight: 600;

                &:focus {
                  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%),
                    0 0 0 0.25rem rgb(108 93 211 / 25%);
                  transition: all 0.2s ease-in-out;
                }
              }

              label {
                transition: all 0.2s ease-in-out;
                position: absolute;
                top: 0;
                left: 0;
                padding: 13px;
                font-size: 13px;
                font-weight: 500;
                color: #6c757d;
              }
              input:focus ~ label,
              input:valid ~ label {
                top: -13px;
                margin-bottom: 6px;
                font-size: 11px;
                transition: all 0.2s ease-in-out;
              }
            }
            .form-btn {
              margin-top: 19px;
              button {
                padding: 13px;
                border-radius: 13px;
                border: none;
                outline: none;
                background-color: ${THEME.color.bgBlue};
                width: 100%;
                font-size: 13px;
                font-weight: 600;
                color: ${THEME.color.bgLight};
              }
            }
          }
          /* Sign Up Form */
        }
      }
    }
    .policy-link {
      text-align: center;
      a {
        font-size: 14px;
        color: ${THEME.color.bgLight};
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }
`;
