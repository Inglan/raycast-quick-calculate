import { Clipboard, showToast, Toast } from "@raycast/api";
import { evaluateTex } from "tex-math-parser"; // ES6 module

export default async function Command() {
  try {
    const selectedText = (await Clipboard.readText()) || "";
    const transformedText = evaluateTex(selectedText) || "";
    await Clipboard.paste(transformedText.evaluated);
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Cannot transform text",
      message: String(error),
    });
  }
}
