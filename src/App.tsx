import ReactFullpage, { Item } from "@fullpage/react-fullpage";
import { useRef, useState } from "react";

import "./assets/styles/nav.scss";
import ContactPage from "./contents/components/ContactPage";
import FirstPage from "./contents/components/FirstPage";
import SecondPage from "./contents/components/SecondPage";
function App() {
  const [numberOfScreen, setNumberOfScreen] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const ref = useRef<any>();

  return (
    <>
      <nav>
        <div className="name-web gray-13">
          <img
            src="https://assets.website-files.com/5d517e088e830947057af824/5d517e088e830919907af83b_OPEN%20CULTURE.svg"
            alt=""
          />
          <div className="list-menu">
            <ul>
              <li
                onClick={() => {
                  ref.current?.fullpageApi.moveTo(`page0`, 0);
                }}
                className={`${index === 0 && "active"}`}
              >
                overview
              </li>
              <li
                onClick={() => {
                  ref.current?.fullpageApi.moveTo(`page1`, 0);
                }}
                className={`${index === 1 && "active"}`}
              >
                stats character
              </li>
              <li
                onClick={() => {
                  ref.current?.fullpageApi.moveTo(`page2`, 0);
                }}
                className={`${index === 2 && "active"}`}
              >
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page">
        <div
          data-w-id="b723f31a-903d-636e-2293-25d3e53237a3"
          className="_w-section-pagination"
        >
          {[...Array(numberOfScreen)].map((d, i) => (
            <div className={`section-pagination`} key={i}>
              <div
                className={`pagination-dot ${index === i && "active"}`}
                onClick={() => {
                  ref.current?.fullpageApi.moveTo(`page${i}`, 0);
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <ReactFullpage
        //fullpage options
        afterLoad={(origin: Item, destination: Item, direction: string) => {
          setIndex(destination.index);
        }}
        licenseKey={"YOUR_KEY_HERE"}
        ref={ref}
        scrollingSpeed={1000} /* Options here */
        anchors={["page0", "page1", "page2"]}
        render={({ state, fullpageApi }) => {
          setNumberOfScreen(state.sectionCount);

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <FirstPage />
              </div>
              <div className="section">
                <SecondPage></SecondPage>
              </div>
              <div className="section">
                <ContactPage></ContactPage>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
