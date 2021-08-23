import React from 'react'
import HeartComponent from "../mainComponents/HeartComponent";
import layoutList from './ALayoutList'
import audio from './9.mp3'

function A9({switchToNext}) {

    const [currentTime,setCurrentTime] = React.useState(0)
    const [type,setType] = React.useState('')
    const [text,setText] = React.useState('')
    const [content,setContent] = React.useState([])
    const [isRunning,setIsRunning] = React.useState(true)
    const [intervalId,setIntervalId] = React.useState(null)
    const audioRef = React.useRef();
    const [yesButtonIsShowing,setYesButtonIsShowing] = React.useState(false)

    const processClick = (id)=>{
        setYesButtonIsShowing(false)
        audioRef.current.play()

    }
    const handleTimeUpdate = ()=>{
        let a = Math.trunc(audioRef.current.currentTime)
        if(a===38){
            if ( audioRef.current.currentTime > 38.25) {
                if(38.50 > audioRef.current.currentTime){
                    audioRef.current.pause()
                    switchToNext(10)
                }
            }
        }
        else {
            if (layoutList[a] !== undefined){
                setType(layoutList[a].type)
                setText(layoutList[a].text)
                setContent(layoutList[a].content)
            }
        }
    }


    React.useEffect(()=>{
        audioRef.current.play()
        const el = audioRef.current
        el.addEventListener("timeupdate",handleTimeUpdate)
        return () => {
            el.removeEventListener("timeupdate", handleTimeUpdate);
        };
    },[])


    return (
        <div className={'AContainer'}>


            <HeartComponent type={type} text={text} content={content} />

            {yesButtonIsShowing ? <>
                <div onClick={()=>{ processClick(1)}} className={'yesButton'}>
                    Да
                </div>
                <div className={'underYesButton'}>
                    Нажмите на кнопку, чтобы ответить
                </div>
            </> : null}

            <audio ref={audioRef}>
                <source src={audio} type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default A9;
