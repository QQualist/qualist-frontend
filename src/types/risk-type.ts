import { riskTypeSchema } from "@/schemas/risk-types/risk-types";
import { z } from "zod";

export type RiskTypeData = z.infer<typeof riskTypeSchema>