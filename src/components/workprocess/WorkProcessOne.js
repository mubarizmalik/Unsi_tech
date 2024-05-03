import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = (props) => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              
              <h2>{props.title}</h2>
              <p>
               {props.desc}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              {props.img}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {props.childOne.icon}
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 1</span>
                  <h3 className="h5 mb-2"> {props.childOne.title}</h3>
                  <p>
                    Progressively foster enterprise-wide systems whereas equity
                    invested web-readiness harness installed base bandwidth.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                  {props.childTwo.icon}
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 2</span>
                  <h3 className="h5 mb-2"> {props.childTwo.title}</h3>
                  <p>
                  {props.childTwo.desc}
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                  {props.childThree.icon}
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 3</span>
                  <h3 className="h5 mb-2"> {props.childThree.title}</h3>
                  <p>
                  {props.childThree.desc}
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                  {props.childFour.icon}
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 4</span>
                  <h3 className="h5 mb-2"> {props.childFour.title}</h3>
                  <p>
                    {props.desc}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
