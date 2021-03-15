import { toProperCapitalize, toProperCapitalizeMult } from "./string";

test("toProperCapitalize", () => {
  const testCases = [
    { str: "Hello", expected: "Hello" },
    { str: "hEllo", expected: "Hello" },
    { str: "hELLo", expected: "Hello" },
    { str: "hELLo hoW aRe you", expected: "Hello how are you" },
    { str: "", expected: "" },
  ];

  testCases.forEach((testCase) => {
    expect(toProperCapitalize(testCase.str)).toBe(testCase.expected);
  });
});

test("toProperCapitalizeMult", () => {
  const testCases = [
    { str: "sanDieGo", expected: "Sandiego" },
    { str: "SanDiego", expected: "Sandiego" },
    { str: "San diego", expected: "San Diego" },
    { str: "", expected: "" },
  ];

  testCases.forEach((testCase) => {
    expect(toProperCapitalizeMult(testCase.str)).toBe(testCase.expected);
  });

  const testCasesWithSplit = [
    { str: "sanDieGo", expected: "Sandiego" },
    { str: "SanDiego", expected: "Sandiego" },
    { str: "San.dddiego", expected: "San.Dddiego" },
    { str: "", expected: "" },
  ];

  testCasesWithSplit.forEach((testCase) => {
    expect(toProperCapitalizeMult(testCase.str, ".")).toBe(testCase.expected);
  });
});
