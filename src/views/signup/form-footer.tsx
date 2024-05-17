import { Button } from "@/components/ui/button";
import TermsOfUse from "./dialogs/terms-of-use";
import { Dialog } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import PrivacyPolicies from "./dialogs/privacy-policies";

const LinkTermsOfUse = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="m-0 p-0 text-sm dark:text-light-blue">
          terms of use
        </Button>
      </DialogTrigger>
      <TermsOfUse />
    </Dialog>
  );
};

const LinkPolicyAndPrivace = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="m-0 p-0 text-sm dark:text-light-blue">
          privacy policies
        </Button>
      </DialogTrigger>
      <PrivacyPolicies />
    </Dialog>
  );
};

const FormFooter = () => {
  return (
    <div className="w-full text-center font-medium text-sm">
      <span>
        By registering on the platform, you agree to the <LinkTermsOfUse /> and
      </span>{" "}
      <LinkPolicyAndPrivace />
    </div>
  );
};

export default FormFooter;
