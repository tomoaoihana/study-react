import Image from "next/image";
import classes from "./Links.module.css";

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
export function Links() {
  return (
    <div className={classes.ctas}>
      {ITEMS.map((item) => {
        return (
          <a
            key={item.id}
            className={classes.primary}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
