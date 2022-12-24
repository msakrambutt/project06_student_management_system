#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import {Student} from './student.js';
import { Course } from './course.js';
import { Batch } from './batch.js';
import { Registration } from './registration.js';
import { Fee } from './fee.js';
import { count } from 'console';
//variable
let mainContinue=false;
let mainMenueContinue=true;
let studentContinue=true;
let courseContinue=true;
let addNewCourseContinue=true;
let addNewStudentContinue=true;
let batchContinue=true;
let registrationContinue=true;
let addnewRegContinue=true;
let signCondition=true;
let user_signIn=false;
let signStudentFName="";
let signStudentLName="";
let studentFeeCondition=true;
let signStudentId=0;
let studentFeeBal=0;
let cid=0;



//validate user input
function validateInput(input:string): string|boolean
{
 let  regexAlpha1 =  /^[A-Za-z\s]*$/; // only Aplhabets  and space allowed
 ///^[0-9a-zA-Z]+$/(alphanumeic allowed)
    let  regexAlpha =  /^[A-Za-z]+$/; // only Aplhabets allowed
        if(!input.match(regexAlpha)){
            return "Please enter Alphabets"; 
        }else if(input=== ""){
            return "Blank field now allowed,please fill the field"; 
        }else{
            return true;
        }
}

function validateStudent(input:string):string|boolean{
    let  regexAlpha1 =  /^[A-Za-z\s]*$/; // only Aplhabets  and space allowed
    if(!input.match(regexAlpha1)){
        return "Please enter Alphabets"; 
    }else if(input=== ""){
        return "Blank field now allowed,please fill the field"; 
    }else{
        return true;
    }

}

function validateEmail(input:string):string|boolean{
        let  regexAlpha1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; // email verified
        if(!input.match(regexAlpha1)){
            return "Please enter Correct Email Address"; 
        }else if(input=== ""){
            return "Blank field now allowed,please fill the field"; 
        }else{
            return true;
        }
    
    } 

async function main()
{
    const myCourse=new Course();
    const myBatch=new Batch();
    const myStudent=new Student();
    const myRegistration=new Registration();
    const myFee=new Fee();
    function getStudentData(){
        let newStData:number[]=[];
        for(let i=0;i<myStudent.studentId.length;i++){        
            newStData.push(myStudent.studentId[i]);
        }
        return newStData;
    }
    function getCourseData(){
        let newCourData:string[]=[];
        for(let i=0;i<myCourse.courseID.length;i++){
            newCourData.push(myCourse.cousreName[i]);
            
        }
        return newCourData;
    }
    function getBatchData(){
        let newBatchData:string[]=[];
        for(let i=0;i<myBatch.batchId.length;i++){
            newBatchData.push(myBatch.batchName[i]);
            
        }
        return newBatchData;
    }
    do{//Main menue
    
    const answers:{createCourse:"Student"|"Course"|"Batch"|"Enroll"|"Show Student Details"|"Exit"}= await inquirer.prompt([//course edit|Details|Delete
        {
            name: "createCourse",
            type: "list",
            choices:["Student","Course","Batch","Enroll","Show Student Details","Exit"],
            
           
        }
    ]);

    if(answers.createCourse=== "Student"){//student section
    do{ 
    const answers1:{addNewStudent:"Add Student"|"Delete Student"|"Show Details"|"Main Menue"}= await inquirer.prompt([//course edit|Details|Delete
        {
            name: "addNewStudent",
            type: "list",
            choices:["Add Student","Delete Student","Show Details","Main Menue"],
            
           
        }
    ]);

    if(answers1.addNewStudent==="Add Student"){
    do{//Student section:Add new Students
        
        const student=await inquirer.prompt([
            {
                name:"studentFirstName",
                type:"input",
                message:"First Name: ",
                validate:validateStudent

            },
            {
                name:"studentLastName",
                type:"input",
                message:"Last Name: ",
                validate:validateStudent
            },
            {
                name:"studentGender",
                type:"list",
                message:"Gender: ",
                choices:["Male","Female"]
            },
            {
                name:"studentLogin",
                type:"input",
                message:"Student login:(only charcter & number allowd) ",
                validate:function validateStudentLogin(input:string):string|boolean{
                    let  regexAlpha1 =  /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                    if(!input.match(regexAlpha1)){
                        return "Please enter characters & numbers "; 
                    }else if(input=== ""){
                        return "Blank field now allowed,please fill the field"; 
                    }else{
                        return true;
                    }
                
                }
            },
            {
                name:"studentPwd",
                type:"password",
                message:"Password(Only Alphabet Numeric values Allow): ",
                validate:function validateStudentPwd(input:string):string|boolean{
                    let  regexAlpha1 =  /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                    if(!input.match(regexAlpha1)){
                        return "Please enter characters & numbers "; 
                    }else if(input=== ""){
                        return "Blank field now allowed,please fill the field"; 
                    }else{
                        return true;
                    }
                
                }
            }

    ]);
    
    myStudent.addNewStudent(student.studentFirstName,student.studentLastName,student.studentLogin,student.studentPwd,student.studentGender);
    console.log(chalk.yellow(" New Student has been Created...\n"));
    
    const checkConfirm=await inquirer.prompt([
        {
            name:"confirm",
            type:"confirm",
            message:"Do you want Add more Course(y/n) "
        }
    ]);
       if(checkConfirm.confirm=== true){
        addNewStudentContinue=true;
       }else
       {
        addNewStudentContinue=false;

       }
    }while(addNewStudentContinue)

    }
    else if(answers1.addNewStudent==="Delete Student"){
        //
        if(myStudent.studentId.length>0){
        const st_delete=await inquirer.prompt([
            {
                name:"stid",
                type:"list",
                message:"Select Sudent ID to delete it:",
                choices:getStudentData
            }
        ]);
        
        for(let i=0;i<myStudent.studentId.length;i++){
            let s_fname=myStudent.firstName[i];
            let s_lname=myStudent.lastName[i];
            if(myStudent.studentId[i]===Number(st_delete.stid)){
                myStudent.studentId.splice(i,1);
                myStudent.firstName.splice(i,1);
                myStudent.lastName.splice(i,1);
                myStudent.password.splice(i,1);
                myStudent.gender.splice(i,1);;
                myStudent.student_fee_status.splice(i,1);
                myStudent.student_fee_balance.splice(i,1);
                myStudent.cnic.splice(i,1);
                myStudent.phoneNumber.splice(i,1);
                myStudent.emailId.splice(i,1);
                myStudent.city.splice(i,1);
                console.log(chalk.yellow(`Student ${s_fname} ${s_lname} record has been deleted`));
                
                break;
            }
        }
        }else{
            console.log(chalk.red(`Student record not found`));

        }   
        //
    }else if(answers1.addNewStudent==="Show Details"){
        myStudent.getStudentDetails();

    }else{
        studentContinue=false;
    }

    }while(studentContinue)

    }

    if(answers.createCourse=== "Course"){
    do{
        const answers:{addNewCourse:"Add New Course"|"Show Course Details"|"Main Menue"}= await inquirer.prompt([//course edit|Details|Delete
        {
            name: "addNewCourse",
            type: "list",
            choices:["Add New Course","Delete Course","Show Course Details","Main Menue"]
            
           
        }
    ]);
    if(answers.addNewCourse==="Add New Course"){
        do{//course section:Add new  Courses
        
        const course=await inquirer.prompt([
            {
                name:"courseName",
                type:"input",
                message:"Course Name: ",
                validate:validateStudent
            },
            {
                name:"courseDuration",
                type:"input",
                message:"Duration: ",
                validate:function validateCourseDuration(input:string):string|boolean{
                    let  regexAlpha1 =  /^[0-9a-zA-Z\s]+$/; // only Aplhanumeric and space
                    if(!input.match(regexAlpha1)){
                        return "Please enter characters or numbers "; 
                    }else if(input=== ""){
                        return "Blank field now allowed,please fill the field"; 
                    }else{
                        return true;
                    }
                
                }
                
            },
            {
                name:"courseDescription",
                type:"input",
                message:"Description: ",
                validate:function validateCourseDesc(input:string):string|boolean{
                    //let  regexAlpha1 =  /^[0-9a-zA-Z\s]*$/; // only Aplhanumeric & space 
                    let  regexAlpha1 =/^[0-9a-zA-Z\s-.&]*$/;
                    if(!input.match(regexAlpha1)){
                        return "Please enter characters/numbers/Space Alllowd "; 
                    }else if(input=== ""){
                        return "Blank field now allowed,please fill the field"; 
                    }else{
                        return true;
                    }
                
                }

            },
            {
                name:"courseFee",
                type:"input",
                message:"Fee: ",
                validate:function validateCourseFee(input:number): string|boolean{
                    if(isNaN(input)) {
                        return "Please enter valid input";
                    }else if(input<=0){
                        return "Please enter valid input";
                    }
                    else{
                        return true;
                    }
                }
            },
            {
                name:"courseCrditHour",
                type:"input",
                message:"Credit Hour: ",
                validate:function validateCourseCreditHour(input:number): string|boolean{
                    if(isNaN(input)) {
                        return "Please enter valid input";
                    }else if(input<=0){
                        return "Please enter valid input";
                    }
                    else{
                        return true;
                    }
                }
            }
        ]);
    
    myCourse.addNewCourse(course.courseName,course.courseDuration,course.courseDescription,Number(course.courseFee),Number(course.courseCrditHour));
    console.log(chalk.yellow("New Course has been Created...\n"));
    
    const checkConfirm=await inquirer.prompt([
        {
            name:"confirm",
            type:"confirm",
            message:"Do you want Add more Course(y/n) "
        }
    ]);
       if(checkConfirm.confirm=== true){
        addNewCourseContinue=true;
       }else
       {
        addNewCourseContinue=false;

       }
    }while(addNewCourseContinue)

    }else if(answers.addNewCourse==="Show Course Details"){
        myCourse.getCourseDetails();

    }else{
        courseContinue=false;
    }

    }while(courseContinue)
    
    }

    ///batch section
    if(answers.createCourse=== "Batch"){


    do{//Create new batch automatically
        batchContinue=true;
        const answers:{addNewBatch:"Add New Batch"|"Show Batch Details"|"Main Menue"}= await inquirer.prompt([//course edit|Details|Delete
        {
            name: "addNewBatch",
            type: "list",
            choices:["Add New Batch","Show Batch Details","Main Menue"]
        }
        ]);
   
        if(answers.addNewBatch=== "Add New Batch"){
            myBatch.addNewBatch();
        }else if(answers.addNewBatch==="Show Batch Details"){
            myBatch.getBatchDetails();
        }else{
            batchContinue=false;
        }


    }while(batchContinue)
       
    }
    
    if(answers.createCourse=== "Enroll"){//Enroll or Registration section
        //put condition if student and course exist then run enroll part
        // Start Enroll Section 
    //check student/course/batch exist then this option diplay
    if(myStudent.count<=0){
        console.log(chalk.red("\nStudent not exist, First Create New Student..."));
        
    }else if(myCourse.count<=0){
        console.log(chalk.red("\nStudent Course not exist, First Create courses..."));
    }else if(myBatch.count<=0){
        console.log(chalk.red("\nStudent Batch not exist, First Create batches..."));
    }else{

    do{
        const userLogin=await inquirer.prompt([
            {
                name:"userid",
                type:"input",
                message:"User Name: "
            },
            {
                name:"userpwd",
                type:"input",
                message:"Password: "
            }
        ]);
    let signOk=myStudent.studentLogin.find(value=>value===userLogin.userid);
    let pwdOk=myStudent.password.find(value=>value===userLogin.userpwd);
    if(signOk!==undefined && pwdOk!==undefined){
        user_signIn=true;
        signStudentId=myStudent.studentLogin.indexOf(signOk);
       // console.log(signStudentId);
        
    }

    if(user_signIn){
        console.log(chalk.green("\nUser Login:Successfully..."));
        user_signIn=true;
        signCondition=false;
    }else{
        console.log(chalk.red("\nInvalid username or password"));
        signCondition=true;

    }
    }while(signCondition)
    
    do{
        const answers:{addNewEnroll:"New Enroll"|"Pay Fee"|"Main Menue"}= await inquirer.prompt([//course edit|Details|Delete
        {
            name: "addNewEnroll",
            type: "list",
            choices:["New Enroll","Pay Fee","Main Menue"] 
        }
    ]);
    if(answers.addNewEnroll==="New Enroll"){
        do{//New Enrollment or Registration start
        //condition first time student enroll or second time
        if(myRegistration.registration_status[signStudentId]===undefined){
            
            const course=await inquirer.prompt([
                {
                    name:"cnic",
                    type:"input",
                    message:"Enter 13 Digit CNIC No:(only numbers allowed without any sign) ",
                    validate:function validateCnic(input:number): string|boolean{
                        if(isNaN(input)) {
                            return "Please enter valid input";
    
                        }else if (String(input).length<13 || String(input).length>13){
                            return "Please enter correct digit";
                        }
                        else{
                            return true;
                        }
                    }

                },
                {
                    name:"phoneNumber",
                    type:"input",
                    message:"Enter Phone No:(only numbers allowed without any sign) ",
                    validate:function validatephonenumber(input:number): string|boolean{
                        if(isNaN(input)) {
                            return "Please enter valid input";
                        }else if (String(input).length<11 || String(input).length>11){
                            return "Please enter correct digit";
                        }
                        else{
                            return true;
                        }
                    }

                },
                {
                    name:"email",
                    type:"input",
                    message:"Email ID: ",
                    validate:validateEmail
                },
                {
                    name:"city",
                    type:"input",
                    message:"City: ",
                    validate:validateStudent
                },
                {
                        name:"courseid",
                        type:"list",
                        message:"Select Course:",
                        choices:getCourseData
                },
                {
                        name:"batchid",
                        type:"list",
                        message:"Select Batch:",
                        choices:getBatchData
                }

            ]); 
            //get student/course/batch details
        
        for(let i=0;i<myCourse.courseID.length;i++){
            //if(myCourse.courseID[i]===Number(course.courseid)){
            if(myCourse.cousreName[i]===course.courseid){

               cid=i;
            }
        }
        myRegistration.addNewRegistration(myStudent.studentId[signStudentId],course.courseid,course.batchid);
        myStudent.addNewStudentoptinal(Number(course.cnic),course.phoneNumber,course.email,course.city,"Balance Due",myCourse.course_fee[cid]);
        console.log(chalk.yellow(`Student has been Enrolled in ${course.courseid} course ...\n`));
        addnewRegContinue=false;
        } else{
        console.log(chalk.red(`Student can enrolled at a time only one course `));         
        } 
    
        }while(addnewRegContinue)

        //end new enrolled

    }else if(answers.addNewEnroll==="Pay Fee"){  //first check any student enrolled

        if(myRegistration.registrationID.length>0){
        do{//Pay Student Fee section
            
            
            console.log(chalk.yellow("Course Name: "+ myCourse.cousreName[cid]+"\n"));//issue
            console.log(chalk.yellow("Batch Name: "+ myBatch.batchName[cid]+"\n"));//issue

            const fee=await inquirer.prompt([
                {
                    name:"paymentMode",
                    type:"list",
                    message:"select your payment Mode: ",
                    choices:["BY Bank","By Cash"]
                },
                {
                    name:"inoiceNo",
                    type:"input",
                    message:"Enter Invoice No:",
                    validate:function validateInvoiceNo(input:string):string|boolean{
                        let  regexAlpha1 =  /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                        if(!input.match(regexAlpha1)){
                            return "Please correct invoice No "; 
                        }else if(input=== ""){
                            return "Blank field now allowed,please fill the field"; 
                        }else{
                            return true;
                        }
                    
                    }
                },
                ]);
                console.log(chalk.yellow("Course Fee: "+ myCourse.course_fee[cid]+"\n"));//issue
                console.log(chalk.yellow("Balance Due: "+ myStudent.student_fee_balance[signStudentId]+"\n"));
                const fee1=await inquirer.prompt([
                {
                    name:"feepaid",
                    type:"input",
                    message:"Enter Course Fee ",
                    validate:function validateInput(input:number): string|boolean{
                        if(isNaN(input)) {
                            return "Please enter valid input";
                        }else if(input>Number(myStudent.student_fee_balance[signStudentId]) || Number(input<myStudent.student_fee_balance[signStudentId])){
                            return "Please enter correct amount";
                        }else if(input===Number(myStudent.student_fee_balance[signStudentId])){
                            return "please pay full fee, Partial payment not allowed";
                        } else{
                            return true;
                        }
                      }

                }
            ]);
            studentFeeBal=myStudent.student_fee_balance[signStudentId];
            myStudent.student_fee_balance[signStudentId]=myStudent.student_fee_balance[signStudentId]-Number(fee1.feepaid);
            myFee.addNewFee(myStudent.studentId[signStudentId],myCourse.cousreName[signStudentId],fee.studentBatch,fee.paymentMode,fee.inoiceNo,Number(fee1.feepaid));
            console.log(chalk.yellow(`\nStudent ${myStudent.firstName[signStudentId]} ${myStudent.lastName[signStudentId]} has been paid their fee, course:{ ${myCourse.cousreName[signStudentId]}}\n`));
            const checkConfirm=await inquirer.prompt([
                {
                    name:"confirm",
                    type:"confirm",
                    message:"Do you want enroll more (y/n) "
                }
            ]);
            if(checkConfirm.confirm === true)
            {
                studentFeeCondition=true;
            }else
            {
                 studentFeeCondition=false;
    
            }
            
        }while(studentFeeCondition)
        
    }else{
        console.log(chalk.red(`Please first Enroll yourself then pay fee...`));
    }


//end fee section
    }else
    {
        console.log(chalk.yellow(`Student ${signStudentFName} ${signStudentLName} Signout...\n`));
        myRegistration.showRegistrationDetails();
        signStudentFName="";
        signStudentFName="";
        user_signIn=false;
        registrationContinue=false;
    }
    }while(registrationContinue)
    }
        
}//end enroll section
    if(answers.createCourse==="Show Student Details"){
        ///
        if(myStudent.studentId.length>0){
        const stDetails=await inquirer.prompt([
            {
                name:"id",
                type:"list",
                message:"Select Student to check their details: ",
                choices:getStudentData

            }
        ]);
        let index=myStudent.studentId.indexOf(stDetails.id);
        console.log(chalk.blue.bold(`\tStudent Complete Status...\n`));
        //     //Display student & registration Data
        console.log(`_______________________________________________________________________`);
        console.log(chalk.yellow(`Student ID: ${myStudent.studentId[index]} Name: ${myStudent.firstName[index]} ${myStudent.lastName[index]}\n`));

        if(myRegistration.reg_studentID[index]===Number(stDetails.id)){
        console.log(chalk.yellow(`Login ID: ${myStudent.studentLogin[index]} Gender ${myStudent.gender[index]} CNINC: ${myStudent.cnic[index]} Ph #: ${myStudent. phoneNumber[index]} Email: ${myStudent.emailId[index]} City: ${myStudent.city[index]}`));
        
        console.log(chalk.green(`Course Name: ${myRegistration.reg_courseID[index]} Course Status ${myRegistration.registration_status[index]} Batch Name: ${myRegistration.reg_batchID[index]}\n`));
        }
          
        else{
            console.log("Students not Enrolled \n");
            
        }
        if(myFee.fee_id.length>0){
              for(let i=0;i<myFee.fee_id.length;i++)
               {
                console.log(stDetails.id+" "+myFee.fee_student_id[i]);
                
              if(Number(stDetails.id)===myFee.fee_student_id[i]){
                console.log(`_______________________________________________________________________`);
                console.log(chalk.blue(`Student Id ${myFee.fee_student_id[i]} Fee ID ${myFee.fee_id[i]} Date ${myFee.date[i]} \nInvoice No: ${myFee.invoice_no[i]} Course Name: ${myFee.fee_course_name[i]} \nCourse Fee: ${myCourse.course_fee[i]}\nAmount Pay: ${myFee.fee_paid[i]}\nBalance: ${myStudent.student_fee_balance[i]}`));
                console.log(`_______________________________________________________________________`);

               }

              }
        }else{
           console.log("Fee not paid..");
            
        }

        }
        else{
        console.log("Students not Exist, First Create it \n");
        }
        ////
    }
    if(answers.createCourse=== "Exit"){
        mainMenueContinue=false;
        mainContinue=false;
    }
}while(mainMenueContinue)

}
const sleep=()=> new Promise((res,rej)=> setTimeout(res,500));
async function welcome() {
    const title=chalkAnimation.rainbow('\tWelcome to  Student Management System');
    await sleep();
    title.stop();
    
    do{
    main();
    }while(mainContinue)

}
welcome();

