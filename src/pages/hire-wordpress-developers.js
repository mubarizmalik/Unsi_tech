import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import SingleServicePromo from '@components/services/SingleServicePromo';
import SingleServiceRegister from '@components/services/SingleServiceRegister';
import SingleServiceFeature from '@components/services/SingleServiceFeature';
import SingleServiceFeatureTwo from '@components/services/SingleServiceFeatureTwo';
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import Image from 'next/image';
import {
    BiServer,
    BiNews,
    BiDetail,
    BiRocket,
    BiPaperPlane,
    BiHelpCircle,
    BiLogIn,
    BiUser,
    BiError,
  } from "react-icons/bi";

const HireWordpressDevelopers = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire A Wordpress Developer Now"
        desc="Bespoke WordPress websites and platforms: online shops, CRMs, job boards, custom plugins and much more."
      />
     
      <SingleServiceFeature 
      title="Our expertise in wordpress development" 
      desc="Scale-Up Your Business With Our Full Range of WordPress Development Services"
      img= {
        <>
        <Image
        width={540}
        height={407}
        src="/dashboard-img.png"
        alt=""
        className="img-fluid shadow-sm rounded-custom"
      />
        </>
        
      }
      childOne={{icon:<BiRocket />,title:'Custom WordPress & Plugin Development', desc:'We provide custom WordPress website design services & top-quality, feature-rich, and bug-free WordPress plugins for your business.'}}
      childTwo={{icon:<BiRocket />,title:'WooCommerce Site Development',
      desc:'We provide WooCommerce site development services according to your business requirements at the best prices.'
      }}
/>

      <SingleServiceFeatureTwo
      title="More than just development"
      desc="Our feature rich comprehensive services are having consumer-centric, data-driven insights that go beyond impressions, visits, and clicks."
      img= {
        <>
        <Image
        width={540}
        height={407}
        src="/dashboard-img.png"
        alt=""
        className="img-fluid shadow-sm rounded-custom"
      />
        </> 
      }
      childOne={{icon:<BiRocket />,title:'WordPress Theme & Blog Site Development',desc:'Our skilled WordPress developers create stunning, user-friendly themes & develop an elegant & the most appealing blogging site.'}}
      childTwo={{icon:<BiRocket />,title:'WordPress Migration Services',desc:'Our experienced WordPress developers have the expertise to safely migrate your website to the WordPress platform in no time.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="GROW YOUR BUSINESS GROW YOUR BRAND"
      desc="We have Tailored wordpress Solutions to Match Your Unique Needs. 

      Whether it's a full project team, dedicated wordpress developers, or ongoing support, UNSI lets you decide what's best for your success.
      .
      "
      childOne={{icon:<BiRocket />,
      title:'On-Time Delivery',
      desc:'We deliver all the projects we work on within a timeline with great quality.'}}
      img= {
        <>
        <Image
        width={540}
        height={407}
        src="/dashboard-img.png"
        alt=""
        className="img-fluid shadow-sm rounded-custom"
      />
        </>
        
      }
      childTwo={
        {icon:<BiRocket />,
        title:'Experienced Team',
      desc:'Our team consists of architects, developers, and testers with decades of experience.'
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Premium Code Quality',
      desc:'We make sure the code is always of high quality and optimized.'
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'Development Sprints',
      desc:'We store project-related tasks on a management tool, & chat on Slack.'
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HireWordpressDevelopers;
