import { State } from "@actions/news/state";
import { Alert, AlertDescription } from "@components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  state: State;
  inputName: string;
}

export function ErrorMessage({ state, inputName }: ErrorMessageProps) {
  const hasErrors = state && "errors" in state;

  if (!hasErrors) return null;

  const error = state?.errors[inputName];

  return (
    hasErrors && (
      <Alert variant="destructive" className="border-red-500 p-2">
        <AlertCircle className="size-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  );
}
