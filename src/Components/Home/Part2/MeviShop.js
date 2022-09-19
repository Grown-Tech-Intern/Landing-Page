import React from 'react'
import * as S from './styled'
import shop from '../../../assets/shop.png'
import { MeviShopItems } from './MeviShopItems'

function MeviShop() {
    return (
        <S.ContainerMeviShop id="mevishop">
            <S.Shop>
                <div className="mevi-shop">
                    <h3 className="heading">MEVI SHOP</h3>
                    <p className="mevi-shop_introduce">
                        Nơi người dùng có thể đăng bán các sản phẩm chất lượng cao của MEVI và nhận hoa hồng.
                        Hoặc bắt đầu kinh doanh và trở thành đại lý của MEVI với nhiều chính sách hấp dẫn.
                    </p>

                    <div className="mevi-shop_service">
                        {MeviShopItems.map((items, index) => {
                            return (
                                <div className="mevi-shop_service-items">
                                    <div className="mevi-shop_service-three">
                                        <img key={index} src={items.url} alt="" />
                                        <p>{items.des}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <button className='enter_store'>Vào cửa hàng</button>
                </div>

                <div className="mevi-shop_img">
                    <img src={shop} alt="" />
                </div>
            </S.Shop>

        </S.ContainerMeviShop>
    )
}

export default MeviShop