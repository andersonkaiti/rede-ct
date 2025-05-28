import * as Alert from "@components/ui/alert";
import { AlertCircle } from "lucide-react";
import { State } from "types/news-form-state";

interface ErrorMessageProps {
  state: State;
  inputName: string;
}

export function ErrorMessage({ state, inputName }: ErrorMessageProps) {
  const hasErrors = state && "errors" in state;

  return (
    hasErrors && (
      <Alert.Root variant="destructive" className="border-red-500 p-2">
        <AlertCircle className="size-4" />
        <Alert.Description>{state?.errors[inputName]}</Alert.Description>
      </Alert.Root>
    )
  );
}
