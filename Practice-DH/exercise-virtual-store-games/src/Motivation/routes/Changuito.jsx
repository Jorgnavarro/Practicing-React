import { Button, Table } from "antd";
import React from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const Changuito = (props) => {
  const navigate = useNavigate();
  const dataSource = useMemo(() => {
    return props.changuito.map((game) => ({
      key: game.id,
      name: game.name,
      img: <img width="200px" src={game.imgUrl} />,
      delete: (
        <Button danger type="primary" onClick={() => props.onRemove(game)}>
          Delete
        </Button>
      )
    }));
  }, [props])
  
  function goBack(){
    navigate("/");
  }
  return <div>
    <h1>Changuito</h1>
    <Table dataSource={dataSource} className="table_container">
      <Table.Column title="Name" dataIndex="name" />
      <Table.Column title="Image" dataIndex="img" />
      <Table.Column title="Delete" dataIndex="delete" />
    </Table>
    <Button  type="primary" onClick={goBack}>Go home</Button>
  </div>
}
