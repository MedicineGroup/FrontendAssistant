/* eslint-disable react/prop-types */
import Modal from "../shared/Modal.jsx";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ConsultationDetail from "./ConsultationDetail.jsx";
import { Typography, DialogHeader } from "@material-tailwind/react";
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";


function ConsultationRow({ consultation }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    const destinationRoute =`${ROUTES.CONSULATION_DETAIL}`;
    navigate(destinationRoute, { state: { consultation } });
  };
  const closeModal = () => {  
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <tr key={consultation._id}>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {new Date(consultation.date).toLocaleDateString()}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {consultation.patient.firstname} {consultation.patient.lastname}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {consultation.doctor.nom}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {consultation.doctor.service}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {consultation.state}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button onClick={handleClick}>Details</button>
        </td>
      </tr>
    </>
  );
}

export default ConsultationRow;