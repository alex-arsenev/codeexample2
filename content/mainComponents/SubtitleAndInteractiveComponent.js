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


// import './subtitleGenerating.css';
// import React from 'react'
//
//
// function SubtitleAndInteractiveComponent({currentSubtitles,marginBottom,actionPanelIsOpen}) {
//
//     const [currentStyle,setCurrentStyle] = React.useState({})
//     React.useEffect(()=>{
//         setCurrentStyle({...currentStyle,marginBottom: marginBottom+"vh" })
//         if (actionPanelIsOpen){
//             setCurrentClass("subtitleAndInteractiveContainer__actions subtitleAndInteractiveContainer__actions_toggled")
//         }
//     },[marginBottom,actionPanelIsOpen])
//     const [currentClass,setCurrentClass] = React.useState('subtitleAndInteractiveContainer__actions')
//
//     return (
//         <div className={'subtitleAndInteractiveContainer'}>
//             <div style={currentStyle} className={'subtitleAndInteractiveContainer__subtitles'}>
//                 <div className={'subtitleAndInteractiveContainer__subtitlesText'}>{currentSubtitles}</div>
//                 <div className="subtitleAndInteractiveContainer__actions_wrap">
//                     {actionPanelIsOpen ?
//                         <div className={currentClass} >
//                                 <div>aaaaaaaaaaaa</div>
//                         </div> : null}
//                 </div>
//             </div>
//
//         </div>
//     );
// }
//
// export default SubtitleAndInteractiveComponent;
