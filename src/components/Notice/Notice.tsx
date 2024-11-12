import React from 'react';

type NoticeProps = {
  children: string;
}

export function Notice(props: NoticeProps): JSX.Element {
  return (
    <div className="notice">
      <div className="exclamation">!</div>
      <div className="message">
        {props.children}
      </div>
    </div>
  )
}
