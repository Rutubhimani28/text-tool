import { ReactNode } from "react";

interface AffiliateBannerProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  colorScheme?: "blue" | "green" | "purple" | "orange";
}

export function AffiliateBanner({
  title,
  description,
  icon,
  children,
  colorScheme = "blue",
}: AffiliateBannerProps) {
  const themes = {
    blue: {
      wrapper: "border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 dark:border-blue-900/50 dark:from-blue-950/20 dark:to-sky-950/20",
      iconBg: "bg-blue-100 dark:bg-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-100",
      desc: "text-blue-700 dark:text-blue-300",
    },
    green: {
      wrapper: "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:border-green-900/50 dark:from-green-950/20 dark:to-emerald-950/20",
      iconBg: "bg-green-100 dark:bg-green-900/50",
      iconColor: "text-green-600 dark:text-green-400",
      title: "text-green-900 dark:text-green-100",
      desc: "text-green-700 dark:text-green-300",
    },
    purple: {
      wrapper: "border-purple-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:border-purple-900/50 dark:from-purple-950/20 dark:to-fuchsia-950/20",
      iconBg: "bg-purple-100 dark:bg-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400",
      title: "text-purple-900 dark:text-purple-100",
      desc: "text-purple-700 dark:text-purple-300",
    },
    orange: {
      wrapper: "border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 dark:border-orange-900/50 dark:from-orange-950/20 dark:to-amber-950/20",
      iconBg: "bg-orange-100 dark:bg-orange-900/50",
      iconColor: "text-orange-600 dark:text-orange-400",
      title: "text-orange-900 dark:text-orange-100",
      desc: "text-orange-700 dark:text-orange-300",
    }
  };

  const theme = themes[colorScheme];

  return (
    <div className={`my-8 flex flex-col sm:flex-row items-center sm:items-stretch sm:justify-between gap-4 rounded-xl border p-4 sm:p-6 transition-all hover:shadow-md ${theme.wrapper}`}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${theme.iconBg} ${theme.iconColor}`}>
          {icon}
        </div>
        <div>
          <h3 className={`font-semibold text-lg ${theme.title}`}>
            {title}
          </h3>
          <p className={`text-sm mt-1 max-w-md ${theme.desc}`}>
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0 shrink-0">
        {children}
      </div>
    </div>
  );
}

export function AffiliateLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const baseStyles = "rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 group whitespace-nowrap w-full sm:w-auto";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary: "bg-background/50 border hover:bg-background text-foreground"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
