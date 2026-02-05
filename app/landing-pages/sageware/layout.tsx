export default function SagewareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light" data-theme="light" suppressHydrationWarning>
      {/* Force light mode - completely isolate from parent */}
      <style jsx global>{`
        /* HIDE PARENT APP NAVIGATION AND DARK MODE TOGGLE */
        body > nav,
        body > header,
        [class*="dark-mode"],
        [class*="theme-toggle"],
        button[aria-label*="theme"],
        button[aria-label*="dark"] {
          display: none !important;
        }

        /* Override any parent dark mode styling */
        html.dark body,
        html[data-theme="dark"] body,
        .dark,
        [data-theme="dark"] {
          color-scheme: light !important;
        }

        /* Force light mode colors */
        html, body {
          background-color: #ffffff !important;
          color: #1e293b !important;
        }

        /* Ensure full height */
        html, body {
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
      `}</style>
      {children}
    </div>
  );
}
