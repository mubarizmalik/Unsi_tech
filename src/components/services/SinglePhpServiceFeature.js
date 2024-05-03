import React from 'react';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { BsWatch } from 'react-icons/bs';

const SinglePhpServiceFeature = () => {
  const justifyText={textAlign:'justify'}
  return (
    <section className="feature-section ptb-120">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2>OUR SUITE OF PHP DEVELOPMENT SERVICES
</h2>
              <p style={justifyText}>
              Searching for a powerful web app that provides a lightning-fast user experience?
PHP is designed to do exactly that!Explore the growing range of bespoke PHP web development services at UNSI that aspire to enable every business with a custom-built website.
.{' '}
              </p>
            </div>
            <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <FaRegUser />
                  </i>
                </span>
                <h3 className="h5">Custom Web Development</h3>
                <p>Harness PHP's Open-Source Capabilities and Extensive Libraries to Craft Unique Web Apps.
</p>
              </li>
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <BsWatch />
                  </i>
                </span>
                <h3 className="h5">CRM Solutions</h3>
                <p>Get high-end CRM solutions to manage your Customer Data, Sales Pipeline & Selling Efforts. </p>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pr-lg-4 mt-md-4 position-relative">
              <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                <Image
                  width={540}
                  height={407}
                  src="/dashboard-img.png"
                  alt=""
                  className="img-fluid shadow-sm rounded-custom"
                />
                <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePhpServiceFeature;
