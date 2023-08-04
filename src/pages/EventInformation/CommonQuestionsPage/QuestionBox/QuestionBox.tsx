import React from 'react';

type QuestionBoxProps = {
  qNum: number;
  question: string;
  children: JSX.Element;
  color: 'red' | 'yellow' | 'green' | 'purple';
}

export function QuestionBox(props: QuestionBoxProps): JSX.Element {
  return (
    <div className={`question-box${props.color ? ` question-box--${props.color}` : ''}`}>
      <div className="question-box__header">
        <h3 className="heading-tertiary question-box__question">{props.qNum}. {props.question}</h3>
      </div>
      <div className="question-box__answer">
        {props.children}
      </div>
    </div>
  );
}
