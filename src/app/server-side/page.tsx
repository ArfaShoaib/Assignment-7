import React from "react";

interface Qoutes {
  userId: number;
  qoute: string;
  author: string;
}

const page = async () => {
  const response = await fetch("https://dummyjson.com/quotes");

  const Parsedres: Qoutes[] = await response.json();
  console.log(Parsedres);
  return (
    <div>
      {Parsedres.map((qoutes, index) => (
        <div key={index} className="flex flex-col gap-5 border border-black ">
          <p>userId: {qoutes.userId}</p>
          <p>id: {qoutes.qoute}</p>
          <p>title: {qoutes.author}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
