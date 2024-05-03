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

const HireContentWritingExpert = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Hire a UX/UI Designer"
        desc="Discover How UNSI Delivers State-of-the-art User Experience That Unlocks the Full Power of Your Product, Brand & Business!"
      />
     
      <SingleServiceFeature 
      title="Streamlined UX/UI design process" 
      desc="We employ cutting-edge design tools and techniques to craft user-friendly, responsive products. Our UI/UX services prioritize intuitive experiences, enhancing user engagement and boosting conversions. 
        Our designs align with the latest trends and best practices, ensuring your products shine in the market."
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
      childOne={{icon:<BiRocket />,title:'UX Strategy', desc:'Utilize acquired insights to formulate a product vision and roadmap. We will create user stories and map out user journeys to validate concepts with real users.'}}
      childTwo={{icon:<BiRocket />,title:'UI Design',
      desc:'Bring it all to life: Design beautiful and functional high-fidelity prototypes and build a scalable design system. We work closely with you on weekly sprints.'
      }}
/>

      <SingleServiceFeatureTwo
      title="Great product design- real business success"
      desc="Unlock business success through our user-centric design. Boost conversions, shape your brand, and create captivating apps. Partner with us for growth."
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
      childOne={{icon:<BiRocket />,title:'Discovery & Immersion',desc:'Provide an in-depth analysis of your business objectives, target audience, and product offerings, and identify our role in contributing to the process effectively.'}}
      childTwo={{icon:<BiRocket />,title:'Usability Testing',desc:'Collect direct user feedback to validate outputs and fuel the iteration process. The first engineering steps can happen in parallel.'}}
      
      />
      {/* <SingleServicePromo /> */}
      <WorkProcessOne 
      title="HIRE A UI/UX DESIGNER IN 5-EASY STEPS"
      desc="We have Tailored UI/UX designer to Match Your Unique Needs. 

      Whether it's a full project team, dedicated UI/UX designer, or ongoing support, UNSI lets you decide what's best for your success.
      .
      "
      childOne={{icon:<BiRocket />,
      title:'Share Your Design Needs',
      desc:"Connect with us and share your design requirements. We'll schedule a call to understand your project's specifics."}}
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
        title:'Find Your Design Expert',
      desc:"Let us match you with a skilled freelance designer adept in UI/UX to cater to your project's unique demands."
      
    }}
    childThree={
        {icon:<BiRocket />,
        title:'Schedule an Interview',
      desc:"Let us match you with a skilled freelance designer adept in UI/UX to cater to your project's unique demands."
      
    }}
    childFour={
        {icon:<BiRocket />,
        title:'Begin Your Design Journey',
      desc:"Once you're satisfied, kickstart your project with confidence. Our designer will seamlessly align with your needs and project goals."
      
    }}
      />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default HireContentWritingExpert;
