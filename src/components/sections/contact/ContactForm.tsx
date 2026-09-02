
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  requirement: z.string().min(1, "Please select a requirement"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const REQUIREMENTS = [
  "High-Performance Piping",
  "CPVC Hot & Cold Systems",
  "Industrial Fittings & Valves",
  "Agricultural & Borewell",
  "Storage Tanks",
  "Sewerage & Drainage",
];

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-4">
    <label className="mb-[7px] block text-[.72rem] font-bold uppercase tracking-wider text-ink-2">
      {label}
    </label>

    {children}

    {error && (
      <p className="mt-1 text-[.75rem] text-red-500">
        {error}
      </p>
    )}
  </div>
);

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

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    setSent(false);
    setSendError(false);

    try {
      /*
       * EmailJS configuration
       *
       * Replace these three values with your
       * actual EmailJS credentials.
       */
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: "ponsankared@gmail.com",

          from_name: data.name,
          from_email: data.email,

          phone: data.phone || "Not provided",
          company: data.company || "Not provided",

          requirement: data.requirement,

          message: data.message || "No additional message",

          subject: "New Inquiry - Ponshankar Agencies",
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      /*
       * Email successfully sent.
       */
      setSent(true);

      /*
       * Clear the form after successful submission.
       */
      reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: REQUIREMENTS[0],
        message: "",
      });

      /*
       * Hide success message after 5 seconds.
       */
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);

      /*
       * Show error message.
       */
      setSendError(true);

      /*
       * Hide error message after 5 seconds.
       */
      setTimeout(() => {
        setSendError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact inquiry form"
    >
      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">

        {/* ===================================================
            FULL NAME
        =================================================== */}
        <Field
          label="Full Name"
          error={errors.name?.message}
        >
          <Input
            placeholder="John Doe"
            autoComplete="name"
            {...register("name")}
            disabled={sending}
          />
        </Field>

        {/* ===================================================
            EMAIL
        =================================================== */}
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

        {/* ===================================================
            PHONE
        =================================================== */}
        <Field label="Phone Number">
          <Input
            type="tel"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            {...register("phone")}
            disabled={sending}
          />
        </Field>

        {/* ===================================================
            COMPANY
        =================================================== */}
        <Field label="Company Name">
          <Input
            placeholder="Industrial Corp."
            autoComplete="organization"
            {...register("company")}
            disabled={sending}
          />
        </Field>
      </div>

      {/* =====================================================
          PRODUCT REQUIREMENT
      ===================================================== */}
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

      {/* =====================================================
          MESSAGE
      ===================================================== */}
      <Field
        label="Message"
        error={errors.message?.message}
      >
        <Textarea
          placeholder="How can we help your project succeed?"
          rows={5}
          {...register("message")}
          disabled={sending}
        />
      </Field>

      {/* =====================================================
          SEND BUTTON
      ===================================================== */}
      <Button
        type="submit"
        block
        size="lg"
        disabled={sending}
        aria-label="Send inquiry"
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
            <Mail className="size-4" />
            Send Inquiry
          </>
        )}
      </Button>

      {/* =====================================================
          SUCCESS MESSAGE
      ===================================================== */}
      {sent && (
        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
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
          <CheckCircle2 className="size-4 shrink-0" />

          <span>
            Your inquiry has been sent successfully.
            We&apos;ll contact you soon.
          </span>
        </div>
      )}

      {/* =====================================================
          ERROR MESSAGE
      ===================================================== */}
      {sendError && (
        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
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
          <AlertCircle className="size-4 shrink-0" />

          <span>
            Unable to send your inquiry right now.
            Please try again.
          </span>
        </div>
      )}

      {/* =====================================================
          EMAIL INFORMATION
      ===================================================== */}
      <p className="mt-3 text-center text-xs text-muted">
        Your inquiry will be sent securely to{" "}
        <span className="font-medium text-brand-600">
          ponsankared@gmail.com
        </span>
      </p>
    </form>
  );
}

