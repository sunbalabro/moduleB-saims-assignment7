import React,{useState} from 'react'

export default function Sample() {
    const [name,setName] = useState('Sunbal')
    const[age,setAge] = useState(18)
    const [skills,setSkills] = useState(['React ,','React Native ,','Mongo DB ,','Node JS'])
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h1>Skills : {skills}</h1>

        </div>
    )
}
