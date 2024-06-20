import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/Actions/actions";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function Details() {
  const history = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  const product = useSelector((state) => state.Reducers.getOneProduct);
  const goTopaymentifconnected = () => {
    if (!JSON.parse(localStorage.getItem("current_user"))) {
      history("/Login");
    } else {
      history("/reservation");
    }
  };

  useEffect(() => {
    dispatch(getOneProduct(params.id));
  }, []);
  
  return (
    <div className="detailsDesign">
      {product?.map((oneProduct) => (
        <div>
          <div className="container hero">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                <h1 className="detailFont">{oneProduct.title}</h1>
                <p className="detailFont">
                  {oneProduct.description}
                  <br />
                </p>{" "}
                <h5 className="detailFont">Duration : {oneProduct.duration}</h5>
                <button
                  onClick={()=>goTopaymentifconnected()}
                  className="btn btn-light btn-lg action-button"
                  type="button"
                >
                  Booking
                  <i className="fa fa-long-arrow-right ml-2" />
                </button>
              </div>
              <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                <div className="iphone-mockup">
                  {" "}
                  <img
                    className="device"
                    style={{ width: "45rem" }}
                    src={oneProduct.url_images}
                    alt="aa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
