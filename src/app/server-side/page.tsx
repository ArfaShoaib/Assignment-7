import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

interface Quote {
  id: number;
  quote: string;  // Changed from 'qoute'
  author: string;
}

const Page = async () => {
  const response = await fetch("https://dummyjson.com/quotes");
  const data = await response.json();
  const quotes = data.quotes;  // This is the correct way to access quotes array

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Quotes Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote: { quote: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; author: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; id: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (  // Changed from 'qoutes' to 'quotes'
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <blockquote className="text-gray-700 mb-4 italic">
              "{quote.quote}"  // Changed from 'quotes.qoute'
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