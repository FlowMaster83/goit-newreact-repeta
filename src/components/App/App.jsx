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

      {/* компонент, який багато разів використовується */}
      <Button size="large" variant="primary">
        {/* children */}
        Deposit
        {/* children */}
      </Button>
      <Button size="medium" type="submit" variant="secondary">
        Register
      </Button>
      <Button size="small" variant="tertiary">
        Delete
      </Button>
      {/* компонент, який багато разів використовується */}

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
