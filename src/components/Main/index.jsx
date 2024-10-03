import classes from "src/components/Main/Main.module.css";
// import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    id: 1,
    href: "https://nextjs.org/docs",
    label: "Documentation →",
  },
  {
    id: 2,
    href: "https://nextjs.org/learn",
    label: "Learn \u2192",
  },
  {
    id: 3,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    label: "Deploy now",
  },
  {
    id: 4,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    label: " Read our docs",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={classes.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code>{items.length}</code>
      </Headline>

      <Links items={items} />
    </main>
  );
};
