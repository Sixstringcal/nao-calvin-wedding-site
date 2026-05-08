import React from "react";
import { jalvinEquals } from "@jalvin/runtime";

import { Card } from "@jalvin/ui";
import { Column } from "@jalvin/ui";
import { Row } from "@jalvin/ui";
import { Box } from "@jalvin/ui";
import { Image } from "@jalvin/ui";
import { Text } from "@jalvin/ui";
import { Divider } from "@jalvin/ui";
import { Modifier } from "@jalvin/ui";
import { TextStyle } from "@jalvin/ui";
import { Color } from "@jalvin/ui";
import { COUPLE_NAMES } from "src/models/WeddingData";
import { WEDDING_DATE } from "src/models/WeddingData";
import { VENUE_NAME } from "src/models/WeddingData";
import { VENUE_ADDRESS } from "src/models/WeddingData";
import { ScheduleItem } from "src/models/WeddingData";
import { scheduleItems } from "src/models/WeddingData";
import { galleryPhotos } from "src/models/WeddingData";
import { registryItems } from "src/models/WeddingData";

interface SectionShellProps {
  readonly title: any;
  readonly subtitle?: any;
}

export function SectionShell({ title, subtitle = null }: SectionShellProps) {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 1 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 10 }, [React.createElement(Text, { text: title, style: TextStyle.headlineMedium, color: Color.Primary })])]);
}

export function WelcomeHero() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 2 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(40), spacing: 14 }, [React.createElement(Text, { text: "Lorem ipsum dolor sit amet", style: TextStyle.headlineLarge, color: "#5c3b24" }), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", style: TextStyle.titleLarge, color: "#6c6259" }), React.createElement(Text, { text: `${WEDDING_DATE} at ${VENUE_NAME}`, style: TextStyle.bodyLarge, color: "#8a7664" }), React.createElement(Text, { text: VENUE_ADDRESS, style: TextStyle.bodyLarge, color: "#8a7664" })])]);
}

export function IntroNote() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), outlined: true }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 10 }, [React.createElement(Text, { text: "Lorem ipsum", style: TextStyle.titleLarge }), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", style: TextStyle.bodyLarge }), React.createElement(Text, { text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", style: TextStyle.bodyMedium, color: Color.OnSurfaceVariant })])]);
}

export function HeroSection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 2 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(24), spacing: 10 }, [React.createElement(Text, { text: COUPLE_NAMES, style: TextStyle.displaySmall, color: Color.Primary }), React.createElement(Text, { text: "We're getting married", style: TextStyle.headlineMedium }), React.createElement(Text, { text: WEDDING_DATE, style: TextStyle.titleLarge }), React.createElement(Text, { text: `Ceremony + Reception at ${VENUE_NAME}`, style: TextStyle.bodyLarge, color: Color.OnSurfaceVariant })])]);
}

export function StorySection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), outlined: true }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 10 }, [React.createElement(Text, { text: "Lorem ipsum", style: TextStyle.titleLarge }), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", style: TextStyle.bodyLarge }), React.createElement(Text, { text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", style: TextStyle.bodyLarge }), React.createElement(Text, { text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", style: TextStyle.bodyMedium, color: Color.OnSurfaceVariant })])]);
}

export function DetailsSection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 1 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 10 }, [React.createElement(Text, { text: "Wedding Details", style: TextStyle.titleLarge }), React.createElement(Divider, { modifier: Modifier.fillMaxWidth() }), React.createElement(Text, { text: `Date: ${WEDDING_DATE}`, style: TextStyle.bodyLarge }), React.createElement(Text, { text: `Venue: ${VENUE_NAME}`, style: TextStyle.bodyLarge }), React.createElement(Text, { text: `Address: ${VENUE_ADDRESS}`, style: TextStyle.bodyLarge }), React.createElement(Text, { text: "Dress Code: Garden formal", style: TextStyle.bodyLarge }), React.createElement(Text, { text: "Ceremony starts at 4:30 PM", style: TextStyle.bodyLarge })])]);
}

interface ScheduleCardProps {
  readonly item: any;
}

export function ScheduleCard({ item }: ScheduleCardProps) {
  return React.createElement(Card, { modifier: Modifier.width(220), elevation: 0 }, [React.createElement(Column, { modifier: Modifier.padding(18), spacing: 6 }, [React.createElement(Text, { text: item.time, style: TextStyle.titleMedium, color: Color.Primary }), React.createElement(Text, { text: item.title, style: TextStyle.bodyLarge })])]);
}

export function ScheduleSection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), outlined: true }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 14 }, [React.createElement(Text, { text: "Day Of Schedule", style: TextStyle.titleLarge }), React.createElement(Row, { spacing: 10, wrap: true }, [...(() => { const __c: any[] = []; for (const item of scheduleItems()) { __c.push(React.createElement(ScheduleCard, { item })); } return __c; })()])])]);
}

export function GallerySection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 1 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 14 }, [React.createElement(Text, { text: "Photos", style: TextStyle.titleLarge }), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", style: TextStyle.bodySmall, color: Color.OnSurfaceVariant }), React.createElement(Row, { spacing: 12, wrap: true }, [...(() => { const __c: any[] = []; for (const photo of galleryPhotos()) { __c.push(React.createElement(Image, { src: photo.src, alt: photo.alt, modifier: Modifier.width(260).height(180).borderRadius(10), contentScale: "crop" })); } return __c; })()])])]);
}

export function RegistrySection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), outlined: true }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 12 }, [React.createElement(Text, { text: "Registry", style: TextStyle.titleLarge }), ...(() => { const __c: any[] = []; for (const item of registryItems()) { __c.push(React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 0 }, [React.createElement(Row, { modifier: Modifier.fillMaxWidth().padding(16), horizontalArrangement: "spaceBetween", wrap: true }, [React.createElement(Text, { text: item.label, style: TextStyle.titleMedium }), React.createElement(Text, { text: item.url, style: TextStyle.bodyMedium, color: Color.Primary })])])); } return __c; })(), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", style: TextStyle.bodyMedium, color: Color.OnSurfaceVariant })])]);
}

export function LocationSection() {
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), outlined: true }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 8 }, [React.createElement(Text, { text: "Location", style: TextStyle.titleMedium }), React.createElement(Text, { text: VENUE_NAME, style: TextStyle.bodyLarge }), React.createElement(Text, { text: VENUE_ADDRESS, style: TextStyle.bodyLarge }), React.createElement(Text, { text: `Map: https://maps.google.com/?q=${VENUE_ADDRESS}`, style: TextStyle.bodySmall, color: Color.OnSurfaceVariant })])]);
}

interface NavChipProps {
  readonly label: any;
  readonly pageKey: any;
  readonly selectedPage: any;
  readonly onSelect: any;
}

export function NavChip({ label, pageKey, selectedPage, onSelect }: NavChipProps) {
  return React.createElement(Card, { modifier: Modifier.padding(0).background("transparent").border("none").borderRadius(0).boxShadow("none"), elevation: 0, outlined: false, onClick: (it) => onSelect(pageKey) }, [React.createElement(Column, { modifier: Modifier.padding("10px 8px 4px 8px"), spacing: 8, horizontalAlignment: "center" }, [React.createElement(Text, { text: label, style: TextStyle.labelLarge, modifier: Modifier.Default.letterSpacing("0.08em"), color: (jalvinEquals(selectedPage, pageKey) ? "#5c3b24" : "#7a6a5d") }), React.createElement(Box, { modifier: Modifier.width(36).height("2px").background((jalvinEquals(selectedPage, pageKey) ? "#b98a62" : "transparent")) }, [])])]);
}

interface NavBarProps {
  readonly selectedPage: any;
  readonly onSelect: any;
}

export function NavBar({ selectedPage, onSelect }: NavBarProps) {
  return React.createElement(Row, { modifier: Modifier.fillMaxWidth(), spacing: 20, wrap: true, horizontalArrangement: "center" }, [React.createElement(NavChip, { label: "Welcome", pageKey: "welcome", selectedPage, onSelect }), React.createElement(NavChip, { label: "Details", pageKey: "details", selectedPage, onSelect }), React.createElement(NavChip, { label: "Gallery", pageKey: "gallery", selectedPage, onSelect }), React.createElement(NavChip, { label: "Registry", pageKey: "registry", selectedPage, onSelect }), React.createElement(NavChip, { label: "RSVP", pageKey: "rsvp", selectedPage, onSelect })]);
}

interface WeddingHeaderProps {
  readonly selectedPage: any;
  readonly onSelect: any;
}

export function WeddingHeader({ selectedPage, onSelect }: WeddingHeaderProps) {
  return React.createElement(Box, { modifier: Modifier.fillMaxWidth().background("#f8f1ea") }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().maxWidth(980).margin("0 auto").padding("28px 32px 20px 32px"), spacing: 8, horizontalAlignment: "center" }, [React.createElement(Text, { text: "WELCOME TO OUR WEDDING WEEKEND", style: TextStyle.labelLarge, modifier: Modifier.Default.letterSpacing("0.12em"), color: "#9a8069" }), React.createElement(Text, { text: COUPLE_NAMES, style: TextStyle.displayMedium, modifier: Modifier.Default.fontFamily("Georgia, 'Times New Roman', serif").textAlign("center"), color: "#4e3526" }), React.createElement(Text, { text: `${WEDDING_DATE}  •  Santa Cruz, California`, style: TextStyle.titleMedium, modifier: Modifier.Default.letterSpacing("0.04em").textAlign("center"), color: "#76685d" }), React.createElement(Text, { style: TextStyle.bodySmall, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", modifier: Modifier.Default.textAlign("center"), color: "#8f7d70" }), React.createElement(Box, { modifier: Modifier.width("120px").height("1px").background("#dac8b8").marginTop(8).marginBottom(2) }, []), React.createElement(NavBar, { selectedPage, onSelect })])]);
}

export function WelcomePage() {
  return React.createElement(Column, { modifier: Modifier.fillMaxWidth(), spacing: 18 }, [React.createElement(WelcomeHero, {}), React.createElement(IntroNote, {}), React.createElement(StorySection, {})]);
}

export function DetailsPage() {
  return React.createElement(Column, { modifier: Modifier.fillMaxWidth(), spacing: 18 }, [React.createElement(SectionShell, { title: "Weekend Details", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }), React.createElement(DetailsSection, {}), React.createElement(ScheduleSection, {}), React.createElement(LocationSection, {})]);
}

export function GalleryPage() {
  return React.createElement(Column, { modifier: Modifier.fillMaxWidth(), spacing: 18 }, [React.createElement(SectionShell, { title: "A few favorite photos", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }), React.createElement(GallerySection, {})]);
}

export function RegistryPage() {
  return React.createElement(Column, { modifier: Modifier.fillMaxWidth(), spacing: 18 }, [React.createElement(SectionShell, { title: "Registry", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }), React.createElement(RegistrySection, {})]);
}

