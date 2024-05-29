import { generateNumber } from "./generateNumber.js";

export function lottery(expect) {
  const actual = generateNumber();

  if (actual !== expect) {
    return "You lost(";
  }

  return "$$$ You WIN $$$ Get your free 500FS";
}
