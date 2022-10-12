import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Danger from "../icons/Danger";
import swal from "sweetalert";

export default function MyVerticallyCenteredModal(props) {
  const handleDelete = async () => {
    if(props.type === 'Activity'){
      await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${props.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      props.getdata();
      props.modal(false)
      swal("", "Activiy Berhasil Dihapus", "success");
    }else{
      await fetch(
        `https://todo.api.devcode.gethired.id/todo-items/${props.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      props.getdata();
      props.modal(false)
      swal("", "Activiy Berhasil Dihapus", "success");
    }
   

  };

  return (
    <Modal
     show={props.show}
     onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="justify-content-center"
    >
      <Modal.Body>
      <center>
      <Danger data-cy='modal-delete-icon' />
        <p className="mt-5" style={{ fontSize: 20 , width: '80%' }}>
        Apakah anda yakin ingin menghapus Activity <b> "New Activity"</b>?
        </p>
        <Button style={{ border:'none', backgroundColor:'gray',borderRadius: 15, width: 85,padding: 8 }} className="m-2 text-black" onClick={props.onHide}>Batal</Button>
        <Button style={{ border:'none',borderRadius: 15, width: 85,padding: 8 }} className="bg-danger" onClick={handleDelete}>hapus</Button>
      </center>
      </Modal.Body>
    </Modal>
  );
}
