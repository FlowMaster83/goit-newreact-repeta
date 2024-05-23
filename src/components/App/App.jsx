import { FaBeer } from "react-icons/fa";
import OfficerList from "../OfficerList/OfficerList";
import data from "../../offisers.json";
import css from "./App.module.css";
import Button from "../Button/Button";

// const ProfileSection = ({ title, children }) => {
//   return (
//     <div>
//       <section>
//         <h2>{title}</h2>
//         {children}
//       </section>
//     </div>
//   );
// };

export default function App() {
  return (
    <div className={css.container}>
      <FaBeer className={css.icon} />

      <Button variant="primary">Deposit</Button>
      <Button type="submit" variant="secondary">
        Register
      </Button>
      <Button variant="tertiary">Delete</Button>

      {/* <ProfileSection title="Rating">
        <div>www</div>
        <p>qqq</p>
        <span>eee</span>
      </ProfileSection> */}

      <h1>Available officers</h1>
      <OfficerList officers={data} />
    </div>
  );
}
