import React from 'react'

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Page = async () => {
  const response = await fetch("https://dummyjson.com/quotes");
  const data: { quotes: Quote[] } = await response.json();
  const quotes = data.quotes;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Quotes Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote: Quote) => (
          <div
            key={quote.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <blockquote className="text-gray-700 mb-4 italic">
              &quot;{quote.quote}&quot;
            </blockquote>
            <div className="border-t pt-4">
              <p className="text-gray-600 text-sm">
                Author: <span className="font-semibold">{quote.author}</span>
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Quote ID: {quote.id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;