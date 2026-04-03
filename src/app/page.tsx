"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SelectOption } from "@/types";
// UI components
import { Button } from "@/components/ui/button";
import { RadioButton } from "@/components/ui/radio-button";
import { Checkbox } from "@/components/ui/checkbox";
import { StepIndicator } from "@/components/ui/step-inidactor";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";
import { DatePicker } from "@/components/ui/date-picker";

export default function Home() {
  const [isActive, setIsActive] = useState(true);

  const selectOptions: SelectOption[] = [
    { label: "employed", value: "employed" },
    { label: "self employed", value: "self employed" },
    { label: "unemployed", value: "self unemployed" },
  ];

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agreeToTerms: false,
      selectedOption: "option 2",
      applicantName: "name",
      employmentStatus: "",
      applicationFiles: "applicationFiles",
      FromDate: Date(),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-10 flex flex-col gap-3">
      <h1>hello</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Checkbox
          id="agreeToTerms"
          name="agreeToTerms"
          control={control}
          label="I agree to the terms"
        />
        <div className="flex flex-col gap-4">
          <RadioButton
            id="radio1"
            label="Option 1"
            value="option1"
            name="selectedOption"
            control={control}
          />
          <RadioButton
            id="radio2"
            label="Option 2"
            value="option2"
            name="selectedOption"
            control={control}
          />
          <RadioButton
            id="radio3"
            label="Option 3"
            value="option3"
            name="selectedOption"
            control={control}
          />
        </div>
        <Input
          id="FullName"
          label="applicantName"
          inputType="text"
          placeholder="Jpn Jonsson"
          register={register("applicantName")}
          errors={errors.applicantName}
        />
        <Select
          id="employmentStatus"
          label="Employment"
          name="employmentStatus"
          control={control}
          placeholder="--Chose your status--"
          options={selectOptions}
        />
        <FileUpload
          id="fileUpload"
          label="Upload file"
          allowedFileTypes={[".jpg", ".png", ".pdf"]}
          register={register("applicationFiles")}
          errors={errors.applicationFiles}
        />

        <DatePicker name="FromDate" label="From" control={control} />

        <Button variant="primary" size="md" type="submit">
          Next
        </Button>
      </form>

      <StepIndicator
        stepNumber={1}
        stepLabel="Applicant"
        completed={isActive}
        active
      />
    </div>
  );
}
