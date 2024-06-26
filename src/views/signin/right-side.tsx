import { Button } from "@/components/ui/button";
import Form from "./form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RightSideSignIn = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-end items-center absolute top-3 right-3 pr-9 pt-11 lg:p-0">
        <Button
          variant="link"
          className="font-bold dark:text-light-blue no-underline transition ease-out duration-500 hover:bg-light-blue/10 hover:no-underline p-5"
          asChild
        >
          <Link to="/signup">{t("Register")}</Link>
        </Button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default RightSideSignIn;
