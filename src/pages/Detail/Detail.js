import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ChevronLeft from "../../components/icons/ChevronLeft";
import Pen from "../../components/icons/Pen";
import Plus from "../../components/icons/Plus";
// import Sort from "../../components/icons/Sort";
import Trash from "../../components/icons/Trash";
import ModalAdd from "../../components/Modals/ModalAdd";
import ModalUpate from "../../components/Modals/ModalUpdate";
import DropdownCutome from "../../components/atoms/DropdownCutome";
import InputComp from "./InputComp";
import ModalDeleteItem from "../../components/Modals/ModalDeleteItem";
import "./detail.css";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState({
    data: [],
    loading: true,
  });

  const [lgShow, setLgShow] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("very-high");
  const [modalShow, setModalShow] = useState(false);
  const [idDel, setIdDel] = useState("");

  const [lgShowUpdate, setLgShowupdate] = useState(false);
  const [titleUpdate, setTitleupdate] = useState("");
  const [priorityUpdate, setPriorityUpdate] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [activtyId, setActivityId] = useState("");

  const [editTitle, setEditTitle] = useState(false);
  const [dataActivity, setDataActivity] = useState({
    title: "",
    id: "",
  });
  const [titleDelet, setTitileDelet] = useState("");

  const getDetail = async () => {
    const data = await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups/${id}`
    );
    const hasil = await data.json();
    setDataActivity((prev) => ({
      ...prev,
      title: hasil.title,
      id: hasil.id,
    }));

    setItems((prev) => ({
      ...prev,
      data: hasil.todo_items,
      loading: false,
    }));
  };

  useEffect(() => {
    const getDetail = async () => {
      const data = await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${id}`
      );
      const hasil = await data.json();
      setDataActivity((prev) => ({
        ...prev,
        title: hasil.title,
        id: hasil.id,
      }));
  
      setItems((prev) => ({
        ...prev,
        data: hasil.todo_items,
        loading: false,
      }));
    };
    getDetail();
  }, [id]);

  const postItems = async () => {
    const payload = {
      title: title,
      priority: priority,
      activity_group_id: id,
    };
    const data = await fetch(
      `https://todo.api.devcode.gethired.id/todo-items`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    await data.json();
    setLgShow(false);
    getDetail();
  };

  const handleModal = (id, title) => {
    setModalShow(true);
    setIdDel(id);
    setTitileDelet(title);
  };

  const handleModalUpdate = (priority, title, id, activityId) => {
    setLgShowupdate(true);
    setTitleupdate(title);
    setPriorityUpdate(priority);
    setIdUpdate(id);
    setActivityId(activityId);
  };

  const updatetItems = async () => {
    const payload = {
      title: titleUpdate,
      priority: priorityUpdate,
      activity_group_id: activtyId,
    };
    const data = await fetch(
      `https://todo.api.devcode.gethired.id/todo-items/${idUpdate}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    await data.json();
    setLgShowupdate(false);
    getDetail();
  };
  const sortTodos = (action) => {
    switch (action) {
      case "Terbaru":
        setItems((prev) => ({
          ...prev,
          data: prev.data.sort((a, b) => b.id - a.id),
          loading: false,
        }));
        break;
      case "Terlama":
        setItems((prev) => ({
          ...prev,
          data: prev.data.sort((a, b) => a.id - b.id),
          loading: false,
        }));
        break;
      case "A-Z":
        setItems((prev) => ({
          ...prev,
          data: prev.data.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
          ),
          loading: false,
        }));
        break;
      case "Z-A":
        setItems((prev) => ({
          ...prev,
          data: prev.data.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1
          ),
          loading: false,
        }));
        break;
      case "Belum Selesai":
        setItems((prev) => ({
          ...prev,
          data: prev.data.sort((a, b) => b.is_active - a.is_active),
          loading: false,
        }));
        break;
      default:
        setItems((prev) => ({
          ...prev,
          data: prev.data,
          loading: false,
        }));
    }
  };

  const handleKeyPress = async (e) => {
    const payload = {
      title: dataActivity.title,
    };
    if (e.key === "Enter") {
      const data = await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${dataActivity.id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      await data.json();
      setEditTitle(false);
    }
  };

  const handleOnFocusOut = async (e) => {
    const payload = {
      title: dataActivity.title,
    };

    const data = await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups/${dataActivity.id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    await data.json();
    setEditTitle(false);
  };

  return (
    <>
      <NavbarComp />
      <Container>
        <ModalDeleteItem
          show={modalShow}
          onHide={() => setModalShow(false)}
          getdata={() => getDetail()}
          modal={setModalShow}
          title={titleDelet}
          id={idDel}
          type={"Items"}
        />

        <ModalAdd
        title={title}
          lgShow={lgShow}
          setLgShow={setLgShow}
          setTitle={setTitle}
          postItems={postItems}
          setPriority={setPriority}
        />

        <ModalUpate
          lgShow={lgShowUpdate}
          setLgShow={setLgShowupdate}
          setTitle={setTitleupdate}
          title={titleUpdate}
          id={idUpdate}
          priority={priorityUpdate}
          updatetItems={updatetItems}
          setPriority={setPriorityUpdate}
        />

        {items.loading ? (
          <p>Loading...</p>
        ) : items.data.length > 0 ? (
          <div className="mt-5 mb-5">
            <div className="d-flex justify-content-between">
              <div className="col-9">
                <ChevronLeft onClick={() => navigate(-1)} />
                <span
                data-cy='todo-title'
                  onClick={() => setEditTitle(true)}
                  className="btn-edit-title"

                >
                  {editTitle ? (
                    <input
                      autoFocus
                      className="modif-input"
                      onChange={(e) =>
                        setDataActivity((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      onKeyDown={handleKeyPress}
                      onBlur={handleOnFocusOut}
                      type="text"
                      value={dataActivity.title}
                    />
                  ) : (
                    <>
                      <b>{dataActivity.title}</b>
                      <span>
                        <Pen />
                      </span>
                    </>
                  )}
                </span>
              </div>

              <div className="col-3 d-flex">
                <DropdownCutome sortTodos={sortTodos}/>
                <button
                  onClick={() => setLgShow(true)}
                  data-cy='todo-add-button'
                  className="btn-plus-mod"
                >
                  <Plus />
                  Tambah
                </button>
              </div>
            </div>

            {items.data.map((d, i) => {
              return (
                <Card key={i} className="mt-3 shadow-mod card-activis">
                  <Card.Body>
                    <div className="d-flex mt-1">
                      <div className="col-11">
                        <InputComp
                          getDetail={getDetail}
                          active={d.is_active}
                          id={d.id}
                        />
                        <span className="icon-circle">
                          <button
                            style={{
                              border: "none",
                              borderRadius: "50%",
                              width: 15,
                              height: 15,
                              backgroundColor:
                                d.priority === "very-high"
                                  ? "red"
                                  : d.priority === "high"
                                  ? "yellow"
                                  : d.priority === "low"
                                  ? "blue"
                                  : d.priority === "very-low"
                                  ? "#98A8F8"
                                  : d.priority === "medium"
                                  ? "green"
                                  : "",

                              marginRight: 5,
                            }}
                          >
                            {" "}
                          </button>
                          {d.is_active ? (
                            <span
                              className="title-activity-active"
                            >
                              {d.title}{" "}
                            </span>
                          ) : (
                            <span
                              className="title-activity"
                            >
                              {d.title}{" "}
                            </span>
                          )}
                          <span
                            onClick={() =>
                              handleModalUpdate(
                                d.priority,
                                d.title,
                                d.id,
                                d.activity_group_id
                              )
                            }
                            className="pen-update"
                          >
                            <Pen />
                          </span>
                        </span>
                      </div>

                      <div
                       data-cy='todo-item-delete-button'
                        onClick={() => handleModal(d.id, d.title)}
                        className="col-1 trash-icon"
                      >
                        <Trash />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="mt-5">
            <div className="d-flex justify-content-between">
              <div className="col-9">
                <ChevronLeft onClick={() => navigate(-1)} />
                <span
                  className="btn-edit-title"
                  onClick={() => setEditTitle(true)}

                >
                  {editTitle ? (
                    <input
                      autoFocus
                      className="modif-input"
                      onChange={(e) =>
                        setDataActivity((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      onKeyDown={handleKeyPress}
                      onBlur={handleOnFocusOut}
                      type="text"
                      value={dataActivity.title}
                    />
                  ) : (
                    <>
                      <b>{dataActivity.title}</b>
                      <span>
                        <Pen />
                      </span>
                    </>
                  )}
                </span>
              </div>

              <div className="d-flex col-3">
              <DropdownCutome sortTodos={sortTodos} data-cy='todo-sort-button' />
                <button
                 data-cy='todo-add-button'
                  onClick={() => setLgShow(true)}
                  className="btn-plus-mod"
                >
                  <Plus />
                  Tambah
                </button>
              </div>
            </div>

            <div className="d-flex row container justify-content-center mt-5">
              <center>
                <img
                 onClick={() => setLgShow(true)}
                  src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
                  alt="to do list"
                  className="mt-5"
                />
              </center>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
