#! /usr/bin/env node

import chalk from "chalk";

export class Batch{
    count:number=0;
    batchId:number[]=[];
    batchName:string[]=[];
    year:number[]=[];
    
    addNewBatch(){
        
        let batchDate=new Date();
        this.batchId.push(++this.count);
        this.batchName.push("Batch "+this.count);
        this.year.push(batchDate.getFullYear())
        console.log(chalk.yellow(`New Batch has been Created Automatically...\n`));
    }
    getBatchDetails(){
        if (this.batchId.length) {
          this.batchId.forEach((num1, index) => {
            const num2 = this.batchName[index];
            const num3=this.year[index];
            console.log(chalk.green(`Batch ID: ${num1} Batch Name: ${num2} Year: ${num3} `));
          });
          } else {
            console.log(chalk.red("Batch not available"));
          }
    }
}