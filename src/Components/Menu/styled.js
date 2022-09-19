import styled, {keyframes } from "styled-components";

export const ContainerMenu = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
`

const animationOut = keyframes`
    from {
    width: 0;
    opacity: 0;
    }

    to {
    width: 100%;
    opacity: 1;
    }
`
const animationIn = keyframes`
    from {
    width: 0;
    opacity: 1;
    }

    to {
    opacity: 0;
    }
`

export const Menu = styled.div `
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
            padding-top: 65px;
            display: grid;
            margin-left: -27px;
            p {
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;

                a {
                    text-decoration: none;
                    color: #fff;
                }

            }

            .item {
                padding: 8px 0;
                display: inline-block;
                margin: auto;
                .line {
                    animation: ${animationIn};
                    animation-duration: 2s;
                    animation-fill-mode: forwards;
                    margin-top: -20px;
                    /* width: 0; */
                }
            }

            .item:hover > .line {
                border: 2.5px solid red;
                 // Animation;
                animation: ${animationOut};
                animation-duration: 2s;
                animation-fill-mode: backwards;
            }
            
            .underline-1 {
                /* background: #37663F; */
                border: 2.5px solid #37663F;
            }
           

                .underline-2 {
                    /* background: #385F8F; */
                    border: 2.5px solid #385F8F;
                }

                .underline-3 {
                    /* background: #037A16; */
                    border: 2.5px solid #037A16;
                }

                .underline-4 {
                    /* background: #FE8333; */
                    border: 2.5px solid #FE8333;
                }

                .underline-5 {
                    /* background: #46037A; */
                    border: 2.5px solid #46037A;
                }

            
           
        }

    }

`