import { useState, useEffect } from "react";

const UseTelInput = () :[string, (s :string)=>void, boolean, boolean ] =>{

  const [ value , setValue ] = useState<string>('')
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ isValid, setIsValid ] = useState<boolean>(false)

  useEffect(()=>{
    //traitement
    if (value.length > 10) setValue(notMoreThanTen(value))
    if (value.length === 10) {
      setIsValid(true);
      setIsError(false)
    }else{
      setIsValid(false); 
      setIsError(true);
    }

    //on no value we don't send error
    if(value.length === 0) {setIsValid(false); setIsError(false)}
  },[value])

  const notMoreThanTen = ( s :string) :string => s.slice(0, 10)
  const OnlyNumber = ( s :string) :string =>{
    const test = /^\+?[0-9 ]*$/
    if (test.test(s)) return s
    return value
  }
  const onChange  = (e :string) :void =>{ setValue(OnlyNumber(e)) }

  return [ value, onChange, isError, isValid ]
}

export default UseTelInput