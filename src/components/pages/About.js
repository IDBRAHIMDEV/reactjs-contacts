import React from 'react'

export default function About(props) {
  return (
    <div>
       <h2>About page</h2>
       <h5>{ props.match.params.id }</h5>
       <h5>{ props.match.params.name }</h5>
       <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quia cumque? Vero, eaque. Inventore aspernatur dolore voluptatibus, saepe consectetur ipsam.
       </p>
    </div>
  )
}
