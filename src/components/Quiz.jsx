import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
  const [usersAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = usersAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUsersAnswers((prevUsersAnswers) => [
        ...prevUsersAnswers,
        selectedAnswer,
      ]);
    }, [],
  );

  const handleSkippedAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return <Summary userAnswers={usersAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkippedAnswer}
      />
    </div>
  );
}
