import React from 'react'
import audio from './0.mp3'
import './A0.css'
import '../mainComponents/subtitleGenerating.css'


function A0({switchToNext}) {

    const [readyButtonIsShowing,setReadyButtonIsShowing] = React.useState(true)
    const audioRef = React.useRef();

    const processFirstClick = (id)=>{
        switchToNext(9)

        // let url = 'http://a-arsenev.ru/?chatId=' + 'id1' + "&company="+companyName
        // switchToNext(8)
    }

    return (
        <div className={'AContainer'}>


            {readyButtonIsShowing ? <>
            <div className={'overVideoBlock'}>
                <div className={'onlyText2'}>
                    <div className={'onlyTextContainer2'}>
                        Видео будет со звуком <br/><br/>
                        Включите звук на компьютере либо наденьте наушники
                        и нажмите на кнопку "Готово" когда будете готовы
                    </div>
                </div>
                <div onClick={()=>{ processFirstClick(1)}} className={'yesButton'}>
                    Готово
                </div>
                <div className={'underYesButton'}>
                    Нажмите на кнопку, чтобы начать
                </div>
            </div>
            </> : null}

        </div>
    )
}

export default A0;
