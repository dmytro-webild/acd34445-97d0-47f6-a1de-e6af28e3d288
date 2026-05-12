"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
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
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Pricing",
          id: "/pricing",
        },
        {
          name: "Case Studies",
          id: "/case-studies",
        },
        {
          name: "Process",
          id: "/process",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="STRATFIELD GROWTH"
    />
  </div>

  <div id="contact-cta" data-section="contact-cta">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Get in touch"
      title="Ready to Scale Your Brand?"
      description="Book a free 30-minute strategy call. We'll analyze your current setup and show you exactly how we can help you grow profitably."
      buttonText="Book Strategy Call"
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Reach Out"
      title="Let's connect and discuss your goals."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="STRATFIELD GROWTH"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Process",
              href: "/process",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Pricing",
              href: "/pricing",
            },
            {
              label: "Case Studies",
              href: "/case-studies",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms & Conditions",
              href: "#",
            },
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
