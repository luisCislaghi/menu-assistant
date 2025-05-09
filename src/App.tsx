import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

type Drink = {
  ids: string[];
  title: string;
};

type Node = {
  id: string;
  title: string;
  description: string;
  color: string;
  childrenA: Node | null;
  childrenB: Node | null;
};

const tree: Node = {
  id: "0",
  title: "",
  description: "",
  color: "",
  childrenA: {
    id: "hot",
    title: "Hot",
    description: "warm and cozy drinks",
    color: "salmon",
    childrenA: {
      id: "hot-coffee",
      title: "Coffee",
      description: "warm and cozy drinks",
      color: "lightbrown",
      childrenA: {
        id: "hot-coffee-milky",
        title: "Milky and Coffee",
        description: "warm and cozy drinks",
        color: "lightbrown",
        childrenA: null,
        childrenB: null,
      },
      childrenB: {
        id: "hot-coffee-black",
        title: "Black Coffee",
        description: "warm and cozy drinks",
        color: "brown",
        childrenA: null,
        childrenB: null,
      },
    },
    childrenB: {
      id: "hot-non-coffee",
      title: "Non-Coffee",
      description: "warm and cozy drinks",
      color: "lightgreen",
      childrenA: {
        id: "hot-non-coffee-milky",
        title: "Milky and Non-Coffee",
        description: "warm and cozy drinks",
        color: "lightbrown",
        childrenA: null,
        childrenB: null,
      },
      childrenB: {
        id: "hot-non-coffee-pure",
        title: "Pure Non-Coffee",
        description: "warm and cozy drinks",
        color: "mintgreen",
        childrenA: null,
        childrenB: null,
      },
    },
  },
  childrenB: {
    id: "cold",
    title: "Cold",
    description: "chilled and refreshing drinks",
    color: "lightblue",

    childrenA: {
      id: "cold-coffee",
      title: "Coffee",
      description: "warm and cozy drinks",
      color: "lightbrown",
      childrenA: {
        id: "cold-coffee-milky",
        title: "Milky and Coffee",
        description: "warm and cozy drinks",
        color: "lightbrown",
        childrenA: null,
        childrenB: null,
      },
      childrenB: {
        id: "cold-coffee-black",
        title: "Black Coffee",
        description: "warm and cozy drinks",
        color: "brown",
        childrenA: null,
        childrenB: null,
      },
    },
    childrenB: {
      id: "cold-non-coffee",
      title: "Non-Coffee",
      description: "warm and cozy drinks",
      color: "lightgreen",
      childrenA: {
        id: "cold-non-coffee-milky",
        title: "Milky and Non-Coffee",
        description: "warm and cozy drinks",
        color: "lightbrown",
        childrenA: null,
        childrenB: null,
      },
      childrenB: {
        id: "cold-non-coffee-black",
        title: "Black Non-Coffee",
        description: "warm and cozy drinks",
        color: "brown",
        childrenA: null,
        childrenB: null,
      },
    },
  },
};

const drinks: Drink[] = [
  //
  //##### HOT #####
  //
  //hot coffee milky
  {
    ids: ["hot", "hot-coffee", "hot-coffee-milky"],
    title: "Capuccino",
  },
  {
    ids: ["hot", "hot-coffee", "hot-coffee-milky"],
    title: "Caramel Latte",
  },

  // hot coffee black
  {
    ids: ["hot", "hot-coffee", "hot-coffee-black"],
    title: "Expresso",
  },
  {
    ids: ["hot", "hot-coffee", "hot-coffee-black"],
    title: "V60",
  },
  {
    ids: ["hot", "hot-coffee", "hot-coffee-black"],
    title: "Aeropress",
  },

  // hot non-coffee pure
  {
    ids: ["hot", "hot-non-coffee", "hot-non-coffee-pure"],
    title: "Green Tea",
  },
  {
    ids: ["hot", "hot-non-coffee", "hot-non-coffee-pure"],
    title: "Black Tea",
  },

  // hot non-coffee milky
  {
    ids: ["hot", "hot-non-coffee", "hot-non-coffee-milky"],
    title: "Hot Chocolate",
  },
  {
    ids: ["hot", "hot-non-coffee", "hot-non-coffee-milky"],
    title: "Vodka Hot Chocolate",
  },

  //
  //##### COLD #####
  //
  //cold coffee milky
  {
    ids: ["cold", "cold-coffee", "cold-coffee-milky"],
    title: "Latte",
  },
  {
    ids: ["cold", "cold-coffee", "cold-coffee-milky"],
    title: "Vanilla Latte",
  },

  // cold coffee black
  {
    ids: ["cold", "cold-coffee", "cold-coffee-black"],
    title: "Iced Americano",
  },
  {
    ids: ["cold", "cold-coffee", "cold-coffee-black"],
    title: "Cold Brew",
  },

  // cold non-coffee pure
  {
    ids: ["cold", "cold-non-coffee", "cold-non-coffee-pure"],
    title: "Water",
  },

  // cold non-coffee milky
  {
    ids: ["cold", "cold-non-coffee", "cold-non-coffee-milky"],
    title: "Matcha Latte",
  },
];

function App() {
  const [step, setStep] = useState(tree);
  const [history, setHistory] = useState([tree]);

  const handleForward = (node: Node | null) => {
    if (!node) return;
    setStep(node);
    setHistory((prev) => [...prev, node]);
  };

  const handleBack = () => {
    if (history.length <= 1) return;
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    });
    setStep(history[history.length - 2]);
  };

  return (
    <>
      THIS ASSISTANT WILL HELP YOU CHOOSE YOUR BEVERAGE HERE AT COOL CAFE CHOOSE
      SIDE A OR SIDE B TO FILTER THE OPTIONS NODE ID: {step.id}
      <button
        onClick={handleBack}
        style={{ backgroundColor: "red" }}
        disabled={history.length <= 1}
      >
        Back
      </button>
      <div className="flex">
        <div
          className="flex-1"
          style={{ backgroundColor: step.childrenA?.color }}
        >
          <button onClick={() => handleForward(step.childrenA)}>
            {step.childrenA?.title}
          </button>
          <div>
            <p>{step.childrenA?.description}</p>
          </div>
        </div>
        <div
          className="flex-1"
          style={{ backgroundColor: step.childrenB?.color }}
        >
          <button onClick={() => handleForward(step.childrenB)}>
            {step.childrenB?.title}
          </button>
          <div>
            <p>{step.childrenB?.description}</p>
          </div>
        </div>
      </div>
      {history.length}--
      {history.map((node, index) => node.id)}
      {history.length === 4 && (
        <>
          BEST DRINKS:
          {drinks
            .filter((drink) => drink.ids.includes(step.id))
            .map((drink) => (
              <div key={drink.title}>
                <p>{drink.title}</p>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default App;
