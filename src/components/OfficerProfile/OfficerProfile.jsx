import css from "./OfficerProfile.module.css";
import clsx from "clsx";

export default function OfficerProfile({
  officer: { name, age, specialization, status },
}) {
  // console.log(clsx("text", status === "Active" ? "active" : "retired")); // якщо "або...або"

  //   console.log(
  //   clsx("text", {
  //     active: status === "Active",
  //     retired: status === "Retired",
  // neutral: status === 'Neutral
  //   })
  // ); // якщо більше

  // const containerClass = clsx(
  //   css.container,
  //   status === "Active" ? css.active : css.retired
  // );

  const test = clsx(css.container, {
    [css.active]: status === "Active",
    [css.retired]: status === "Retired",
    [css.neutral]: status === "Neutral",
  });

  return (
    <div className={test}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <p
        className={clsx(
          css.text,
          status === "Active" ? css.active : css.retired
        )}
      >
        <b>Status: </b>
        {status === "Active" ? "Is active" : "Is retired"}
      </p>

      <p>Specialization: {specialization}</p>
    </div>
  );
}
