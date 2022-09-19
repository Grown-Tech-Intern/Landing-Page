import styled from "styled-components";

export const ContainerMeviEducation = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #EAF3FF;
    height: 710px;
    margin-top: 100px;
`

export const Education = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    padding: 100px 160px 0 0;

    .mevi-education {
        /* margin-right: 187px; */
        margin-top: 62px;
        .mevi-education_heading {
            font-weight: 600;
            font-size: 40px;
            border-left: 5px solid #385F8F;
            padding-left: 20px;
        }

        .mevi-education_introduce {
            width: 450px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.5px;
            line-height: 38px;
        }

        .discovery {
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

`