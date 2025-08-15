/*
TASK ZG

String sifatida berilgan string parametrni
snake case'ga o'tkazib beradigan function yozing.

MASALAN: convertToSnakeCase('name should be a string')
return 'name_should_be_a_string'


*/
function convertToSnakeCase(input: string): string {
  return input
    .toLowerCase() // Barcha harflarni kichik harfga o'zgartiradi
    .replace(/\s+/g, "_"); // Bo'sh joylarni "_" bilan almashtiradi
}

// Masalan:
const result = convertToSnakeCase("name should be a string");
console.log(result); // 'name_should_be_a_string'

/*
ZE-TASK:

Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
MASALAN: removeDuplicate('stringg') return 'string'

@MITASK
*/
/*
function removeDuplicate(str: string): string {
  const uniqueChars = new Set(str); // Har bir harfni unikal qilish uchun Set dan foydalanamiz
  return Array.from(uniqueChars).join(""); // Setni stringga o'girib, natijani qaytaramiz
}

console.log(removeDuplicate("stringg")); // Natija: 'string'
*/
/*
TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.



*/
/*
function changeNumberInArray(
  index: number,
  arr: number[],
  newValue: number
): number[] {
  // Berilgan indeksni arrayning uzunligi bilan tekshiramiz
  if (index >= 0 && index < arr.length) {
    arr[index] = newValue; // Arrayning indeksi bo'yicha yangi qiymatni o'rnatamiz
  }
  return arr; // Yangilangan arrayni qaytaramiz
}

// Misolni test qilish uchun:
const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
console.log(result); // Natija: [1, 2, 7, 2]
*/
/*
Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
*/
/*
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// Misollar:
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(10)); // 50
console.log(celsiusToFahrenheit(25)); // 77
*/
// I DID REBASE BECAUSE OF MY EMAIL MISTAKENLY HAD TYPO MISTAKE SO I LINKED TO MY GITHUB  again
/*
ZB-TASK:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45

@MITASK
*/

/*
function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Misol:
console.log(randomBetween(30, 50)); // 30 va 50 orasidagi random raqam
*/
/*
ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

@MITASK
*/
/*
function sortByAge(arr: { age: number }[]): { age: number }[] {
  return arr.sort((a, b) => a.age - b.age);
}

// Misol
const result = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
console.log(result); // [{age: 13}, {age: 21}, {age: 23}]
//new commit
const result2 = sortByAge([{ age: 27 }, { age: 31 }, { age: 19 }]);
console.log(result2);
*/
/*
Z-TASK:

Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2

@MITASK
*/
/*
function sumEvens(numbers: number[]): number {
  return numbers
    .filter((num) => num % 2 === 0) // Juft sonlarni filtrlash
    .reduce((acc, num) => acc + num, 0); // Yig'indini hisoblash
}

// Misol uchun chaqirish
const result = sumEvens([1, 2, 3, 4, 5, 6, 7, 7]);
console.log(result);
*/
/*
Y-TASK:

Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

@MITASK

*/
/*
function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1); // Birinchi arrayni Set ga aylantiramiz
  const intersection = arr2.filter((item) => set1.has(item)); // Ikkita arraydan umumiy elementlarni filtrlaymiz
  return intersection; // Natijani qaytaramiz
}

// Misol
const result = findIntersection([1, 2, 3], [3, 2, 0]);
console.log(result); // [2, 3]
*/
/*
TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda


*/
/*
function countOccurrences(obj: Record<string, any>, key: string): number {
  let count = 0;

  function countKeys(o: Record<string, any>) {
    for (const k in o) {
      if (k === key) {
        count++;
      }
      if (typeof o[k] === "object" && o[k] !== null) {
        countKeys(o[k]);
      }
    }
  }

  countKeys(obj);
  return count;
}

// Misol
const result = countOccurrences(
  { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
  "model"
);
console.log(result); // 2
*/
/*
W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

@MITASK

*/
/*
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

// Misol
const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(result); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
*/
/*
V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

@MITASK
*/
/*
function countChars(input: string): Record<string, number> {
  const charCount: Record<string, number> = {};

  for (const char of input) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

// Misol
console.log(countChars("hello"));
*/
/* 
U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

@MITASK

*/
/*
function sumOdds(n: number): number {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
}

// Misollar
console.log(sumOdds(13));
console.log(sumOdds(15));
*/
/* 
T-TASK:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

@MITASK
*/
/*
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  // Ikkita arrayni birlashtirish
  const mergedArray = [...arr1, ...arr2];

  // Arrayni tartiblash
  mergedArray.sort((a, b) => a - b);

  return mergedArray;
}

// Misol uchun foydalanish:
const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result);
*/
/*
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2

@MITASK
*/
/*
function missingNumber(arr: number[]): number {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2; // 0 dan n gacha bo'lgan sonlar yig'indisi
  const actualSum = arr.reduce((acc, num) => acc + num, 0); // Berilgan arraydagi sonlar yig'indisi
  return expectedSum - actualSum; // Tushib qolgan son
}

// Misol
console.log(missingNumber([3, 0, 1]));
*/
/*
R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

@MITASK
*/
/*
function calculate(expression: string): number {
  // Stringni "+" bo'yicha bo'lib, har bir sonni olish
  const numbers = expression.split("+").map(Number);
  // Sonlarni yig'indisini hisoblash
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Misol
console.log(calculate("5+8"));
console.log(calculate("10+35+50+40+30"));
*/
/*Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

@MITASK
*/
/*
function hasProperty(obj: object, prop: string): boolean {
  return prop in obj;
}

// Misol uchun:

const car = { brand: "Toyota", model: "Corolla", year: 2020 };

console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "color"));
console.log(hasProperty(car, "year"));
console.log(hasProperty(car, "brand"));
console.log(hasProperty(car, "make"));
*/
/*
P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

@MITASK
*/
/*
function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj) as [string, any][];
}

// Misol
const result = objectToArray({ a: 32, b: 35 });
console.log(result);
*/
/*O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

@MITASK
*/
/*
function calculateSumOfNumbers(arr: any): number {
  return arr.reduce((count: number, ele: any) => {
    return (count += typeof ele === "number" ? ele : 0);
  }, 0);
}

// Misol
const result = calculateSumOfNumbers([100, "100", { son: 10 }, true, 375]);
console.log(result);
*/
/*N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

@MITASK 
*/
/*
function palindromCheck(str: string): boolean {
  // Kichik harflarga o'tkazish va bo'sh joylarni olib tashlash
  const cleanedStr = str.toLowerCase().replace(/\s+/g, "");

  // Qaytgan stringni orqaga o'girish
  const reversedStr = cleanedStr.split("").reverse().join("");

  // O'xshashlikni tekshirish
  return cleanedStr === reversedStr;
}

// Misol uchun
console.log(palindromCheck("Anna")); // true
console.log(palindromCheck("stepfather")); // false
*/
/* 
M-TASK: 
Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. 
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];



@MITASK
*/
/*
function getSquareNumbers(
  numbers: number[]
): { number: number; square: number }[] {
  return numbers.map((num) => ({
    number: num,
    square: num * num,
  }));
}

// Misol uchun:
const result = getSquareNumbers([7, 5, 9]);
console.log(result);
*/
/*
L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/
/*
function reverseSentence(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Misol
console.log(reverseSentence("I am doing my homework!"));
*/
/*
K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

*/
/*
function countVowels(input: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Misol uchun
console.log(countVowels("development"));
console.log(countVowels("administration"));
*/
/*J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/
/*

function findLongestWord(sentence: string): string {
  // Stringni bo'shliqqa qarab ajratamiz
  const words: string[] = sentence.split(" ");

  // Eng uzun sozni topish uchun boshlang'ich qiymat
  let longestWord: string = "";

  // Har bir sozni tekshiramiz
  for (const word of words) {
    // Agar hozirgi so'z eng uzun so'zdan uzun bo'lsa
    if (word.length > longestWord.length) {
      longestWord = word; // Yangilaymiz
    }
  }

  return longestWord; // Eng uzun sozni qaytaramiz
}

console.log(findLongestWord("I am frontend developer Henry in Korea"));
*/
/**
 * modern frontend development(SINGLE PAGE APPLICATION DEB HAM ATALADI) VA SPA DA frontendimiz json data qabul qiladi backend dan va browserda joyshlashb olgan single page applicationimiz owa json datadan html ni ozi xosil qiladi
 * modern frontend development( yani S.P.A.) REACT LIBRARY sidan foydalanadi. react library framework emas (User's application ini  REACT DA QLAMIZ)
 * traditional frontend development (BSSR DEB HAM ATALADI ) VA EJS FRAMEWORK ORQALI AMALGA OSHIRILADI( BUrak loyihamiz adminkasini EJS da qilyapmiz)
 */

/*I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

*/
/*
function majorityElement(nums: number[]): number | null {
  const countMap: { [key: number]: number } = {};

  nums.forEach((num) => {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  });

  let majorityElement: number | null = null;
  let maxCount = 0;

  for (const num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      majorityElement = Number(num);
    }
  }

  return majorityElement;
}

console.log(majorityElement([5, 1, 2, 3, 4, 5, 2, 2, 8]));
*/

/*Project Standards:
-Login standards;
-Naming standards: function, method , variable => CamelCase
class=> Pascal
folders, file=>Kebab case
css class=> Snake case
- Error handling

 *
/**request:
 * Traditional API (form POST)
 * REST API
 * GraphQL API
 * 
 * frontend development:
 * Traditional FD => SSR=> EJS
 * MODERN FD => SPA=> REACT
 * 
 
 */
/**COOKIE LAR  HAR BIR REQUESTGA JOINT QILIB OLADI
 * COOKIE OZINI OZI DESTROY QILA OLADI
 */
//validation:
/**
 * frontend validation
 
 * backend validation
 *  database validation
 */
/*H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK*/
/*
function getDigits(input: string): string {
  let digits = "";

  for (const char of input) {
    if (/\d/.test(char)) {
      digits += char;
    }
  }

  return digits;
}

// Misol uchun funksiyani chaqirish
const result = getDigits("m14i1tapqrstv879uuu888uuu");
console.log(result);
*/
/*H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK
*/
/*
let str = getPositive([3, -6, 2, 15, -26, 38, -5, 5]);
function getPositive(numbers: number[]): string {
  // Filter orqali faqat musbat sonlarni olish
  const positiveNumbers = numbers.filter((num) => num > 0);
  // Musbat sonlarni string holatiga o'tkazish
  const positiveString = positiveNumbers.join("");
  return positiveString;
}
console.log(typeof str);
// Misol uchun:
console.log(getPositive([3, -6, 2, 15, -26, 38, -5, 5]));
*/
/*G-TASK: 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
@MITASK */
/*
function getHighestIndex(arr) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// Misol:
console.log(getHighestIndex([70, 80, 101, 1111, 999]));
*/

/*
PM2 COMMANDS
 
pm2 ls
pm2 start dist/server.js --name=BURAK
pm2 start "npm run start:prod" --name=BURAK
pm2 stop id
pm2 delete id
pm2 restart id

*/
