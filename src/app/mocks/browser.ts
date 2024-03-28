import { setupWorker } from "msw/browser";
import { emailHandlers } from "./handlers/emails.ts";

export const worker = setupWorker(...emailHandlers);
