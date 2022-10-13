import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Danger from "../icons/Danger";
import swal from "sweetalert";
import "./modal-delete.css";

export default function MyVerticallyCenteredModal(props) {
  const handleDelete = async () => {
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
      var htmlContent = `<div data-cy='modal-information'></div>`;
      swal({
        title: "",
        html: htmlContent,
        text: "Activiy Berhasil Dihapus",
        icon: "success",
        dangerMode: false,
      })
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
        <p data-cy='warning-delete-item' 
        className="mt-5 warning-delete-activitis" 
        >
        Apakah anda yakin ingin menghapus Activity <b> "{props.title}"</b>?
        </p>
        <Button 
        data-cy='modal-delete-cancel-button'
        className="m-2 text-black button-cancel-delete" 
        onClick={props.onHide}>Batal</Button>
        <Button 
        className="bg-danger button-delete"
         onClick={handleDelete}
        // data-cy='modal-delete-confirm-button'
        >Hapus</Button>
      </center>
      </Modal.Body>
    </Modal>
  );
}
