import React, { useRef, useState } from 'react';
import { webimator } from 'webimator';

export type QuestionBoxProps = {
  qNum: number;
  question: string;
  children: JSX.Element;
  color: 'red' | 'yellow' | 'green' | 'purple';
}

const {Entrance, Exit} = webimator.createAnimationClipFactories();

export function QuestionBox(props: QuestionBoxProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [awaitingChange, setAwaitingChange] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownClick = () => {
    if (awaitingChange) { return; }
    setAwaitingChange(true);

    const element = contentRef.current;

    if (!expanded) {
      Entrance(element, '~slide-in', [], { duration: 100 }).play()
        .then(() => {
          setExpanded(true);
          setAwaitingChange(false);
        });
    }

    else {
      Exit(element, '~slide-out', [], { duration: 100 }).play()
        .then(() => {
          setExpanded(false);
          setAwaitingChange(false);
        });
    }
  };

  return (
    <div className={`question-box${props.color ? ` question-box--${props.color}` : ''}`}>
      <div className="question-box__header" onClick={() => handleDropdownClick()}>
        <h3 className="heading-tertiary question-box__question">{props.qNum}. {props.question}</h3>

        <div className="dropdown-marker-container">
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </div>
      </div>

      <div ref={contentRef} className="question-box__answer wbmtr-display-none">
        {props.children}
      </div>
    </div>
  );
}
