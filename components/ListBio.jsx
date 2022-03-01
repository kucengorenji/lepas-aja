import React from 'react';

const ListBio = (props) => {
  return (
    <div className="w-full">
      <div className="flex max-w-[500px] text-lg text-start">
        <p className="flex-1">{props.title}</p>
        <p className="flex-1">{props.content}</p>
      </div>
    </div>
  );
};

export default ListBio;
