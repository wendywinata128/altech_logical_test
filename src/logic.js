/*
1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" 
jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, 
cetak menggunakan console log atau sejenisnya.
 
2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
 
3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
*/

function printFishBash(n){
    for(let i = 1; i<=n; i++){
        let result = i % 15 === 0 ? 'fish bash' : i % 5 === 0 ? 'bash' : i % 3 === 0 ? 'fish' : null;

        if(result){
            console.log(`${i} - ${result}`);
        }
    }
}

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


function isPalindrome(string){
    for(let i=0; i < string.length / 2; i++){
        if(string[i] !== string[(string.length-1) - i]){
            return false;
        }
    }

    return true;
}

module.exports = {printFishBash, sortData, isPalindrome}


