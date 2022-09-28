import styled from "styled-components";
import { THEME } from "./../../../common/Themes";
import { media } from "./../../../common/Media";

export const StyledLogin = styled.div`
  background-color: ${THEME.color.bgWarning};
  min-height: 100vh;
  .row {
    .mt {
      margin-top: 3rem;
    }
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
              /* login */
              .login-btn {
                background-color: ${THEME.color.bgDark};
                color: ${THEME.color.bgLight};
                &:hover {
                  background-color: ${THEME.color.btnHoverActive};
                }
              }
              /* Sign uP */
              .signup-btn {
                background: transparent;

                &:hover {
                  background-color: ${THEME.color.bgDark};
                  color: ${THEME.color.bgLight};
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
            color: ${THEME.color.textPrimary};
            font-size: 23px;
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

          /* Alart */

          .alart-user-info {
            color: #41387f;
            background-color: #e2dff6;
            border: 1px solid #d3cef2;
            border-radius: 13px;
            display: flex;
            align-items: center;
            padding: 13px 39px 13px 13px;
            position: relative;

            .alert-icon {
              margin-right: 13px;
            }
            .alert-text {
              p {
                font-size: 13px;
                line-height: 19px;
                strong {
                  font-weight: 700;
                }
              }
            }
            .alart-btn {
              position: absolute;
              top: 0;
              right: 0;
              button {
                border: none;
                outline: none;
                background: transparent;
                padding: 10px;
                opacity: 0.4;
                transition: all 0.1s ease-in-out;
                cursor: pointer;
                &:hover {
                  opacity: 0.6;
                }
              }
            }
          }
          /* Alart */

          /* Login Form */

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
              .button {
                padding: 13px;
                border-radius: 13px;
                border: none;
                outline: none;
                background-color: ${THEME.color.bgWarning};
                width: 100%;
                font-size: 13px;
                font-weight: 600;
                color: rgb(31, 33, 40);
                cursor: pointer;
              }
              .center {
                text-align: center;
              }
            }
          }
          /* Login Form */
        }
      }
    }
    .policy-link {
      text-align: center;
      a {
        font-size: 14px;
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }
`;
