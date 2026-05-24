import { auditPalettes } from "../src/lib/palette-audit";
import { palettes } from "../src/lib/palettes";

const report = auditPalettes(palettes);

console.log(report.summary);

for (const issue of report.issues) {
  const distance = issue.distance === undefined ? "" : ` distance=${issue.distance.toFixed(4)}`;
  console.log(`[${issue.severity}] ${issue.kind}:${distance} ${issue.message}`);
}

process.exitCode = report.passed ? 0 : 1;
