"use client";
import { ActionIcon } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Link from 'next/link';
import Image from "next/image";


export function GitHubContibutions() {
  return (
    <div>
          <h2 className="flex items-center gap-1 text-lg font-bold">
            GitHub Contribution calendar
          </h2>
          <div className="relative mx-auto h-32 w-full sp:h-20">
            <Link href={'https://github.com/Yuma-Tsukakoshi'} target="_blank" className="relative mx-auto block h-32 w-full cursor-pointer transition-transform duration-300 hover:scale-105 sp:h-20">
              <Image
                src="https://github-contributions-api.deno.dev/Yuma-Tsukakoshi.svg?no-legend=true&no-total=true&scheme=moon"
                alt="GitHub Contributions"
                fill
                sizes="(max-width: 640px) 800px, 50%"
                priority
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        </div>
  );
}
