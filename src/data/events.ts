export const homepageCateringEvents = [
  { label: "Birthday Parties", icon: "party" as const },
  { label: "School Events", icon: "school" as const },
  { label: "Company Events", icon: "building" as const },
  { label: "Community Gatherings", icon: "users" as const },
  { label: "Family Celebrations", icon: "heart" as const },
];

export const eventTypes = [
  {
    title: "Birthday Parties",
    description:
      "Make birthdays unforgettable with a mobile dessert experience guests of all ages will love.",
  },
  {
    title: "School Events",
    description:
      "Reward students, celebrate milestones, or add something sweet to school gatherings.",
  },
  {
    title: "Company Events",
    description:
      "Treat your team to a fun, photo-friendly dessert break they'll actually remember.",
  },
  {
    title: "Community Gatherings",
    description:
      "From neighborhood block parties to local festivals—we bring the sweet to the community.",
  },
  {
    title: "Family Celebrations",
    description:
      "Graduations, reunions, and family milestones deserve a dessert truck worth screaming about.",
  },
  {
    title: "Fundraisers and Special Events",
    description:
      "Add a memorable dessert experience to fundraisers and special community occasions.",
  },
];

export const cateringBenefits = [
  "A unique mobile dessert experience",
  "Fun for children and adults",
  "Flexible for different event types",
  "A memorable photo-friendly truck",
  "Direct coordination before the event",
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Tell Us About Your Event",
    description:
      "Share your date, location, guest count, and event details.",
  },
  {
    step: 2,
    title: "We Confirm the Details",
    description:
      "We'll follow up about availability and the best setup for your event.",
  },
  {
    step: 3,
    title: "We Bring the Sweet",
    description:
      "The truck arrives ready to serve frozen treats and create a memorable experience.",
  },
];

export const cateringEventTypes = eventTypes.map((e) => e.title);

export const hearAboutOptions = [
  "Instagram",
  "Facebook",
  "Friend or Family",
  "StreetFoodFinder",
  "Event I Attended",
  "Search Engine",
  "Other",
];
