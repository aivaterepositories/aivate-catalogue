export default function SagewareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light" data-theme="light" suppressHydrationWarning>
      {/* Force light mode - completely isolate from parent */}
      <style jsx global>{`
        /* Override any parent dark mode styling */
        html.dark body,
        html[data-theme="dark"] body,
        .dark,
        [data-theme="dark"] {
          color-scheme: light !important;
        }

        /* Force light mode colors */
        body {
          background-color: #ffffff !important;
          color: #0f172a !important;
        }
      `}</style>
      {children}
    </div>
  );
}
