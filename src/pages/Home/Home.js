import React, { useEffect, useState } from "react";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { Container } from "react-bootstrap";
import moment from "moment";
import "moment/locale/id";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "../../components/Modals/ModalDelete";
import Plus from "../../components/icons/Plus";
import Trash from "../../components/icons/Trash";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    data: [],
    loading: true,
  });
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

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

  const deleteData = async (e, id, title) => {
    e.stopPropagation();
    setModalShow(true);
    setId(id);
    setTitle(title);
  };
  const toDetail = (id) => {
    navigate(`/detail/${id}`);
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
        title={title}
        type={"Activity"}
      />
      <Container style={{ width: "75%" }}>
        {items.loading ? (
          <p>loading</p>
        ) : items.data.length <= 0 ? (
          <div  data-cy='activity-empty-state' className="mt-5">
            <div className="d-flex justify-content-between">
              <h2 data-cy='activity-title' className="activity-title">Activity</h2>
              <button onClick={() => postData()} className="btn-plus-mod">
                <Plus />
                Tambah
              </button>
            </div>
            <center>
              <img
                onClick={() => postData()}
                src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
                alt="to do list"
                className="mt-5"
              />
            </center>
          </div>
        ) : (
          <div className="card-items">
            <div className="d-flex justify-content-between">
              <h2 data-cy='activity-title' className="activity-title">Activity</h2>
              <button data-cy='activity-add-button' onClick={() => postData()} className="btn-plus-mod">
                <Plus />
                Tambah
              </button>
            </div>

            <div  className="row mt-5 g-2">
              {items.data.map((data, i) => {
                return (
                  <div 
                  className="col-3" 
                  onClick={() => toDetail(data.id)}
                  data-cy='activity-item'
                  >
                    <div
                      style={{
                        cursor: "pointer",
                      }}
                      className="p-3 border bg-white rounded"
                    >
                      <h4 data-cy='activity-item-title'>{data.title}</h4>
                      <div style={{ height: 180 }}></div>
                      <div className="d-flex">
                        <div className="col-11">
                          <p data-cy='activity-item-date'> {moment(data.created_at).format("LL")}</p>
                        </div>
                        <div
                          className="col-1"
                          onClick={(e) => deleteData(e, data.id, data.title)}
                          data-cy='activity-item-delete-button'
                        >
                          <Trash />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
