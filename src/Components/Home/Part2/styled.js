import styled from "styled-components";

export const ContainerMeviShop = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Shop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    .mevi-shop {
        padding-left: 156px;

        .heading {
            font-weight: 600;
            font-size: 40px;
            border-left: 5px solid #37663F;
            padding-left: 20px;
        }

        .mevi-shop_introduce {
            width: 500px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.5px;
            line-height: 38px;
        }

        .mevi-shop_service {
            .mevi-shop_service-items {
                .mevi-shop_service-three {
                    display: flex;
                    
                    p {
                        font-weight: 600;
                        font-size: 16px;
                        padding-left: 16px;
                    }
                }
            }

        }

        .enter_store {
            width: 240px;
            height: 50px;
            background: linear-gradient(180deg, #FFF385 0%, #FFD254 100%);
            border: none;
            border-radius: 4px;
            font-weight: 500;
            font-size: 20px;
            margin-top: 20px;
        }


    }

    .mevi-shop_img {

    }

`