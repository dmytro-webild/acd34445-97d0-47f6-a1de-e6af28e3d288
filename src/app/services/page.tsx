"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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

  <div id="features-pillars" data-section="features-pillars">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Paid Media Systems",
          description: "Meta and Google advertising campaigns focused on scalable lead generation.",
          tag: "Performance",
          imageSrc: "http://img.b2bpic.net/free-photo/finger-pressing-digital-graphic_1134-293.jpg",
        },
        {
          id: "f2",
          title: "Creative & Conversion Strategy",
          description: "Ad creatives, messaging, and landing page optimization to convert visitors into buyers.",
          tag: "Strategy",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-notepad-composition-desk_23-2147982550.jpg",
        },
        {
          id: "f3",
          title: "Analytics & Reporting",
          description: "Performance tracking, reporting systems, and strategic optimization.",
          tag: "Analytics",
          imageSrc: "http://img.b2bpic.net/free-photo/graph-growth-success-strategy-marketing-computer-concept_53876-47081.jpg",
        },
      ]}
      title="Growth Solutions That Actually Work"
      description="End-to-end marketing services designed to maximize your ROI and build sustainable revenue."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Results Driven"
      description="We measure what matters."
      metrics={[
        {
          id: "ms1",
          value: "200%",
          description: "Growth",
        },
        {
          id: "ms2",
          value: "30%",
          description: "Efficiency Gain",
        },
      ]}
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
