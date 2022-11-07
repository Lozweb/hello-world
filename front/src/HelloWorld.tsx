import React from 'react';

export async function getName(nameCall:string):Promise<Response>{
    return await fetch(`http://localhost:3030/hello/${nameCall}`);
}

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


