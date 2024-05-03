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
const HirePhpDevelopers = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire A PHP Developer"
        desc="Get The Full Spectrum of PHP Development Lifecycle, from Codebase Assessments & Maintenance to Crafting Innovative Platforms from Scratch."
      />
     
      <SingleServiceFeature 
      title="Our suite of php development services
      " 
      desc="Searching for a powerful web app that provides a lightning-fast user experience? PHP is designed to do exactly that! Explore the growing range of bespoke PHP web development services at UNSI that aspire to enable every business with a custom-built website.
"
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
      childOne={{icon:<BiRocket />,title:'Custom Web Apps', desc:'Harness PHP Open-Source Capabilities and Extensive Libraries to Craft Unique Web Apps.'}}
      childTwo={{icon:<BiRocket />,title:'Enterprise Web Portal',
      desc:
      'Create Web Portals, Desktop Apps & Customized Applications with PHP’s server side-scripting.'
      }}
/>

      <SingleServiceFeatureTwo
      title="DYNAMIC PHP APPLICATIONS FOR BUSINESS TRANSFORMATION
      "
      desc="Experience the Power of PHP Web Development with UNSI.
      We create websites with the latest industry standards in record time, supported by our round-the-clock customer service for all your technical needs.
      "
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
      childOne={{icon:<BiRocket />,title:'Innovative Approach',desc:'Our PHP developers use an agile approach for smooth project execution and excellent website delivery.'}}
      childTwo={{icon:<BiRocket />,title:'Custom Service',desc:'Custom PHP Solutions for Responsive, Mobile-Friendly Web Apps Meeting Business-Specific Needs.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="CHOOSE A HIRING PLAN THAT SUITS YOU!
      "
      desc="We have Tailored PHP Solutions to Match Your Unique Needs. 

      Whether it's a full project team, dedicated PHP developers, or ongoing support, UNSI lets you decide what's best for your success.
      .
      "
      childOne={{icon:<BiRocket />,
      title:'Project',
      desc:' Our account and project management experts team up with our PHP developers to craft a budget-friendly and time-efficient plan.'}}
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
        title:'Dedicated',
      desc:'Whenever you face an urgent IT deadline or a specific PHP development project, hire our specialized PHP developers full or part-time within 24 hours.'
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Delivery',
      desc:'Dramatically administrate progressive metrics without error-free globally simplify standardized alignments plagiarize distributed.'
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'Maintenance',
      desc:'Our support and development services provide security, bug-proofing, and budget-friendly solutions.'
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HirePhpDevelopers;
