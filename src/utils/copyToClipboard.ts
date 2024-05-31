import { toast } from "@/components/ui/use-toast";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast({
        variant: "success",
        title: "Copied text!",
        description: "Text copied to the clipboard!",
      });
    },
    (err) => {
      toast({
        variant: "destructive",
        title: "Ops!",
        description: `Failed to copy text: ${err}`,
      });
    }
  );
};
