export interface ProjectType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  isActive: boolean;
  icon: string;
  cover: string;
  coverStyle?: string;
  href: string;
}
