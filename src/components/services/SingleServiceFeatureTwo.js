import React from 'react';
import Image from 'next/image';
import { BsChat, BsHeadset } from 'react-icons/bs';

const SingleServiceFeatureTwo = (props) => {
  return (
    <section className="feature-section pt-60 pb-120">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-1 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2>{props.title}</h2>
              <p>
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
          <div className="col-lg-6 order-lg-2">
            <div className="pr-lg-4 position-relative">
              <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                <Image
                  width={540}
                  height={360}
                  src="/dashboard-img-4.png"
                  alt=""
                  className="img-fluid rounded-custom shadow-sm"
                />
                <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 bottom--40 right--40 bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceFeatureTwo;