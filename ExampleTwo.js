import React from 'react'
import A0 from './content/A0/A0'
import A9 from './content/A9/A9'
import A10 from './content/A10/A10'
import A11 from './content/A11/A11'



function ExampleTwo() {
    const [playingTape,setPlayingTape] = React.useState(6)

    const switchToNext = (id)=>{
        setPlayingTape(id)
        // setPlayingTape(playingTape+1)
    }

    if (playingTape === 6) {
        return  <A0  switchToNext={switchToNext}/>
    }
    else if (playingTape === 9){
        return  <A9 switchToNext={switchToNext}/>
    }
    else if (playingTape === 10){
        return  <A10 switchToNext={switchToNext}/>
    }
    else if (playingTape === 11){
        return  <A11 switchToNext={switchToNext}/>
    }



}

export default ExampleTwo;
