import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ type = "button", variant, children }) {
  return (
    <button
      className={clsx(
        css.btn,
        variant === "primary" && css.primary,
        variant === "secondary" && css.secondary,
        variant === "tertiary" && css.tertiary
      )}
      type={type}
    >
      {children}
    </button>
  );
}
