import { jalvinEquals } from "@jalvin/runtime";

import { listOf } from "@jalvin/runtime";

export const COUPLE_NAMES = "Nao Hayashi and Calvin Nielson";

export const WEDDING_DATE = "April 25, 2027";

export const VENUE_NAME = "Hollins House";

export const VENUE_ADDRESS = "20 Clubhouse Rd, Santa Cruz, CA 95060";

export class RsvpPayload {
  readonly fullName;
  readonly email;
  readonly guestCount;
  readonly attending;
  readonly needsPlusOne;
  readonly dietaryNotes;
  readonly message;
  readonly submittedAt;

  constructor(fullName, email, guestCount, attending, needsPlusOne, dietaryNotes, message, submittedAt) {
    this.fullName = fullName;
    this.email = email;
    this.guestCount = guestCount;
    this.attending = attending;
    this.needsPlusOne = needsPlusOne;
    this.dietaryNotes = dietaryNotes;
    this.message = message;
    this.submittedAt = submittedAt;
  }

  copy(fullName = this.fullName, email = this.email, guestCount = this.guestCount, attending = this.attending, needsPlusOne = this.needsPlusOne, dietaryNotes = this.dietaryNotes, message = this.message, submittedAt = this.submittedAt): RsvpPayload {
    return new RsvpPayload(fullName, email, guestCount, attending, needsPlusOne, dietaryNotes, message, submittedAt);
  }

  equals(other: unknown): boolean {
    if (!(other instanceof RsvpPayload)) return false;
    return jalvinEquals(this.fullName, other.fullName) && jalvinEquals(this.email, other.email) && jalvinEquals(this.guestCount, other.guestCount) && jalvinEquals(this.attending, other.attending) && jalvinEquals(this.needsPlusOne, other.needsPlusOne) && jalvinEquals(this.dietaryNotes, other.dietaryNotes) && jalvinEquals(this.message, other.message) && jalvinEquals(this.submittedAt, other.submittedAt);
  }

  toString(): string {
    return `RsvpPayload(fullName=${this.fullName}, email=${this.email}, guestCount=${this.guestCount}, attending=${this.attending}, needsPlusOne=${this.needsPlusOne}, dietaryNotes=${this.dietaryNotes}, message=${this.message}, submittedAt=${this.submittedAt})`;
  }

  hashCode(): number {
    let h = 17;
    h = h * 31 + String(this.fullName).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.email).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.guestCount).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.attending).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.needsPlusOne).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.dietaryNotes).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.message).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.submittedAt).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    return h >>> 0;
  }
}

export class ScheduleItem {
  readonly time;
  readonly title;

  constructor(time, title) {
    this.time = time;
    this.title = title;
  }

  copy(time = this.time, title = this.title): ScheduleItem {
    return new ScheduleItem(time, title);
  }

  equals(other: unknown): boolean {
    if (!(other instanceof ScheduleItem)) return false;
    return jalvinEquals(this.time, other.time) && jalvinEquals(this.title, other.title);
  }

  toString(): string {
    return `ScheduleItem(time=${this.time}, title=${this.title})`;
  }

  hashCode(): number {
    let h = 17;
    h = h * 31 + String(this.time).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.title).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    return h >>> 0;
  }
}

export class RegistryItem {
  readonly label;
  readonly url;

  constructor(label, url) {
    this.label = label;
    this.url = url;
  }

  copy(label = this.label, url = this.url): RegistryItem {
    return new RegistryItem(label, url);
  }

  equals(other: unknown): boolean {
    if (!(other instanceof RegistryItem)) return false;
    return jalvinEquals(this.label, other.label) && jalvinEquals(this.url, other.url);
  }

  toString(): string {
    return `RegistryItem(label=${this.label}, url=${this.url})`;
  }

  hashCode(): number {
    let h = 17;
    h = h * 31 + String(this.label).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.url).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    return h >>> 0;
  }
}

export class GalleryPhoto {
  readonly src;
  readonly alt;

  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }

  copy(src = this.src, alt = this.alt): GalleryPhoto {
    return new GalleryPhoto(src, alt);
  }

  equals(other: unknown): boolean {
    if (!(other instanceof GalleryPhoto)) return false;
    return jalvinEquals(this.src, other.src) && jalvinEquals(this.alt, other.alt);
  }

  toString(): string {
    return `GalleryPhoto(src=${this.src}, alt=${this.alt})`;
  }

  hashCode(): number {
    let h = 17;
    h = h * 31 + String(this.src).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    h = h * 31 + String(this.alt).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    return h >>> 0;
  }
}

export function scheduleItems() {
  return listOf(new ScheduleItem("3:30 PM", "Guest Arrival"), new ScheduleItem("4:30 PM", "Ceremony"), new ScheduleItem("6:00 PM", "Dinner + Toasts"), new ScheduleItem("7:30 PM", "Dancing"));
}

export function registryItems() {
  return listOf(new RegistryItem("placeholder", "https://www.youtube.com/"), new RegistryItem("Placeholder", "https://www.google.com/"));
}

export function galleryPhotos() {
  return listOf(new GalleryPhoto("photos/engagement-01.jpg", "Engagement photo one"), new GalleryPhoto("photos/engagement-02.jpg", "Engagement photo two"), new GalleryPhoto("photos/engagement-03.jpg", "Engagement photo three"));
}

