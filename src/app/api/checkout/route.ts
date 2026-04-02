import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getStateBySlug } from "@/data/states";

export async function POST(request: NextRequest) {
  const { stateSlug } = await request.json();

  if (!stateSlug) {
    return NextResponse.json({ error: "Missing state" }, { status: 400 });
  }

  const state = getStateBySlug(stateSlug);
  if (!state) {
    return NextResponse.json({ error: "Invalid state" }, { status: 400 });
  }

  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Hemp Compliance Report: ${state.name}`,
            description: `Full legal analysis of all 8 hemp compounds in ${state.name}. Includes product types, shipping rules, and 2026 federal impact.`,
          },
          unit_amount: 799,
        },
        quantity: 1,
      },
    ],
    metadata: {
      stateSlug,
    },
    success_url: `${origin}/report/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/get-report`,
  });

  return NextResponse.json({ url: session.url });
}
