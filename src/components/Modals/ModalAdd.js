import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DropdownComp from "../../components/atoms/DropdownComp";
import "./modal-add.css";

export default function ModalAdd(props) {
  return (
    <Modal
      size="lg"
      show={props.lgShow}
      onHide={() => props.setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="title-modall-add"
          id="example-modal-sizes-title-lg"
          data-cy="modal-add-title"
        >
          Tambah List Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span data-cy="modal-add-label" className="label-modal-add">
                Nama List Item
              </span>
            </Form.Label>
            <Form.Control
              className="form-control-add"
              type="text"
              placeholder="Tambahkan Nama List Item"
              onChange={(e) => props.setTitle(e.target.value)}
              data-cy='modal-add-name-input'
            />
          </Form.Group>
          <DropdownComp setPriority={props.setPriority} />
          <div className="d-flex justify-content-between mt-3">
            <div></div>
            <Button
              onClick={props.postItems}
              data-cy='modal-add-save-button'
              className="button-modal-add"
              type="button"
            >
              SIMPAN
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
