import { useState, useCallback } from "react";
import { ToolState } from "../types/tools";

export function useToolState(initialText: string = "") {
  const [state, setState] = useState<ToolState>({
    inputText: initialText,
    outputText: "",
    isProcessing: false,
    error: null,
  });

  const setInputText = useCallback((text: string) => {
    setState((prev) => ({ ...prev, inputText: text }));
  }, []);

  const setOutputText = useCallback((text: string) => {
    setState((prev) => ({ ...prev, outputText: text }));
  }, []);

  const setProcessing = useCallback((isProcessing: boolean) => {
    setState((prev) => ({ ...prev, isProcessing }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  const reset = useCallback(() => {
    setState({
      inputText: "",
      outputText: "",
      isProcessing: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    setInputText,
    setOutputText,
    setProcessing,
    setError,
    reset,
  };
}