import React from "react";

import { MutableStateFlow, ViewModel } from "@jalvin/runtime";
import { Color } from "@jalvin/ui";
import { RsvpPayload } from "src/models/WeddingData";
import { isEmailLikelyValid } from "src/services/RsvpService";
import { submitRsvp } from "src/services/RsvpService";

export class WeddingViewModel extends ViewModel {
  constructor() {
    super();
  }
  readonly fullName = new MutableStateFlow("");

  readonly email = new MutableStateFlow("");

  readonly guestCount = new MutableStateFlow("1");

  readonly attending = new MutableStateFlow(true);

  readonly plusOne = new MutableStateFlow(false);

  readonly dietaryNotes = new MutableStateFlow("");

  readonly note = new MutableStateFlow("");

  readonly isSubmitting = new MutableStateFlow(false);

  readonly statusText = new MutableStateFlow("Please RSVP by August 15, 2026");

  readonly statusColor = new MutableStateFlow(Color.OnSurfaceVariant);

  updateFullName(value) {
    fullName.value = value;
  }

  updateEmail(value) {
    email.value = value;
  }

  updateGuestCount(value) {
    guestCount.value = value;
  }

  updateAttending(value) {
    attending.value = value;
  }

  updatePlusOne(value) {
    plusOne.value = value;
  }

  updateDietaryNotes(value) {
    dietaryNotes.value = value;
  }

  updateNote(value) {
    note.value = value;
  }

  async submit() {
    if (isSubmitting.value) {
      return;
    }
    const parsedGuestCount = (guestCount.value.toIntOrNull() ?? 1);
    if ((fullName.value.trim().length < 2)) {
      statusText.value = "Please enter your full name.";
      statusColor.value = Color.Error;
      return;
    }
    if (!isEmailLikelyValid(email.value)) {
      statusText.value = "Please enter a valid email address.";
      statusColor.value = Color.Error;
      return;
    }
    if ((parsedGuestCount < 1)) {
      statusText.value = "Guest count must be at least 1.";
      statusColor.value = Color.Error;
      return;
    }
    isSubmitting.value = true;
    statusText.value = "Submitting your RSVP...";
    statusColor.value = Color.OnSurfaceVariant;
    try {
      submitRsvp(new RsvpPayload(fullName.value, email.value, parsedGuestCount, attending.value, plusOne.value, dietaryNotes.value, note.value, new Date().toISOString()));
      isSubmitting.value = false;
      statusText.value = "Thank you. Your RSVP was submitted.";
      statusColor.value = Color.Success;
    } catch (e: unknown) {
      if (!(e instanceof unknown)) throw e;
      isSubmitting.value = false;
      statusText.value = "Could not submit RSVP. Check Firebase config and try again.";
      statusColor.value = Color.Error;
    }
  }

}

