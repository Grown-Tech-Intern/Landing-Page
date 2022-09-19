import styled from "styled-components";

export const ContainerPlatForm = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;

`

export const PlatForm = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 89px 15px 0 0 ;

    .mevi-platform_img {
        margin-bottom: -4px;
        
    }

    .mevi-platform {
        /* padding-right: 100px; */
        margin-top: -200px;
        .mevi-platform_heading {
            font-weight: 600;
            font-size: 40px;
            border-left: 5px solid #46037A;
            padding-left: 20px;
        }

        .mevi-platform_introduce {
            width: 459px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.5px;
            line-height: 38px;
        }

    }


`