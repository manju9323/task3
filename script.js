let obj=[{
    name:"manjunathanm",
    age:27,
    dob:"12/12/1995",
    designation:"preparing full stock developer in guvi",
},
{
    name:"munusamyg",
    age:57,
    dob:"12/04/1964",
    designation:"farmer",
},
{
    name:"gopinathm",
    age:29,
    dob:"08/07/1993",
    designation:"fimmaker",
},
{
    name:"jayanthim",
    age:47,
    dob:"21/05/1974",
    designation:"farmer",
},
{
    name:"esaivanim",
    age:19,
    dob:"09/03/2003",
    designation:"farmer",
},];
//for (let i=0;i<obj.length;i++)
/*{
    console.log(`name:${obj[i].name}
    age:${obj[i].age}
    dob:${obj[i].dob}
    designation:${obj[i].designation}
    `);
}*/

//for in loop
//for(let index in obj){
  //  console.log(`name:${obj[index].name}
    //age:${obj[index].age}
    //dob:${obj[index].dob}
    //designation:${obj[index].designation}`)
//}

//for of loop
//for(let data of obj){
  //   console.log(`name:${data.name}
    //  age:${data.age}
    //  dob:${data.dob}
     // designation:${data.designation}`)
  //}

  //for each
  obj.forEach((details)=>
  {
      console.log(`name:${details.name}
      age:${details.age}
      designation:${details.designation}
      dob:${details.dob}`)
  });


  o/p
  name:manjunathanm
      age:27
      designation:preparing full stock developer in guvi
      dob:12/12/1995 script.js:59:15
name:munusamyg
      age:57
      designation:farmer
      dob:12/04/1964 script.js:59:15
name:gopinathm
      age:29
      designation:fimmaker
      dob:08/07/1993 script.js:59:15
name:jayanthim
      age:47
      designation:farmer
      dob:21/05/1974 script.js:59:15
name:esaivanim
      age:19
      designation:farmer
      dob:09/03/2003 script.js:59:15