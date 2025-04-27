import React, {useEffect, useRef, useState} from 'react';
import "./index.css";

import img1 from './images/img1.jpg';
import img3 from './images/img3.jpg';
import img2 from './images/img2.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import inkGif from './images/ink_lv2.gif';

const History = () => {
    const wrapperRef = useRef();
    const [maskUrl, setMaskUrl] = useState(`url(${inkGif}?${Date.now()})`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // If the component is visible
                    setMaskUrl(`url(${inkGif}?${Date.now()})`);
                }
            },
            {
                threshold: 0.1, // Trigger when 30% is visible (you can adjust this)
            }
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        // Cleanup
        return () => {
            if (wrapperRef.current) {
                observer.unobserve(wrapperRef.current);
            }
        };
    }, []);

    return (
        <main>
            <div
                ref={wrapperRef}
                className="grid-wrapper"
                style={{
                    WebkitMaskImage: maskUrl,
                    maskImage: maskUrl,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center'
                }}>
                    {/* Top-left: container 1 */}
                    <div className="container top-left">
                        <div className="item"><img src={img3} alt="" /><p className="intro">This is an intro for the image</p></div>
                        <div className="item"><img src={img2} alt="" /><p className="intro">This is an intro for the image</p></div>
                    </div>
                    {/* Middle: contents */}
                    <div className="contents center">
                        <p className="head-text">祖</p>
                        <p style={{ color: "#eee" }}>
                            遇涧花开祖宅，是与岁月深处的一场温柔重逢。
                            斑驳的青砖墙下，藏着祖辈的故事；绽放的每一朵花，
                            都是时光的低语。那是根的归处，也是心灵的栖息。<br /><br />
                            而今，简约的木质家具与温润灯光相映成趣，
                            玻璃窗引入自然的光影，现代居家的舒适与温馨，
                            让这座老宅焕发出新的生命力，在静谧中融合过去与现在。
                        </p>
                        <p className="head-text">宅</p>
                    </div>
                    {/* Bottom-right: container 2 */}
                    <div className="container bottom-right">
                        <div className="item"><img src={img5} alt="" /><p className="intro">This is an intro for the image</p></div>
                        <div className="item"><img src={img6} alt="" /><p className="intro">This is an intro for the image</p></div>
                        <div className="item"><img src={img1} alt="" /><p className="intro">This is an intro for the image</p></div>
                    </div>
                </div>
        </main>
    );
}

export default History;
