import React, { useState } from "react";

export const useWPM = (text: string, startTime: number, finalWord: boolean) => {
  const [wpm, setWpm] = React.useState(0);
  const [typedWordsFinal, settypedWordsFinal] = useState(0)

  React.useEffect(() => {

    if(finalWord){
        console.log('starttime', startTime)
        console.log('final ', Date.now())
        const timeElapsed = (Date.now() - startTime) / 60000;
        if( timeElapsed <= 0)  return;
        const wordsTyped = text.trim().split(" ").length;
        settypedWordsFinal (wordsTyped);
        const wpmValue = Math.round(wordsTyped / timeElapsed);
        setWpm(wpmValue);
    } else {
        setWpm(0);
        settypedWordsFinal(0);
    }
  }, [finalWord, startTime, text])

  return {wpm, typedWordsFinal};
}