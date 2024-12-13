import { create } from "zustand";

export type ResultType =
	| { status: "success"; output: string }
	| { status: "error"; output: string }
	| null;

type Store = {
	language: string;
	setLanguage: (selectedLang: string) => void;
	executionMode: string;
	setExecutionMode: (resultModeValue: string) => void;
	result: ResultType;
	setResult: (resultValue: ResultType) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
  code: string
  setCode: (code: string) => void
};

export const useStore = create<Store>()((set) => ({
	language: "javascript",
	setLanguage: (selectedLang) => set({ language: selectedLang }),
	executionMode: "success",
	setExecutionMode: (resultModeValue) => set({ executionMode: resultModeValue }),
	result: { status: "success", output: "" },
	setResult: (resultValue) => set({ result: resultValue }),
	isLoading: false,
	setIsLoading: (value) => set({ isLoading: value }),
  code: "",
  setCode: ( value) => set({code: value})
}));
