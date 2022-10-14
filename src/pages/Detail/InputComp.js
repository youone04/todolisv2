import React, { useState } from "react";
import "./input.css";

export default function InputComp(props) {
  const [checked, setChecked] = useState(props.active ? false : true);

  const handleCheckbox = async () => {
    setChecked(!checked);

    const payload = {
      is_active: checked ? 1 : 0,
    };

    const data = await fetch(
      `https://todo.api.devcode.gethired.id/todo-items/${props.id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    await data.json();
    props.getDetail();
  };

  return (
    <input
      className="input-checbox"
      type={"checkbox"}
      data-cy='todo-item-checkbox'
      onChange={handleCheckbox}
      checked={checked}
    />
  );
}
