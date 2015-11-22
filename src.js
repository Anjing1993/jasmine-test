
1.
function sayHello(name){
    return "Hello " + name;
}

//3.
function reverse(name){
    return name.split('').reverse().join('');
}

//4.
var Select =function(){
};
Select.prototype ={
    show :function(){
       return 'show';
    },
    hide :function(){
       return 'hide';
    },
    change :function(){
    	return 'change';
    },
    width :function(){
    	return 'width';
    }
}
Select.prototype.constructor=Select;

//5.类构造器的逻辑代码
var flag=false;
	var Class=function(parent, prop){
       if(typeof (parent) === 'object'){
       	prop = parent;
       	parent = null;
       }
       var createConsturctor=function (){
          if(!flag){
             	this.init.apply(this, arguments);
          }
       }
        if(!parent){
       	 for(var name in prop){
      	if(prop.hasOwnProperty(name)){
      		createConsturctor.prototype[name] = prop[name];
      	    }
         }
       }
       //若是需要从其他类扩展，则需要进行实例化实现继承
       if(parent){
           flag = true;
           createConsturctor.prototype = Object.create(parent.prototype,prop);
           flag = false;  //类的实例化结束，标志位初始化
       }
      
       return createConsturctor;//构造函数作为返回值
	}

	