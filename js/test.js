/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module("sum");
test("sum function exist",2,function (){
    ok(sum,"sum exist");
    ok(typeof sum === 'function',"sum is a function");
});

test("sum returns correct",2,function (){
    equal(sum(1,10),55,"sum returns correct");
    equal(sum(-5,5),0,"sum returns correct");
});

module("is prime");
test("isprime function exist",2,function (){
    ok(isprime,"isprime exist");
    ok(typeof  isprime  === 'function',"isprime exist");
});

test("prime returns correct",2,function (){
    strictEqual(isprime(599),true,"599 is a prime number");
    strictEqual(isprime(600),false,"600 is not a prime number");
});
// https://blog.nraboy.com/2015/04/determine-if-a-number-is-prime-using-javascript/



