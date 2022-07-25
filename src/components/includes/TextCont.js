import React from 'react'

const textInfor1=[
    {
        title:"코딩과 관련된 직업",
        desc:"너무 무리하지 말아요! 이미 당신은 해내고 있고 앞으로도 잘 할 수 있을거예요!",
        id:1
    }
]

function Info1({title,desc}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}{" "}
            </p>
        </>
    )
}

const textInfor2=[
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:2
    },
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:3
    },
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:4
    },
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:5
    },
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:6
    },
    {
        title:"웹 디자인",
        desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
        id:7
    },
]

function Info2({title,desc}){
    return(
        <div className="text">
            <h3>{title}</h3>
            <p>
            {desc}
            </p>
        </div>
    )
}

function TextCont() {
  return (
    <section id="textType" className="text__wrap section nexon">
        {textInfor1.map((txt)=>(
            <Info1 
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="text__inner container">
            {textInfor2.map((txt)=>(
                <Info2 
                title={txt.title} 
                desc={txt.desc} 
                key={txt.id}
                />
            ))}
        </div>
    </section>
  )
}

export default TextCont