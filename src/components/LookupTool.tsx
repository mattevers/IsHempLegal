"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Compound,
  ProductType,
  COMPOUND_LABELS,
  PRODUCT_LABELS,
} from "@/types/hemp";
import { getAllStates } from "@/data/states";

const states = getAllStates();

export function LookupTool() {
  const router = useRouter();
  const [stateSlug, setStateSlug] = useState("");
  const [compound, setCompound] = useState<Compound | "">("");
  const [productType, setProductType] = useState<ProductType | "">("");
  const [error, setError] = useState("");

  function handleCheck() {
    if (!stateSlug || !compound) {
      setError("Please select a state and compound.");
      return;
    }
    setError("");
    const params = new URLSearchParams({ compound });
    if (productType) params.set("product", productType);
    router.push(`/states/${stateSlug}?${params.toString()}`);
  }

  const selectClass =
    "w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3.5 text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-green appearance-none cursor-pointer";

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {/* State */}
      <select
        value={stateSlug}
        onChange={(e) => setStateSlug(e.target.value)}
        className={selectClass}
      >
        <option value="">Select your state...</option>
        {states.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>

      {/* Compound */}
      <select
        value={compound}
        onChange={(e) => setCompound(e.target.value as Compound)}
        className={selectClass}
      >
        <option value="">Select compound...</option>
        {(Object.keys(COMPOUND_LABELS) as Compound[]).map((c) => (
          <option key={c} value={c}>
            {COMPOUND_LABELS[c]}
          </option>
        ))}
      </select>

      {/* Product Type (optional) */}
      <select
        value={productType}
        onChange={(e) => setProductType(e.target.value as ProductType)}
        className={selectClass}
      >
        <option value="">Select product type (optional)...</option>
        {(Object.keys(PRODUCT_LABELS) as ProductType[]).map((p) => (
          <option key={p} value={p}>
            {PRODUCT_LABELS[p]}
          </option>
        ))}
      </select>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {/* CTA Button */}
      <button
        onClick={handleCheck}
        className="w-full rounded-xl bg-brand-orange hover:bg-orange-500 active:bg-orange-600 text-white font-bold text-lg py-4 transition-colors duration-150 cursor-pointer"
      >
        Check Legality
      </button>

      <p className="text-center text-gray-500 text-sm">
        Free checks for all 50 states. No account needed.
      </p>
    </div>
  );
}
