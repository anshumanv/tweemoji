import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import ReactSimpleTooltip from 'react-simple-tooltip'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import './App.scss';

function App() {
  const [emoji, setEmoji] = useState('👏')
  const [text, setText] = useState('')

  const formattedText = text.split(' ').join(emoji ? emoji : ' ')
  return (
    <div className="App">
      <div className="left">
        <Picker title='Pick your emoji…' emoji='point_up' onSelect={(e) => setEmoji(e.native)} set='twitter' />
        <div className="current">
          Current Emoji: { emoji ? emoji : ''}
        </div>
      </div>
      <div className="right">
        <textarea placeholder="Type a sentence" type="text" onChange={e => setText(e.target.value)} value={text}/>
        <div className="res">{formattedText}</div>
        <ReactSimpleTooltip
          arrow={15}
          background="#000"
          border="#000"
          color="#fff"
          content="Tweet it!"
          fadeDuration={0}
          fadeEasing="linear"
          fixed={false}
          fontFamily="inherit"
          fontSize="inherit"
          offset={0}
          padding={16}
          placement="left"
          radius={0}
          zIndex={1}
        >
          <TwitterShareButton className="tweet" url={"https://tweemoji.netlify.com"} title={formattedText}>
            <TwitterIcon size={64} round />
          </TwitterShareButton>
        </ReactSimpleTooltip>
      </div>
    </div>
  );
}

export default App;
