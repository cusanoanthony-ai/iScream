type FormStatusProps = {
  type: "idle" | "success" | "error";
  message?: string;
  id?: string;
};

export function FormStatus({ type, message, id }: FormStatusProps) {
  if (type === "idle" || !message) return null;

  const isSuccess = type === "success";

  return (
    <div
      id={id}
      role="alert"
      aria-live="polite"
      className={`rounded-xl px-4 py-3 text-sm font-semibold ${
        isSuccess
          ? "bg-brand-teal/10 text-brand-navy"
          : "bg-brand-coral/10 text-brand-navy"
      }`}
    >
      {message}
    </div>
  );
}
