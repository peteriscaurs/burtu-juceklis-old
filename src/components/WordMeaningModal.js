import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";
import "./WordMeaningModal.scss";

function WordMeaningModal({
  toggle,
  selectedWord,
  handleSaveButtonClick,
  savedWords,
}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://tezaurs.lv/api/retrieveEntry?hw=${selectedWord.letters}`)
      .then((res) => res.text())
      .then((text) => {
        setData(text);
      });
  }, []);

  const isSaved = (letters) => {
    return savedWords.some((word) => word.letters === letters);
  };

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
          <MDBBtn color="dark" onClick={() => toggle(false)}>
            Aizvērt
          </MDBBtn>
          <MDBBtn
            color="success"
            onClick={() => handleSaveButtonClick(selectedWord)}
            {...(isSaved(selectedWord.letters)
              ? { disabled: true, color: "light" }
              : null)}
          >
            {isSaved(selectedWord.letters) ? "Saglabāts" : "Saglabāt"}
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}

export default WordMeaningModal;
