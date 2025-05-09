import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import companies from '../data/companies.json';
import faq from '../data/faq.json';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Carousel, CarouselItem, CarouselContent } from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';


const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-20 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
          Find Your Dream Job{' '}
          <span className='flex items-center gap-2 sm:gap-6'>
            and get{' '}
            <img src="/logo.png" alt="Hired Logo" className='h-14 sm:h-24 lg:h-32' />
          </span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
          <Button variant='blue' size='xl'>Find Jobs</Button>
        </Link>
        <Link to='/postjob'>
          <Button variant='destructive' size='xl'>Post a Job</Button>
        </Link>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img src="/banner.jpeg" className='w-full' />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Card>
  <CardHeader>
    <CardTitle>For Job Seekers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Search and apply for jobs,track application ,and more</p>
  </CardContent>
      </Card>
      <Card>
  <CardHeader>
    <CardTitle>For Employeers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Post jobs ,manage applications ,and find the best candidate</p>
  </CardContent>
      </Card>

      </section>
      <Accordion type="single" collapsible>
        {
          faq.map((faq,index)=> (
            
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))
        }
        
  
</Accordion>

    </main>
  );
};

export default LandingPage;