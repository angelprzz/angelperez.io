import {
  _React,
  ClaudeIcon,
  CloudflareIcon,
  Dart,
  Figma,
  FirebaseIcon,
  Flutter,
  NextjsIcon,
  NodejsIcon,
  Postgresql,
  Python,
  SupabaseIcon,
  Swift,
  TailwindIcon,
  TypescriptIcon,
} from "@dev.icons/react";
import { ExpoIcon, OpenaiIcon, VercelIcon } from "@dev.icons/react/mono";
import AwsIcon from "@/components/icons/aws-icon";
import SwiftUIIcon from "@/components/icons/swift-ui-icon";
import type { TechnologyType } from "@/types/technology";

export const technologies: TechnologyType[] = [
  { icon: _React, text: "React" },
  { icon: NextjsIcon, text: "NextJS" },
  { icon: Figma, text: "Figma" },
  { icon: NodejsIcon, text: "NodeJS" },
  { icon: AwsIcon, text: "AWS" },
  { icon: VercelIcon, text: "Vercel" },
  { icon: CloudflareIcon, text: "Cloudflare" },
  { icon: Python, text: "Python" },
  { icon: _React, text: "React Native" },
  { icon: ExpoIcon, text: "Expo" },
  { icon: Swift, text: "Swift" },
  { icon: SwiftUIIcon, text: "SwiftUI" },
  { icon: TypescriptIcon, text: "TypeScript" },
  { icon: Postgresql, text: "PostgreSQL" },
  { icon: SupabaseIcon, text: "Supabase" },
  { icon: FirebaseIcon, text: "Firebase" },
  { icon: TailwindIcon, text: "Tailwind CSS" },
  { icon: Flutter, text: "Flutter" },
  { icon: Dart, text: "Dart" },
  { icon: OpenaiIcon, text: "Codex" },
  { icon: ClaudeIcon, text: "Claude Code" },
];
