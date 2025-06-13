import { Clipboard, showToast, Toast } from "@raycast/api";
import evaluate from "./evaluate";

export default async function Command() {
  try {
    const clipboard = await Clipboard.readText();
    await Clipboard.paste(evaluate(clipboard));
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Cannot calculate",
      message: String(error),
    });
  }
}
