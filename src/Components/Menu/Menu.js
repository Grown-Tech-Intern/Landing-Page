import React from 'react'
import * as S from './styled'
import Close from '../../assets/Close.svg'

function Menu({isHide, setIsHide}) {
    const handleHideMenu = () => {
        setIsHide(false)
    }

    return (
        <S.ContainerMenu>
            <S.Menu>
                <div className="menudrop">
                    <div className="access">
                        <div className="access-line">
                            <p>TRUY CẬP</p>
                        </div>
                        <button className="close" onClick={handleHideMenu }>
                            <img src={Close} alt="" />
                        </button>
                    </div>

                    <ul className="mevi-item">
                        <li className="item ">
                            <p><a href="/">MEVI SHOP</a> </p>
                            <div className="underline-1 line"></div>
                        </li>

                        <li className="item ">
                            <p><a href="/">MEVI EDUCATION</a></p>
                            <div className="underline-2 line"></div>
                        </li>

                        <li className="item ">
                            <p><a href="/">MEVI FARM</a></p>
                            <div className="underline-3 line"></div>
                        </li>

                        <li className="item ">
                            <p><a href="/">MEVI FACTORY</a></p>
                            <div className="underline-4 line"></div>
                        </li>

                        <li className="item ">
                            <p><a href="/">MEVI PLATFORM</a></p>
                            <div className="underline-5 line"></div>
                        </li>

                    </ul>

                </div>

            </S.Menu>

        </S.ContainerMenu>
    )
}

export default Menu