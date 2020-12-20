import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";
import "./WordMeaningModal.scss";

function WordMeaningModal({ toggle, word }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://tezaurs.lv/api/retrieveEntry?hw=${word}`)
      .then((res) => res.text())
      .then((text) => {
        setData(text);
      });
  }, []);
  return (
    <MDBContainer>
      <MDBModal isOpen toggle={() => toggle(false)} centered>
        <MDBModalBody>
          <div
            dangerouslySetInnerHTML={{
              __html: data ? data : null,
            }}
          ></div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={() => toggle(false)}>
            Aizvērt
          </MDBBtn>
          <MDBBtn color="default">Saglabāt</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}

export default WordMeaningModal;
