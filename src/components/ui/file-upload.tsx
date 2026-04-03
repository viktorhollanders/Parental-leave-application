import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FileProps = {
  id: string;
  label: string;
  allowedFileTypes: string[];
  register: UseFormRegisterReturn;
  errors?: FieldError;
};

export function FileUpload({
  id,
  label,
  allowedFileTypes,
  register,
  errors,
}: FileProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="hover:border-brand-primary bg-brand-secondary border-brand-primary hover:bg-brand-primary hover:text-brand-gray-100 border rounded-full p-3 text-brand-primary text-center"
      >
        <input
          className="sr-only"
          type="file"
          id={id}
          accept={allowedFileTypes.join(",")}
          {...register}
        />
        {label}
      </label>
      {errors?.message && (
        <span className="ml-6 mt-2 text-[12px] text-brand-error">
          {errors.message}
        </span>
      )}
    </div>
  );
}
