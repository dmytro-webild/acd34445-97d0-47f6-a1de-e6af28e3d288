"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
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

  <div id="team-leadership" data-section="team-leadership">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "t1",
          name: "Ishimwe Carrick",
          role: "Founder & Lead Strategist",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dc3uYiundOXcexzEdBZu1z2cV2/uploaded-1778568880174-a60vkedq.png",
        },
        {
          id: "t2",
          name: "Enzo Kaze",
          role: "Co-Founder · Paid Ads Specialist",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dc3uYiundOXcexzEdBZu1z2cV2/uploaded-1778570833122-i336hor1.png",
        },
        {
          id: "t3",
          name: "Mico Brandon",
          role: "Co-Founder · Creative Strategist",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dc3uYiundOXcexzEdBZu1z2cV2/uploaded-1778570833122-i336hor1.png",
        },
      ]}
      title="Our Leadership Team"
      description="Strategic experts dedicated to your brand's growth."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Story"
      title="Dedicated to your long-term success."
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
