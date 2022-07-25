import React from 'react'

const cardInfor1=[
    {
        title:"웹스토리보이 강의",
        desc:"웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.",
        text:"Gmarket Sans Light 22px 150% #67778A",
        id:3
    }
]

function Info1({title,desc,text}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}
            <br />
            {text}
            </p>
        </>
    )
}

const cardInfor2 =[
    {
        image1:"img/card_bg01.jpg",
        alt1:"이미지1",
        title:"웹표준 사이트 만들기",
        desc:"사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
        text:"더 자세히 보기",
        image2:"img/Arrow.png",
        alt2:"화살표",
        id:0
    },
    {
        image1:"img/card_bg02.jpg",
        alt1:"이미지2",
        title:"웹표준 사이트 만들기",
        desc:"사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
        text:"더 자세히 보기",
        image2:"img/Arrow.png",
        alt2:"화살표",
        id:1
    },
    {
        image1:"img/card_bg03.jpg",
        alt1:"이미지3",
        title:"웹표준 사이트 만들기",
        desc:"사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
        text:"더 자세히 보기",
        image2:"img/Arrow.png",
        alt2:"화살표",
        id:2
    },
]
function Info2({image1,alt,title,desc,text,image2,alt2}){
    return(
        <>
            <article className="card">
                <figure className="card__header">
                <img
                    className="img"
                    src={image1}
                    alt={alt}
                />
                </figure>
                <div className="card__body">
                    <h3 className="title">{title}</h3>
                    <p className="desc">
                        {desc}
                    </p>
                    <a className="btn" href="/">
                        {text}
                        <img src={image2} alt={alt2}></img>
                    </a>
                </div>
            </article>
        </>
    )
}

function CardCont() {
  return (
    <section id="cardType" className="card__wrap section nexon">
        {cardInfor1.map((txt)=>(
            <Info1 
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="card__inner container">
            
        {cardInfor2.map((txt)=>(
            <Info2 
            image1={txt.image1} 
            alt1={txt.alt1} 
            title={txt.title} 
            desc={txt.desc} 
            alt2={txt.alt2} 
            image2={txt.image2} 
            key={txt.id}
            />
        ))}
        </div>
    </section>
  )
}

export default CardCont