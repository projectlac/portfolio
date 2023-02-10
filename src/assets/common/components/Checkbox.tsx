import Input from "antd/es/input";
import { useState } from "react";
import "../../styles/check-box.scss";
interface IProps {
  label: string;
}

const Checkbox = ({ label }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
