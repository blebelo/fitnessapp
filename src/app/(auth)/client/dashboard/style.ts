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
        te
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
        padding: 0 2.5rem 1.5rem;
        border-bottom:rgba(122, 122, 122, 0.24) 0.5px solid; 
    `,
    Cards: css`
        width: 95%;
    `,
    FormItems: css`
        display: block;
        justify-items: center;
    `,
    Input: css `
        width: 15rem;
    `,
    Button: css`
        background-color:rgb(0, 0, 0);
        color: #ffffff;
        margin:  2.5rem 1.5rem;
    `,
    Card: css`
        width:100%; 
    `,
    Heading: css`
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1rem;

    `,
    Table: css`
        width: 100%;
    `

})