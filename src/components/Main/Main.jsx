import React, { useContext } from 'react'
import "./main.css";
import { assets } from '../../assets/assets';
import { context } from '../context/Context';

const Main = () => {

    const { onSend, recentPrompt, loading, showResult, resultData, setInput, input } = useContext(context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini </p>
                <img src={assets?.user_icon} alt='' />
            </div>


            <div className="main_container">
                {!showResult ?

                    <>
                        <div className="greet">
                            <p><span>Hello, Karthikeyan</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest the new places in the world</p>
                                <img src={assets.compass_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Brielfy Summarize the concept: urban planning</p>
                                <img src={assets.bulb_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>brain strom team summarizing the object</p>
                                <img src={assets.message_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Improve the Readablity of following code</p>
                                <img src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                    :

                    <div className='result'>
                        <div className="result_title">
                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result_data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }


                <div className="main_bottom">
                    <div className="search_box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a Promt here' />
                        <div>
                            <img src={assets?.gallery_icon} alt='' />
                            <img src={assets?.mic_icon} alt='' />
                            {input ? <img onClick={() => onSend()} src={assets?.send_icon} alt='' /> : null}
                        </div>
                    </div>
                    <p className='bottom_info'>
                        Gemini may display inaccurate info, including about people, so doblue-check its responses
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main