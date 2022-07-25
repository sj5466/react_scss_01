import React from 'react'
const imgTextInfor=[
    {
        text:"이미지/텍스트 유형",
        title:"유용한 사이트 살펴보기",
        desc:"사이트 제작에 있어 이미지와 텍스트를 혼합해서 사용하는 경우가많다. 기본 레이아웃은 동일하기 때문에 이미지나 배치에 따라서 느낌은 얼마든지 다르게 표현할 수 있다. Gmarket Sans 50px, Medium NEXON Lv1 Gothic 18px (153%)",
        btn:"더 많은 유형 살펴보기",
        id:0
    }
]
function Info(){
    <section id="imgTextType" className="imgText__wrap section nexon gray">
        <h2 className="ir_so">이미지 텍스트 영역</h2>
        <div className="imgText__inner container">
        <div className="txt">
            <span className="small">{imgTextInfor[0].text}</span>
            <h3 className="title">
            {imgTextInfor[0].title}
            </h3>
            <p className="desc">
            {imgTextInfor[0].desc}
            </p>
            <a href="/" className="btn">
            {imgTextInfor[0].btn}
            </a>
        </div>
        <div className="img bg1"></div>
        <div className="img bg2"></div>
        </div>
    </section>
}
function ImgTextCont() {
  return (
    <>
        {imgTextInfor.map((txt)=>(
            <Info
            title={txt.title}
            text={txt.text}
            desc={txt.desc}
            btn={txt.btn}
            key={txt.title}
            />
        ))}
    </>
  )
}

export default ImgTextCont