import { redirect } from "next/navigation";
import { CV_DOWNLOAD_URL } from "@/lib/cv";

export function GET() {
  redirect(CV_DOWNLOAD_URL);
}