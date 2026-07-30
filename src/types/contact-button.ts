import type { ComponentType } from "react";

export interface ContactButtonPropsType {
  icon: ComponentType<{ size?: number; className?: string }>;
  name: string;
  rightIcon?: ComponentType<{ size?: number; className?: string }>;
  url: string;
}
