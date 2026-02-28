export type PatternCategory = "components" | "layouts" | "forms" | "navigation";

export interface Pattern {
  id: string;
  title: string;
  description: string;
  category: PatternCategory;
  tags: string[];
  path: string;
}

export const patterns: Pattern[] = [
  {
    id: "button-variants",
    title: "Button Variants",
    description:
      "All button variants including default, destructive, outline, secondary, ghost, and link styles with multiple sizes.",
    category: "components",
    tags: ["button", "interactive", "cta"],
    path: "/patterns/button-variants",
  },
  {
    id: "card-variants",
    title: "Card Variants",
    description:
      "Flexible card components for displaying grouped content — stats, profiles, products, notifications, and interactive surfaces.",
    category: "components",
    tags: ["card", "layout", "container", "surface"],
    path: "/patterns/card-variants",
  },
];

export const categoryLabels: Record<PatternCategory, string> = {
  components: "Components",
  layouts: "Layouts",
  forms: "Forms",
  navigation: "Navigation",
};
