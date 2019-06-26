import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import './App.css';

function App() {
  const [emoji, setEmoji] = useState('👏')
  const [text, setText] = useState('')

  const formattedText = text.split(' ').join(emoji ? emoji : ' ')
  return (
    <div className="App">
      <Picker title='Pick your emoji…' emoji='point_up' onSelect={(e) => setEmoji(e.native)} set='twitter' />
      <div>
        Current Emoji - { emoji ? emoji : ''}
      </div>
      <input type="text" onChange={e => setText(e.target.value)} value={text}/>
      <div>{formattedText}</div>
      <TwitterShareButton url={true} title={formattedText}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}

export default App;
