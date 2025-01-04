"use client";

import Image from "next/image";
import { partners } from "../components/partners";
import Items from "../components/ui/how-tos";
import {
  faqs,
  faqsCategory,
  faqsSecondCategory,
  faqsTwo,
} from "@/components/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Testimonial from "@/components/ui/testimonial-card";
import { testimonials } from "@/components/testimonials";
import Marquee from "@/components/ui/marquee";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { socials } from "@/components/socials";
import BoxReveal from "@/components/ui/box-reveal";
import { TextAnimate } from "@/components/ui/text-animate";
import DrawerNav from "@/components/ui/drawer";

export default function Home() {
  const [category, setCategory] = useState("Features");
  const [nextCategory, setNextCategory] = useState("General Questions");

  const handleCategory = (faq: string) => {
    setCategory(faq);
  };

  const handleSecondCategory = (faq: string) => {
    setNextCategory(faq);
  };

  const filteredFaqs = faqs.filter((faq) => faq.type === category);
  const filteredFaqsTwo = faqsTwo.filter((faq) => faq.type === nextCategory);

  return (
    <>
      <div className='md:flex relative md:h-screen max-h-[50rem]'>
        <div className='md:py-5 py-3 md:w-3/4'>
          {/* Navbar */}
          <div className='flex items-center justify-between md:justify-start md:gap-20 mb-12 md:px-14 px-5'>
            <Image
              src='/quick-logo.svg'
              height='100'
              width='90'
              alt='Quick Loan logo'
              priority
            />
            <ul className='hidden md:flex items-center text-sm gap-5 bg-slate-100 rounded-full p-2'>
              <li className='bg-primary text-white px-2 py-1 rounded-full'>
                Homepage
              </li>
              <li>Services</li>
              <li>Our Features</li>
              <li>Contact us</li>
            </ul>

            <button className='md:hidden text-sm bg-black text-white px-5 py-2 rounded-full'>
              Download App
            </button>

            <DrawerNav />
          </div>

          {/* Hero */}
          <div className='md:px-14 px-5 md:w-5/6 text-center md:text-start'>
            <div className='md:text-base text-sm border border-primary px-5 py-2 text-primary rounded-full w-fit mx-auto md:mx-0 mb-5'>
              Quick Loans
            </div>
            <BoxReveal boxColor={"#003bf2"} duration={0.5}>
              <div className='md:text-6xl text-3xl font-bold'>
                Easy And <span className='text-primary'>Accessible</span> Loans
                To Empower Your Ambitions
              </div>
            </BoxReveal>
            <div className='text-subtext md:w-4/5 md:my-4 my-5'>
              <TextAnimate animation='blurInUp'>
                Quickloan manages all loan administration and application
                procedures, as well as regulatory compliance.
              </TextAnimate>
            </div>
            <div className='flex justify-center md:justify-start gap-5 text-base mb-20 md:mb-0'>
              <div className='bg-primary px-5 py-2 text-white rounded-full w-fit'>
                Get a loan
              </div>
              <div className='border border-primary px-3 py-2 text-primary rounded-full w-fit'>
                Become a loan vendor
              </div>
            </div>
          </div>
          <Image
            src='/gradient-one.svg'
            width='1000'
            height='1000'
            alt=''
            className='absolute bottom-0'
            priority
          />
        </div>

        {/* Testimonials Mockup */}
        <div className='hidden md:block relative rounded-xl w-1/3 bg-gradient-to-br from-primary via-primary to-slate-100'>
          <div className='absolute bottom-0 -left-[15rem] w-fit h-fit'>
            <Image
              src='/mockup.svg'
              width='500'
              height='500'
              alt=''
              className=''
              priority
            />
            <Image
              src='/testimony-one.svg'
              width='250'
              height='250'
              alt=''
              className='absolute top-10 -left-10'
            />
            <Image
              src='/testimony-two.svg'
              width='250'
              height='250'
              alt=''
              className='absolute top-[7rem] -right-20'
            />
            <Image
              src='/testimony-three.svg'
              width='250'
              height='250'
              alt=''
              className='absolute bottom-[12rem] -right-20'
            />
            <Image
              src='/testimony-four.svg'
              width='250'
              height='250'
              alt=''
              className='absolute bottom-10 -left-10'
            />
          </div>
          <button className='text-base bg-black text-white px-7 py-2 rounded-full absolute top-5 right-10'>
            Download App
          </button>
        </div>
      </div>

      {/* Partners */}
      <div className='pt-5 md:pt-3'>
        <div className='text-center text-primary md:text-4xl text-3xl md:my-5 my-3'>
          Our Partners
        </div>
        <div className='flex'>
          <Marquee className='[--duration:30s]'>
            {partners.map((partner, index) => {
              return (
                <Image
                  key={index}
                  src={partner}
                  height='200'
                  width='200'
                  alt={partner}
                  className='w-40 md:w-60'
                  priority
                />
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* How to. */}
      <div className='relative'>
        <div className='md:flex items-center gap-8 md:px-14 px-5 md:mt-14 my-10 md:mb-20'>
          <Image
            src='/man-woman.svg'
            height='800'
            width='500'
            alt='man and woman smiling'
            className='z-20 mb-5 md:mb-0 w-full md:w-[45%]'
            priority
          />

          <div className=''>
            <h2 className='md:ml-5 md:text-4xl text-3xl font-semibold mb-1'>
              How To Get Loan on QuickLoan
            </h2>
            <div className='md:ml-5 text-subtext md:text-xl'>
              We provide the best loans to help develop your business.
            </div>
            <Items
              icon='/one.svg'
              heading='Sign Up on Quickloan and Set Up Your Account'
              body='You will be on your way to meeting your expectations and urgent wants if you provide all of your account setup and login prerequisites.'
            />
            <Items
              icon='/two.svg'
              heading='Select a Loan Vendor You want to Loan from'
              body='Select a vendor whose payment schedule you are comfortable with and inside your budget. Depending on the vendors interest, the rates change.'
            />
            <Items
              icon='/three.svg'
              heading='Enter the amount you want to Loan and proceed'
              body='Fill in the amount that best meets your needs, Youre only a few clicks away from the happy future you desire.'
            />
          </div>
        </div>
        <Image
          src='/checklist.svg'
          height='850'
          width='750'
          alt='twirl'
          className='md:-mt-[30rem] hidden md:block z-10'
        />
      </div>

      {/* Application Process */}
      <div className='bg-[#EEEEF0]'>
        <div className='flex flex-col-reverse md:flex-row items-center md:px-20 p-5 md:py-10'>
          <div className='md:w-3/5'>
            <div className='text-subtext md:text-4xl text-3xl font-thin'>
              Simplify loan applications by creating{" "}
              <span className='font-semibold text-foreground'>
                simple application process.
              </span>
            </div>
            <div className='text-subtext my-5'>
              Your customers deserve the fastest financing powered by a fully
              digital and lean application process. The loan application can be
              completed in 10 minutes and is available 24/7
            </div>
            <div className='flex items-center gap-2 text-base'>
              <Image
                src='/tick-circle.svg'
                height='50'
                width='25'
                alt='checklist'
              />
              <p>
                Our digital loan application process eliminates the need for any
                paperwork.
              </p>
            </div>
            <div className='flex items-center gap-2 text-base my-3'>
              <Image
                src='/tick-circle.svg'
                height='50'
                width='25'
                alt='checklist'
              />
              <p>Just a button away to get your loan approval</p>
            </div>
            <div className='flex items-center gap-2 text-base'>
              <Image
                src='/tick-circle.svg'
                height='50'
                width='25'
                alt='checklist'
              />
              <p>Reasonable return interest</p>
            </div>
            <div className='text-base bg-primary px-5 py-2 mt-5 text-white rounded-full w-fit'>
              See details
            </div>
          </div>
          <div className='md:w-5/12 -ml-5 mr-5 mb-5 md:mb-0'>
            <Image
              src='/mockup-two.svg'
              height='1000'
              width='1000'
              alt='mockup two'
              priority
            />
          </div>
        </div>
      </div>

      {/* Call to action */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='relative flex flex-col gap-4 items-center justify-center px-5'>
          <div className='flex flex-col gap-3 items-center justify-center py-10'>
            <Image
              src='/loan-icon.svg'
              height='100'
              width='100'
              alt='loan logo'
            />
            <div className='font-bold md:text-5xl text-3xl leading-snug md:w-1/2 text-center'>
              Start Processing Your Financial Potential Today
            </div>
            <div className='text-base bg-primary px-5 py-2 mt-5 text-white rounded-full w-fit'>
              Start your application
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* FAQs */}
      <div className='bg-[#F5F7FE]'>
        <div className='md:px-20 px-5 py-10'>
          <div className='text-center md:text-4xl text-2xl md:w-2/4 mx-auto mb-10 font-medium'>
            Providing Fast Loan{" "}
            <span className='text-subtext font-thin'>
              Solutions to Empower Industries{" "}
            </span>
          </div>
          <div className='md:flex gap-5'>
            <div className='md:w-2/5 mb-5 md:mb-0'>
              <Image
                src='/customer-agent.svg'
                height='500'
                width='500'
                alt='customer agent'
                className='w-full'
                priority
              />
              <Image
                src='/customer-agent-two.svg'
                height='500'
                width='500'
                alt='customer agent'
                className='w-full'
                priority
              />
            </div>

            <div className='md:w-3/5 md:text-base text-[0.65rem]'>
              <div className='w-full flex justify-between items-center'>
                {faqsCategory.map((faq, index) => {
                  return (
                    <div
                      key={index}
                      className={`md:h-16 h-12 rounded-t-3xl p-2 ${
                        faq === category ? "bg-white" : "rounded-b-2xl"
                      }`}>
                      <div
                        className={`${
                          faq === category
                            ? "bg-primary text-white"
                            : "bg-white"
                        }  md:px-5 px-2 py-1 rounded-full cursor-pointer`}
                        onClick={() => handleCategory(faq)}>
                        {faq}
                      </div>
                    </div>
                  );
                })}
              </div>
              <Accordion
                type='single'
                collapsible
                className='bg-white rounded-md px-5'>
                {filteredFaqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      value={`faq ${index}`}
                      className={`${
                        index !== filteredFaqs.length - 1 && "border-b"
                      } py-2`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-subtext'>
                        {faq.response}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className='md:px-20 py-10'>
        <div className='md:flex px-5 md:px-0 justify-between items-center mb-10'>
          <h1 className='text-3xl font-semibold md:w-1/3 text-center md:text-start'>
            Customer words about their experiences
          </h1>
          <p className='md:w-1/3 text-subtext text-center md:text-start mt-3 md:mt-0'>
            We help to keep track of your expenses and incomes. it show
          </p>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden'>
          <Marquee pauseOnHover className='[--duration:30s]'>
            {testimonials.map((testimonial, index) => {
              return <Testimonial key={index} testimonial={testimonial} />;
            })}
          </Marquee>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white'></div>
        </div>
      </div>

      {/* FAQs Two */}
      <div className='md:px-16 p-5 md:py-10'>
        <div className='flex md:flex-row-reverse flex-col-reverse gap-10'>
          <div className='md:w-1/2 md:text-sm text-xs'>
            <div className='w-full flex items-center md:gap-5 gap-3 mb-3'>
              {faqsSecondCategory.map((faq, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`${
                        faq === nextCategory
                          ? "bg-primary text-white"
                          : "bg-slate-100"
                      } px-2 py-1 rounded-full cursor-pointer`}
                      onClick={() => handleSecondCategory(faq)}>
                      {faq}
                    </div>
                  </div>
                );
              })}
            </div>
            <Image
              src='/three-women.svg'
              height='500'
              width='500'
              alt='customer agent'
              className="w-full"
              priority
            />
          </div>

          <div className='md:w-1/2 text-base'>
            <div className='text-3xl mx-auto font-medium'>
              Frequently Asked Questions
            </div>
            <p className='text-subtext my-2'>
              We have addressed the most frequently asked concerns concerning
              our loan services to assist you in making well-informed decisions.
            </p>

            <Accordion
              type='single'
              collapsible
              className='bg-white rounded-md mt-5'>
              {filteredFaqsTwo.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`faq ${index}`}
                    className={`${index === 0 && "border-t"} ${
                      index !== filteredFaqsTwo.length - 1 && "border-b"
                    } md:py-1`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className='text-subtext'>
                      {faq.response}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-footer md:p-16 p-5 text-white'>
        <div className='flex flex-wrap gap-y-5 md:gap-y-0 justify-between'>
          <div className='md:w-1/4 w-full md:text-start text-center'>
            <Image
              src='/quick-logo.svg'
              height='100'
              width='90'
              alt='Quick Loan logo'
              className="mx-auto md:mx-0"
              priority
            />
            <p className='mt-5 mx-auto md:mx-0'>
              Quickloan manages all loan administration and application
              procedures, as well as regulatory compliance.
            </p>
          </div>

          <div className=''>
            <h1 className='text-primary mb-4 font-semibold'>LINKS</h1>
            <div className='flex flex-col gap-1'>
              <p>How it works</p>
              <p>Services</p>
              <p>Features</p>
              <p>Testimonial</p>
              <p>Contact us</p>
            </div>
          </div>

          <div className=''>
            <h1 className='text-primary mb-4 font-semibold'>LEGAL</h1>
            <div className='flex flex-col gap-1'>
              <p>Terms of use</p>
              <p>Terms of conditions</p>
              <p>Privacy policy</p>
              <p>Cookie policy</p>
            </div>
          </div>

          <div className=''>
            <h1 className='text-primary mb-4 font-semibold'>NEWSLETTER</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-subtext'> Over 25000 people have subscribed</p>

              <div className='relative text-base'>
                <input
                  type='text'
                  className='w-full rounded-full pl-4 pr-[120px] py-1.5 text-subtext focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='Enter your email'
                />
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary px-4 py-1 text-sm rounded-full hover:bg-primary-600'>
                  Subscribe
                </button>
              </div>

              <p className='text-base text-subtext'>
                We don't sell your email and spam
              </p>
            </div>
          </div>
        </div>
        <div className='md:w-11/12 mx-auto'>
          <div className='mt-10 mb-2 h-0.5 w-full bg-subtext' />
          <div className='flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between items-center'>
            <div className='flex gap-2'>
              <p>Privacy & Terms</p>
              <p>Contact Us</p>
            </div>
            <p>Copyright @ 2025 QuickLoan</p>
            <div className='flex items-center gap-2'>
              {socials.map((social, index) => {
                return (
                  <Image
                    key={index}
                    src={social.icon}
                    height='30'
                    width='30'
                    alt={social.href}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
