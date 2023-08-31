import React from 'react';

type CommitteeBlockProps = {
  fullName: string;
  role: string;
  imgSrc: string;
  description: string;
  color: 'red' | 'green' | 'yellow' | 'purple';
};

export function CommitteeBlock(props: CommitteeBlockProps): JSX.Element {
  return (
    <div className={`committee-block`}>CommitteeBlock</div>
  );
}
