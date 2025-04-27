import React from 'react';
import './index.css';

// Import images
import sichImage from './images/sich.png';
import threeImage from './images/3.png';
import sixImage from './images/6.png';
import candyImage from './images/candy.png';

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
                <h2 className="autoShow">关于我们</h2>
            </section>

            <section className="grid grid-2">
                <div className="autoShow">
                    <figure>
                        <img src={sixImage} alt="Six Image" />
                    </figure>

                    
                    <p>
                        🌸 北京遇见花开 · 民宿介绍
                        在喧嚣的都市中，遇见一处静谧如花的角落 —— 这就是 北京遇见花开民宿。<br/>
                        坐落于京郊自然风光秀丽之地，民宿融合了现代与自然的设计理念，打造出一个温馨、浪漫又充满生活美学的居住空间。无论是情侣出游，闺蜜聚会，还是家庭度假，这里都能为你带来如诗如画的惬意时光。 <br />
                    </p>
                </div>
                <div className="autoShow">
                    🌸 北京遇见花开 · 民宿介绍 <br/>
                    在喧嚣的都市中，遇见一处静谧如花的角落,这就是 北京遇见花开民宿。<br/>
                    坐落于京郊自然风光秀丽之地，民宿融合了现代与自然的设计理念，<br/>打造出一个温馨、浪漫又充满生活美学的居住空间。无论是情侣出游，闺蜜聚会，还是家庭度假，这里都能为你带来如诗如画的惬意时光。
                </div>

                <div className="autoShow">
                    <figure>
                        <img src={candyImage} alt="Candy Image" />
                    </figure>
                </div>
            </section>

            <section className="grid grid-3">
                <div className="autoBLur">与你的不期而遇</div>
                <div className="autoBLur">与你的</div>
                <div className="autoBLur">与你的不期而遇</div>
                <div className="autoBLur">与你的不 +</div>
                <div className="autoBLur"><p className="note-text">了解更多&#8600;</p> </div>
            </section>
        </main>
    );
}

export default Title;
