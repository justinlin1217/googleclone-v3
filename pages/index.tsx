
/*  installation

  1.  https://tailwindcss.com/docs/guides/nextjs

  2.  index.js -> index.tsx

  3.  npm run dev , follow error debug instruction

  4.  install typescript ...

  5.  Copy folder to Desktop/NextJS

*/





/*
    Flutter code

  Future<void> detectTargetCamera1_v2(double _currentLat, double _currentLng,
      double _currentHeading,) async //           TargetdirectionAPIupdate
  {




Map myWallet_Map = {
 
  'syncDate':         '1.1.2022',
  'balance':              0.0,    //  rawBalance + todayTravelEarn.loseGain
  'rawBalance':           0.0,
  'todayEarn':            0.0,
}

*/




/*
interface Person  
{

  name:  string,
  age:   number

}
*/
/*

type Person = 
{

  name:  string,
  age:   number

}
*/



class Person {

  name: string
  age?: number

  constructor(name: string, age: number){

      this.name = name
      this.age  = age

  }



}




export default function Home() {


  const name: string = 'Justin'
  const age: number  =   41

  const person:Person = {

    name:  "Justin",
    age:  42

  }

  const john : Person ={

    name: 'John',
  //  age: 34

  }



  function logPersonInfo (personName: string, personAge: number)
  { 
    const info = "Name: " + personName +  "Age: " + personAge

    console.log(info)
    return info

  }


  function logPersonInfo2 (person: Person)
  { 
    const info = "Name: " + person.name +  " Age: " + person.age

    console.log(info)
    return info

  }


  logPersonInfo(name, age)

  const person2 = new Person("Edward", 51)

  logPersonInfo2(john)


  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}