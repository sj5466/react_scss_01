import React from 'react'

const imageInfor1=[
    {
        title:"포트폴리오가 실력이다.",
        desc:"이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.",
        id:0
    }
]

function Info1({title,desc}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}
            </p>
        </>
    )
}

const imageInfor2=[
    {
        image:"img/image_bg01.jpg",
        title:"애교만점 웰시코기",
        desc1:"제목은 넥슨 풋볼 고딕 폰트입니다.",
        desc2:"설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
        text:"자세히 보기",
        id:1
    },
    {
        image:"img/image_bg02.jpg",
        title:"코카스 파니엘",
        desc1:"제목은 넥슨 풋볼 고딕 폰트입니다..",
        desc2:"설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
        text:"자세히 보기",
        id:2
    }
]
function Info2({image,title,desc1,desc2,text}){
    return(
        <>
            <article className="image">
                <div className="image__header">
                    <figure className="image__figure">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="image__body">
                    <h3 className="image__title">{title}</h3>
                    <p className="image__desc">
                        {desc1}
                        <br/>
                        {desc2}
                    </p>
                    <a href="/" className="image__btn yellow">
                        {text}
                    </a>
                </div>
            </article>
        </>
    )
}

function ImageCont() {
  return (
    <section id="imageType"  className="card__wrap section nexon">
        {imageInfor1.map((txt)=>(
            <Info1
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="image__inner container">
            {imageInfor2.map((txt)=>(
                <Info2
                image={txt.image} 
                title={txt.title} 
                desc1={txt.desc1} 
                desc2={txt.desc2} 
                text={txt.text} 
                key={txt.id}
                />
            ))}
        </div>
    </section>
  )
}

export default ImageCont