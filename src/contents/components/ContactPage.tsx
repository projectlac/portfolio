import { useRef, useState } from "react";
import Checkbox from "../../assets/common/components/Checkbox";
import "../../assets/styles/contact-page.scss";
import { Input } from "antd";
export default function ContactPage() {
  const [email, setEmail] = useState<string>("");
  const searchStringInput = useRef<any>();
  return (
    <div className="wrapper-3">
      <div className="contact">
        <div className="text-box">
          <h2>
            <span>SUBSCRIBE</span> TO OUR
          </h2>
          <h1>NEWSLETTER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            magnam modi, unde velit vero quisquam! Reiciendis magni dolor, natus
            aliquam recusandae perferendis id inventore? Sed, deserunt. Quas
            doloribus ex sequi?
          </p>
        </div>

        <div className="subscribe">
          <Checkbox label="I consent to receiving emails from Open Culture."></Checkbox>
          <Input
            placeholder=""
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}
