import { PrimaryRoutePage } from "@/components/PrimaryRoutePage";
import { metaForPrimary } from "@/lib/metadata-primary";

const SLUG = "lucky-bear-rossiya";

export const metadata = metaForPrimary(SLUG);

export default function Page() {
  return <PrimaryRoutePage slug={SLUG} />;
}
