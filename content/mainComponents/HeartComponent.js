import React from "react";
import './caseChart.css'
import './caseTable.css'
import './table.css'
import './headlineAndTopics.css'
import './subtitleGenerating.css';


function HeartComponent ({type,text,content}) {

    const [currentStyle,setCurrentStyle] = React.useState({})
    const [textIsShowing,setTextIsShowing] = React.useState(true)

    React.useEffect(()=>{
        if (type === "caseChartCoordinatesDotX"){
            setTextIsShowing(false)
        } else if (type === "caseChartCoordinatesDotX2"){
            setCurrentStyle({...currentStyle,left: text+"px" })
            setTextIsShowing(false)
        } else if (type === "caseChartCoordinatesDotXText"){

        } else if (type === "caseChartCoordinatesDotX2Text"){
        } else if (type === "caseChartCoordinatesDotY"){

        } else if (type === "caseChartCoordinatesDotY2"){
            setCurrentStyle({...currentStyle,bottom: text+"px" })
            setTextIsShowing(false)
        } else if (type === "caseChartCoordinatesDotY3"){
            setCurrentStyle({...currentStyle,bottom: text+"px" })
            setTextIsShowing(false)
        } else if(type === "caseChartLine1"){
            let a = text.split("/")
            let rotate = a[0]
            let length = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,transform: "rotate(-"+rotate+"deg)" }))
            setCurrentStyle(currentStyle=>({...currentStyle,maxWidth: length+"px" }))

        } else if(type === "caseChartLine2"){
            let a = text.split("/")
            let rotate = a[0]
            let length = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,transform: "rotate(-"+rotate+"deg)" }))
            setCurrentStyle(currentStyle=>({...currentStyle,maxWidth: length+"px" }))
        } else if (type === "differenceLeft"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,height: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "differenceRight"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,height: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "differenceLeftSquare"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,height: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "differenceRightSquare"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,height: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "caseChartCoordinatesDotSecondY2"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,left: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "caseChartCoordinatesDotSecondY3"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,left: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "caseChartCoordinatesSecondY2"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,left: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,height: b+"px" }))
        } else if (type === "caseChartCoordinatesSecondY2Horizontal"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,width: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        } else if (type === "caseChartCoordinatesSecondY3Horizontal"){
            let a = text.split("/")
            let h = a[0]
            let b = a[1]
            setTextIsShowing(false)
            setCurrentStyle(currentStyle=>({...currentStyle,width: h+"px" }))
            setCurrentStyle(currentStyle=>({...currentStyle,bottom: b+"px" }))
        }

    },[])


    return (
        <div style={currentStyle} className={type}>
            {textIsShowing ? text : null}
            {content.map((el)=>{
                return <HeartComponent type={el.type} text={el.text} content={el.content} />
            })}
        </div>
    )
}

export default HeartComponent