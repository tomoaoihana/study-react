import classes from "src/components/Layout/page.module.css";

export const Layout = (props) => {
  return <div className={classes.page}>{props.children}</div>;
};
