var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  
  var results2 = [];
  
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
import assert from "assert";
import findItemsOver20 from "../finditemsOver20.js";

describe('Test my findItemsOver20 function' , function(){
    it("It should return 'aryList' when the list is equal to itemList. " , function(){
        assert.deepEqual(results, findItemsOver20(itemList), "This should be true");
    });

    it("It should return 'results2' when the list is equal to itemList2. " , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2), "This should be true");
    });

    it("It should return 'results3' when the list is equal to 'itemList3'." , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3), "This should be true");
    });
    
});