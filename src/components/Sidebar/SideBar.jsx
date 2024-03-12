import React, { useContext, useState } from 'react';
import "./sidebar.css";
import { assets } from '../../assets/assets';
import { context } from '../context/Context';

const SideBar = () => {
    const [open, setOpen] = useState(true)
    const { onSend, prevPrompt, setRecentPrompt, newChat } = useContext(context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt) // Corrected typo here
        await onSend(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setOpen((prev) => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div className="new_chat" onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt='' />
                    {open ? <p>New Chat</p> : null}
                </div>
                {open ?
                    <div className="recent">
                        <p className='recent_title'>Recent</p>
                        {prevPrompt?.map((item, index) => (
                            <div onClick={() => loadPrompt(item)} className="recent_entry" key={index}>
                                <img src={assets?.message_icon} alt='' />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom_item recent_entry">
                    <img src={assets?.question_icon} alt='' />
                    {open ? <p className=''>Help </p> : null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets?.history_icon} alt='' />
                    {open ? <p className=''>Activity </p> : null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets?.setting_icon} alt='' />
                    {open ? <p className=''>Settings </p> : null}
                </div>
            </div>
        </div>
    )
}

export default SideBar
