import styled from "styled-components";

export const ContainerNavigationButton = styled.div `
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right:0 ;
    width: 0;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const NavigationButton = styled.div `
    
    a {
        display: flex;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        width: 40px;

        .nav-btn {
            width: 20px;
            height: 20px;
            border: 2px solid #37663F;
            border-radius: 20px;
            margin-bottom: 40px;
            position: relative;

            .nav-items {
                width: 0; 
                height: 0; 
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent; 
                border-right:10px solid #000; 
                display: none;
                position: absolute;
                left: 25px;
            
                p {
                    margin: 0 16px;
                    width: 150px;
                    height: 31px;
                    background-color: #000;
                    border: 1px solid #000;
                    border-radius: 4px;
                    text-align: center;
                    padding-top: 5px;
                    position: absolute;
                    top: -19px;
                    left: -8px;
                    letter-spacing: 1px;
                }
            }
        }

        .nav-btn:hover {
            background-color: #37663F;
            .nav-items {
                display: block;
            }
        }

    }


`