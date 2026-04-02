import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { getStateBySlug } from "@/data/states";
import { CheckCircle } from "lucide-react";

export default async function ReportSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/get-report");
  }

  let stateName = "";
  let stateSlug = "";

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      redirect("/get-report");
    }

    stateSlug = session.metadata?.stateSlug ?? "";
    const state = getStateBySlug(stateSlug);

    if (!state) {
      redirect("/get-report");
    }

    stateName = state.name;
  } catch {
    redirect("/get-report");
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="rounded-2xl border border-brand-border bg-brand-card p-10">
        <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
        <h1 className="text-2xl font-black text-white mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-400 mb-6">
          Your Hemp Compliance Report for{" "}
          <strong className="text-white">{stateName}</strong> is ready.
        </p>

        <a
          href={`/api/report?state=${stateSlug}&session_id=${session_id}`}
          className="inline-block rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 transition-colors"
        >
          Download PDF Report &rarr;
        </a>

        <p className="text-gray-600 text-xs mt-6">
          Your download link is valid for 24 hours. If you have any issues,
          contact us with your session ID.
        </p>
      </div>
    </main>
  );
}
