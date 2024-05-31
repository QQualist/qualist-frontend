import { Textarea } from "@/components/ui/textarea";
import React, { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ITextAreaInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
}

const TextAreaInput = ({
  id,
  placeholder,
  register,
  ...props
}: ITextAreaInput) => {
  const { t } = useTranslation();
  return (
    <Textarea id={id} className="h-auto" placeholder={t(placeholder)} {...register} {...props} />
  );
};

export default TextAreaInput;
