import React from 'react'
import * as S from './styled'
import { MeviFarmItems } from './MeviFarmItems'


function MeviFarm() {
    return (
        <S.ContainerMeviFarm id="mevifarm">
            <S.Farm>
                <div className="mevi-farm">
                    <div className="mevi-farm_box">
                        <h3 className="mevi-farm_heading">MEVI FARM</h3>
                        <div className="mevi-farm_line"></div>
                    </div>

                    <p className="mevi-farm_introduce">
                        Mevi cung cấp các sản phẩm nông nghiệp chất lượng từ các cánh đồng trù phú trên mọi miền tổ quốc.
                    </p>
                    <button className="experience">Trải nghiệm</button>
                </div>

                <div className="mevi-farm_four-items">
                    {MeviFarmItems.map((items, index) => {
                        return (
                            <div className="mevi-farm_box-items">
                                <img key={index} src={items.bg} alt="" className='mevi-farm_items-bg' />
                                <div className="mevi-farm_items">
                                    <img key={index} src={items.url} alt="" className='mevi-farm_items-icon'  />
                                    <img key={index} src={items.border} alt="" className="mevi-farm_items-line"  />
                                    <p className="mevi-farm_items-des">
                                        {items.des}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </S.Farm>

        </S.ContainerMeviFarm>
    )
}

export default MeviFarm