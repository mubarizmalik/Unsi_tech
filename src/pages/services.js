import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import ServiceOne from "@components/services/ServiceOne";
import SupportOne from "@components/support/SupportOne";
import Promo from "@components/promo/Promo";

const services = () => {
  return (
      <>
          <Navbar classOption="navbar-light" />
          <PageHeader
              title="We are Development Experts"
              desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
          />

          <ServiceOne />
          <Promo bgWhite />
          <SupportOne className="true" />
          <Footer footerLight />
      </>
  );
};

export default services;
