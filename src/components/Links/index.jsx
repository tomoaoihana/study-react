import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.ctas}>
      {props.items.map((item) => {
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
};
