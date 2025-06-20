import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  Header: css`
    width: 100vw;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  `,
  Container: css`
    width: 95vw;
    justify-content: center;
    align-items: center;
  `,
  Form: css`
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.01rem;
    border-color: #7a7a7a;
    justify-items: center;
  `,
  Typography: css`
    font-weight: 500;
    font-size: 2.5rem;
    padding: 0 2.5rem;
    // margin-bottom: 1rem;
    // border-bottom: .5px solid rgba(0, 0, 0, 0.25);
  `,
  Cards: css`
    width: 95vw;
  `,
  FormItems: css`
    display: block;
    justify-items: center;
  `,
  Input: css`
    width: 15rem;
  `,
  Button: css`
    background-color: rgb(0, 0, 0);
    color: #ffffff;
    margin: 2.5rem 1.5rem;
  `,
  Card: css`
    width: 100%;
  `,
  Heading: css`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Table: css`
    width: 100%;
  `,
  CenteredContent: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  `
});
