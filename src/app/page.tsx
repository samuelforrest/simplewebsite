'use client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Rocket, Award, Users, CheckCircle, Mail, ArrowRight } from 'lucide-react';
import React from 'react';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const FEATURES = [
  {
    icon: <Rocket className='w-6 h-6 text-blue-600' aria-hidden='true' />,
    title: 'Fast Launch',
    description: 'Get your project off the ground quickly with our streamlined setup process.',
  },
  {
    icon: <Award className='w-6 h-6 text-yellow-500' aria-hidden='true' />,
    title: 'Quality Design',
    description: 'Professional layouts and components ensure your site always looks its best.',
  },
  {
    icon: <Users className='w-6 h-6 text-green-500' aria-hidden='true' />,
    title: 'Built for Teams',
    description: 'Collaborate seamlessly and scale as your business grows.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Alex Morgan',
    role: 'Product Manager',
    image: '',
    text: 'This simple website starter saved us weeks of development. Clean, fast, and easy to customize!',
  },
  {
    name: 'Jamie Lee',
    role: 'Developer',
    image: '',
    text: 'The design system is intuitive and flexible. Highly recommended for anyone starting a new project.',
  },
];

const FAQS = [
  {
    question: 'Can I use this template for commercial projects?',
    answer: 'Yes, you can use and modify this template freely for both personal and commercial projects.',
  },
  {
    question: 'Is customization easy?',
    answer: 'Absolutely! The structure and components are designed for rapid and easy customization.',
  },
  {
    question: 'Where can I get support?',
    answer: 'We offer documentation and community support to help you get started quickly.',
  },
];

function LandingPage() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Placeholder for form submission logic
    // eslint-disable-next-line no-console
    console.log(data);
    alert('Thank you for reaching out!');
    form.reset();
  }

  return (
    <main className='font-sans bg-white min-h-screen'>
      {/* Header / Navigation */}
      <header className='border-b'>
        <div className='container mx-auto px-4 flex items-center justify-between h-16'>
          <div className='flex items-center gap-2'>
            <Rocket className='w-7 h-7 text-blue-600' aria-hidden='true' />
            <span className='font-bold text-lg text-gray-900'>SimpleSite</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className='gap-6'>
              <NavigationMenuItem>
                <NavigationMenuLink href='#features' className='text-gray-700 hover:text-blue-600 transition-colors'>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#testimonials' className='text-gray-700 hover:text-blue-600 transition-colors'>
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#faq' className='text-gray-700 hover:text-blue-600 transition-colors'>
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#contact' className='text-gray-700 hover:text-blue-600 transition-colors'>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className='space-y-6'
          >
            <Badge className='px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full w-fit'>
              <CheckCircle className='w-4 h-4 mr-1 inline-block' /> Ready to launch
            </Badge>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Build Your Simple Website<br />with Speed & Style
            </h1>
            <p className='text-lg text-gray-600'>
              The easiest way to start your next web project. Professionally designed, developer friendly, and ready for anything.
            </p>
            <div className='flex gap-4'>
              <Button size='lg'>
                Get Started
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button variant='outline' size='lg'>
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className='hidden md:block'
          >
            <img
              src='https://source.unsplash.com/collection/190727/600x400'
              alt='Website preview'
              className='rounded-xl shadow-lg border'
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-semibold text-center mb-12 text-gray-900'
          >
            Features
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className='h-full shadow-sm hover:shadow-md transition-shadow'>
                  <CardHeader className='flex flex-row items-center gap-3'>
                    {feature.icon}
                    <CardTitle className='text-lg font-semibold'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-semibold text-center mb-12 text-gray-900'
          >
            What People Say
          </motion.h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {TESTIMONIALS.map((testi, idx) => (
              <motion.div
                key={testi.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className='h-full shadow-sm'>
                  <CardContent className='pt-8 space-y-4'>
                    <p className='text-gray-700 text-lg'>&quot;{testi.text}&quot;</p>
                    <div className='flex items-center gap-4'>
                      <Avatar>
                        {testi.image ? (
                          <AvatarImage src={testi.image} alt={`${testi.name}'s avatar`} />
                        ) : (
                          <AvatarFallback>
                            {testi.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .slice(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <div className='font-semibold text-gray-900'>{testi.name}</div>
                        <div className='text-gray-500 text-sm'>{testi.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-semibold text-center mb-10 text-gray-900'
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type='single' collapsible className='space-y-2'>
            {FAQS.map((faq, idx) => (
              <AccordionItem value={`faq-${idx}`} key={faq.question}>
                <AccordionTrigger className='text-lg font-medium text-gray-800'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <div className='container mx-auto px-4 max-w-lg'>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-semibold text-center mb-8 text-gray-900'
          >
            Contact Us
          </motion.h2>
          <Alert className='mb-6'>
            <Mail className='w-5 h-5 mr-2 text-blue-600' aria-hidden='true' />
            <AlertTitle>We&apos;d love to hear from you!</AlertTitle>
            <AlertDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </AlertDescription>
          </Alert>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='you@email.com' type='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input placeholder='How can we help you?' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 border-t bg-gray-50'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <Rocket className='w-5 h-5 text-blue-600' aria-hidden='true' />
            <span className='font-medium text-gray-700'>SimpleSite</span>
          </div>
          <div className='text-gray-500 text-sm'>
            &copy; {new Date().getFullYear()} SimpleSite. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;