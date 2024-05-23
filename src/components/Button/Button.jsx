import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ size, type = "button", variant, children }) {
  return (
    <button
      className={clsx(
        css.btn,
        variant === "primary" && css.primary,
        variant === "secondary" && css.secondary,
        variant === "tertiary" && css.tertiary,

        size === "large" && css.iconLarge,
        size === "medium" && css.iconMedium,
        size === "small" && css.iconSmall
      )}
      type={type}
    >
      {children}
    </button>
  );
}
