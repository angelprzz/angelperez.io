import type { ComponentType } from "react";

export interface TechnologyType {
  icon: ComponentType<{ size?: number }>;
  text: string;
}
