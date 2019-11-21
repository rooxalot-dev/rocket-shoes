import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

    @media (max-width: 460px) {
        justify-content: center;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    padding: 10px 0;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 15px;

        > strong {
            display: block;
            line-height: 1.5;
            color: #fff;
        }

        > span {
            font-size: 12px;
            color: #999;
        }
    }
`;
