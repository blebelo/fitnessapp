import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  Container: css`
    background-color: #fffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  `,
  Form: css`
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.01rem;
    border-color: #7a7a7a;
    justify-items: center;
    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  `,
  Typography: css`
    font-weight: 500;
    font-size: 2.5rem;
    padding: 0 2.5rem 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 0 1.5rem 1rem;
    }
  `,
  Submit: css`
    background-color: black;
  `,
  FormItems: css`
    display: block;
    justify-items: center;
  `,
  Input: css`
    width: 15rem;
  `,
});
