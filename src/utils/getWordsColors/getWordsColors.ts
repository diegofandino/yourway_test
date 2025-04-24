import { colorStrings } from "../../constants/color-constants-strings";

type TargetTextArray = {
  text: string;
  color: string;
};

export const getWordStatusArray = (
  targetText: string,
  inputText: string
): TargetTextArray[] => {
  const wordSplit = targetText.trim().split(" ");
  const inputSplit = inputText.trim().split(" ").filter(Boolean);

  return wordSplit.map((word, index) => {
    const inputWord = inputSplit[index];

    if (inputWord === undefined) {
      return { text: word, color: colorStrings.TRANSPARENT  };
    }

    if (word === inputWord) {
      return { text: word, color: colorStrings.CORRECT };
    }
    if (word !== inputWord) {
      return { text: word, color: colorStrings.INCORRECT };
    }

    return { text: word, color: colorStrings.TRANSPARENT };
  });
};
