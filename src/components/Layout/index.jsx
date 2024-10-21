export const Layout = (props) => {
  return (
    <div className="flex flex-col mx-auto max-w-2xl items-center px-2 min-h-screen">
      {props.children}
    </div>
  );
};

// min-height :100vh;
// max-width:600px;
// margin: 0 auto;
