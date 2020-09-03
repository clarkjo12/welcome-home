import React from "react";
import flags from "../images/flags.png";

export default class Steps extends React.PureComponent {
  render() {
    return (
      <div className="main-steps">
        <p className="easy-steps mont-bold shadow">
          3 Easy Steps to Home Ownership
        </p>
        <div className="line"></div>
        {/* STEP 1 */}
        <div className="step1">
          <div className="step-num mont-bold shadow">1</div>
          <div className="step-main">
            <div className="step-title mont-bold shadow">
              {" "}
              Completed Application
            </div>
            <div className="step-body mont-reg">
              <p>
                {" "}
                The first step for all our future home owners; Our application
                gives us a better idea on how we can help you.{" "}
              </p>
              <br />
              <p>
                {" "}
                Download app "here" - Once completed, email to
                WelcomeHomePNC@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="step2">
          <div className="step-main">
            <div className="step-title mont-bold shadow"> Copy of Valid ID</div>
            <div className="step-body mont-reg">
              <p>
                Whether it's a Drivers License, Passport or Greencard even; We
                dont care, as long as it's Valid.
              </p>
              <br />
              <p>
                Fun Fact - If you're married, everything you purchase is
                automatically half your spouses; so include them as well!
              </p>
            </div>
          </div>
          <div className="step-num2 mont-bold shadow">2</div>
        </div>
        {/* STEP 3 */}
        <div className="step3">
          <div className="step-num3 mont-bold shadow">3</div>
          <div className="step-main">
            <div className="step-title mont-bold shadow"> Proof of Funds</div>
            <div className="step-body mont-reg">
              <p>
                {" "}
                This is for us to confirm that you actually have the funds
                available for down payment on closing day.
              </p>
              <br />
              <p>
                It can a copy of recent bank statement, a screen shot of your
                banking app, or the most popular option being picture of cash.
              </p>
            </div>
          </div>
        </div>
        {/* STEP 4 */}
        <div className="step4">
          <div className="step-main">
            <div className="step-title mont-bold shadow"> Copy of Valid ID</div>
            <div className="step-body mont-reg">
              <p>
                Whether it's a Drivers License, Passport or Greencard even; We
                dont care, as long as it's Valid.
              </p>
              <br />
              <p>
                Fun Fact - If you're married, everything you purchase is
                automatically half your spouses; so include them as well!
              </p>
            </div>
          </div>
          <img className="flags" src={flags} />
        </div>
      </div>
    );
  }
}
