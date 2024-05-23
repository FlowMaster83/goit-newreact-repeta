import OfficerProfile from "../OfficerProfile";
import css from "./OfficerList.module.css";

export default function OfficerList({ officers }) {
  return (
    <ul className={css.container}>
      {officers.map((officers) => (
        <li key={officers.id}>
          <OfficerProfile officer={officers} />
        </li>
      ))}
    </ul>
  );
}
