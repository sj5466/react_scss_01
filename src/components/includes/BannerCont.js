import React from 'react'
const BannerInfor=[
    {
        title:"배너 영역",
        text1:"유튜버 웹보이",
        desc:"더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
        address:"youtube.com/c/Webstoryboy",
        text2:"배너 영역01",
        id:0
    }
]

function Info({title,text1,desc,address,text2}){
    return(
        <>
            <h2 className="ir_so">{title}</h2>
            <div className="banner__inner">
                <h3 className="banner__title">{text1}</h3>
                <p className="banner__desc">
                    {desc}
                    <a href="/">{address}</a>
                </p>
                <span className="banner__sub">{text2}</span>
            </div>
        </>
    )
}
function BannerCont() {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
        {BannerInfor.map((txt)=>(
                <Info 
                title={txt.title} 
                text1={txt.text1} 
                desc={txt.desc}  
                address={txt.address} 
                text2={txt.text2} 
                key={txt.title}
                />
            ))}
    </section>
  )
}

export default BannerCont