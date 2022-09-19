import React from 'react'
import * as S from './styled'

function NavBtn( ) {
    return (
        <S.ContainerNavigationButton>
            <S.NavigationButton>
                {/* MEVI SHOP */}
                <a href="#mevishop" className='contain'>
                    <div className="nav-btn" >
                        <div className="nav-items nav_mevishop"><p>MEVI SHOP</p></div>
                    </div>
                </a>
                {/* MEVI EDUCATION */}
                <a href="#mevieducation">
                    <div className="nav-btn">
                        <div className="nav-items nav_mevieducation"><p>MEVI EDUCATION</p></div>
                    </div>
                </a>
                {/* MEVI FARM */}
                <a href="#mevifarm">
                    <div className="nav-btn" >

                        <div className="nav-items nav_mevifarm"><p>MEVI FARM</p></div>
                    </div>
                </a>
                {/* MEVI FACTORY */}
                <a href="#mevifactory">
                    <div className="nav-btn" >
                        <div className="nav-items nav_mevifactory"><p>MEVI FACTORY</p></div>
                    </div>
                </a>

            </S.NavigationButton>

        </S.ContainerNavigationButton>

    )
}

export default NavBtn