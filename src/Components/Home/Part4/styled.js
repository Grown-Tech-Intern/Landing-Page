import styled from "styled-components";

export const ContainerMeviFarm = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Farm = styled.div `
    .mevi-farm {
        /* margin: auto; */
        text-align: center;
        .mevi-farm_box {
            padding-top: 100px;
            .mevi-farm_heading {
                font-weight: 600;
                font-size: 40px;
                margin-bottom: 10px;
            }

            .mevi-farm_line {
                border-bottom: 5px solid #037A16;
                width: 50px;
                margin: auto;
            }
        }

        .mevi-farm_introduce {
            width: 546px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.5px;
            line-height: 38px;
            margin: auto;
            margin-top: 23px;
            margin-bottom: 28px;
        }

        .experience {
            width: 240px;
            height: 50px;
            background: linear-gradient(180deg, #FFF385 0%, #FFD254 100%);
            border: none;
            border-radius: 4px;
            font-weight: 500;
            font-size: 20px;
        }


    }

    .mevi-farm_four-items {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 138px;
        padding-top: 90px;
        .mevi-farm_box-items {
            position: relative;

            .mevi-farm_items-bg {
                width: 285px;
                height: 340px;
            }

            .mevi-farm_items {
                text-align: center;
                position: absolute;
                top: 15%;
                left: 10%;

                .mevi-farm_items-line, .mevi-farm_items-des {
                    margin: auto;
                }

                .mevi-farm_items-line {
                    display: block;
                    margin-top: 46.5px;
                    margin-bottom: 40px;
                }

                .mevi-farm_items-des {
                    width: 225px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 22px;
                    text-align: center;
                    color: #fff;
                    letter-spacing: 0.5px;
                }
            }

        }

    }

`