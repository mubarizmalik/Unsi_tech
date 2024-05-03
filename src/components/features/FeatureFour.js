/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGrinStars, FaShieldAlt, FaViber } from "react-icons/fa";

import SectionTitle from "../common/SectionTitle";

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <SectionTitle
                title="Leverage World-Class Talent"
                description="
                The world’s leading brands hire UNSI’s talent, and so can you!
                "
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad text-primary fa-2x">
                      <FaShieldAlt />
                    </i>
                  </div>
                  <h3 className="h5">Consult with Our Industry Expert</h3>
                  <p className="mb-0">
                  We'll align with your goals, technical needs, and team dynamics.
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad text-danger fa-2x">
                      <FaViber />
                    </i>
                  </div>
                  <h3 className="h5">Work With Hand-Selected Talent</h3>
                  <p className="mb-0">
                  Meet the perfect fit for your project in under 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad text-success fa-2x">
                      <FaGrinStars />
                    </i>
                  </div>
                  <h3 className="h5">Try Before You Hire, Guaranteed Fit</h3>
                  <p className="mb-0">
                  Collaborate on a trial basis and pay only if satisfied.
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
