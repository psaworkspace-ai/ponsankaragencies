import { useState, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

/* =========================================================
   FORM VALIDATION
========================================================= */

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .optional(),

  company: z
    .string()
    .trim()
    .optional(),

  requirement: z
    .string()
    .min(1, "Please select a product requirement."),

  message: z
    .string()
    .trim()
    .optional(),
});

type FormValues = z.infer<typeof schema>;

/* =========================================================
   PRODUCT REQUIREMENTS
========================================================= */

const REQUIREMENTS = [
  "High-Performance Piping",
  "CPVC Hot & Cold Systems",
  "Industrial Fittings & Valves",
  "Agricultural & Borewell",
  "Storage Tanks",
  "Sewerage & Drainage",
];

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

/*
 * IMPORTANT:
 *
 * These values come from your .env file.
 *
 * VITE_EMAILJS_SERVICE_ID
 * VITE_EMAILJS_TEMPLATE_ID
 * VITE_EMAILJS_PUBLIC_KEY
 *
 * The EmailJS account/login email can be your PERSONAL Gmail.
 *
 * The customer inquiry will be delivered to:
 *
 * ponsankared@gmail.com
 *
 * That recipient is configured inside the EmailJS template.
 */

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* =========================================================
   FIELD COMPONENT
========================================================= */

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) => {
  return (
    <div className="mb-4">
      <label className="mb-[7px] block text-[0.72rem] font-bold uppercase tracking-wider text-ink-2">
        {label}
      </label>

      {children}

      {error && (
        <p
          className="mt-1 text-[0.75rem] text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

/* =========================================================
   CONTACT FORM
========================================================= */

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      requirement: REQUIREMENTS[0],
      message: "",
    },
  });

  /* =======================================================
     SUBMIT FORM
  ======================================================= */

  const onSubmit = async (data: FormValues) => {
    /*
     * Prevent duplicate submissions.
     */
    if (sending) return;

    setSending(true);
    setSent(false);
    setSendError(false);

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
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      /* ===================================================
         SEND EMAIL
      =================================================== */

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          /*
           * Customer name
           *
           * EmailJS template:
           * {{from_name}}
           */
          from_name: data.name,

          /*
           * Customer email
           *
           * EmailJS template:
           * {{from_email}}
           *
           * This is used as Reply To
           */
          from_email: data.email,

          /*
           * Customer phone
           */
          phone:
            data.phone?.trim() ||
            "Not provided",

          /*
           * Customer company
           */
          company:
            data.company?.trim() ||
            "Not provided",

          /*
           * Product requirement
           */
          requirement: data.requirement,

          /*
           * Customer message
           */
          message:
            data.message?.trim() ||
            "No additional message",

          /*
           * Email subject
           */
          subject:
            "New Inquiry - Ponshankar Agencies",
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      /* ===================================================
         SUCCESS
      =================================================== */

      setSent(true);

      /* ===================================================
         RESET FORM
      =================================================== */

      reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: REQUIREMENTS[0],
        message: "",
      });

      /* ===================================================
         HIDE SUCCESS MESSAGE
      =================================================== */

      window.setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      /* ===================================================
         ERROR
      =================================================== */

      console.error(
        "EmailJS inquiry failed:",
        error,
      );

      setSendError(true);

      /* ===================================================
         HIDE ERROR MESSAGE
      =================================================== */

      window.setTimeout(() => {
        setSendError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact inquiry form"
    >
      {/* ==================================================
          CONTACT DETAILS
      ================================================== */}

      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        {/* FULL NAME */}

        <Field
          label="Full Name"
          error={errors.name?.message}
        >
          <Input
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            {...register("name")}
            disabled={sending}
          />
        </Field>

        {/* EMAIL */}

        <Field
          label="Email Address"
          error={errors.email?.message}
        >
          <Input
            type="email"
            placeholder="john@company.com"
            autoComplete="email"
            {...register("email")}
            disabled={sending}
          />
        </Field>

        {/* PHONE */}

        <Field label="Phone Number">
          <Input
            type="tel"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            {...register("phone")}
            disabled={sending}
          />
        </Field>

        {/* COMPANY */}

        <Field label="Company Name">
          <Input
            type="text"
            placeholder="Industrial Corp."
            autoComplete="organization"
            {...register("company")}
            disabled={sending}
          />
        </Field>
      </div>

      {/* ==================================================
          PRODUCT REQUIREMENT
      ================================================== */}

      <Field
        label="Product Requirement"
        error={errors.requirement?.message}
      >
        <Select
          {...register("requirement")}
          disabled={sending}
        >
          {REQUIREMENTS.map((requirement) => (
            <option
              key={requirement}
              value={requirement}
            >
              {requirement}
            </option>
          ))}
        </Select>
      </Field>

      {/* ==================================================
          MESSAGE
      ================================================== */}

      <Field
        label="Message"
        error={errors.message?.message}
      >
        <Textarea
          placeholder="Tell us about your requirement..."
          rows={4}
          {...register("message")}
          disabled={sending}
        />
      </Field>

      {/* ==================================================
          SUBMIT BUTTON
      ================================================== */}

      <Button
        type="submit"
        block
        size="lg"
        disabled={sending}
        aria-label={
          sending
            ? "Sending inquiry"
            : "Send inquiry"
        }
      >
        {sending ? (
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
        ) : (
          <>
            <Mail
              className="size-4"
              aria-hidden="true"
            />

            Send Inquiry
          </>
        )}
      </Button>

      {/* ==================================================
          SUCCESS MESSAGE
      ================================================== */}

      {sent && (
        <div
          className="
            mt-4
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
            text-sm
            text-green-700
          "
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="size-4 shrink-0"
            aria-hidden="true"
          />

          <span>
            Your inquiry has been sent successfully.
            We&apos;ll contact you soon.
          </span>
        </div>
      )}

      {/* ==================================================
          ERROR MESSAGE
      ================================================== */}

      {sendError && (
        <div
          className="
            mt-4
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
            text-sm
            text-red-700
          "
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle
            className="size-4 shrink-0"
            aria-hidden="true"
          />

          <span>
            Unable to send your inquiry right now.
            Please try again.
          </span>
        </div>
      )}

      {/* ==================================================
          RECIPIENT INFORMATION
      ================================================== */}

      <p className="mt-3 text-center text-xs text-muted">
        Your inquiry will be sent securely to{" "}
        <span className="font-medium text-brand-600">
          ponsankared@gmail.com
        </span>
      </p>
    </form>
  );
}