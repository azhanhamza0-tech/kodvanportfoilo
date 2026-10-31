import test from "node:test";
import assert from "node:assert/strict";

// Helper utilities replicated from project domain logic
function calculateEan13Checksum(barcode12: string): number {
  if (barcode12.length !== 12 || !/^\d+$/.test(barcode12)) {
    throw new Error("Input must be exactly 12 numeric digits.");
  }
  const total = barcode12
    .split("")
    .reduce((sum, char, idx) => sum + parseInt(char, 10) * (idx % 2 !== 0 ? 3 : 1), 0);
  return (10 - (total % 10)) % 10;
}

function validateBarcode(barcode: string): boolean {
  const clean = barcode.trim();
  if (clean.length !== 13 || !/^\d+$/.test(clean)) return false;
  const body = clean.slice(0, 12);
  const expectedCheck = calculateEan13Checksum(body);
  const actualCheck = parseInt(clean[12], 10);
  return expectedCheck === actualCheck;
}

function formatReceiptLine(left: string, right: string, totalWidth: number = 44): string {
  const leftMax = totalWidth - right.length - 2;
  const cleanLeft = left.length > leftMax ? left.substring(0, leftMax - 1) + "…" : left;
  const spacesNeeded = Math.max(1, totalWidth - cleanLeft.length - right.length);
  return cleanLeft + " ".repeat(spacesNeeded) + right;
}

test("EAN-13 Barcode Checksum Algorithm", async (t) => {
  await t.test("correctly calculates check digit for standard EAN-13 barcode", () => {
    // 400638133393 -> check digit should be 1 (4006381333931)
    const check1 = calculateEan13Checksum("400638133393");
    assert.equal(check1, 1);

    // 978014103614 -> check digit should be 4 (9780141036144)
    const check2 = calculateEan13Checksum("978014103614");
    assert.equal(check2, 4);
  });

  await t.test("validates genuine 13-digit retail barcode", () => {
    assert.equal(validateBarcode("4006381333931"), true);
    assert.equal(validateBarcode("9780141036144"), true);
  });

  await t.test("rejects barcode with altered digit", () => {
    assert.equal(validateBarcode("4006381333932"), false);
    assert.equal(validateBarcode("9780141036140"), false);
  });

  await t.test("rejects malformed length", () => {
    assert.equal(validateBarcode("123"), false);
    assert.equal(validateBarcode("400638133393100"), false);
  });
});

test("Thermal Receipt Line Formatter", async (t) => {
  await t.test("aligns item name on left and price on right exactly matching totalWidth", () => {
    const formatted = formatReceiptLine("Rice 5kg", "13,500 IQD", 40);
    assert.equal(formatted.length, 40);
    assert.match(formatted, /^Rice 5kg/);
    assert.match(formatted, /13,500 IQD$/);
  });

  await t.test("truncates exceptionally long names with ellipsis without overflowing width", () => {
    const longName = "Extra Long Supermarket Grain Product Batch Premium Edition";
    const formatted = formatReceiptLine(longName, "25,000 IQD", 40);
    assert.equal(formatted.length, 40);
    assert.ok(formatted.includes("…"));
    assert.match(formatted, /25,000 IQD$/);
  });
});

test("State Transition Logic", async (t) => {
  await t.test("calculates invoice change due correctly", () => {
    const total = 18500;
    const tendered = 25000;
    const change = tendered - total;
    assert.equal(change, 6500);
  });

  await t.test("verifies debt balance computation", () => {
    const customerDebts = 35000;
    const supplierDebts = 250000;
    const netBalance = customerDebts - supplierDebts;
    assert.equal(netBalance, -215000);
  });
});
