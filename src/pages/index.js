import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import HeroSectionNine from "@components/hero-section/HeroSectionNine";
import TechTab from "@components/tabs/TechTab";
import ServiceIt from "@components/services/ServiceIT";
import PortfolioTab from "@components/tabs/PortfolioTab";
import CustomerTwo from "@components/customer/CustomerTwo";
import TestimonialFive from "@components/testimonial/TestimonialFive";
import FeatureFour from "@components/features/FeatureFour";
import React from "react";

export default function Home() {
  return (
    <Layout>
        <Navbar />
        <HeroSectionNine />
        {/*<WhyChoosUs />*/}
        <ServiceIt />
        <PortfolioTab />
        <TechTab />
        <FeatureFour />
        <CustomerTwo />
        {/* <TestimonialFive /> */}
        {/*<PriceFour />*/}
        {/*<SupportOne className />*/}
        {/*<LatestBlog />*/}
        <Footer footerGradient />
    </Layout>
  );
}
