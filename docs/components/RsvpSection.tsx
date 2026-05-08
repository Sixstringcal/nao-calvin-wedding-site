import React from "react";

import { collectAsState } from "@jalvin/runtime";
import { Card } from "@jalvin/ui";
import { Column } from "@jalvin/ui";
import { Text } from "@jalvin/ui";
import { Input } from "@jalvin/ui";
import { TextArea } from "@jalvin/ui";
import { Checkbox } from "@jalvin/ui";
import { Button } from "@jalvin/ui";
import { Modifier } from "@jalvin/ui";
import { TextStyle } from "@jalvin/ui";
import { WeddingViewModel } from "src/viewmodels/WeddingViewModel";

interface RsvpSectionProps {
  readonly vm: any;
}

export function RsvpSection({ vm }: RsvpSectionProps) {
  const fullName = collectAsState(vm.fullName);
  const email = collectAsState(vm.email);
  const guestCount = collectAsState(vm.guestCount);
  const attending = collectAsState(vm.attending);
  const plusOne = collectAsState(vm.plusOne);
  const dietaryNotes = collectAsState(vm.dietaryNotes);
  const note = collectAsState(vm.note);
  const isSubmitting = collectAsState(vm.isSubmitting);
  const statusText = collectAsState(vm.statusText);
  const statusColor = collectAsState(vm.statusColor);
  return React.createElement(Card, { modifier: Modifier.fillMaxWidth(), elevation: 2 }, [React.createElement(Column, { modifier: Modifier.fillMaxWidth().padding(28), spacing: 14 }, [React.createElement(Text, { text: "RSVP", style: TextStyle.headlineMedium }), React.createElement(Text, { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", style: TextStyle.bodyLarge }), React.createElement(Input, { value: fullName.value, onValueChange: (v) => vm.updateFullName(v), label: "Full name", placeholder: "Lorem ipsum" }), React.createElement(Input, { value: email.value, onValueChange: (v) => vm.updateEmail(v), label: "Email", placeholder: "Lorem ipsum", type: "email" }), React.createElement(Input, { value: guestCount.value, onValueChange: (v) => vm.updateGuestCount(v), label: "Total guests", placeholder: "Lorem ipsum" }), React.createElement(Checkbox, { checked: attending.value, onCheckedChange: (v) => vm.updateAttending(v), label: "I / we can attend" }), React.createElement(Checkbox, { checked: plusOne.value, onCheckedChange: (v) => vm.updatePlusOne(v), label: "I need a plus one" }), React.createElement(TextArea, { value: dietaryNotes.value, onValueChange: (v) => vm.updateDietaryNotes(v), label: "Dietary needs", placeholder: "Lorem ipsum dolor sit amet", rows: 3 }), React.createElement(TextArea, { value: note.value, onValueChange: (v) => vm.updateNote(v), label: "Message for the couple", placeholder: "Lorem ipsum dolor sit amet", rows: 4 }), React.createElement(Button, { text: (isSubmitting.value ? "Sending..." : "Submit RSVP"), enabled: !isSubmitting.value, variant: "filled", onClick: (it) => (async () => { vm.submit(); })() }), React.createElement(Text, { text: statusText.value, style: TextStyle.bodyMedium, color: statusColor.value })])]);
}

