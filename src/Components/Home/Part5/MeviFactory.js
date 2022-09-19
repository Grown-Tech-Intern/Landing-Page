import React from 'react'
import * as S from './styled'
import meviFactoryLogo from '../../../assets/meviFactoryLogo.png'
import { MeviFactoryItems } from './MeviFactoryItems'

function MeviFactory() {
    return (
        <S.ContainerMeviFactory id="mevifactory">
            <S.Factory>
                <div className="mevi-factory">
                    <h3 className="mevi-factory_heading">MEVI FACTORY</h3>
                    <p className="mevi-factory_introduce">
                        Giúp các nhà máy sản xuất và chế biến nông sản phát triển phát triển trên nền tảng mạng xã hội và
                        tiếp cận với các chủ trang trại, nguồn cung nông sản khi trở thành thành viên hệ thống MEVI.
                    </p>
                    <button className="btn-discovery">Khám phá</button>
                </div>

                <div className="mevi-factory_logo">
                    <div></div>
                    <div className="img">
                        <img src={meviFactoryLogo} alt="" />
                    </div>
                </div>

                <div className="mevi-factory_items-img">
                    {MeviFactoryItems.map((items, index) => {
                        return (
                            <div className="mevi-factory_img">
                                <img key={index} src={items.url} alt="" />
                            </div>
                        )
                    })}
                </div>

            </S.Factory>

        </S.ContainerMeviFactory>
    )
}

export default MeviFactory