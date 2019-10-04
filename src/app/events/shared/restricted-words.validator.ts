import { FormControl } from "@angular/forms";

/**
 * custom validator, triggers on multiple restricted words
 */
export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;

    var invalidWords = words
      .map(word => (control.value.includes(word) ? word : null))
      .filter(word => word != null);

    return control.value.includes("foo")
      ? { restrictedWords: invalidWords.join(", ") }
      : null;
  };
}
