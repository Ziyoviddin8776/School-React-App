import React from 'react';
import "./footer.scss"
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="box">
                    <div>
                        <div className="title">
                            Tashkilot haqida
                        </div>
                        <ul>
                            <li>
                                <Link>Biz haqimizda</Link>
                            </li>
                            <li>
                                <Link>Yangiliklar</Link>
                            </li>
                            <li>
                                <Link>Aloqa uchun ma'lumotlar</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="title">
                            Imkoniyatlar
                        </div>
                        <ul>
                            <li>
                                <Link>O'qituvchilarga</Link>
                            </li>
                            <li>
                                <Link>Ota-onalarga</Link>
                            </li>
                            <li>
                                <Link>O'quvchilarga</Link>
                            </li>
                            <li>
                                <Link>Davlat organlariga</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="title">
                             Hamkorlarga
                        </div>
                        <ul>
                            <li>
                                <Link>Reklama</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="title">
                            Tashkilot haqida
                        </div>
                        <ul>
                            <li>
                                <Link>Qo'llab quvvatlash xizmati portali</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;