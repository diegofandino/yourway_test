import React from "react";

export const useAccuracy = (correctWords: number, typedWords: number) => {
  const [accuracy, setAccuracy] = React.useState(0);

  React.useEffect(() => {
    if (typedWords === 0) {
      setAccuracy(0);
    } else {
      const accuracyValue = Math.round((correctWords / typedWords) * 100);
      setAccuracy(accuracyValue);
    }
  }, [correctWords, typedWords]);

  return accuracy;
};
