import OfficerProfile from "./OfficerProfile";

export default function OfficerList({ officers }) {
  return (
    <ul>
      {officers.map((officers) => (
        <li key={officers.id}>
          <OfficerProfile officer={officers} />
        </li>
      ))}
    </ul>
  );
}
