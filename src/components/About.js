import React from 'react'

export default function About(props) {
  return (
    <>
    <h1 className='my-4'>About-Us</h1>
    <div classNAme={`container bg-${props.mode === 'light'? 'dark' : 'light' }`}>
    {/* <div classNAme={`container bg-${props.mode === 'light'?'dark':'light'}`}> */}
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed adipisci dicta accusantium earum aliquam quis quibusdam, esse minima, dignissimos cum incidunt architecto, quos sunt velit molestias dolores pariatur rerum voluptates facere natus officiis! Magnam, blanditiis rem. Porro delectus ea nam magnam? Adipisci, dolore. Aperiam cupiditate qui iste fugit culpa odio quia neque et minima officiis? Labore reprehenderit rerum itaque consectetur nam atque sit quo molestiae dicta, nulla at quasi accusantium vero assumenda minima magnam, quam temporibus velit repellendus ut aut iste dolor. Iure quos, maxime tempore labore ut accusamus, quidem nostrum repellat porro earum consequuntur aspernatur possimus culpa autem.
        <br/> <br/> <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, hic ipsam quaerat laborum similique error adipisci, iste dolor dolorum autem rerum voluptates veritatis aut sapiente maiores dolore. Cumque maxime eius quod aliquam perspiciatis aliquid nulla! Et accusamus odio rerum recusandae deserunt amet animi cum. Sit cumque odit numquam, mollitia nam deserunt ipsum sint culpa similique iure voluptatum molestias, quam veritatis deleniti pariatur totam maiores nemo omnis cum recusandae ratione velit? Voluptates aspernatur recusandae non placeat, animi alias expedita totam quis fuga labore illo repellendus dolores ullam minima maiores deserunt. Officiis iste nobis laborum ea neque corrupti voluptates accusantium voluptatem nihil.    
        </p>
           
    </div>
    </>
  )
}
