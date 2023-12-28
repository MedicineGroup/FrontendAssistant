import React ,{useEffect, useState}from 'react'
import { useAuthContext } from "../../store/auth-context";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Radio,
} from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
function ConsultationDetail() {
  const location = useLocation();
  const { state } = location;
  console.log("Consultation Detail Props:", state);
  const [consultation, setConsultation] = useState(state.consultation || '');
  const { jwtToken } = useAuthContext();
    const [file, setFile] = useState('');
    const [title, setTitle]=useState('');
    const [allImage, setAllImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (newType) => {
    setSelectedType(newType);
  };
    useEffect(() => {
      getPdf();
    }, []);
    console.log("consultation.patient",consultation.patient)
    const getPdf = async () => {
      const result = await axios.get(`http://localhost:8888/get-files?id=${consultation.patient._id}`);
      console.log("get-files :",result.data.data);
      setAllImage(result.data.data);
    };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("type", selectedType);
    formData.append('patient', consultation.patient._id);

    console.log(title, file, selectedType);

    const result = await axios.post(
      "http://localhost:8888/upload-filesAssistant" ,//`${import.meta.env.VITE_API_URL}${API_ROUTES.PostAnalyse}`
      formData,
      {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    //console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:8888/files/${pdf}`, "_blank", "noreferrer");
    //setPdfFile(`http://localhost:8888/files/${pdf}`)
  };

  return (
    <>
    <Card className="mt-6">
        <CardHeader color="blue-gray">
          <h2>Consultation Detail</h2>
        </CardHeader>
        <CardBody>
          <div>
            {consultation.state === 'Waiting to see doctor' && (
              <div>
                <p>Date: {new Date(consultation.date).toLocaleDateString()}</p>
              </div>
            )}
            {consultation.state === 'Waiting to do analyses' && (
              <div>
                <p></p>
                <form className="formStyle">
                  <h4>Please upload PDF for analyses:</h4>
                  <br />
                      <div className="flex gap-10">
                      <Radio
                name="type"
                label="Analyses"
                checked={selectedType === 'Analyses'}
                onChange={() => handleTypeChange('Analyses')}
              />
              <Radio
                name="type"
                label="Radiologie"
                checked={selectedType === 'Radiologie'}
                onChange={() => handleTypeChange('Radiologie')}
              />
                      </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <input
                    type="file"
                    className="form-control"
                    accept="application/pdf"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </form>
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          {/* Conditionally render the Submit button */}
          {consultation.state === 'Waiting to do analyses' && (
            <Button className="bg-primary" onClick={submitImage}>
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
      <br/>
      <br/>
      <br/>
    <div className="uploaded">
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data, index) => {

                return (
                  <div  key={index} className="inner-div">
                    <h6>{data.type}: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
  </>
    
  )
}

export default ConsultationDetail