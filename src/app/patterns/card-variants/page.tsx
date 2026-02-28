import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ArrowUpRight,
  Bell,
  Star,
  Users,
  TrendingUp,
  ShoppingCart,
  Heart,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";

function Section({
  title,
  description,
  children,
  grid,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  grid?: boolean;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"}>
        {children}
      </div>
    </div>
  );
}

export default function CardVariantsPage() {
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
                Card Variants
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Flexible card components for displaying grouped content — stats,
                profiles, products, notifications, and more.
              </p>
            </div>
            <Badge variant="secondary">components</Badge>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["card", "layout", "container", "surface"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="max-w-3xl space-y-12">

          {/* Basic structure */}
          <Section
            title="Basic Structure"
            description="Header, content, and footer compose the standard card layout."
          >
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  Optional supporting description placed beneath the title.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card content area. Place any content here — text, form
                  fields, lists, or media.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Action</Button>
                <Button size="sm" variant="ghost">
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </Section>

          {/* Stat cards */}
          <Section
            title="Stat Cards"
            description="Compact cards for surfacing key metrics at a glance."
            grid
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600 font-medium">+20.1%</span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600 font-medium">+180</span>{" "}
                  since last week
                </p>
              </CardContent>
            </Card>
          </Section>

          {/* Profile card */}
          <Section
            title="Profile Card"
            description="Displaying user or team member information."
          >
            <Card className="max-w-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">AJ</span>
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base">Alex Johnson</CardTitle>
                  <CardDescription className="text-sm">
                    Product Designer
                  </CardDescription>
                </div>
                <Button size="icon" variant="ghost" className="shrink-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground">
                  Focused on design systems and component architecture. Open to
                  collaborations.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" className="flex-1">
                  Follow
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Message
                </Button>
              </CardFooter>
            </Card>
          </Section>

          {/* Product card */}
          <Section
            title="Product Card"
            description="E-commerce style card for showcasing items."
          >
            <Card className="max-w-xs overflow-hidden">
              <div className="bg-muted h-40 flex items-center justify-center">
                <ShoppingCart className="h-10 w-10 text-muted-foreground/40" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Minimal Desk Lamp</CardTitle>
                  <Button size="icon" variant="ghost" className="-mt-1 -mr-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Modern workspace lighting</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i <= 4
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    (128)
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold">$89.00</span>
                  <span className="text-sm text-muted-foreground line-through">
                    $120.00
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          </Section>

          {/* Notification card */}
          <Section
            title="Notification Card"
            description="Surfacing alerts, updates, and status messages."
          >
            <Card>
              <CardHeader className="flex flex-row items-start gap-3 pb-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Bell className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-sm font-semibold">
                    New comment on your post
                  </CardTitle>
                  <CardDescription className="text-xs mt-0.5">
                    Sarah left a comment: "This looks great! Could you share the
                    source files?"
                  </CardDescription>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  2m ago
                </span>
              </CardHeader>
              <CardFooter className="pt-0 gap-2">
                <Button size="sm" variant="outline">
                  Reply
                </Button>
                <Button size="sm" variant="ghost">
                  Dismiss
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader className="flex flex-row items-center gap-3 pb-0">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <div>
                  <CardTitle className="text-sm font-semibold text-green-800">
                    Deployment successful
                  </CardTitle>
                  <CardDescription className="text-xs text-green-700">
                    Production build deployed 3 minutes ago — all checks passed.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Section>

          {/* Linked / interactive card */}
          <Section
            title="Interactive Card"
            description="Cards as clickable surfaces — used for navigation and selection."
            grid
          >
            {[
              {
                icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
                bg: "bg-blue-50",
                title: "Analytics",
                desc: "View traffic and engagement metrics.",
              },
              {
                icon: <Users className="h-5 w-5 text-violet-600" />,
                bg: "bg-violet-50",
                title: "Team",
                desc: "Manage members and permissions.",
              },
            ].map(({ icon, bg, title, desc }) => (
              <Card
                key={title}
                className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30 group"
              >
                <CardHeader className="pb-2">
                  <div
                    className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center mb-1`}
                  >
                    {icon}
                  </div>
                  <CardTitle className="text-sm group-hover:text-primary transition-colors flex items-center gap-1">
                    {title}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </Section>

        </div>
      </main>
    </div>
  );
}
