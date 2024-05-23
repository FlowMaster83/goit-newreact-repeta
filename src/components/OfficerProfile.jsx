export default function OfficerProfile({
  officer: { name, age, specialization, status },
}) {
  return (
    <div>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Status: {status === "Active" ? "Is active" : "Is retired"}</p>
        <p>Specialization: {specialization}</p>
      </div>
    </div>
  );
}
