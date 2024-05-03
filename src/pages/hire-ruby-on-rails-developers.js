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

const HireRubyOnRailsDevelopersPage = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire A Ruby on Rails Developer"
        desc="UNSI is Your Elite Ruby on Rails Hub with a Proven Track Record. Top companies and startups trust us for their crucial software projects, connecting with top-tier developers, engineers, and experts."
      />
     
      <SingleServiceFeature 
      title="Ruby in our sleep" 
      desc="UNSI provides Ruby on Rails Development Services tailored to businesses' needs. Our RoR developers build scalable and secure custom apps with responsive design, high performance, and optimised code."
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
      childOne={{icon:<BiRocket />,title:'Highly Scalable Ruby Solutions', desc:'Experience with architectural patterns for high-scale web apps, emphasizing performance and availability.'}}
      childTwo={{icon:<BiRocket />,title:'Advanced Backend Ruby Systems',
      desc:
      'Skilled in building performant APIs and complex Ruby applications with microservices architecture.'
      }}
/>

      <SingleServiceFeatureTwo
      title="Ruby on rails application development services"
      desc="As a multi-disciplinary team of developers, UX experts, and project managers, we create Ruby on Rails applications that are secure, scalable, and user-friendly."
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
      childOne={{icon:<BiRocket />,title:'Dedicated Team',desc:'Experienced, self-reliant teams delivering technology solutions and value.'}}
      childTwo={{icon:<BiRocket />,title:'Software Outsourcing',desc:'End-to-end custom software development; you provide the specs, and we deliver the complete solution.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="OUR DEVELOPER’S EVALUATION PROCESS"
      desc="We have Tailored Ruby on rails Solutions to Match Your Unique Needs. 

      Whether it's a full project team, dedicated Ruby on rails developers, or ongoing support, UNSI lets you decide what's best for your success.
      
      "
      childOne={{icon:<BiRocket />,
      title:'Effective Technical Communication',
      desc:' Strong written and verbal skills, adept at conveying complex engineering concepts.'}}
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
        title:'Core Skills and Algorithms',
      desc:'Evaluation of computer science fundamentals, problem-solving, and technical expertise by leading experts.'
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Proactive Problem Solvers',
      desc:'Skilled at creative, independent roadblock resolution, with live-screening by experienced developers.'
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'End-to-End Project Execution',
      desc:'Demonstrated skills in ideation, scoping, implementation, and problem-solving through test projects.'
      
    }}
    childFive={
        {icon:<BiRocket />,
        title:'Sustained Excellence',
      desc:'The expectation of consistently outstanding performance, with post-engagement assessments to uphold our standards.'
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HireRubyOnRailsDevelopersPage;
