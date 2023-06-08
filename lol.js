function bubblesort(arr) {
    for(var i = 0; i <arr.length; i++){
        for(var j = 0; j < arr.length - 1; j++){
            if(arr[j] < arr[j+1]) {
                var tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr;
}
var arr = [71,18,56,74,23,100,54,53,38,48,74,3,43,44,8,45,71,77,44,31,59,67,56,4,54,40,23,100,46,96,60,22,49,60,99,55,99,58,17,18,54,98,45,30,45,36,5,67,56,23,45,1,8,9,7]
console.log(bubblesort(arr))