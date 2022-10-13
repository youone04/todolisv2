import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Danger from "../icons/Danger";
import swal from "sweetalert";
import "./modal-delete-item.css";

export default function ModalDeleteItem(props) {
  const handleDelete = async () => {
    
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
        <p data-cy="warning-delete-item" className="mt-5 warning-delete-item" 
        >
        Apakah anda yakin menghapus item <b> "{props.title}"</b>?
        </p>
        <Button 
        data-cy="buton-cancel-delete-item"
        className="m-2 text-black button-cancel-delte-item" 
        onClick={props.onHide}>Batal</Button>
        <Button 
        data-cy="buton-delete-item"
        className="bg-danger button-delete" 
        onClick={handleDelete}>hapus</Button>
      </center>
      </Modal.Body>
    </Modal>
  );
}