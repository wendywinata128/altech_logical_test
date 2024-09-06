#   Logical Test Assignment
Repository ini berisi tentang penjelasan dari pengerjaan logical test dari altech omega.

## Cara Menjalankan
1. Clone repository
```
https://github.com/wendywinata128/altech_logical_test.git
```
2. Cara menjalankan Unit Test
```
npm run test
```

## Teknologi Pengerjaan
1. Node JS : Kode penyelesaian masalah di tulis dengan menggunakan Javascript.
2. Jest : Unit testing menggunakan Library Jest.

##  Soal 1
### Pertanyaan
Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

### Answer
```
    function printFishBash(n){
        for(let i = 1; i<=n; i++){
            let result = i % 15 === 0 ? 'fish bash' : i % 5 === 0 ? 'bash' : i % 3 === 0 ? 'fish' : null;

            if(result){
                console.log(`${i} - ${result}`);
            }
        }
    }
```

### Penjelasan
Untuk menyelesaikan soal nomor 1, menurut saya penyelesaiannya cukup mudah, kita dapat menggunakan operasi modulus (`%`) untuk menentukan apakah sebuah bilangan habis dibagi atau tidak. Lalu, untuk dapat memastikan program dapat mengecek semua bilangan (3, 5, dan 15) kita harus melakukan pengecekan terhadap bilangan 15 terlebih dahulu (bilangan terbesar) lalu ke bilangan 5 dan terakhir ke bilangan 3.

### Unit Testing
Pada fungsi ini saya melakukan unit testing untuk melakukan pengecekan terhadap skenario berikut
1. Positive Cases: Apakah fungsi ini dapat menghasilkan expected output yang benar pada inputan 15.
2. Empty Cases: Apakah fungsi ini tidak menampilkan apapun saat tidak ada bilangan yang habis di bagi.

##  Soal 2
### Pertanyaan
Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript.

### Answer
```
    function sortData(listData){
        for(let i = 0; i<listData.length; i++){
            for(let j = i + 1; j<listData.length; j++){
                if(listData[j] < listData[i]){
                    let temp = listData[i];
                    listData[i] = listData[j];
                    listData[j] = temp;
                }
            }
        }
}
```

### Penjelasan
Untuk menyelesaikan soal nomor 2 dalam melakukan sorting tanpa menggunakan fungsi bawaan dari javascript, saya menggunakan algoritma **Bubble Sorting**. Algoritma ini cukup simple, ia akan membandingkan satu persatu angka dari arraynya, jika yang kiri (i) lebih kecil dari yang kanan (j) maka kita akan melakukan swap posisi dari angka tersebut. Hal ini akan membuat seluruh array menjadi berurutan.

### Unit Testing
Pada fungsi ini saya melakukan unit testing untuk melakukan pengecekan terhadap skenario berikut
1. Sorting Data Berurutan secara terbalik : Apakah fungsi ini dapat melakukan sorting ketika array yang di beri adalah `[9, 8, 7, 6, 5, 4, 3, 2, 1]`
2. Sorting Data Tidak Berurutan : Apakah fungsi ini dapat melakukan sorting ketika array yang di beri adalah `[77, 942, 2, 34, 6, 1]`
3. Sorting Data Yang telah Berurutan : Apakah fungsi ini dapat mengembalikan array yang benar ketika array yang di beri adalah array yang telah berurutan `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

##  Soal 3
### Pertanyaan
Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false.

### Answer
```
    function isPalindrome(string){
        for(let i=0; i < string.length / 2; i++){
            if(string[i] !== string[(string.length-1) - i]){
                return false;
            }
        }

        return true;
    }
```

### Penjelasan
Untuk menyelesaikan soal nomor 3 dalam melakukan pengecekan apakah string tersebut merupakan palindrome atau tidak, saya menggunakan **Loop**. Cara pengecekan saya cukup simple, saya akan melakukan loop sebanyak setengah *length* dari string yang di-inputkan, di setiap perulangan saya akan melakukan pengecekan apakah index awal dan index akhir sama atau tidak, jika tidak sama. maka akan langsung return false yang berarti **String tersebut bukan palindrome**. Jika loop berhasil selesai, berarti setiap pengecekan adalah sama, maka **String tersebut adalah palindrome**

### Unit Testing
Pada fungsi ini saya melakukan unit testing untuk melakukan pengecekan terhadap skenario berikut
1. Check palindrome strings : Apakah fungsi ini dapat mengembalikan true ketika string yang di-inputkan adalah string palindrome.
2. Check not palindrome strings : Apakah fungsi ini dapat mengembalikan false ketika string yang di-inputkan adalah string bukan palindrome.
3. Check empty strings : Apakah fungsi ini dapat mengembalikan true ketika string yang di-inputkan adalah string kosong.

## Contact
- Email: wendywinata128@gmail.com
- LinkedIn: https://www.linkedin.com/in/wendyyy/