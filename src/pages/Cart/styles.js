import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 4px;

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;

            &:hover {
                background: ${darken(0.15, '#7159c1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        padding: 12px;
        color: #999;
        text-align: left;
        text-transform: uppercase;
    }

    tbody td {
        border-bottom: 1px solid #eee;

        img {
            height: 100px;
        }

        strong {
            color: #333;
            display: block;
        }

        span {
            display: block;
            margin-top: 5px;
            font-size: 18px;
            font-weight: bold;
        }

        div {
            display: flex;
            align-items: center;

            input {
                width: 50px;
                border: 1px solid #ddd;
                border-radius: 4px;
                color: #666;
                padding: 5px;
            }
        }

        button {
            display: flex;
            background: none;
            border: 0;
            padding: 5px;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 10px;
    }
`;
