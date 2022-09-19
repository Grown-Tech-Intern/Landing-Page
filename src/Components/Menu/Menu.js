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
                            <a href="/" className='underline-1'>MEVI SHOP</a>  <p></p>
                        </li>

                        <li className="item ">
                            <a href="/" className='underline-2'>MEVI EDUCATION</a> <p></p>
                        </li>

                        <li className="item ">
                            <a href="/" className='underline-3'>MEVI FARM</a> <p></p>
                        </li>

                        <li className="item ">
                            <a href="/" className='underline-4'>MEVI FACTORY</a> <p></p>
                        </li>

                        <li className="item ">
                            <a href="/" className='underline-5'>MEVI PLATFORM</a> <p></p>
                        </li>
                    </ul>

                </div>

            </S.Menu>

        </S.ContainerMenu>
    )
}

export default Menu