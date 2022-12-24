//export {};
export {};
// let myType1={name:"zia",id:1}//a
// myType1={id:2,name:"tom"}// b
// myType1={id:3,name:"mike"}
// let array1:number[]=[5,6,7];
// let array2:Array<number>=[1,3];
// let array3=new Array[number];
// let array4:number[]=[];
// let myType1:any={name:"zia",id:1};
// myType1={id:2,name:"tom"};
// myType1={id:3,name:"mike",gender:false};
// myType1={id:4,gender:false}; 
// let myType1=<any>{name:"zia",id:1}
// myType1={id:2,name:"tom"}
// myType1={id:3,name:"mike",gender:false}
// myType1={id:4,gender:false} 
// let notSure:any=4;
// notSure="dsfvsd";
// notSure=false;
// const enum Color2 {Red=1,Green=2,Blue=4};
// var c:string=Color2[2];
// console.log(c);
// var buildName:(...rest:string[],fname:string)=>string=
// function(...restOfName:string[],firstName:string):string
// {
//    return firstName+""+restOfName.join("");
// }
// console.log(buildName("khan","zia"));
//console.log(myAdd(4,5));
// function myCallBack(text:string){
//     console.log("inside mycallBack"+text);
// }
// function callingFunction(initialText:string,
//     callback:(text:string)=>void){
//         callback(initialText);
//     }
// callingFunction("myText",myCallBack);
// function pickCard(x:{suit:string;card:number;}[]):number;
// function pickCard(x:number):{suit:string;card:number;};
// function pickCard(x):any{
//     if(typeof x== "object"){
//     var pickedcard=Math.floor(Math.random()*x.length);
//     return pickCard;
//     }else if(typeof x== "number"){
//         var pickedSuit=Math.floor(x/13);
//         return {suit:pickCard,card:x%13}
//     }
// }
// function createDate(timestamp: number): number;
// function createDate(month: number, day: number, year: number): Date;
// function createDate(monthOrTimestamp: number, day?: number, year?: number) {
// return day === undefined || year === undefined
// ? monthOrTimestamp
// : new Date(year, monthOrTimestamp, day);
// }
//createDate(554356800); // Ok
//createDate(7, 27, 1987); // Ok
