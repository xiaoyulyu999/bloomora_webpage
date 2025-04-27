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
        location: "Shanghai, China",
        comment: "这间度假屋太舒适了，设施齐全，环境安静放松。感觉就像在自己家一样！非常推荐！",
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
        location: "Berlin, Germany",
        comment: "Lovely countryside retreat. Quiet nights, fresh air, and a hot tub under the stars. A real hidden gem!",
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
