/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

QUnit.module("sum");
QUnit.test("sum function exist",function (assert){
    assert.expect(2);
    assert.ok(sum,"sum exist");
    assert.ok(typeof sum === 'function',"sum is a function");
});

QUnit.test("sum returns correct",function (assert){
    assert.expect(2);
    assert.equal(sum(1,10),55,"sum returns correct");
    assert.equal(sum(-5,5),0,"sum returns correct");
});

QUnit.module("isPrime");
QUnit.test("isprime function exist",function (assert){
    assert.expect(2);
    assert.ok(isprime,"isprime exist");
    assert.ok(typeof  isprime  === 'function',"isprime exist");
});

QUnit.test("prime returns correct",function (assert){
    assert.expect(2);
    assert.strictEqual(isprime(599),true,"599 is a prime number");
    assert.strictEqual(isprime(600),false,"600 is not a prime number");
});
// https://blog.nraboy.com/2015/04/determine-if-a-number-is-prime-using-javascript/

