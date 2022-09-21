import "./Typography.css";

const variantsMapping = {
  h0: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "h5",
  small: "h6",
  sub: "p",
};

const Text = ({ variant, children, color, weight, format, ...rest }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={`typography--variant-${variant} ${
        color || "text-NEUTRAL-_800"
      } font-${weight || "base"} ${format}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
