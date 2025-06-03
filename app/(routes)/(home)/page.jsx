"use client";

import Hero from "./Hero";
import Profile from "./Profile";
import ActivityHome from "./ActivityHome";
import GaleryHome from "./GaleryHome";

import JoinWithUs from "./JoinWithUs";
import ElectionsResults from "./ElectionsResults";
import Location from "./Location";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Hero />
      <Profile />
      <ElectionsResults />
      <ActivityHome />
      <GaleryHome />
      <Location/>
      <JoinWithUs />
    </div>
  );
}
