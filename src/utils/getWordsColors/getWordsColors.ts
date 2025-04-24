type TargetTextArray = {
	text: string;
	color: string;
  };
  
  export const getWordStatusArray = (
	targetText: string,
	inputText: string
  ): TargetTextArray[] => {

	const wordSplit = targetText.trim().split(" ");
	const inputSplit = inputText.trim().split(" ");
	const isTypingLastWord = inputText.length > 0 && !inputText.endsWith(" ");
  
	return wordSplit.map((word, index) => {
	  const inputWord = inputSplit[index];
	  if (inputWord === undefined) {
		return { text: word, color: "black" };
	  }
	  if (word === inputWord) {
		return { text: word, color: "correct-color" };
	  }
	  if (isTypingLastWord && index === inputSplit.length - 1) {
		return { text: word, color: "active-color" };
	  }

	  return { text: word, color: "black" };
	});
  };
  