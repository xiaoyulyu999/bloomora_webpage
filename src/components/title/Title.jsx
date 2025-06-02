import React from 'react';
import './index.css';

// Import images
import sichImage from './images/sich.png';
import threeImage from './images/3.png';
import sixImage from './images/6.png';
import candyImage from './images/candy.png';
import quanjiafu from './images/quanjiafu.jpg';

const Title = () => {
    return (
        <main>
            <section className="grid grid-1">
                <figure>
                    <img src={sichImage} alt="Sich Image" />
                </figure>
                <figure>
                    <img src={threeImage} alt="Three Image" className="autoRotate" />
                </figure>
            </section>

            <section className="grid grid-2">
                <div className="autoShow">
                    <figure>
                        <img src={quanjiafu} alt="Six Image" style={{ maxWidth: '850%', height: 'auto' }}/>
                    </figure>
                    <p>
                        🌸 “遇涧花开”民宿创办人周维英家庭荣获2024年第二季度“首都最美家庭”称号。自1992年来到平谷黄松峪乡后
                        周维英以其专业精神成为大溶洞景区金牌讲解员，并与丈夫创办旅游服务点，积极推动家乡文旅发展。
                        夫妻二人以身作则，教育子女积极向上，生活朴素勤恳。近年来，他们开办民宿“遇涧花开”，
                        继续助力乡村振兴。该家庭以实际行动践行美德，展现新时代最美家庭风采。
                    </p>
                </div>
                <div className="autoShow">
                    <h1>关于我们</h1>
                    <p>
                    🌸 “遇涧花开”民宿地址位于北京市平谷区北山路黑豆峪幼儿园西北侧约210米，
                    靠近黑豆峪北环路，交通便利，多条公交线路可达。周边酒店选择丰富多样，
                    包括北京峪山居、北京醉忘阁四合院民宿、北京郁金香温泉花园度假村、
                    北京首农香山会议中心等，您可以通过我们的合作伙伴携程旅行轻松查询入住价格和房间信息，并在线预订。
                    </p>
                </div>

                <div className="autoShow">
                    <figure>
                        <img src={candyImage} alt="Candy Image" />
                    </figure>
                </div>
            </section>
            <section className="grid grid-3">
                <div className="autoBLur">感谢所有的遇见，</div>
                <div className="autoBLur">不管是痛苦</div>
                <div className="autoBLur">还是快乐;</div>
                <div className="autoBLur">感恩新时代，</div>
                <div className="autoBLur">就像寒冬过后阳光灿烂，</div>
                <div className="autoBLur">春暖花开! +</div>
                <div className="autoBLur"><p className="note-text">了解更多&#8600;</p> </div>
            </section>
        </main>
    );
}

export default Title;
