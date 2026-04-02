import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import {
  StateData,
  Compound,
  ProductType,
  COMPOUND_LABELS,
  PRODUCT_LABELS,
  STATUS_CONFIG,
  LegalStatus,
} from "@/types/hemp";

const colors = {
  dark: "#ffffff",
  card: "#f9fafb",
  border: "#e5e7eb",
  white: "#111827",
  gray: "#6b7280",
  lightGray: "#374151",
  green: "#15803d",
  yellow: "#a16207",
  orange: "#c2410c",
  red: "#b91c1c",
  blue: "#1d4ed8",
};

const statusColors: Record<LegalStatus, string> = {
  legal: colors.green,
  restricted: colors.yellow,
  gray: colors.orange,
  banned: colors.red,
  medical_only: colors.blue,
  unknown: colors.gray,
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.dark,
    padding: 40,
    fontFamily: "Helvetica",
    color: colors.white,
  },
  // Header
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: colors.gray,
  },
  brandTag: {
    fontSize: 9,
    color: colors.orange,
    marginTop: 8,
  },
  // Section
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  // Table
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.card,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tableHeaderText: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.gray,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableRowAlt: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: "#f3f4f6",
  },
  colCompound: { width: "22%" },
  colStatus: { width: "18%" },
  colDetail: { width: "60%" },
  cellText: {
    fontSize: 9,
    color: colors.lightGray,
  },
  cellBold: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
  },
  // Status badge
  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  statusText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  // Product grid
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  productCard: {
    width: "31%",
    backgroundColor: colors.card,
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  productLabel: {
    fontSize: 9,
    color: colors.gray,
    marginBottom: 4,
  },
  // Info cards
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoLabel: {
    fontSize: 8,
    color: colors.gray,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
  },
  // Warning box
  warningBox: {
    backgroundColor: "#fff7ed",
    borderWidth: 1,
    borderColor: "#fed7aa",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  warningTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 4,
  },
  warningText: {
    fontSize: 9,
    color: "#9a3412",
    lineHeight: 1.4,
  },
  // Notes
  noteBox: {
    backgroundColor: "#eff6ff",
    borderWidth: 1,
    borderColor: "#bfdbfe",
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
  },
  noteText: {
    fontSize: 9,
    color: "#1e40af",
    lineHeight: 1.4,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7,
    color: colors.gray,
  },
});

function StatusBadge({ status }: { status: LegalStatus }) {
  const color = statusColors[status];
  const label = STATUS_CONFIG[status].label;
  return (
    <View style={[styles.statusBadge, { backgroundColor: color + "18" }]}>
      <Text style={[styles.statusText, { color }]}>{label}</Text>
    </View>
  );
}

interface ReportProps {
  state: StateData;
  generatedDate: string;
}

export function ComplianceReport({ state, generatedDate }: ReportProps) {
  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];
  const productTypes = Object.keys(PRODUCT_LABELS) as ProductType[];

  return (
    <Document>
      {/* Page 1: Compounds */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Hemp Compliance Report: {state.name}
          </Text>
          <Text style={styles.subtitle}>
            Legal status of all hemp-derived compounds &bull; Generated{" "}
            {generatedDate}
          </Text>
          <Text style={styles.brandTag}>IsHempLegal.com</Text>
        </View>

        {/* 2026 Warning */}
        {state.federalChangeImpact !== "low" && (
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>
              2026 Federal Law Impact: {state.federalChangeImpact.toUpperCase()}
            </Text>
            <Text style={styles.warningText}>
              {state.federalChangeNote}
            </Text>
          </View>
        )}

        {/* Compound Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compound Legal Status</Text>
          <View style={styles.tableHeader}>
            <View style={styles.colCompound}>
              <Text style={styles.tableHeaderText}>Compound</Text>
            </View>
            <View style={styles.colStatus}>
              <Text style={styles.tableHeaderText}>Status</Text>
            </View>
            <View style={styles.colDetail}>
              <Text style={styles.tableHeaderText}>Details</Text>
            </View>
          </View>
          {compounds.map((compound, i) => {
            const cs = state.compounds[compound];
            return (
              <View
                key={compound}
                style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}
              >
                <View style={styles.colCompound}>
                  <Text style={styles.cellBold}>
                    {COMPOUND_LABELS[compound]}
                  </Text>
                </View>
                <View style={styles.colStatus}>
                  <StatusBadge status={cs.status} />
                </View>
                <View style={styles.colDetail}>
                  <Text style={styles.cellText}>{cs.detail}</Text>
                  {cs.statute && (
                    <Text
                      style={[
                        styles.cellText,
                        { color: colors.gray, marginTop: 2 },
                      ]}
                    >
                      Statute: {cs.statute}
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            IsHempLegal.com &bull; Hemp Compliance Report &bull; {state.name}
          </Text>
          <Text style={styles.footerText}>
            Generated {generatedDate} &bull; Page 1 of 2
          </Text>
        </View>
      </Page>

      {/* Page 2: Products, Shipping, Notes */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={[styles.title, { fontSize: 18 }]}>
            {state.name} — Products, Shipping &amp; Restrictions
          </Text>
          <Text style={styles.brandTag}>IsHempLegal.com</Text>
        </View>

        {/* Product Types */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Type Breakdown</Text>
          <View style={styles.productGrid}>
            {productTypes.map((pt) => (
              <View key={pt} style={styles.productCard}>
                <Text style={styles.productLabel}>
                  {PRODUCT_LABELS[pt]}
                </Text>
                <StatusBadge status={state.productTypes[pt]} />
              </View>
            ))}
          </View>
        </View>

        {/* Shipping & Age */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Shipping &amp; Age Restrictions
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Minimum Age</Text>
              <Text style={styles.infoValue}>{state.ageRestriction}+</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>
                Shipping Into {state.abbreviation}
              </Text>
              <StatusBadge status={state.shippingIn} />
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>
                Shipping Out of {state.abbreviation}
              </Text>
              <StatusBadge status={state.shippingOut} />
            </View>
          </View>
        </View>

        {/* Federal Impact Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            2026 Federal Law Impact Assessment
          </Text>
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>
              Impact Level: {state.federalChangeImpact.toUpperCase()}
            </Text>
            <Text style={styles.warningText}>
              {state.federalChangeNote}
            </Text>
            <Text style={[styles.warningText, { marginTop: 8 }]}>
              The new federal hemp law takes effect November 12, 2026. It
              redefines hemp using total THC (including Delta-8, THCA, HHC, and
              all isomers) instead of just Delta-9 THC. Products exceeding 0.3%
              total THC will be classified as controlled substances.
            </Text>
          </View>
        </View>

        {/* Notes */}
        {state.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Notes</Text>
            <View style={styles.noteBox}>
              <Text style={styles.noteText}>{state.notes}</Text>
            </View>
          </View>
        )}

        {/* Disclaimer */}
        <View style={styles.section}>
          <Text style={[styles.cellText, { color: colors.gray, lineHeight: 1.4 }]}>
            DISCLAIMER: This report provides informational guidance only, not
            legal advice. Hemp and cannabis laws change frequently. Always verify
            current laws with local authorities or consult an attorney before
            making business or purchasing decisions. Data is current as of{" "}
            {state.lastUpdated}.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            IsHempLegal.com &bull; Hemp Compliance Report &bull; {state.name}
          </Text>
          <Text style={styles.footerText}>
            Generated {generatedDate} &bull; Page 2 of 2
          </Text>
        </View>
      </Page>
    </Document>
  );
}
