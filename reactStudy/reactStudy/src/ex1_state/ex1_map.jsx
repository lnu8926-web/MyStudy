import { useState } from "react";

const likes = {
  게시글1: 20,
  게시글2: 30,
  게시글3: 39,
};

function Title({ title, thumbsup }) {
  return (
    <div>
      <h3
        style={{
          height: 100,
          padding: 10,
          margin: 10,
          border: "1px solid white",
        }}
      >
        {title}
      </h3>
      <button onClick={() => setText(i + 1)}>
        {likes}
        <span>{thumbsup} likes </span>
      </button>
    </div>
  );
}

export default function TitleList() {
  return (
    <>
      {Object.entries(likes).map(([title, thumbsup], index) => {
        return;
        <Title key={index} title={title} thumbsup={thumbsup} />;
      })}
    </>
  );
}
