import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <section id="hero" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none font-headline text-accent">
              Launch Your Next Project with Apex
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our platform provides the tools you need to build, deploy, and scale your applications effortlessly. Experience the future of development.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#pricing">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
