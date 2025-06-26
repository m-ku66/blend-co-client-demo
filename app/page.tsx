"use client";

import { SectionWrapper, UIElement } from "./components";
import { Section } from "./components";
import { useHydration } from "./hooks/useHydration";
import { useThemeStore } from "./store";

export default function Home() {
  const isHydrated = useHydration();
  const { currentTheme } = useThemeStore((state) => state);

  return (
    <SectionWrapper
      enableScrollSnap={true}
      showNavigation={true}
      navigationPosition="center"
      // onSectionChange={() => console.log("Section changed")}
      debug={true}
    >
      <Section id="hero-featured-items" maxWidth="100vh" minHeight="100vh" textAlignment="left" flexDirection="column">
        <h1>Hero</h1>
      </Section>
      <Section id="at-a-glance-menu-categories" maxWidth="100vh" minHeight="100vh" textAlignment="left" flexDirection="column">
        <h1>Menu Categories</h1>
      </Section>
      <Section id="our-story" maxWidth="100vh" minHeight="100vh" textAlignment="left" flexDirection="column">
        <h1>Story</h1>
      </Section>
    </ SectionWrapper>
  )
}