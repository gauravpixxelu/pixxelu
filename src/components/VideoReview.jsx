import React, { useState } from 'react';
import Steve from "../assets/video/steve.mp4";
import V4 from '../assets/images/v4.jpg';
import Dirk from "../assets/video/dirk.mp4";
import V3 from '../assets/images/v3.jpg';
import Jon from "../assets/video/jon.mp4";
import V2 from '../assets/images/v2.jpg';
import Sonal from "../assets/video/sonal.mp4";
import V1 from '../assets/images/v1.jpg';
import Saw from "../assets/video/saw.mp4";
import V5 from '../assets/images/v5.jpg';
import Play from '../assets/icons/play-dark.svg';
import Pause from '../assets/icons/pause-dark.svg';

const VideoReview = () => {
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
    const [isPlaying4, setIsPlaying4] = useState(false);
    const [isPlaying5, setIsPlaying5] = useState(false);

    const handleTogglePlay1 = () => {
        setIsPlaying1(!isPlaying1);
        setIsPlaying2(false);
        setIsPlaying3(false);
        setIsPlaying4(false);
        setIsPlaying5(false);
    };

    const handleTogglePlay2 = () => {
        setIsPlaying1(false);
        setIsPlaying2(!isPlaying2);
        setIsPlaying3(false);
        setIsPlaying4(false);
        setIsPlaying5(false);
    };

    const handleTogglePlay3 = () => {
        setIsPlaying1(false);
        setIsPlaying2(false);
        setIsPlaying3(!isPlaying3);
        setIsPlaying4(false);
        setIsPlaying5(false);
    };

    const handleTogglePlay4 = () => {
        setIsPlaying1(false);
        setIsPlaying2(false);
        setIsPlaying3(false);
        setIsPlaying4(!isPlaying4);
        setIsPlaying5(false);
    };

    const handleTogglePlay5 = () => {
        setIsPlaying1(false);
        setIsPlaying2(false);
        setIsPlaying3(false);
        setIsPlaying4(false);
        setIsPlaying5(!isPlaying5);
    };

    return (
        <div className="videos-block">
            <div className="videos-box">
                {!isPlaying1 ? (
                    <div>
                        <img src={V4} alt="V4" />

                        <button className="videos-btn" onClick={handleTogglePlay1}>
                            <img src={Play} alt="Play" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <video
                            width="230"
                            height="380"
                            autoPlay
                            onEnded={() => setIsPlaying1(false)}
                        >
                            <source src={Steve} type="video/mp4" />
                        </video>

                        <button className="videos-btn" onClick={handleTogglePlay1}>
                            <img src={Pause} alt="Pause" />
                        </button>

                    </div>
                )}
                <div className="video-txt">
                    <p className="video-name">Steve Sutton</p>
                    <p className="video-spec">Red3sixty, Founder. South Africa</p>
                </div>
            </div>

            <div className="videos-box">
                {!isPlaying2 ? (
                    <div>
                        <img src={V3} alt="V3" />
                        <button className="videos-btn" onClick={handleTogglePlay2}>
                            <img src={Play} alt="Play" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <video
                            width="230"
                            height="380"
                            autoPlay
                            onEnded={() => setIsPlaying2(false)}
                        >
                            <source src={Dirk} type="video/mp4" />
                        </video>
                        <button className="videos-btn" onClick={handleTogglePlay2}>
                            <img src={Pause} alt="Pause" />
                        </button>
                    </div>
                )}
                <div className="video-txt">
                    <p className="video-name">Dirk Zarb Cousin</p>
                    <p className="video-spec">Drivingwest, Founder. Australia</p>
                </div>
            </div>

            <div className="videos-box">
                {!isPlaying3 ? (
                    <div>
                        <img src={V2} alt="V2" />
                        <button className="videos-btn" onClick={handleTogglePlay3}>
                            <img src={Play} alt="Play" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <video
                            width="230"
                            height="380"
                            autoPlay
                            onEnded={() => setIsPlaying3(false)}
                        >
                            <source src={Jon} type="video/mp4" />
                        </video>
                        <button className="videos-btn" onClick={handleTogglePlay3}>
                            <img src={Pause} alt="Pause" />
                        </button>
                    </div>
                )}
                <div className="video-txt">
                    <p className="video-name">Richie B</p>
                    <p className="video-spec">Billionmedia, Marketing Director. UK</p>
                </div>
            </div>

            <div className="videos-box">
                {!isPlaying4 ? (
                    <div>
                        <img src={V1} alt="V1" />
                        <button className="videos-btn" onClick={handleTogglePlay4}>
                            <img src={Play} alt="Play" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <video
                            width="230"
                            height="380"
                            autoPlay
                            onEnded={() => setIsPlaying4(false)}
                        >
                            <source src={Sonal} type="video/mp4" />
                        </video>
                        <button className="videos-btn" onClick={handleTogglePlay4}>
                            <img src={Pause} alt="Pause" />
                        </button>
                    </div>
                )}
                <div className="video-txt">
                    <p className="video-name">Sonal</p>
                    <p className="video-spec">Doonawash,Green Earth Laundry, SleepyJoey. Founder. Australia</p>
                </div>
            </div>

            <div className="videos-box">
                {!isPlaying5 ? (
                    <div>
                        <img src={V5} alt="V5" />
                        <button className="videos-btn" onClick={handleTogglePlay5}>
                            <img src={Play} alt="Play" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <video
                            width="230"
                            height="380"
                            autoPlay
                            onEnded={() => setIsPlaying5(false)}
                        >
                            <source src={Saw} type="video/mp4" />
                        </video>
                        <button className="videos-btn" onClick={handleTogglePlay5}>
                            <img src={Pause} alt="Pause" />
                        </button>
                    </div>
                )}
                <div className="video-txt">
                    <p className="video-name">Jason Day</p>
                    <p className="video-spec">sourcing5 company limited .China</p>
                </div>
            </div>
        </div>
    );
};

export default VideoReview;
