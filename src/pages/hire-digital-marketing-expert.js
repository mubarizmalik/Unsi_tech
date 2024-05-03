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

const HireDigitalMarketingExpert = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire the Web's Best Content Writer"
        desc="Content Writing Services to Help You Rank Higher and Sell More!"
      />
     
      <SingleServiceFeature 
      title="Personalised approach meets corporate standards" 
      desc="We have the manpower to guarantee the swift, high-volume, and consistent content production typical of corporate agencies with the personalized touch of freelance writers."
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
      childOne={{icon:<BiRocket />,title:'Plan & Create', desc:'Custom content strategies powering sales. Expert-written, plagiarism-checked articles.'}}
      childTwo={{icon:<BiRocket />,title:'Optimise',
      desc:'We integrate your keywords into your blog posts to ensure they are optimised for the search engines.'
      }}
/>

      <SingleServiceFeatureTwo
      title="Grow Your Business With Content"
      desc="We craft customer-focused content with full production management and do strategic guidance for impactful delivery."
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
      childOne={{icon:<BiRocket />,title:'Find expert writers',desc:'We hire the top 1% of writers who can engage your audience & help you grow.'}}
      childTwo={{icon:<BiRocket />,title:'High-quality content, at scale',desc:'We write, design, and produce content which can manage by our team and entire production process.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="Explore how great content writing boosts real business success and growth"
      desc="We have Tailored content writing Solutions to Match Your Unique Needs. 

      Whether it's a full project team, dedicated content writing, or ongoing support, UNSI lets you decide what's best for your success.
      .
      "
      childOne={{icon:<BiRocket />,
      title:'Share Your Content Needs',
      desc:"Connect with us and outline your content requirements. We'll arrange a discussion to delve into your project's specifics."}}
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
        title:'Discover Your Writing Expert',
      desc:'Let us pair you with a proficient content writer skilled in your specific field or style requirements.'
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Arrange an Interview',
      desc:"Engage with your potential writer. Discuss your vision, assess their expertise, and ensure they're the right fit for your project."
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'Commence Your Writing Venture',
      desc:'When satisfied, initiate your project confidently. Your writer will seamlessly align with your needs and project objectives.'
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HireDigitalMarketingExpert;
