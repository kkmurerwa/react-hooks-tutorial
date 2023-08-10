import React, { useEffect, useState } from "react";
import ImageToggleOnScroll from "../src/image-toggle-on-scroll";

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);

  useEffect(() => {
    window.document.title = `Id: ${currentSpeakerId}`;
  }, [currentSpeakerId]); // Setting this parameter ensures useEffect is only called when it changes

  return (
    <div>
      <span>mouseEventCount: {mouseEventCount}</span>
      {[1124, 187, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setMouseEventCount(mouseEventCount + 1);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
