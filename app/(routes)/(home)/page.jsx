"use client"

import Hero from "./Hero";
import Profile from "./Profile";
import ActivityHome from "./ActivityHome";
import GaleryHome from "./GaleryHome";
import Testimoni from "./Testimoni";
import JoinWithUs from "./JoinWithUs";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Hero />
      <Profile />
      <ActivityHome />
      <GaleryHome />
      <Testimoni />
      <JoinWithUs />
    </div>
  );
}
