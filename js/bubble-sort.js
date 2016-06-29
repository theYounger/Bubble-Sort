var arr = [4, 2, 0, 6, 9];

function bubbleSort(arr) {
  var swapped;

  do {
    swapped = false;
    for (var i=0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        var mem = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = mem;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(arr);
console.log('arr ' , arr);



