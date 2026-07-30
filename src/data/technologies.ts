import {
  _React,
  ClaudeIcon,
  Dart,
  Figma,
  Flutter,
  NextjsIcon,
  NodejsIcon,
  Postgresql,
  Python,
  Swift,
  TypescriptIcon,
} from "@dev.icons/react";
import { ExpoIcon, OpenaiIcon } from "@dev.icons/react/mono";
import AwsIcon from "@/components/icons/aws-icon";
import SwiftUIIcon from "@/components/icons/swift-ui-icon";
import type { TechnologyType } from "@/types/technology";

export const technologies: TechnologyType[] = [
  { icon: _React, text: "React" },
  { icon: NextjsIcon, text: "NextJS" },
  { icon: Figma, text: "Figma" },
  { icon: NodejsIcon, text: "NodeJS" },
  { icon: AwsIcon, text: "AWS" },
  { icon: Python, text: "Python" },
  { icon: OpenaiIcon, text: "Codex" },
  { icon: ClaudeIcon, text: "Claude Code" },
  { icon: _React, text: "React Native" },
  { icon: ExpoIcon, text: "Expo" },
  { icon: Swift, text: "Swift" },
  { icon: SwiftUIIcon, text: "SwiftUI" },
  { icon: TypescriptIcon, text: "TypeScript" },
  { icon: Postgresql, text: "PostgreSQL" },
  { icon: Flutter, text: "Flutter" },
  { icon: Dart, text: "Dart" },
];
