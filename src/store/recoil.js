import { atom } from "recoil";

export const isAuthenticatedState = atom({
  key: "isAuthenticatedState",
  default: false, // Set the initial state to false (not authenticated)
});

export const landingPagesState = atom({
  key: "landingPages",
  default: [
    { id: 1, title: "Landing Page 1", description: "Description 1" },
    { id: 2, title: "Landing Page 2", description: "Description 2" },
    // Add more landing pages as needed
  ],
});
