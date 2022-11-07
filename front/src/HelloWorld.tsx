import React from 'react';


interface HelloWorldProps {
    name: string;
}

function HelloWorld({ name }: HelloWorldProps) {
  return (
    <>
      Hello { name }
    </>
  );
}

export default HelloWorld;


async function getName(nameCall:string):string{
    fetch(`http://localhost/hello/${nameCall}`)
        .then( res  => res.json())
        .then( (result) => )
}