import { useEffect, useState } from "react";

const UseMailInput = () :[string, (e:string)=>void , boolean, boolean] =>{

  const [ value , setValue ] = useState<string>('')
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ isValid, setIsValid ] = useState<boolean>(false)

  useEffect(()=>{
    //traitement
    if (checkMail()){ setIsValid(true);setIsError(false);}
    else{ setIsValid(false); setIsError(true)}

    //on no value we don't send error
    if(value.length === 0) {setIsValid(false); setIsError(false)}
  },[value])

  const checkMail = () => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim
    if (value.toLowerCase().match(re) === null) {
      return false
    }
    return true
  }
  
  const onChange :( e: string )=>void = e => {setValue(e)}

  
  return [ value, onChange, isError, isValid ]
}

export default UseMailInput