import React from "react";
import { Modal } from "antd";
import "./index.scss";

interface cardData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface ModalProps {
  show: boolean;
  close: () => void;
  card: cardData;
}

const ModalGeneric: React.FC<ModalProps> = ({ show, close, card }) => {
  return (
    <Modal
      title={card.title}
      open={show}
      onOk={close}
      onCancel={close}
      cancelButtonProps={{ style: { display: "none" } }}
      className="modal-generic"
    >
      <img src={card.image} alt="" className="image-modal" />
      <p>{card.description}</p>
    </Modal>
  );
};

export default ModalGeneric;
