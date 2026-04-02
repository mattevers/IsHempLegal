import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { ComplianceReport } from "@/lib/report-pdf";
import { getStateBySlug } from "@/data/states";
import { stripe } from "@/lib/stripe";
import React from "react";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("state");
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!slug) {
    return NextResponse.json({ error: "Missing state parameter" }, { status: 400 });
  }

  if (!sessionId) {
    return NextResponse.json({ error: "Payment required" }, { status: 402 });
  }

  // Verify payment
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 402 });
    }
    // Verify the session is for this state
    if (session.metadata?.stateSlug !== slug) {
      return NextResponse.json({ error: "Session mismatch" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  const state = getStateBySlug(slug);
  if (!state) {
    return NextResponse.json({ error: "State not found" }, { status: 404 });
  }

  const generatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element = React.createElement(ComplianceReport, { state, generatedDate }) as any;
  const buffer = await renderToBuffer(element);

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="hemp-compliance-report-${slug}.pdf"`,
    },
  });
}
