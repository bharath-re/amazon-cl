import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(10);

  const toShareValue = {
    count,
    incrementValue: () => {
      setCount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={toShareValue}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

export default BooksContext;
