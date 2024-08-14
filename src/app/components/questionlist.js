import Question from "./question";

export default function QuestionList({ questions, onSelectQuestion }) {
  return (
    <div>
      <ul>
        {questions.map((question, index) => (
          <li key={question.id} onClick={() => onSelectQuestion(index)}>
            {question.question}
          </li>
        ))}
      </ul>
    </div>
  );
}
