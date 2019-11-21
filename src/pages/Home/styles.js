import styled from 'styled-components';
import { darken } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const CatalogList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
        display: flex;
        flex-direction: column;
        margin: 20px 10px;
        border-radius: 4px;
        padding: 20px;
        background: #fff;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 10px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
            color: #000;
        }

        button {
            display: flex;
            align-items: center;
            background-color: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            margin-top: auto;
            transition: all 0.3s ease-in-out;

            :hover {
                background: ${darken(0.15, '#7159c1')};
            }

            div {
                display: flex;
                align-items: end;
                padding: 12px;
                background: rgba(0, 0, 0, 0.2);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
            }
        }
    }
`;
