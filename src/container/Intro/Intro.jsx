import React, { useRef, useState } from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from '../../constants';
const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef() //using useref to take the raference of the video dom element whose .current property we can manepulate later on
  const overlayRef = useRef()
  const playButtonRef = useRef()

  const handleVideo = () =>{
    setPlayVideo(!playVideo)
    console.log(playVideo);
    if(playVideo){
      videoRef.current.pause()

    }else{
      videoRef.current.play()
    }
  }

  return(
  <div className='app__video' 
  onMouseEnter={()=>{
    overlayRef.current.classList.add("app__video-overlay")
    playButtonRef.current.classList.add("flex__center")
  }}
  onMouseLeave={()=>{
    overlayRef.current.classList.remove("app__video-overlay")
    playButtonRef.current.classList.remove("flex__center")  
  }}
  >
    
    <video 
    src={meal}
    loop
    controls={false}
    muted
    ref={videoRef}
    />

    <div class="flex__center" id='overlay' ref={overlayRef}
    >
      <div class="app__video-overlay_circle hidden"
      ref={playButtonRef}
      onClick={handleVideo}
    >
      {playVideo 
      ? <BsPauseFill color='#fff' fontSize={30} /> 
      
      : <BsFillPlayFill color='#fff' fontSize={30} /> }
      </div>
    </div>

  </div>
  )

}

export default Intro;
