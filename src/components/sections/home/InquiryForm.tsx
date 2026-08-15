import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import { CONTACT } from "@/lib/constants";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  product: z.string(),
  details: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const PRODUCTS = [
  "CPVC Industrial Piping",
  "PVC Pipes",
  "SWR Systems",
  "Borewell Pipes",
  "Water Tanks",
  "Industrial Fittings",
  "Agri Solutions",
  "DWC Pipes",
];

type Status = "idle" | "sending" | "sent" | "error";

const MAP_Q = encodeURIComponent(
  "558,Sathy Road,Erode Tamil Nadu 638003"
);

const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`;

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="min-w-0">
    <label className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
      {label}
    </label>

    {children}

    {error && (
      <p className="mt-1 text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const InfoRow = ({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) => (
  <div className="flex items-start gap-3.5">
    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50">
      <Icon className="size-[18px] text-brand-600" />
    </span>

    <div className="min-w-0">
      <h4 className="text-sm font-bold text-ink">
        {title}
      </h4>

      {lines.map((line) => (
        <p
          key={line}
          className="break-words text-[13px] leading-5 text-muted"
        >
          {line}
        </p>
      ))}
    </div>
  </div>
);

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      product: PRODUCTS[0],
    },
  });

  const onSubmit = (data: FormValues) => {
    setStatus("sending");

    try {
      const recipient = "sales@ponshankaragencies.com";

      const subject = `New Product Inquiry - ${data.product}`;

      const body = `
New Product Inquiry
===================

Customer Details

Name:
${data.name}

Company:
${data.company || "Not provided"}

Email:
${data.email}

Interested Product:
${data.product}

Project Details:
${data.details || "Not provided"}

===================
This inquiry was submitted from the Ponshankar Agencies website.
      `.trim();

      const mailtoUrl =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      reset({
        product: PRODUCTS[0],
      });

      setStatus("sent");

      window.setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Mailto error:", error);

      setStatus("error");

      window.setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section className="section-y">
      <div className="container-px">

        <div
          className="
            grid
            items-start
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >

          {/* ===================================================
              LEFT — CONTACT INFORMATION
          =================================================== */}
          <Reveal>
            <div className="lg:pr-6">

              <h2
                className="
                  max-w-xl
                  text-2xl
                  font-bold
                  leading-tight
                  text-ink
                  sm:text-3xl
                  lg:text-[2.15rem]
                "
              >
                Let&apos;s build something great together.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-muted
                  sm:text-[15px]
                "
              >
                Have a requirement or a query? Reach out to our
                technical team today. We provide detailed
                estimations and on-site consultations for large
                projects.
              </p>

              <div className="mt-6 grid gap-4">

                <InfoRow
                  icon={MapPin}
                  title="Head Office"
                  lines={[
                    CONTACT.address.line1,
                    CONTACT.address.line2,
                  ]}
                />

                <InfoRow
                  icon={Mail}
                  title="Email Us"
                  lines={[...CONTACT.emails]}
                />

                <InfoRow
                  icon={Phone}
                  title="Call Support"
                  lines={[...CONTACT.phones]}
                />

              </div>

              {/* Map */}
              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-2xl
                  border
                  border-line
                  bg-slate-100
                  shadow-sm
                "
              >
                <iframe
                  title="Ponshankar Agencies location"
                  src={MAP_SRC}
                  width="100%"
                  height="190"
                  style={{
                    border: 0,
                    display: "block",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

            </div>
          </Reveal>

          {/* ===================================================
              RIGHT — INQUIRY FORM
          =================================================== */}
          <Reveal delay={0.1}>
            <div
              className="
                rounded-2xl
                border
                border-line
                bg-white
                p-5
                shadow-[var(--shadow-card)]
                sm:p-6
                lg:p-7
              "
            >

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-ink">
                  Send an Inquiry
                </h3>

                <p className="mt-1 text-sm text-muted">
                  Tell us what you need and our team will get
                  back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Send an inquiry"
                className="flex flex-col gap-4"
              >

                {/* Name + Company */}
                <div className="grid gap-4 sm:grid-cols-2">

                  <Field
                    label="Full Name"
                    error={errors.name?.message}
                  >
                    <Input
                      placeholder="John Doe"
                      {...register("name")}
                    />
                  </Field>

                  <Field label="Company Name">
                    <Input
                      placeholder="Acme Construction"
                      {...register("company")}
                    />
                  </Field>

                </div>

                {/* Email */}
                <Field
                  label="Email Address"
                  error={errors.email?.message}
                >
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                  />
                </Field>

                {/* Product */}
                <Field label="Interested Products">
                  <Select {...register("product")}>
                    {PRODUCTS.map((product) => (
                      <option
                        key={product}
                        value={product}
                      >
                        {product}
                      </option>
                    ))}
                  </Select>
                </Field>

                {/* Project Details */}
                <Field label="Project Details">
                  <Textarea
                    placeholder="Tell us about your project requirements..."
                    {...register("details")}
                  />
                </Field>

                {/* Submit */}
                <Button
                  type="submit"
                  block
                  size="lg"
                  variant="navy"
                  disabled={status === "sending"}
                  aria-label="Send inquiry"
                  className="mt-1"
                >
                  {status === "sending" ? (
                    "Opening Email..."
                  ) : status === "sent" ? (
                    "✓ Email Ready"
                  ) : status === "error" ? (
                    "Failed - Try Again"
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="size-4" />
                    </>
                  )}
                </Button>

                {/* Success */}
                {status === "sent" && (
                  <p className="text-center text-xs leading-5 text-green-600">
                    Your email application has been opened with
                    the inquiry details.
                  </p>
                )}

                {/* Error */}
                {status === "error" && (
                  <p className="text-center text-xs leading-5 text-red-500">
                    Unable to open your email application. Please
                    email{" "}
                    <a
                      href="mailto:sales@ponshankaragencies.com"
                      className="font-semibold underline"
                    >
                      sales@ponshankaragencies.com
                    </a>{" "}
                    directly.
                  </p>
                )}

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}