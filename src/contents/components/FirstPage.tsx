import { CaretRightOutlined } from "@ant-design/icons";
import image from "../../assets/images/Character_Hu_Tao_Full_Wish.webp";
import "../../assets/styles/firstpage.scss";
export default function FirstPage() {
  return (
    <div className="wrapper">
      <div className="first-page">
        <div className="text">
          <h1>MERSEYSIDE</h1>
          <h1>ARTS &</h1>
          <h1>CULTURE</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            inventore ex repellendus quidem odio asperiores quaerat placeat
            sint, similique neque dolorem eveniet. Eos, earum nobis ad at
            excepturi velit dolore.
          </p>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
        <div className="link-subscribe">
          <div className="hover">
            <span>
              STAY IN THE LOOP. SUBSCRIBE TO OUR NEWSLETTER{" "}
              <CaretRightOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
