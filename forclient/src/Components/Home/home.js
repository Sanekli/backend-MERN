import React from "react";
import Image3 from "./cover.JPEG";
function home() {
  return (
    <div>
      <div>
        <img className="Image1" src={Image3} alt="ph" />
      </div>

      <div className="parag1">
        <h1>welcome to our IMMO SANEKLI</h1>
        <p>you can rent your beautiful apartment in hammamet </p>
      </div>

      <div className="block2">
        <h2 className="title">TESTIMONIALS AND REVIEWS</h2>
        <div className="testimonials">
          <div className="testimonials-blocks">
            <div>
              <i class="fa-solid fa-comment fa-2xl"></i>
              <p style={{ width: "18rem" }} className=" quotes">
                Thank you so much for a well organized accomandation. We had a
                wonderful time. Hard to believe it's already done and past.
                Weather was awesome, thank you for everything!
                <h4 className="name">B.WEAL</h4>
              </p>
            </div>

            <div>
              <i class="fa-solid fa-comment fa-2xl"></i>
              <p style={{ width: "18rem" }} className=" quotes">
                it was a great time for me ,we have a good accomandation.Thank
                You
                <br />
                <h4 className="name">O.HAIFA</h4>
              </p>
            </div>

            <div>
              <i class="fa-solid fa-comment fa-2xl"></i>
              <p style={{ width: "18rem" }} className=" quotes">
                Hi. We had a wonderful time! I highly recommend dar rim. It was
                perfect .Thanks so much for finding the perfect spot for us for
                spring break :) <br />
                <h4>S.FIRAS</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
