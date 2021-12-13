import React, {useState} from "react"
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    {id: 1, value: 0, name: "Ненужная вещь"},
    {id: 2, value: 4, name: "Ложка"}, 
    {id: 3, value: 0, name: "Вилка"},
    {id: 4, value: 0, name: "Тарелка"},
    {id: 5, value: 0, name: "Набор минималиста"},
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (id) => {
    const newCounters = counters.filter(c => c.id !== id)
    setCounters(newCounters)
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  const handleIncrement = (item) => {
    const newValue = counters.map((el) => {
      const value = el.id === item.id ? el.value = el.value + 1 : 0
      return el
    })
    setCounters(newValue)
  }
  const handleDecrement = (item) => {
    const newValue = counters.map((el) => {
      const value = el.id === item.id ? el.value = el.value - 1 : 0
      return el
    })
    setCounters(newValue)
  }
  return (
    <>
      {counters.map((count) => {
        return <Counter 
          key = {count.id}
          {...count}
          onDelete = {handleDelete}
          onIncrement = {handleIncrement}
          onDecrement = {handleDecrement}
          />
      })}
      <button className="btn btn-primary btn-sm m-2" onClick = {handleReset}>Сброс</button>
    </>
  )
}

export default CountersList