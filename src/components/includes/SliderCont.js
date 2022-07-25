import { func } from 'prop-types'
import React from 'react'

const sldierInfor =[
    {
        text: "슬라이드 영역",
        id:0
    }
]
function Info({text}){
    return(
        <>
            <h2 className="ir_so">{text}</h2>
        </>
    )
}
const sliderInfor1=[
    {
        title:"DEVELOPER",
        text1:"NEW FRONTEND",
        desc1:"당신이 만들어갈 새로운 이야기",
        desc2:"당신도 할 수 있습니다.",
        text2:"자세히 보기",
        text3:"사이트 보기",
        id:1
    }
]
function Info1({title,text1,desc1,desc2,text2,text3}){
    return(
        <>
            <div className="desc">
                <span>{title}</span>
                <h3>{text1}</h3>
                <p>
                {desc1}
                <br /> {desc2}
                </p>
                <div className="btn">
                    <a href="/" className="white">
                        {text2}
                    </a>
                    <a href="/" className="black">
                        {text3}
                    </a>
                </div>
            </div>
        </>
    )
}
const sliderInfor2=[
    {
        text:"이전이미지",
        id:2
    }
]
function Info2({text}){
    return(
        <>
            <a href="/" className="left">
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
const sliderInfor3=[
    {
        text:"다음이미지",
        id:3
    }
]
function Info3({text}){
    return(
        <>
            <a href="/" className="right">
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
const sldierInfor4 =[
    {
        text:"1",
        id:4
    },
    {
        text: "2",
        id:5
    },
    {
        text: "3",
        id:6

    },
    {
        text: "4",
        id:7
    },
]
function Info4({text}){
    return(
        <>
            <a href="/" className="dot"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
const sldierInfor5 =[
    {
        text:"자동플레이",
        id:8
    },
]
function Info5({text}){
    return(
        <>
            <a href="/" className="play"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
const sldierInfor6 =[
    {
        text: "정지",
        id:9
    }
]
function Info6({text}){
    return(
        <>
            <a href="/" className="stop"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
function SliderCont(props) {
  return (
<section id="sliderType" className={`${props.fonts[0]} ${props.fonts[1]}`}>
    {sldierInfor.map((txt)=>(
        <Info text={txt.text} key={txt.text}/>
    ))}
    <div className="slider__inner">
        <div className="slider">
            <div className="slider__img">
                {sliderInfor1.map((txt)=>(
                    <Info1 
                    title={txt.title} 
                    text1={txt.text1} 
                    text2={txt.text2} 
                    text3={txt.text3} 
                    desc1={txt.desc1} 
                    desc2={txt.desc2}  
                    key={txt.title}
                    />
                ))}
            </div>
            <div className="slider__arrow">
                {sliderInfor2.map((txt)=>(
                    <Info2 text={txt.text} key={txt.text}/>
                ))}
                {sliderInfor3.map((txt)=>(
                    <Info3 text={txt.text} key={txt.text}/>
                ))}
                
            </div>
            <div className="slider__dot">
                {sldierInfor4.map((txt)=>(
                    <Info4 text={txt.text} key={txt.text}/>
                ))}
                {sldierInfor5.map((txt)=>(
                    <Info5 text={txt.text} key={txt.text}/>
                ))}
                {sldierInfor6.map((txt)=>(
                    <Info6 text={txt.text} key={txt.text}/>
                ))}
            </div>
        </div>
    </div>
</section>

  )
}

export default SliderCont