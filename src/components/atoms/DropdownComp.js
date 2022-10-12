import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

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

function DropdownComp({setPriority , priority}) {
  return (
    <>
      <Form.Select
        style={{ width: 200, height: 60 }}
        aria-label="Default select example"
        onChange={e => setPriority(e.target.value)}
        defaultValue={priority}
      >
        {indicatorList.map((d, i) => {
          return (
            <option key={i} value={d.title.replace(' ', '-').toLowerCase()}>
              {d.title}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}

export default DropdownComp;
