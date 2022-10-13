import React, { useEffect, useState } from "react";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { Container, Card } from "react-bootstrap";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "../../components/Modals/ModalDelete";
import Plus from "../../components/icons/Plus";
import Trash from "../../components/icons/Trash";
import './home.css';

export default function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    data: [],
    loading: true,
  });
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

  const getData = async () => {
    const data = await fetch(
      "https://todo.api.devcode.gethired.id/activity-groups?email=yudi.gunaone87@gmail.com"
    );

    const hasil = await data.json();
    setItems((prev) => ({
      ...prev,
      data: hasil.data,
      loading: false,
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = async () => {
    const data = await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups?email=yudi.gunaone87@gmail.com`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Activity",
          email: "yudi.gunaone87@gmail.com",
        }),
      }
    );

    await data.json();
    getData();
  };

  const deleteData = async (e, id) => {
    e.stopPropagation();
    setModalShow(true);
    setId(id);
  };

  return (
    <>
      <NavbarComp />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getdata={() => getData()}
        modal={setModalShow}
        id={id}
        type={'Activity'}
      />
      <Container style={{ width: '75%' }}>
        {items.loading ? (
          <p>loading</p>
        ) : items.data.length <= 0 ? (
          <div className="mt-5">
            <div className="d-flex justify-content-between">
              <h2 className="activity-title">Activity</h2>
              <button
                onClick={() => postData()}
                style={{
                  backgroundColor: "#16ABF8",
                  fontSize: 23,
                  color: "white",
                  padding: 15,
                  width: 160,
                  borderRadius: 45,
                  border: "none",
                  fontFamily: "Poppins",
                }}
              >
                <Plus />
                Tambah
              </button>
            </div>
            <center>
              <img
                src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
                alt="to do list"
                className="mt-5"
              />
            </center>
          </div>
        ) : (
          <div className="card-items">
            <div className="d-flex justify-content-between">
              <h2 className="activity-title">Activity</h2>
              <button
                onClick={() => postData()}
                style={{
                  backgroundColor: "#16ABF8",
                  fontSize: 23,
                  height: 60,
                  color: "white",
                  padding: 15,
                  width: 160,
                  borderRadius: 45,
                  border: "none",
                  fontFamily: "Poppins",
                }}
              >
                <Plus />
                Tambah
              </button>
            </div>

            <div className="d-flex row mt-5">
              {items.data.map((data, i) => {
                return (
                  <Card
                    onClick={() => navigate(`/detail/${data.id}`)}
                    className="col-4 shadow-mod"
                    key={i}
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      cursor: "pointer",
                      width:'14em',
                      marginBottom: 10
                    }}
                  >
                    <Card.Body>
                      <Card.Title><p className="title-card">{data.title}</p></Card.Title>
                      <Card.Text style={{ height: 135 }}></Card.Text>
                      <div className="d-flex">
                        <div className="col-11">
                          {moment(data.created_at).format("LL")}
                        </div>
                        <div
                          className="col-1"
                          onClick={(e) => deleteData(e, data.id)}
                        >
                          <Trash
                            data-cy="activity-item-delete-button"
                          />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
