import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Menu from '../Menu/Menu'
import ColorLogo from '../ChangeLogo/ColorLogo/ColorLogo'
import ColorMenu from '../ChangeLogo/ColorLogo/ColorMenu'

function Header() {
    const [isShow, setIsShow] = useState(false)

    const handleShowMenu = () => {
        setIsShow(true)
        console.log(isShow);
    }

    const [scrollY, setScrollY] = useState(false)
    useEffect(() => {
        const handleScroll = (e) => {
            const scrollY = window.scrollY
            // console.log(scrollY);
            if (scrollY > 799) {
                setScrollY(true)
            } else {
                setScrollY(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    console.log(scrollY);

    return (
        /* HEADER */
        <S.Wrapper>
            <S.ContainerHeader className={scrollY ? "active" : ""} >
                <S.Header>
                    <S.LogoMevi className={!scrollY ? "white" : ""} >
                        <ColorLogo />
                    </S.LogoMevi>

                    <S.BtnMenu className={!scrollY ? "white" : ""} onClick={handleShowMenu}>
                        <ColorMenu/>
                    </S.BtnMenu>
                </S.Header>
                <div>
                    {isShow && <Menu isHide={isShow} setIsHide={setIsShow} />}
                </div>


            </S.ContainerHeader>
        </S.Wrapper>
    )
}

export default Header