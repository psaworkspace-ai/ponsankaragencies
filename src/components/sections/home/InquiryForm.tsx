import { useState, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { CONTACT } from "@/lib/constants";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

/* =========================================================
   FORM VALIDATION
========================================================= */

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name."),

  company: z
    .string()
    .trim()
    .optional(),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  product: z
    .string()
    .min(1, "Please select a product."),

  details: z
    .string()
    .trim()
    .optional(),
});

type FormValues = z.infer<typeof schema>;

/* =========================================================
   PRODUCTS
========================================================= */

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

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

/*
 * EmailJS account:
 * Can be your personal Gmail.
 *
 * Customer inquiry:
 * Will be delivered to:
 *
 * ponsankared@gmail.com
 *
 * The recipient is configured inside your EmailJS template.
 */

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* =========================================================
   STATUS
========================================================= */

type Status =
  | "idle"
  | "sending"
  | "sent"
  | "error";

/* =========================================================
   MAP
========================================================= */

const MAP_Q = encodeURIComponent(
  "558,Sathy Road,Erode Tamil Nadu 638003",
);

const MAP_SRC =
  `https://www.google.com/maps?q=${MAP_Q}&output=embed`;

/* =========================================================
   FIELD
========================================================= */

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) => (
  <div className="min-w-0">
    <label className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
      {label}
    </label>

    {children}

    {error && (
      <p
        className="mt-1 text-xs text-red-500"
        role="alert"
      >
        {error}
      </p>
    )}
  </div>
);

/* =========================================================
   CONTACT INFORMATION ROW
========================================================= */

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

/* =========================================================
   INQUIRY FORM
========================================================= */

export function InquiryForm() {
  const [status, setStatus] =
    useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      company: "",
      email: "",
      product: PRODUCTS[0],
      details: "",
    },
  });

  /* =======================================================
     SUBMIT
  ======================================================= */

  const onSubmit = async (data: FormValues) => {
    /*
     * Prevent duplicate submissions.
     */

    if (status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      /* ===================================================
         CHECK EMAILJS CONFIGURATION
      =================================================== */

      if (
        !SERVICE_ID ||
        !TEMPLATE_ID ||
        !PUBLIC_KEY
      ) {
        throw new Error(
          "EmailJS configuration is missing.",
        );
      }

      /* ===================================================
         SEND INQUIRY
      =================================================== */

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          /*
           * Customer name
           *
           * EmailJS:
           * {{from_name}}
           */
          from_name: data.name,

          /*
           * Customer email
           *
           * EmailJS:
           * {{from_email}}
           *
           * Used as Reply To.
           */
          from_email: data.email,

          /*
           * Company
           */
          company:
            data.company?.trim() ||
            "Not provided",

          /*
           * Product
           */
          requirement: data.product,

          /*
           * Project details
           */
          message:
            data.details?.trim() ||
            "No additional details provided",

          /*
           * Subject
           */
          subject:
            `New Product Inquiry - ${data.product}`,
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      /* ===================================================
         SUCCESS
      =================================================== */

      setStatus("sent");

      /* ===================================================
         RESET FORM
      =================================================== */

      reset({
        name: "",
        company: "",
        email: "",
        product: PRODUCTS[0],
        details: "",
      });

      /* ===================================================
         RESET STATUS
      =================================================== */

      window.setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error(
        "EmailJS inquiry failed:",
        error,
      );

      setStatus("error");

      window.setTimeout(() => {
        setStatus("idle");
      }, 5000);
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

          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================= */}

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
                Have a requirement or a query?
                Reach out to our technical team today.
                We provide detailed estimations and
                on-site consultations for large projects.
              </p>

              {/* Contact Details */}

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
                  lines={[
                    ...CONTACT.emails,
                  ]}
                />

                <InfoRow
                  icon={Phone}
                  title="Call Support"
                  lines={[
                    ...CONTACT.phones,
                  ]}
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

          {/* =================================================
              RIGHT — INQUIRY FORM
          ================================================= */}

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

              {/* Form Heading */}

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-ink">
                  Send an Inquiry
                </h3>

                <p className="mt-1 text-sm text-muted">
                  Tell us what you need and our team
                  will get back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Send an inquiry"
                className="flex flex-col gap-4"
              >

                {/* ==========================================
                    NAME + COMPANY
                ========================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <Field
                    label="Full Name"
                    error={errors.name?.message}
                  >
                    <Input
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      {...register("name")}
                      disabled={status === "sending"}
                    />
                  </Field>

                  <Field label="Company Name">
                    <Input
                      type="text"
                      placeholder="Acme Construction"
                      autoComplete="organization"
                      {...register("company")}
                      disabled={status === "sending"}
                    />
                  </Field>

                </div>

                {/* ==========================================
                    EMAIL
                ========================================== */}

                <Field
                  label="Email Address"
                  error={errors.email?.message}
                >
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    {...register("email")}
                    disabled={status === "sending"}
                  />
                </Field>

                {/* ==========================================
                    PRODUCT
                ========================================== */}

                <Field
                  label="Interested Products"
                  error={errors.product?.message}
                >
                  <Select
                    {...register("product")}
                    disabled={status === "sending"}
                  >
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

                {/* ==========================================
                    PROJECT DETAILS
                ========================================== */}

                <Field
                  label="Project Details"
                  error={errors.details?.message}
                >
                  <Textarea
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    {...register("details")}
                    disabled={status === "sending"}
                  />
                </Field>

                {/* ==========================================
                    SUBMIT BUTTON
                ========================================== */}

                <Button
                  type="submit"
                  block
                  size="lg"
                  variant="navy"
                  disabled={status === "sending"}
                  aria-label={
                    status === "sending"
                      ? "Sending inquiry"
                      : "Send inquiry"
                  }
                  className="mt-1"
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="
                          size-4
                          animate-spin
                          rounded-full
                          border-2
                          border-current
                          border-t-transparent
                        "
                        aria-hidden="true"
                      />

                      Sending Inquiry...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 className="size-4" />

                      Inquiry Sent
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="size-4" />

                      Try Again
                    </>
                  ) : (
                    <>
                      Send Inquiry

                      <Send
                        className="size-4"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Button>

                {/* ==========================================
                    SUCCESS MESSAGE
                ========================================== */}

                {status === "sent" && (
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      border-green-200
                      bg-green-50
                      px-4
                      py-3
                      text-center
                      text-xs
                      leading-5
                      text-green-700
                    "
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="size-4 shrink-0" />

                    <span>
                      Your inquiry has been sent
                      successfully. We&apos;ll contact
                      you soon.
                    </span>
                  </div>
                )}

                {/* ==========================================
                    ERROR MESSAGE
                ========================================== */}

                {status === "error" && (
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-center
                      text-xs
                      leading-5
                      text-red-700
                    "
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="size-4 shrink-0" />

                    <span>
                      Unable to send your inquiry right
                      now. Please try again.
                    </span>
                  </div>
                )}

                {/* ==========================================
                    RECIPIENT INFORMATION
                ========================================== */}

                <p className="text-center text-xs text-muted">
                  Your inquiry will be sent securely to{" "}
                  <span className="font-medium text-brand-600">
                    ponsankared@gmail.com
                  </span>
                </p>

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}