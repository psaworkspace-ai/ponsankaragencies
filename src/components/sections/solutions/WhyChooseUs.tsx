import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Headphones,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "High-quality piping products from trusted manufacturers.",
  },
  {
    icon: ShieldCheck,
    title: "Authorized Brands",
    description: "100% genuine products sourced directly from leading brands.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable and on-time delivery for projects of every size.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Expert guidance to choose the right products.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "Responsive assistance before and after every purchase.",
  },
  {
    icon: PackageCheck,
    title: "Complete Solutions",
    description: "Comprehensive piping solutions for every application.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-softer py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Customers Trust Ponshankar Agencies"
          subtitle="Delivering quality products, dependable service, and complete piping solutions for residential, commercial, and industrial projects."
          className="mb-10"
        />

<div className="relative">
          {/* Navigation Buttons */}
          <button className="applications-prev absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-white p-3 shadow-lg transition hover:bg-brand-600 hover:text-white lg:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button className="applications-next absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-white p-3 shadow-lg transition hover:bg-brand-600 hover:text-white lg:flex">
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            speed={700}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".applications-prev",
              nextEl: ".applications-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {FEATURES.map((feature, index) => (
              <SwiperSlide key={feature.title} className="h-auto">
                <Reveal delay={index * 0.05}>
                  <div
                    className="
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-line
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-brand-200
                      hover:shadow-xl
                    "
                  >
                    {/* Background Glow */}
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />

                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100">
                        <feature.icon className="h-6 w-6 text-brand-600" />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-ink">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}