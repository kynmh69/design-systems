import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, Mail, Loader2, Plus, Trash2 } from "lucide-react";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-3">{children}</div>
      </CardContent>
    </Card>
  );
}

export default function ButtonVariantsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to patterns
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Button Variants
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                All button variants including default, destructive, outline,
                secondary, ghost, and link styles with multiple sizes.
              </p>
            </div>
            <Badge variant="secondary">components</Badge>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["button", "interactive", "cta"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="max-w-3xl space-y-6">
          {/* Variants */}
          <Section
            title="Variants"
            description="Six style variants to match different use cases and visual hierarchies."
          >
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </Section>

          {/* Sizes */}
          <Section
            title="Sizes"
            description="Three size options plus an icon-only variant."
          >
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon" aria-label="Add">
              <Plus />
            </Button>
          </Section>

          {/* With icons */}
          <Section
            title="With Icons"
            description="Buttons can include leading or trailing icons for added context."
          >
            <Button>
              <Mail />
              Email me
            </Button>
            <Button variant="outline">
              <Plus />
              Add item
            </Button>
            <Button variant="destructive">
              <Trash2 />
              Delete
            </Button>
          </Section>

          {/* States */}
          <Section
            title="States"
            description="Loading and disabled states for interactive feedback."
          >
            <Button disabled>
              <Loader2 className="animate-spin" />
              Loading
            </Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled outline
            </Button>
          </Section>

          {/* Full width */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Full Width</CardTitle>
              <CardDescription className="text-sm">
                Buttons can stretch to fill their container.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Full width default</Button>
              <Button variant="outline" className="w-full">
                Full width outline
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
