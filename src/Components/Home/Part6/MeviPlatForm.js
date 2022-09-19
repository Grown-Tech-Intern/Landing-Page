import React from 'react'
import * as S from './styled'
import meviPlatFormLogo from '../../../assets/meviPlatFormLogo.png'

function MeviPlatForm() {
    return (
        <S.ContainerPlatForm id="meviplatform">
            <S.PlatForm>
                <div className="mevi-platform_img">
                    <img src={meviPlatFormLogo} alt="" />
                </div>

                <div className="mevi-platform">
                    <h3 className="mevi-platform_heading">MEVI PLATFORM</h3>
                    <p className="mevi-platform_introduce">
                        Hệ thống lưu trữ và truy suất thông tin nông sản.
                        Giúp người dùng an tâm mua sắm. Cũng như thúc đẩy tiêu dùng sản phẩm nông nghiệp.
                    </p>
                </div>

            </S.PlatForm>
        </S.ContainerPlatForm>
    )
}

export default MeviPlatForm