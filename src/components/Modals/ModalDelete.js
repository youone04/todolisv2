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
    props.modal(false);
    swal({
      title: "",
      text: "Activiy Berhasil Dihapus",
      icon: "success",
      dangerMode: false,
    });
  };

  return (
    <Modal
      data-cy="modal-delete"
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="justify-content-center"
    >
      <Modal.Body>
        <center>
          <Danger />
          <p className="mt-5 warning-delete-activitis">
            Apakah anda yakin ingin menghapus Activity <b> "{props.title}"</b>?
          </p>
          <Button
            className="m-2 text-black button-cancel-delete"
            data-cy='modal-delete-cancel-button'
            onClick={props.onHide}
           
          >
            Batal
          </Button>
          <Button className="bg-danger button-delete" onClick={handleDelete}>
            Hapus
          </Button>
        </center>
      </Modal.Body>
    </Modal>
  );
}
