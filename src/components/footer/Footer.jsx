import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaWeixin, FaWhatsapp } from 'react-icons/fa'
import { MdPersonPin } from "react-icons/md";
import "./index.css"
import ctrip from "./images/ctrip-icon.svg"
import instagram from "./images/instagram.svg"
import wechat from "./images/wechat.svg"
import whatsapp from "./images/whatsapp.svg"
import redbook from "./images/redbook.svg"


const Footer = () => {
    return (
        <div className="grid-wrapper-footer">
            <div className="left-column">
                <h1>联系我们</h1>
                <ul className="contact-list">
                    <li><FaMapMarkerAlt /> 地址：遇涧花开民宿 北京市平谷区北山路黑豆峪幼儿园西北侧约210米，靠近黑豆峪北环路。</li>
                    <li><FaEnvelope /> 邮箱: yujianhuakai@gmail.com</li>
                    <li><FaPhoneAlt /> 电话: 中文 +86 19888888</li>
                    <li><FaPhoneAlt /> 电话: English +353 0894625919</li>
                    <li><FaMapMarkerAlt /> 官方网址：www.yujianhuakai.com</li>
                </ul>
            </div>

            <div className="middle-column">
                <h1>社交媒体</h1>
                <ul className="contact-list">
                    <div className="social-icons">
                        <img src={wechat} alt="wechat" />
                        <img src={redbook} alt="redbook" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={instagram} alt="instagram" />
                        <img src={ctrip} alt="ctrip" />
                    </div>
                </ul>
            </div>

            <div className="right-column">
                <h1>位置</h1>
                <div className="map-container">
                    <div className="pin-button">
                        <MdPersonPin />
                    </div>
                    <iframe
                        title="Yujian Huakai Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.520597072616!2d117.2431!3d40.2063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f052c9c25f199f%3A0x805c2e0d3b0a96dc!2z5Lit5Zu95YyX5Lqs5YyF5rW35aCC!5e0!3m2!1szh-CN!2sie!4v1713700000000!5m2!1szh-CN!2sie&markers=40.2063,117.2431"
                        width="100%"
                        height="200"
                        style={{ width: "100%", height: "100%", border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer
