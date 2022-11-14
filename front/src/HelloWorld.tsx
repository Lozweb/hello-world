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


