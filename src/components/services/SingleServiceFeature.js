import React from 'react';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { BsWatch } from 'react-icons/bs';

const SingleServiceFeature = (props) => {
  const justifyText={textAlign:'justify'}
  return (
    <section className="feature-section ptb-120">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2>{props.title}
</h2>
              <p style={justifyText}>
              {props.desc}
              </p>
            </div>
            <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    {props.childOne.icon}
                  </i>
                </span>
                <h3 className="h5">  {props.childOne.title}</h3>
                <p>  {props.childOne.desc}</p>
              </li>
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                  {props.childTwo.icon}
                  </i>
                </span>
                <h3 className="h5"> {props.childTwo.title}</h3>
                <p> {props.childTwo.desc} </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pr-lg-4 mt-md-4 position-relative">
              <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
               {props.img}
                <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceFeature;
