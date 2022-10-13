import Form from "react-bootstrap/Form";
import "./dropdown-comp.css";

const indicatorList = [
  {
    id: 1,
    title: "Very High",
  },
  {
    id: 2,
    title: "High",
  },
  {
    id: 3,
    title: "Medium",
  },
  {
    id: 4,
    title: "Low",
  },
  {
    id: 5,
    title: "Very Low",
  },
];

function DropdownComp({ setPriority, priority }) {
  return (
    <>
      <Form.Label>
        <span className="title-label" 
         data-cy="form-select-label"
        >Priority</span>
      </Form.Label>
      <Form.Select
        className="form-select"
        aria-label="Default select example"
        data-cy='modal-add-priority-dropdown'
        onChange={(e) => setPriority(e.target.value)}
        defaultValue={priority}
      >
        {indicatorList.map((d, i) => {
          return (
            <option
              className="option-mod"
              key={i}
              value={d.title.replace(" ", "-").toLowerCase()}
            >
              {d.title}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}

export default DropdownComp;
