import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "avatar1",
    name: "Jane Doe",
    role: "CEO, Innovate Inc.",
    quote: "Apex Landing has transformed our development process. We're launching features faster than ever before. It's a game-changer for our team.",
    initials: "JD",
  },
  {
    id: "avatar2",
    name: "John Smith",
    role: "Lead Developer, Tech Solutions",
    quote: "The performance and scalability are incredible. I was able to deploy our new application in minutes. Highly recommended!",
    initials: "JS",
  },
  {
    id: "avatar3",
    name: "Samantha Lee",
    role: "Project Manager, Creative Minds",
    quote: "An intuitive and powerful platform. The user interface is clean, and the features are exactly what we need to succeed.",
    initials: "SL",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Loved by Teams Worldwide
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our satisfied customers have to say about their experience with Apex Landing.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="flex-grow pt-6">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="mt-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      {image && (
                        <AvatarImage 
                          src={image.imageUrl} 
                          alt={image.description} 
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
