(() => {

  /*define collection*/
  const people = [
    {name: 'steve', age: 21},
    {name: 'john', age: 33},
    {name: 'bob', age: 45},
    {name: 'karen', age: 70},
    {name: 'laura', age: 18},
    {name: 'emily', age: 27},
    {name: 'william', age: 33},
    {name: 'kevin', age: 56},
    {name: 'harry', age: 67},
    {name: 'stacy', age: 22}
  ];

  /*generates new array and does not alter original*/
  let peopleByAge = sortMain(people, (a,b) => a.age < b.age);
  printCollection(people);
  printCollection(peopleByAge);

  /*main sort method*/
  function sortMain(array, comparator){
    return splitArray(array);
    /*merge sort (part 1 - split array)*/
    function splitArray(array){
      let length = array.length;
      if(length > 1){
        let middle = Math.floor(length/2);
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle);
        return mergeArrays(splitArray(leftArray), splitArray(rightArray));
      }
      else{
        return array;
      }
    }
    /*merge sort (part 2 - merge arrays)*/
    function mergeArrays(leftArray, rightArray){
      let mergedArray = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(comparator(leftArray[leftIndex], rightArray[rightIndex])){
          mergedArray.push(leftArray[leftIndex++]);
        }
        else{
          mergedArray.push(rightArray[rightIndex++]);
        }
      }
      return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
    }
  }

  /*print array of objects utility*/
  function printCollection(collection){
    let array = [];
    for(let item of collection){
      array.push(`name: ${item.name} - age: ${item.age}`);
    }
    console.log(array);
  }

})();
