import './subtitleGenerating.css';
import React from 'react'


function SubtitleAndInteractiveComponent({currentSubtitles}) {


    return (
        <div className={'onlyText'}>
            <div className={"onlyTextContainer"}>
                {currentSubtitles}
            </div>
            <div className={'yesButton'}>
                Да
            </div>
            <div className={'underYesButton'}>
                Нажмите на кнопку, чтобы ответить
            </div>
        </div>
    );
}

export default SubtitleAndInteractiveComponent;
