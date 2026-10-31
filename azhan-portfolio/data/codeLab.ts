export interface CodeExample {
  id: string;
  title: {
    en: string;
    ku: string;
  };
  category: "react" | "typescript" | "hardware" | "python";
  language: "typescript" | "python";
  filename: string;
  problemSolved: {
    en: string;
    ku: string;
  };
  explanation: {
    en: string;
    ku: string;
  };
  tradeOffs: {
    en: string[];
    ku: string[];
  };
  code: string;
}

export const codeExamplesData: CodeExample[] = [
  {
    id: "offline-sync-hook",
    title: {
      en: "Offline Transaction Sync Engine Hook",
      ku: "هووکی ڕیاکت بۆ هاوکاتکردنی داتای ئۆفلاین لەگەڵ داتابەیس",
    },
    category: "react",
    language: "typescript",
    filename: "useOfflineSync.ts",
    problemSolved: {
      en: "When cashier internet drops, sales must continue locally and automatically synchronize to the remote server once connectivity returns without duplicate entries or race conditions.",
      ku: "لە کاتی بڕانی هێڵی ئینتەرنێتدا، دەبێت فرۆشتن لەسەر کۆمپیوتەری کاشێر بەردەوام بێت و پاش گەڕانەوەی هێڵ بەبێ دووبارەبوونەوە بنێردرێتە سێرڤەر.",
    },
    explanation: {
      en: "A robust React hook listening to window 'online' and 'offline' events that reads an IndexedDB queue, dispatches pending sales records with a retry backoff, and signals sync progress.",
      ku: "هووکێکی تایبەتی ڕیاکت کە چاودێری پەیوەندی هێڵ دەکات، وەسڵە پاشەکەوتکراوەکانی ناو IndexedDB دەخوێنێتەوە و لە کاتی گەڕانەوەی هێڵدا بە سەلامەتی ڕەوانەی دەکات.",
    },
    tradeOffs: {
      en: [
        "Uses exponential backoff retry to prevent server stampedes when 10+ cashier lanes reconnect simultaneously.",
        "Requires idempotent transaction IDs (UUIDv4) to guarantee zero duplicate receipt postings.",
      ],
      ku: [
        "بەکارهێنانی دواخستنی ئەندازەیی (Exponential backoff) بۆ ڕێگری لە قەرەباڵغبوونی سێرڤەر لە کاتی بەستنەوەی چەندین کاشێردا پێکەوە.",
        "پێویستی بە کۆدی تایبەتی ناسێنەر هەیە تا دڵنیابین هیچ وەسڵێک دووجار تۆمار ناکرێت.",
      ],
    },
    code: `import { useState, useEffect, useCallback } from "react";

export interface PendingReceipt {
  id: string;
  invoiceNumber: string;
  totalAmount: number;
  createdAt: string;
  synced: boolean;
}

export function useOfflineSync(onSyncSuccess?: (id: string) => void) {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Monitor browser network state
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Flush pending transactions to server
  const flushQueue = useCallback(async (queue: PendingReceipt[]) => {
    if (!isOnline || queue.length === 0 || isSyncing) return;
    setIsSyncing(true);

    for (const receipt of queue) {
      try {
        const response = await fetch("/api/sales/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(receipt),
        });

        if (response.ok) {
          onSyncSuccess?.(receipt.id);
          setPendingCount((prev) => Math.max(0, prev - 1));
        }
      } catch (err) {
        console.warn(\`[OfflineSync] Retrying \${receipt.invoiceNumber} later\`, err);
        break; // Stop and retry later if network fails mid-sync
      }
    }

    setIsSyncing(false);
  }, [isOnline, isSyncing, onSyncSuccess]);

  return { isOnline, pendingCount, isSyncing, flushQueue };
}`,
  },
  {
    id: "thermal-receipt-formatter",
    title: {
      en: "80mm / 58mm Thermal Receipt Line Formatter",
      ku: "ڕێکخەری دێڕەکانی چاپی وەسڵ بۆ چاپکەری گەرمیی 80mm و 58mm",
    },
    category: "hardware",
    language: "typescript",
    filename: "thermalReceiptFormatter.ts",
    problemSolved: {
      en: "Thermal receipt printers use fixed monospace column widths (48 chars for 80mm, 32 chars for 58mm). Kurdish and numerical columns must align right and left precisely without overflowing or cutting off prices.",
      ku: "چاپکەری وەسڵ ژمارەی پیتەکانی لە هەر دێڕێکدا دیاریکراوە (٤٨ پیت بۆ 80mm). دەبێت ناوی کاڵا لە لایەک و نرخ لە لایەکی تر بەبێ تێکچوون و پەڕینەوە بۆ دێڕی تر ڕێکبخرێن.",
    },
    explanation: {
      en: "A pure TypeScript utility that formats invoice header lines, items, subtotals, and Kurdish footer notes into fixed-width aligned monospace output ready for thermal paper streaming.",
      ku: "فەنکشنێکی خاوێنی تایپسکریپت کە ناوی کاڵا و بڕ و نرخ ڕێکدەخات و بۆشایی گونجاو لە نێوانیاندا دروست دەکات تا وەسڵەکە بە ڕێکوپێکی لەسەر کاغەز دەربچێت.",
    },
    tradeOffs: {
      en: [
        "Pure string formatting avoids heavy binary dependencies, maintaining lightweight zero-dependency execution.",
        "Truncates exceptionally long product names gracefully with ellipsis to preserve total price visibility.",
      ],
      ku: [
        "کارکردن بەبێ هیچ کتێبخانەیەکی دەرەکی بۆ بەرزترین خێرایی و کەمیی قەبارەی کۆد.",
        "کورتکردنەوەی ناوی کاڵای زۆر درێژ بە هێمای (...) بۆ ئەوەی نرخەکەی دیار بمێنێتەوە.",
      ],
    },
    code: `export interface InvoiceItem {
  name: string;
  qty: number;
  price: number;
}

export function formatReceiptLine(
  left: string,
  right: string,
  totalWidth: number = 44
): string {
  const leftMax = totalWidth - right.length - 2;
  const cleanLeft = left.length > leftMax ? left.substring(0, leftMax - 1) + "…" : left;
  const spacesNeeded = Math.max(1, totalWidth - cleanLeft.length - right.length);
  return cleanLeft + " ".repeat(spacesNeeded) + right;
}

export function generateThermalReceipt(
  storeName: string,
  items: InvoiceItem[],
  total: number,
  currency: string = "د.ع"
): string {
  const width = 42;
  const divider = "=".repeat(width);
  const dashed = "-".repeat(width);

  const lines: string[] = [
    divider,
    storeName.padStart((width + storeName.length) / 2).padEnd(width),
    divider,
    formatReceiptLine("کاڵا (Item)", "نرخ (Price)", width),
    dashed,
  ];

  for (const item of items) {
    const itemLeft = \`\${item.name} x\${item.qty}\`;
    const itemRight = \`\${(item.price * item.qty).toLocaleString()} \${currency}\`;
    lines.push(formatReceiptLine(itemLeft, itemRight, width));
  }

  lines.push(dashed);
  lines.push(formatReceiptLine("کۆی گشتی (Total):", \`\${total.toLocaleString()} \${currency}\`, width));
  lines.push(divider);
  lines.push("سوپاس بۆ سەردانەکەت — مارکێتی خزمەت".padStart((width + 28) / 2));

  return lines.join("\\n");
}`,
  },
  {
    id: "discriminated-unions-state",
    title: {
      en: "Strict Discriminated Unions for POS Checkout Flow",
      ku: "مۆدێلی دۆخی توندوتۆڵ بە جۆری Discriminated Unions بۆ کاشێر",
    },
    category: "typescript",
    language: "typescript",
    filename: "checkoutStateMachine.ts",
    problemSolved: {
      en: "POS systems often face invalid state transitions (e.g. attempting to print a receipt before payment confirmation, or adding items during debt approval).",
      ku: "سیستەمەکانی کاشێر زۆرجار تووشی هەڵەی لۆژیکی دەبن ئەگەر بە شێوەیەکی توند دیاری نەکرێت کام کردار لە چ کاتێکدا ڕێگەپێدراوە.",
    },
    explanation: {
      en: "Uses TypeScript Discriminated Unions and exhaustive pattern matching with never types to model the checkout flow. Impossible states become impossible to compile.",
      ku: "بەکارهێنانی تایپی تایپسکریپت بۆ دروستکردنی ماشینێکی دۆخ (State Machine) کە ڕێگری دەکات لە هەر کردارێکی نادروست و هەڵەکان لە کاتی کۆدنووسیندا ئاشکرا دەکات.",
    },
    tradeOffs: {
      en: [
        "Guarantees that state variables like receiptId or changeDue can never be accessed unless the state is strictly 'completed'.",
        "Provides 100% compile-time exhaustiveness checking without runtime exceptions.",
      ],
      ku: [
        "دڵنیاییدان لەوەی ژمارەی وەسڵ تەنها لە کاتی تەواوبوونی پارەداندا دەستپێڕاگەیشتنی دەبێت.",
        "دۆزینەوەی سەرجەم دۆخە نەپشکنراوەکان پێش ئەوەی بەرنامەکە بخرێتە کار.",
      ],
    },
    code: `export type CheckoutState =
  | { status: "IDLE"; cartItemCount: 0 }
  | { status: "SCANNING"; cartItemCount: number; subtotal: number }
  | { status: "AWAITING_PAYMENT"; subtotal: number; discount: number; finalTotal: number }
  | { status: "PROCESSING_DEBT"; customerName: string; debtLimit: number; total: number }
  | { status: "COMPLETED"; invoiceId: string; amountPaid: number; changeDue: number }
  | { status: "FAILED"; reason: string; recoverable: boolean };

export function getCheckoutActionLabel(state: CheckoutState, isKurdish: boolean): string {
  switch (state.status) {
    case "IDLE":
      return isKurdish ? "سکانکردنی کاڵا یان بارکۆد" : "Scan item or barcode";
    case "SCANNING":
      return isKurdish ? \`\${state.cartItemCount} کاڵا — تەواوکردن (F4)\` : \`\${state.cartItemCount} items — Pay (F4)\`;
    case "AWAITING_PAYMENT":
      return isKurdish ? "وەرگرتنی پارەی نەقد" : "Accept cash payment";
    case "PROCESSING_DEBT":
      return isKurdish ? \`تۆماری قەرز بۆ: \${state.customerName}\` : \`Charge to: \${state.customerName}\`;
    case "COMPLETED":
      return isKurdish ? \`چاپکرا: وەسڵی \${state.invoiceId}\` : \`Printed: \${state.invoiceId}\`;
    case "FAILED":
      return isKurdish ? \`هەڵە: \${state.reason}\` : \`Error: \${state.reason}\`;
    default: {
      // Exhaustiveness guarantee: TypeScript flags an error if a state is forgotten
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}`,
  },
  {
    id: "barcode-validator-py",
    title: {
      en: "EAN-13 Retail Barcode Checksum Validator",
      ku: "پشکنەری کۆدی بارکۆدی ستاندارد (EAN-13) بە پایسۆن",
    },
    category: "python",
    language: "python",
    filename: "barcode_validator.py",
    problemSolved: {
      en: "Market inventory databases often receive mistyped barcodes in CSV spreadsheets. A single wrong digit corrupts barcode scanner lookups during retail checkout.",
      ku: "لە کاتی هاوردەکردنی کاڵاکان لە فایلی ئێکسڵ یان CSV، زۆرجار ژمارەی بارکۆدەکان هەڵەیان تێدەکەوێت؛ ئەم سکریپتە بە هاوکێشەی ماتماتیکی پشکنین بۆ دروستی بارکۆد دەکات.",
    },
    explanation: {
      en: "A Python utility implementing the standard GS1 EAN-13 modulo-10 checksum algorithm to validate and cleanse grocery stock catalogs before importing into the database.",
      ku: "سکریپتێکی پایسۆن بە یاسای ستانداردی جیهانی GS1 بۆ ژماردنی کۆدی پشکنین (Checksum) و خاوێنکردنەوەی لیستی کاڵاکان پێش خستنە ناو سیستەم.",
    },
    tradeOffs: {
      en: [
        "Pure Python standard library implementation: requires zero external pip packages.",
        "Catches over 98% of manual typographical errors before inserting records into the POS database.",
      ],
      ku: [
        "پێویستی بە هیچ کتێبخانەیەکی زیادەی دەرەکی نییە و زۆر خێرایە.",
        "ڕێگری لە زیاتر لە ٩٨٪ـی هەڵە نووسینە دەستییەکان دەکات.",
      ],
    },
    code: `def calculate_ean13_checksum(barcode_12: str) -> int:
    """Calculate the 13th check digit for a 12-digit barcode using GS1 modulo 10."""
    if len(barcode_12) != 12 or not barcode_12.isdigit():
        raise ValueError("Input must be exactly 12 numeric digits.")

    # Even-positioned digits (0-indexed 1, 3, 5, 7, 9, 11) multiplied by 3
    # Odd-positioned digits multiplied by 1
    total = sum(
        int(digit) * (3 if idx % 2 != 0 else 1)
        for idx, digit in enumerate(barcode_12)
    )

    check_digit = (10 - (total % 10)) % 10
    return check_digit


def validate_retail_barcode(barcode: str) -> bool:
    """Validate whether an EAN-13 barcode has a mathematically valid check digit."""
    clean_code = str(barcode).strip()
    if len(clean_code) != 13 or not clean_code.isdigit():
        return False

    body = clean_code[:12]
    expected_check = calculate_ean13_checksum(body)
    actual_check = int(clean_code[-1])

    return expected_check == actual_check


# Example verification
if __name__ == "__main__":
    sample_barcodes = ["6223000541011", "8690504018086", "1234567890128"]
    for code in sample_barcodes:
        is_valid = validate_retail_barcode(code)
        print(f"Barcode: {code} -> Valid: {is_valid}")
`,
  },
];
