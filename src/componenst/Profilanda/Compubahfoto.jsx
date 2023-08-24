import React from "react";
import { useState } from "react";
import { imageDb } from "../../firebase";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { FileUploader } from "react-drag-drop-files";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
// const fileTypes = ["JPG", "PNG", "GIF"];

function MyVerticallyCenteredModal(props) {
  //   const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const [nameImg, setNameImg] = useState("");
  const [formatImg, setFormatImg] = useState("");

  //   const handleChange = (file) => {
  //     setFile(file);
  //     console.log(file);
  //   };

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    setNameImg(e.target.files[0]);
  };

  const handleUpload = () => {
    const imgRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imgRef, img);
    console.log(imgRef);
    // getDownloadURL(imgRef).then((url) => {
    //   console.log(url);
    // });
  };
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ubah foto profil anda <i className="far fa-circle-user"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4 className="text-center">To Drag & Drop Files</h4> */}
        {/* <FileUploader
          handleChange={handleChange}
          name="file"
          label="Upload gambar profil anda disini"
          types={fileTypes}
        /> */}

        <input
          type="file"
          onChange={(e) => handleChangeImg(e)}
          className="form-control"
        ></input>
      </Modal.Body>

      <hr />
      <div className="container mb-3">
        <div className="d-flex justify-content-between">
          <button
            className="w-100 btn btn-secondary"
            onClick={props.onHide}
            style={{ marginRight: "10px" }}
          >
            NO
          </button>

          <button onClick={handleUpload} className="w-100 btn btn-danger">
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default function Compubahfoto() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container" style={{ position: "relative", bottom: "50px" }}>
      <Button
        className="w-100"
        variant="danger"
        onClick={() => setModalShow(true)}
      >
        Ubah foto profil anda <i className="far fa-circle-user"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
