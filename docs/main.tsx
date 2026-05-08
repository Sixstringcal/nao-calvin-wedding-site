import React from "react";
import { jalvinEquals } from "@jalvin/runtime";

import { mutableStateOf, println } from "@jalvin/runtime";
import { Scaffold } from "@jalvin/ui";
import { Column } from "@jalvin/ui";
import { Modifier } from "@jalvin/ui";
import { Box } from "@jalvin/ui";
import { COUPLE_NAMES } from "src/models/WeddingData";
import { WeddingViewModel } from "src/viewmodels/WeddingViewModel";
import { WeddingHeader } from "src/components/ContentSections";
import { WelcomePage } from "src/components/ContentSections";
import { DetailsPage } from "src/components/ContentSections";
import { GalleryPage } from "src/components/ContentSections";
import { RegistryPage } from "src/components/ContentSections";
import { RsvpSection } from "src/components/RsvpSection";

export const weddingViewModel = new WeddingViewModel();

export function main() {
  println("Wedding app loaded");
}

interface CurrentPageBodyProps {
  readonly page: any;
}

export function CurrentPageBody({ page }: CurrentPageBodyProps) {
  const __when_subject__ = page;
  if (jalvinEquals(__when_subject__, "welcome")) {
    return React.createElement(WelcomePage, {});
  } else if (jalvinEquals(__when_subject__, "details")) {
    return React.createElement(DetailsPage, {});
  } else if (jalvinEquals(__when_subject__, "gallery")) {
    return React.createElement(GalleryPage, {});
  } else if (jalvinEquals(__when_subject__, "registry")) {
    return React.createElement(RegistryPage, {});
  } else {
    return React.createElement(RsvpSection, { vm: weddingViewModel });
  }
}

export function WeddingApp() {
  const currentPage = mutableStateOf("welcome");
  return React.createElement(Scaffold, { modifier: Modifier.fillMaxSize().background("#fffaf5"), topBar: React.createElement(WeddingHeader, { selectedPage: currentPage.value, onSelect: (page) => currentPage.value = page }) }, [React.createElement(Box, { modifier: Modifier.fillMaxWidth().padding(20) }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth(), spacing: 18 }, [React.createElement(CurrentPageBody, { page: currentPage.value })])])]);
}

