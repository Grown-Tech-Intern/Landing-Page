import styled from "styled-components";

export const Wrapper = styled.div`
    .active {
        background: #fff;
    }
`

export const ContainerHeader = styled.div`
    /* margin: 0;
    padding: 0; */
    //box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
    
`

export const Header = styled.div`
    /* height: 82px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,0);
    position: relative;
    padding: 2rem 3rem;

    .white {
        svg {
            path {
                fill: #ffffff;
            }
        }
    }
`

export const LogoMevi = styled.div`
    //margin-left: 64.5px;
    .mevi {
        width: 38px;
        height: 50px;
    }

    
`

export const BtnMenu = styled.div`
    //margin-right: -33px;
    
    button {
        border: none;
        /* cursor: pointer; */
    }
    img {
        cursor: pointer;
    }
`





