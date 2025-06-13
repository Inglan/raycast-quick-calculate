import { getSelectedText, Clipboard, showToast, Toast } from "@raycast/api";
import evaluate from "./evaluate";

export default async function Command() {
  try {
    const selectedText = await getSelectedText();
    await Clipboard.paste(evaluate(selectedText));
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Cannot calculate",
      message: String(error),
    });
  }
}
