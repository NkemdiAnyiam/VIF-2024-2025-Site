import React, { useState, useEffect, useRef } from 'react';

type VideoBoxProps = {
  title: string;
  embedSrc: string;
  url: string;
}

export function VideoBox(props: VideoBoxProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const spinnerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const spinnerEl = spinnerRef.current;
    if (!spinnerEl) { throw new Error('spinnerRef.current is null'); }

    const animation = new Animation(
      new KeyframeEffect(
        spinnerEl,
        [
          { rotate: `z 360deg` },
        ],
        {
          iterations: Infinity,
          duration: 2000,
        }
      )
    );
    animation.play();

    return () => {
      animation.cancel();
    };
  }, []);

  const onLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    setLoaded(true);
  }

  return (
    <div className={`video-box${!loaded ? ' video-box--loading' : ''}`}>
      {
        !loaded &&
        <div className="video-box__loading-notification">
          <span ref={spinnerRef} className="spinner"></span>
          <p className="video-box__loading-text">
            Loading <a className="video-box__link" href={props.url} target="_blank" rel="noreferrer">{props.title}</a>
          </p>
        </div>
      }

      <div className={`video-box__video-container${!loaded ? ' video-box__video-container--loading' : ''}`}>
        <iframe
          ref={iframeRef}
          className={`video-box__video${!loaded ? ' video-box__video--loading' : ''}`}
          title={props.title}
          allowFullScreen
          onLoad={onLoad}
          src={props.embedSrc}
        >
        </iframe>
        <p className="video-box__caption">{props.title}</p>
      </div>
    </div>
  );
}
