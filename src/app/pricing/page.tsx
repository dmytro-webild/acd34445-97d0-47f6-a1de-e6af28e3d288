"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
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

  <div id="pricing-tiers" data-section="pricing-tiers">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Entry",
          price: "Custom",
          subtitle: "For businesses testing paid growth systems.",
          features: [
            "Ad Spend Review",
            "Foundational Setup",
            "Weekly Reporting",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "/contact",
            },
          ],
        },
        {
          id: "p2",
          badge: "Growth",
          price: "Custom",
          subtitle: "For businesses seeking consistent lead generation.",
          features: [
            "Full Meta Ads",
            "Conversion Optimization",
            "Monthly Strategy Call",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "/contact",
            },
          ],
        },
        {
          id: "p3",
          badge: "Scale",
          price: "Custom",
          subtitle: "For businesses focused on scalable long-term growth.",
          features: [
            "Omnichannel Strategy",
            "Advanced Analytics",
            "Priority Support",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "/contact",
            },
          ],
        },
      ]}
      title="Predictable Growth Plans"
      description="Choose the level of growth that fits your current business stage."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Pricing"
      title="Transparent and scalable solutions for every size."
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
