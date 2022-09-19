import React from 'react'
import * as S from '../Part1/styled'
import { MeviEcosystemItems } from './MeviEcosystemItems'

function MeviEcosystem() {
    return (
        <S.ContainerMeviEcosystem id="meviecosystem">
            <S.Ecosystem>
                <div className="content">
                    <div className="content-ecosystem">
                        <h3>MEVI ECOSYSTEM</h3>
                        <p>
                            MEVI cung cấp các giải pháp phát triển và sản xuất nông nghiệp toàn diện.
                            Giúp nâng tầm và đưa nông sản Việt chất lượng cao đến gần hơn với người tiêu dùng.
                        </p>
                    </div>

                    <div className="system">
                        {MeviEcosystemItems.map((items, index) => {
                            return (
                                <div className="system-items">
                                    <img key={index} src={items.url} alt="" />
                                    <div className='des'>
                                        <p> <a href="/">{items.des}</a> </p>
                                    </div>
                                    <h4>{items.heading}</h4>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </S.Ecosystem>


        </S.ContainerMeviEcosystem>
    )
}

export default MeviEcosystem