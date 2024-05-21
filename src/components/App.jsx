import OfficerList from "./OfficerList";
import data from "../officers.json";

export default function App() {
  return (
    <>
      <h1>Available Officers</h1>
      <OfficerList officers={data} />
    </>
  );
}
