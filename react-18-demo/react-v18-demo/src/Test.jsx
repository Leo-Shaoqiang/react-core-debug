import React, { useEffect, useState } from 'react'

const Test = () => {
  const [foo, setFoo] = useState(0)
  const [count, setCount] = useState(0)
  const [str, changeStr] = useState('现在是数字0')

  useEffect(() => {
    setTimeout(() => {
      setCount(1)
      setCount(2)
      setCount(3)
      setCount(prevState => {
        debugger
        return prevState + 1
      })
    })
  }, [])
  console.log('render', count)

  return (
    <>
      <button
        onClick={() => {
          // setFoo((num111) => {
          //   const newStr = "现在数字是" + Number(num111 + 1);
          //   changeStr(newStr);
          //   return num111 + 1;
          // });
          setFoo(2)
          setFoo(prevState => {
            debugger
            console.log('newState', prevState)
            const newStr = '现在数字是' + prevState
            changeStr(newStr)
            return prevState
          })
        }}
      >
        Test get the new state {foo}
      </button>
      <div>{str}</div>
    </>
  )
}

export default Test
