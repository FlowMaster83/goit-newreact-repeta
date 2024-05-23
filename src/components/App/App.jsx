import OfficerList from "../OfficerList/OfficerList";
import data from "../../offisers.json";
import css from "./App.module.css";

console.log(css);

export default function App() {
  return (
    <div className={css.container}>
      <h1>Available officers</h1>
      <OfficerList officers={data} />
    </div>
  );
}
