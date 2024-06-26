/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/I04a2QJO2MJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { Prata } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ExampleHomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/placeholder.svg"
            width={40}
            height={40}
            alt="Perfume Brand Logo"
            className="h-6 w-6"
          />
          <span className="sr-only">Esta Perfume</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Collections
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg"
                width={800}
                height={800}
                alt="Perfume Bottle"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    width={80}
                    height={80}
                    alt="Perfume Brand Logo"
                    className="h-12 w-12"
                  />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Art of Fragrance
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Elevate your senses with our exquisite collection of luxury
                    perfumes, crafted with the finest ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Collections
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover our range of captivating fragrances, each crafted to
                  evoke a unique mood and experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Perfume Collection 1"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-xl font-bold">Floral Collection</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Perfume Collection 2"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-xl font-bold">Citrus Collection</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Perfume Collection 3"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-xl font-bold">Woody Collection</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Crafted with Care, Inspired by Nature
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At our perfume brand, we believe in the power of natural
                ingredients to create captivating fragrances that transport you
                to a world of beauty and wonder.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Brand Story"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to our newsletter to stay up-to-date with our latest
            products and offers.
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 sm:ml-auto">
          &copy; 2024 Perfume Brand. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
