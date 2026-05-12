"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Pricing",          id: "/pricing"},
        {
          name: "Case Studies",          id: "/case-studies"},
        {
          name: "Process",          id: "/process"},
        {
          name: "About",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="STRATFIELD GROWTH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient"}}
      logoText="STRATFIELD GROWTH"
      description="Scale Your Business with Data-Driven Marketing. We help ambitious businesses generate qualified leads and scale profitably using proven advertising systems. No guesswork, just measurable results."
      buttons={[
        {
          text: "Book a Free Growth Audit",          href: "#"},
        {
          text: "See Case Studies",          href: "/case-studies"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-office-chair-indoors_23-2151108702.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "David K.",          role: "E-commerce Brand Owner",          company: "Premium Lifestyle",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-posing-with-blue-jacket_150588-81.jpg"},
        {
          id: "2",          name: "Sarah L.",          role: "Marketing Director",          company: "TechInnovate",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-boy-with-glasses-holding-cup_23-2148450770.jpg"},
        {
          id: "3",          name: "Michael R.",          role: "Founder",          company: "LocalServices",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-woman_23-2149151021.jpg"},
        {
          id: "4",          name: "Jessica M.",          role: "Director",          company: "GrowthCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-male-entrepreneur-wearing-white-shirt-posing-standing-with-crossed-arms-indoors_7502-9695.jpg"},
        {
          id: "5",          name: "Robert B.",          role: "Owner",          company: "B2B Sol",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-with-smartphone_23-2148613061.jpg"},
      ]}
      title="Success Stories"
      description="Our clients average a 4.2x ROAS within the first 60 days of partnering with us, proving that strategic execution drives rapid, measurable growth."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Proven Impact"
      description="Numbers that define our client success."
      metrics={[
        {
          id: "m1",          value: "150M+",          description: "Managed Ad Spend"},
        {
          id: "m2",          value: "4.2x",          description: "Average ROAS Increase"},
        {
          id: "m3",          value: "500k",          description: "Qualified Leads Generated"},
        {
          id: "m4",          value: "95%",          description: "Client Retention Rate"},
        {
          id: "m5",          value: "24/7",          description: "Monitoring & Support"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Built for Founders Who Value Execution Over Excuses."
      buttons={[
        {
          text: "Learn More",          href: "/about"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Ready to move?"
      title="Let's build your growth engine."
      description="Join other industry leaders and start scaling today."
      buttons={[
        {
          text: "Inquire Now",          href: "/contact"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="STRATFIELD GROWTH"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "/about"},
            {
              label: "Process",              href: "/process"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Services",              href: "/services"},
            {
              label: "Pricing",              href: "/pricing"},
            {
              label: "Case Studies",              href: "/case-studies"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms & Conditions",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2026 Stratfield Growth. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}