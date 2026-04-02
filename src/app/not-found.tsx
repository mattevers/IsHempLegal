import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-6xl font-black text-brand-green mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-bold px-6 py-3 transition-colors"
          >
            Check Hemp Legality
          </Link>
          <Link
            href="/states"
            className="rounded-xl border border-brand-border hover:border-brand-green/50 text-gray-300 hover:text-white font-bold px-6 py-3 transition-colors"
          >
            Browse All States
          </Link>
        </div>
      </div>
    </main>
  );
}
