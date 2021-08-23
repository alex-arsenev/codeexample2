import React from 'react'
import HeartComponent from "../mainComponents/HeartComponent";
import layoutList from './ALayoutList'
import audio from './11.mp3'

function A11({switchToNext}) {

    const [type,setType] = React.useState('')
    const [text,setText] = React.useState('')
    const [content,setContent] = React.useState([])
    const audioRef = React.useRef();
    const [yesButtonIsShowing,setYesButtonIsShowing] = React.useState(false)

    const processClick = (id)=>{
        setYesButtonIsShowing(false)
        audioRef.current.play()

    }

    const handleTimeUpdate = ()=>{
        let a = Math.trunc(audioRef.current.currentTime)
        if(a===47){
            if ( audioRef.current.currentTime > 47) {
                if(47.25 > audioRef.current.currentTime){
                    audioRef.current.pause()
                    switchToNext(12)
                }
            }
        }
        else if (a === 44){
            if ( audioRef.current.currentTime > 44.50) {
                if(44.75 > audioRef.current.currentTime){
                    audioRef.current.pause()
                    setYesButtonIsShowing(true)
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
                <div onClick={()=>{ processClick(9)}} className={'yesButton'}>
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

export default A11;
