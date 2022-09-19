import React from 'react'
import * as S from './styled'
import education from '../../../assets/education.png'

function MeviEducation() {
    return (
        <S.ContainerMeviEducation id="mevieducation">
            <S.Education>
                <div className="mevi-education-img">
                    <img src={education} alt="" />
                </div>

                <div className="mevi-education">
                    <h3 className="mevi-education_heading">MEVI EDUCATION</h3>
                    <p className="mevi-education_introduce">
                        MEVI cung cấp các khóa học chất lượng cao từ chính những người nông dân và chuyên gia 
                        trên nhiều lĩnh vực nông nghiệp. Với mong muốn phát triển tiềm lực người nông dân Việt Nam và 
                        tiếp cận với nền nông nghiệp hiện đại, chất lượng cao.
                    </p>

                    <button className='discovery'>Khám phá</button>
                </div>


            </S.Education>

        </S.ContainerMeviEducation>
    )
}

export default MeviEducation