import { evaluateTex } from "tex-math-parser";

export default function evaluate(expression: string | undefined) {
  const parsedExpression = expression?.replace("\\times", "*") || "";
  const result = evaluateTex(parsedExpression);
  return result.evaluated;
}
