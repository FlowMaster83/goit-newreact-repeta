import OfficerProfile from "../OfficerProfile/OfficerProfile";
import css from "./OfficerList.module.css";

export default function OfficerList({ officers }) {
  return (
    <ul className={css.list}>
      {officers.map((officers) => (
        <li className={css.item} key={officers.id}>
          <OfficerProfile officer={officers} />
        </li>
      ))}
    </ul>
  );
}
