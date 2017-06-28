QUnit.module("Test findLongestWord()");
QUnit.test("function findLongestWord",function(assert){
    assert.strictEqual(findLongestWord(["Function","name","longest","numbers"]),8);
});

QUnit.module("Test sum()");
QUnit.test( "sum function",function(assert){
    assert.strictEqual(sum([5,5,5,2]), 17);
    assert.strictEqual(sum([-5,5,5,2]), 7);
});

QUnit.module("Test multiply()");
QUnit.test("multiply function",function(assert){
    assert.strictEqual(multiply([2,2,4,2]), 32);
    assert.strictEqual(multiply([-2,2,4,2]), -32);
    assert.strictEqual(multiply([-2,-2,6,2]), 48);
});

QUnit.module("Test duplicate()");
QUnit.test( "function duplicate()", function( assert ) {
  assert.deepEqual(duplicate([1,3,3,4,5]), [1,3,3,4,5,1,3,3,4,5]);
  assert.deepEqual(duplicate([1,-1,2,0]), [1,-1,2,0,1,-1,2,0]);
});

QUnit.module("Testing evaluateExpression()");
QUnit.test( "function evaluateExpression", function( assert ) {
    assert.strictEqual(evaluateExpression(10,10,"+"), 20);
    assert.strictEqual(evaluateExpression(8,2,"/"), 4);
    assert.strictEqual(evaluateExpression(-5,-3,"-"), -2);
    assert.strictEqual(evaluateExpression(5,10,"-"), -5);
    assert.strictEqual(evaluateExpression(-5,-10,"*"), 50);
    assert.strictEqual(evaluateExpression(5,5,"%"), 0);
});
