import styled from "styled-components";

export const ContainerMenu = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
`

export const Menu = styled.div`
    width: 100%;
    height: 1024px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);

    .menudrop {
        .access {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 39px;
            position: relative;
            .access-line {
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
                width: 481px;
                text-align: center;
                p {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                    color: #fff;
                }

            }
            button {
                border: none;
                background-color: #000;
                margin-top: -68px;
                position: absolute;
                right: 7%;
                cursor: pointer;
                img {
                    /* width: 40px;
                    height: 39px; */
                }
            }

        }

        .mevi-item {
            padding-left: 0;
            padding-top: 65px;
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
            li {
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
                padding-top: 6px;
                a {
                    text-decoration: none;
                    color: #fff;
                    position: relative;
                }

                a::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 0.175rem;
                    left: 0;
                    bottom: 0;
                    transform: scale(0, 1);
                    transition: transform 0.3s ease;
                }

                a:hover::after {
                    transform: scale(1, 1); 
                }

                .underline-1::after {
                    background: #37663F;
                }

                .underline-2::after {
                    background: #385F8F;
                }

                .underline-3::after {
                    background: #037A16;
                }

                .underline-4::after {
                    background: #FE8333;
                }

                .underline-5::after {
                    background: #46037A;
                }

            }
            
        }

    }

`