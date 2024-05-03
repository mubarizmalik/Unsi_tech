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

const HirePythonDevelopers = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire A Python Developer Now"
        desc="Hire Best-in-Class Python Developers Who Master Building Robust, Cost-efficient, & Resourceful Web and Mobile Applications. 
        Full-Stack Proficiency."
      />
     
      <SingleServiceFeature 
      title="The shine that sets us apart" 
      desc="Hiring a reliable Python developer from UNSI Interactive can provide you with the expertise, customized solutions, scalability, efficiency, and support you need to achieve your business goals and objectives."
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
      childOne={{icon:<BiRocket />,title:'Prototype-based Programming', desc:'Our Expert Python Developers Craft Robust Web and Mobile Prototypes that have core functionality.'}}
      childTwo={{icon:<BiRocket />,title:'Python Web App Development',
      desc:'We offer comprehensive Python Web App Development by seasoned experts.'
      }}
/>

      <SingleServiceFeatureTwo
      title="Why choose python development services?"
      desc="At UNSI, we offer simplicity, cost-effectiveness, GUI support, scalability, and a vast library for efficient and versatile solutions."
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
      childOne={{icon:<BiRocket />,title:'GUI Support',desc:'Python development employs GUI to create desktop apps.'}}
      childTwo={{icon:<BiRocket />,title:'Reduced complexity',desc:'With its user-friendly coding conventions, Python develops complex apps faster.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="HIRE PYTHON DEVELOPERS IN 4-EASY STEPS"
      desc="We have Tailored python Solutions to Match Your Unique Needs. 

      Whether it's a full project team, dedicated python developers, or ongoing support, UNSI lets you decide what's best for your success.
      .
      "
      childOne={{icon:<BiRocket />,
      title:'Share Your Requirements',
      desc:' Drop us a message and we will schedule a call to learn more about your needs.'}}
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
        title:'Find Your Expert',
      desc:'We can help you manage your project with the perfect Python consultant.'
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Schedule an interview',
      desc:'Understand any technical requirements with our Python developers and get a clear picture.'
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'Begin your project',
      desc:'Boost your Python development project with a risk-free analysis.'
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HirePythonDevelopers;
