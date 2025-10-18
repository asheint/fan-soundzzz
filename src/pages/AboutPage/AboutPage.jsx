import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Us",
          quote: "Creating the perfect soundscape for better sleep and relaxation.",
          content: [
            "At Fan Soundzzz, we believe that quality sleep is fundamental to a healthy, productive life. Founded by Ashen Thilakarathna, our platform is dedicated to helping people achieve better sleep through the soothing, consistent sounds of fans. We understand that in our increasingly noisy world, finding the right ambient sound can make the difference between restless nights and restorative sleep.",
            "Our mission is simple: to provide high-quality, authentic fan sounds that mask disruptive noises and create a calming environment conducive to deep, peaceful sleep. Whether you're dealing with noisy neighbors, street traffic, or simply need consistent background sound to quiet your mind, our carefully curated collection of fan sounds offers the perfect solution for your sleep needs.",
            "We specialize in recording and presenting a diverse range of fan sounds, from gentle ceiling fan whispers to powerful white noise generators. Each sound is captured with professional-grade equipment and optimized for extended listening, ensuring that you can enjoy hours of uninterrupted, loop-friendly audio that won't disturb your sleep cycle with sudden changes or interruptions.",
            "Fan Soundzzz is more than just a sound library—it's a community of people who prioritize their sleep health and understand the power of ambient sound. Join thousands of users who have transformed their sleep experience with our platform, and discover how the right fan sound can help you fall asleep faster, stay asleep longer, and wake up more refreshed than ever before.",
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
