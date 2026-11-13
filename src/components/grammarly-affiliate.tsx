import { Sparkles } from "lucide-react";

export function GrammarlyAffiliate() {
  return (
    <a 
      href="https://grammarly.com" // TODO: Add your actual affiliate link here
      target="_blank"
      rel="noopener noreferrer"
      className="group my-8 flex items-center justify-between gap-4 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-4 transition-all hover:shadow-md dark:border-green-900/50 dark:from-green-950/20 dark:to-emerald-950/20 sm:p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
          <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
            Improve your writing with Grammarly <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
            Catch typos, fix grammar, and write with confidence.
          </p>
        </div>
      </div>
    </a>
  );
}
