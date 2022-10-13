import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DropdownComp from "../../components/atoms/DropdownComp";
import "./modal-update.css";

export default function ModalUpate(props) {
  return (
    <Modal
      size="lg"
      show={props.lgShow}
      onHide={() => props.setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          data-cy="title-edit-item"
          id="example-modal-sizes-title-lg"
          className="edit-item-title"
        >
          Edit Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span 
              data-cy="label-edit-item" 
              className="label-form-edit"
              >
                Nama List Item
              </span>
            </Form.Label>
            <Form.Control
              data-cy="form-edit-item"
              className="form-edit"
              value={props.title}
              type="text"
              placeholder="Tambahkan Nama List Item"
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </Form.Group>
          <DropdownComp
            priority={props.priority}
            setPriority={props.setPriority}
          />
          <div className="d-flex justify-content-between mt-3">
            <div></div>
            <Button
              data-cy="button-ssave-edit-item"
              onClick={props.updatetItems}
              className="button-save-edit"
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
