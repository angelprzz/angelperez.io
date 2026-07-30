import { Aws } from "@dev.icons/react";
import { Aws as AwsMono } from "@dev.icons/react/mono";

export default function AwsIcon({ size = 16 }: { size?: number }) {
  return (
    <>
      <Aws size={size} className="dark:hidden" />
      <AwsMono size={size} className="hidden dark:block" />
    </>
  );
}
