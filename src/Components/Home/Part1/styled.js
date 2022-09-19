import styled from "styled-components";
import BgPart1 from "../../../assets/Background-Part1.png"

export const ContainerMeviEcosystem = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${BgPart1});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Ecosystem = styled.div `
    /* background-image: url(${BgPart1});
    background-repeat: no-repeat;
    background-size: cover; */
    height: 1024px;
    .content {
        .content-ecosystem {
            text-align: center;
            padding-top: 180px;
            h3 {
                font-weight: 700;
                font-size: 60px;
                color: #fff;
            }

            p {
                width: 620px;
                font-weight: 200;
                font-size: 24px;
                color: #fff;
                margin: auto;
            }
        }

        .system {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 0 147px;
            padding-top: 102px;
            .system-items {
                text-align: center;
                .des {
                    position: relative;
                    width: 285px;
                    height: 200px; 
                    border-radius: 12px;
                    top: -204px;
                    transition: .8s ;

                    p {
                        width: 232px;
                        font-weight: 400;
                        font-size: 18px;
                        margin: auto;
                        line-height: 32px;
                        position: absolute;
                        top: 30px;
                        left: 30px;
                        display: none;

                        a {
                            text-decoration: none;
                            color: #fff;

                        }
                    }
                }

                h4 {
                    color: #fff;
                    font-weight: 600;
                    font-size: 28px;
                    /* padding-left: 60px; */
                    margin-top: -190px;
                }

                .des:hover {
                    cursor: pointer;
                    opacity: 0.7;
                    background-color: #000;
                    
                    p {
                        display: block;
                        color: #fff;
                    }
                }

            }


        }

    }

`