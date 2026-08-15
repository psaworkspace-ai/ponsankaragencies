import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  requirement: z.string(),
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      requirement: REQUIREMENTS[0],
    },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(
      "New Inquiry - Ponshankar Agencies"
    );

    const body = encodeURIComponent(
      `Hello Ponshankar Agencies,

I would like to make an inquiry.

Full Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone || "Not provided"}

Company: ${data.company || "Not provided"}

Product Requirement: ${data.requirement}

Message:
${data.message || "No additional message"}

Thank you.`
    );

    window.location.href =
      `mailto:ponsankared@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    reset({
      requirement: REQUIREMENTS[0],
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
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

        <Field
          label="Full Name"
          error={errors.name?.message}
        >
          <Input
            placeholder="John Doe"
            {...register("name")}
          />
        </Field>

        <Field
          label="Email Address"
          error={errors.email?.message}
        >
          <Input
            type="email"
            placeholder="john@company.com"
            {...register("email")}
          />
        </Field>

        <Field label="Phone Number">
          <Input
            type="tel"
            placeholder="+91 00000 00000"
            {...register("phone")}
          />
        </Field>

        <Field label="Company Name">
          <Input
            placeholder="Industrial Corp."
            {...register("company")}
          />
        </Field>

      </div>

      {/* =====================================================
          PRODUCT REQUIREMENT
      ===================================================== */}
      <Field label="Product Requirement">
        <Select {...register("requirement")}>
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
      <Field label="Message">
        <Textarea
          placeholder="How can we help your project succeed?"
          {...register("message")}
        />
      </Field>

      {/* =====================================================
          SEND BUTTON
      ===================================================== */}
      <Button
        type="submit"
        block
        size="lg"
        aria-label="Send inquiry"
      >
        <Mail className="size-4" />
        Send Inquiry
      </Button>

      {/* =====================================================
          SUCCESS MESSAGE
      ===================================================== */}
      {sent && (
        <p className="mt-3 text-center text-sm text-green-600">
          Your email application has been opened with the
          inquiry details.
        </p>
      )}

      {/* =====================================================
          MAILTO INFO
      ===================================================== */}
      <p className="mt-3 text-center text-xs text-muted">
        Your inquiry will be sent to{" "}
        <a
          href="mailto:ponsankared@gmail.com"
          className="font-medium text-brand-600 hover:underline"
        >
          ponsankared@gmail.com
        </a>
      </p>
    </form>
  );
}