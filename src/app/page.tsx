import Link from "next/link";
import { patterns, categoryLabels } from "@/lib/patterns";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const categorized = patterns.reduce(
    (acc, pattern) => {
      if (!acc[pattern.category]) acc[pattern.category] = [];
      acc[pattern.category].push(pattern);
      return acc;
    },
    {} as Record<string, typeof patterns>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">DS</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Design Systems</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            A curated collection of UI patterns built with shadcn/ui
          </p>
        </div>
      </header>

      {/* Stats bar */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-3 flex gap-6 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">{patterns.length}</strong> pattern{patterns.length !== 1 ? "s" : ""}
          </span>
          <span>
            <strong className="text-foreground">{Object.keys(categorized).length}</strong> categor{Object.keys(categorized).length !== 1 ? "ies" : "y"}
          </span>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-6 py-10">
        {Object.entries(categorized).map(([category, categoryPatterns]) => (
          <section key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg font-semibold">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {categoryPatterns.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryPatterns.map((pattern) => (
                <Link key={pattern.id} href={pattern.path}>
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/30 cursor-pointer group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {pattern.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {pattern.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {pattern.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
