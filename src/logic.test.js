const { printFishBash, sortData, isPalindrome } = require("./logic");

/*
Test Number 1

1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" 
jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, 
cetak menggunakan console log atau sejenisnya.
*/

describe("Test Number 1", () => {
  let consoleCheck;

  beforeEach(() => {
    consoleCheck = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleCheck.mockRestore();
  });

  test("check positives cases", () => {
    let expectedOutput = [
      "3 - fish",
      "5 - bash",
      "6 - fish",
      "9 - fish",
      "10 - bash",
      "12 - fish",
      "15 - fish bash",
    ];

    printFishBash(15);

    expectedOutput.forEach((output, idx) => {
      expect(consoleCheck).toHaveBeenNthCalledWith(idx + 1, output);
    });
  });

  test("check empty cases", () => {
    printFishBash(2);
    expect(consoleCheck).not.toHaveBeenCalled();
  });
});

/*
2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
*/
describe("Test Number 2", () => {
  test("arrayData function should be sorted the data (sequence cases)", () => {
    let arrayData = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    sortData(arrayData);

    expect(arrayData.toString()).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
  });

  test("arrayData function should be sorted the data (mix cases)", () => {
    let arrayData = [77, 942, 2, 34, 6, 1000];
    sortData(arrayData);

    expect(arrayData.toString()).toBe([2, 6, 34, 77, 942, 1000].toString());
  });

  test("arrayData function should be sorted the data (same cases)", () => {
    let arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    sortData(arrayData);

    expect(arrayData.toString()).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
  });
});

/*
3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
*/
describe("Test Number 3", () => {
  test("check palindrome strings", () => {
    const testCases = ["racecar", "level", "madam", "aba", "abbbbba"];

    testCases.forEach((test) => {
      expect(isPalindrome(test)).toBe(true);
    });
  });

  test("check not palindrome strings", () => {
    const testCases = ["food", "eating", "burger", "running", "abc"];

    testCases.forEach((test) => {
      expect(isPalindrome(test)).toBe(false);
    });
  });

  test("check empty strings", () => {
    const testCases = ["", " ", "  ", "   "];

    testCases.forEach((test) => {
      expect(isPalindrome(test)).toBe(true);
    });
  });
});
