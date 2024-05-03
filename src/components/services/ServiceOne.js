import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { IoGitCompareOutline } from "react-icons/io5";
import SectionTitle from "../common/SectionTitle";
import hireWebDevelopers from "@pages/hire-web-developers";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire A Web Developer </h3>
                  <p className="mb-0">
                  UNSI's web developers build innovative, stunning, and high-performing websites &  most importantly, help your organization grow. 

                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                      bgDark
                          ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                          : "bg-white"
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire A UX/UI Developer</h3>
                  <p className="mb-0">
                  With our UX/UI design service, you can create a digital product that reflects your brand values, goals, & excels in the market.  
                  </p>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire A Digital Marketer</h3>
                  <p className="mb-0">
                  Ready to dominate the digital landscape? UNSI delivers growth through effective Digital Marketing Services, ensuring online success.
                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                      bgDark
                          ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                          : "bg-white"
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire An App Developer</h3>
                  <p className="mb-0">
                  Get high-quality, user-friendly apps, with a seamless user experience with our expert developers at UNSI. 

                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                      bgDark
                          ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                          : "bg-white"
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire A Content Writer</h3>
                  <p className="mb-0">
                  Hire content writers at UNSI for engaging, tailored content that amplifies your brand's impact.
                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                      bgDark
                          ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                          : "bg-white"
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Hire A QA Engineer</h3>
                  <p className="mb-0">
                  Hire QA Engineers at UNSI for top-notch software quality, reliability, and seamless user experience. 
                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                      bgDark
                          ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                          : "bg-white"
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Database Cleaning</h3>
                  <p className="mb-0">
                  UNSI's Database Cleaning Service: Enhance data accuracy and quality for actionable insights.
                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">ERP Software Service</h3>
                  <p className="mb-0">
                    
UNSI's ERP optimizes your business processes for increased efficiency and data-driven decision-making.

                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Support Service</h3>
                  <p className="mb-0">
                   
Count on UNSI for seamless operation, timely assistance and troubleshooting to ensure customer satisfaction. 

                  </p>
                </div>
                <Link href="/hire-web-developers">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
