import { Button, Card } from 'antd'
import React from 'react'

export const Game = (props) => {
  function handleAdd() {
    props.onAdd(props.game)
  }
  return (
    <Card className='card_container' type='inner' 
      title={props.game.name}
      extra={
        <Button type='primary' onClick={handleAdd}>
          Add to cart
        </Button>
      }
      style={{backgroundColor: "#242424"}}
    >
      <span>{props.game.description}</span>
      <img width='100%' src={props.game.imgUrl} alt={props.game.name} />
    </Card>
  )
}
