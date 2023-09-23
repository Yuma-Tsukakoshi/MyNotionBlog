"use client";

import { HeroContentLeft } from '../components/portfolio/TopHero';
import { ActionIcon } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Link from 'next/link';
import Image from "next/image";

// import { getContributions } from "../components/portfolio/githubContribution/contributions.tsx";
// const username = "Yuma-Tsukakoshi";
// const token = Deno.env.get("GH_READ_USER_TOKEN") || "";
// const contributions = await getContributions(username, token);
// console.log(contributions.toTerm({ scheme: "blue" }));

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HeroContentLeft />
    </main>
  )
}
