// // 1.
// describe("A suite of basic functions", function() {
//     var name;

//     it("sayHello", function() {
//         name = "Conan";
//         var exp = "Hello Conan";
//         expect(exp).toEqual(sayHello(name));
//     });
// });

//2.
describe('JavaScript addition operator',function(){ 
	var a = 1;
    //建立it块
    it('adds two numbers together',function(){ 
        //测试1是否等于1
        expect(a).toEqual(1); 
    }); 
});



// //3.
// it("reverse word",function(){
//     expect("DCBA").toEqual(reverse("ABCD"));
//     expect('wangjing').toEqual(reverse('gnijgnaw'));
// });

// //4.
// //那么我会针对这个类写下如下单元测试代码：
// describe('test frame',function(){
//     var select =new Select();
//     it('select.show()',function(){ 
//          expect(select.show()).toEqual('show'); 
//     });
//     it('select.hide()',function(){ 
//          expect(select.hide()).toEqual('hide'); 
//     });   
// });


// //5.对断言表达式的使用
// describe("A suite of jasmine's function", function() {
//     describe("Expectations",function(){
//         it("Expectations",function(){
//             expect("AAA").toEqual("AAA");
//             expect(52.78).toMatch(/\d*.\d\d/);
//             expect(null).toBeNull();
//             expect("ABCD").toContain("B");
//             expect(52,78).toBeLessThan(99);
//             expect(52.78).toBeGreaterThan(18);

//             var x = true;
//             var y;
//             expect(x).toBe(true);
//             expect(x).toBeDefined();
//             expect(y).toBeUndefined();
//             expect(x).toBeTruthy();
//             expect(!x).toBeFalsy();

//             var fun = function() { return a + 1;};
//             expect(fun).toThrow();
//         });
//     });
// });

// //7.对开始前和使用后的变量赋值
//  describe("Setup and Teardown",function(){
//         var foo;
//         beforeEach(function() {
//             foo = 0;
//             foo += 1;
//         });
//         afterEach(function() {
//             foo = 0;
//         });

//         it("is just a function, so it can contain any code", function() {
//             expect(foo).toEqual(1);
//         });

//         it("can have more than one expectation", function() {
//             expect(foo).toEqual(1);
//             expect(true).toEqual(true);
//         });
//     });

// //8.对忽略suite的声明
//    xdescribe("Disabling Specs and Suites", function() {
//         it("Disabling Specs and Suites",function(){
//             expect("AAA").toEqual("AAA");
//         });
//     });
//  //9.对异步程序的单元测试
//    xdescribe("Asynchronous Support",function(){
//         var value, flag;
//         it("Asynchronous Support", function() {
//             runs(function() {
//                 flag = false;
//                 value = 0;
//                 setTimeout(function() {
//                     flag = true;
//                 }, 500);
//             });
//             waitsFor(function() {
//                 value++;
//                 return flag;
//             }, "The Value should be incremented", 750);

//             runs(function() {
//                 expect(value).toBeGreaterThan(0);
//             });
//         });
//     });

//  //9.类构造器的单元测试代码
//  describe('the construction of calss',function(){
//  	var Person = Class({
// 		init : function(name){
// 			this.name = name;
// 		},
// 		getName : function(){
// 			return this.name;
// 		} 
// 	});
// 	var Child = Class(Person,{

// 		init:{
// 			value:function(name,id){
// 				  this.name=name;
// 		          this.id = id;
// 		      }
// 		  },
// 		getId:{
// 			value:function(){
// 				  return this.id;
// 				}
// 			}
// 	});
//  	var p1 = new Person('wangjing');
// 	var p2 = new Child('wj','123456');
//  	it('the test of parent',function(){
//  		expect('wangjing').toEqual(p1.getName());
 		
//  	});
//  	it('the test of child',function(){
//  		expect('wj').toEqual(p2.getName());
//  		expect('123456').toEqual(p2.getId());
//  	})
//  });
 