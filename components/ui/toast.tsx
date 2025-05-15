"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ToastProvider = React.createContext<{
  showToast: (props: React.ComponentProps<typeof Toast>) => void;
  hideToast: () => void;
}>({
  showToast: () => {},
  hideToast: () => {},
});

export function useToast() {
  return React.useContext(ToastProvider);
}

const toastVariants = cva(
  "fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 max-w-sm p-4 transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-80 data-[state=closed]:slide-out-to-bottom-5 data-[state=open]:slide-in-from-bottom-5 rounded-lg shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border border-gray-200",
        success: "bg-green-50 text-green-900 border border-green-200",
        error: "bg-red-50 text-red-900 border border-red-200",
        warning: "bg-yellow-50 text-yellow-900 border border-yellow-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type ToastProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants> & {
    title?: string;
    description?: string;
    onClose?: () => void;
  };

const Toast = ({
  className,
  variant,
  title,
  description,
  onClose,
  ...props
}: ToastProps) => (
  <div
    className={cn(toastVariants({ variant }), className)}
    role="alert"
    {...props}
  >
    <div className="flex items-start gap-3">
      <div className="flex-1">
        {title && <h3 className="font-medium">{title}</h3>}
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      <button
        onClick={onClose}
        className="rounded-full p-1 text-foreground/50 hover:text-foreground hover:bg-gray-100"
      >
        <XIcon className="size-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  </div>
);

export function ToastContainer({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = React.useState<ToastProps | null>(null);

  const showToast = React.useCallback((props: ToastProps) => {
    setToast(props);
    setTimeout(() => {
      setToast(null);
    }, 5000); // Auto-dismiss after 5 seconds
  }, []);

  const hideToast = React.useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastProvider.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <Toast
          {...toast}
          onClose={hideToast}
          data-state={toast ? "open" : "closed"}
        />
      )}
    </ToastProvider.Provider>
  );
}

export { Toast, toastVariants };
