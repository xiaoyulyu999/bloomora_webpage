import React from "react";
import "./index.css";

import slider2_1 from "./images/slider2_1.gif";
import slider2_2 from "./images/slider2_2.gif";
import slider2_3 from "./images/slider2_3.gif";
import slider2_4 from "./images/slider2_4.gif";
import slider2_5 from "./images/slider2_5.gif";

const feedbacks = [
    {
        avatar: slider2_1,
        rating: 5,
        location: "China",
        comment: "亲子出游的好地方，北京平谷区的遇涧花开民宿绝对是个不错的选择！这里地理位置优越，交通方便，离京东大溶洞只有一步之遥。房间装修温馨，设施齐全，还有儿童滑梯、秋千和帐篷等专为孩子们准备的玩乐设施。孩子们在这里玩得开心，妈妈们也能尽情放松！民宿提供高清设备，我们可以一起看电影，享受家庭时光。周边还有大溶洞、石林峡、天云山等景点，让我们的周末充满了乐趣。入住遇涧花开民宿，带孩子一起住，真是美好的回忆！🌸🏞️👨‍👩‍👧💖",
    },
    {
        avatar: slider2_2,
        rating: 5,
        location: "Dublin, Ireland",
        comment: "Perfect holiday home! Super clean, cozy fireplace, and the view was unreal. Can’t wait to book again.",
    },
    {
        avatar: slider2_3,
        rating: 5,
        location: "Tokyo, Japan",
        comment: "素晴らしい滞在でした！家は清潔で、キッチン設備も充実していて快適でした。また利用したいです。",
    },
    {
        avatar: slider2_4,
        rating: 5,
        location: "China",
        comment: "带娃出游必住！北京平谷区超赞亲子民宿，让孩子玩得开心！😍\n" +
            "周末带着孩子来到北京平谷区的遇涧花开民宿，简直是个超赞的选择！地理位置极佳，交通便利，周边就有京东大溶洞等景点，开车15分钟即可到达。房间干净整洁，欧式风格装修，让人倍感舒适。😌\n" +
            "民宿不仅提供了宽敞舒适的房屋类型，更是为孩子们准备了丰富的娱乐设施！益智玩具、积木拼插让孩子们玩得不亦乐乎，儿童秋千、帐篷和滑梯更是为他们打造了一个小小的乐园。这里真的是孩子们的天堂！[礼花]",
    },
    {
        avatar: slider2_5,
        rating: 5,
        location: "San Francisco, USA",
        comment: "The holiday house had everything—big backyard, full kitchen, comfy beds. Ideal for our family trip!",
    },
];


const getStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

const Reviews = () => {
    return (
        <main>
            <section className="grid-3">
                <p className="note-text" style={{ color: "#f1683a" }}>&#8600;顾客反馈</p>
            </section>

            <div
                className="slider"
                reverse="true"
                style={{ "--width": "300px", "--height": "350px", "--quantity": feedbacks.length }}
            >
                <div className="list">
                    {feedbacks.map((item, index) => (
                        <div className="item" style={{ "--position": index + 1 }} key={index}>
                            <div className="review-card">
                                <img src={item.avatar} alt="avatar" className="avatar" />
                                <div className="rating">{getStars(item.rating)}</div>
                                <div className="location">{item.location}</div>
                                <div className="feedback">{item.comment}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Reviews;
