import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DropdownComp from "../../components/atoms/DropdownComp";

export default function ModalUpate(props) {
  return (
    <Modal
      size="lg"
      show={props.lgShow}
      onHide={() => props.setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Tambah List Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span style={{ fontSize: 28 }}>Nama List Item</span>
            </Form.Label>
            <Form.Control
              style={{ height: 60 }}
              value={props.title}
              type="text"
              placeholder="Tambahkan Nama List Item"
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Label>
            <span style={{ fontSize: 28 }}>Priority</span>
          </Form.Label>
          <DropdownComp priority={props.priority} setPriority={props.setPriority} />
          <div className="d-flex justify-content-between mt-3">
            <div></div>
            <Button onClick={props.updatetItems} variant="primary" type="button">
              SIMPAN
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
