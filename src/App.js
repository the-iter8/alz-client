import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme } from "./utils/themes";
import styled from "styled-components";
import ImageUpload from "./Components/ImageUpload";
import ImagesCard from "./Components/ImagesCard";
import Loader from "./Components/Loader/Loader";
import axios from "axios";
import AlzheimerInfo from "./Components/AlzheimerInfo";
const data = ["Mild Demented", "Moderate Demented", "Non Demented", "Very Mild Demented"];

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  overflow-y: scroll;
`;

const Heading = styled.div`
  font-size: 42px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 530px) {
    font-size: 30px;
  }
  font-weight: 600;

  margin: 4% 0px;
`;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  gap: 3rem;
  padding: 0% 0% 6% 0%;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlexItem = styled.div`
  text-align: center;
  width: 600px;
  @media (max-width: 530px) {
    width: 500px;
  }
  @media (max-width: 430px) {
    width: 400px;
  }
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
`;

const TextCenter = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const SelectedImages = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 530px) {
    grid-template-columns: auto auto;
  }
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

let Button = styled.div`
  min-height: 42px;
  border-radius: 8px;
  color: ${({ theme }) => theme.soft2};
  font-weight: 600;
  font-size: 16px;
  background: ${({ theme }) => theme.primary};
  color: white;
  margin: auto;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  width: 70%;
`;

const Typo = styled.div`
  font-size: 24px;
  font-weight: 7agit00;
  color: ${({ theme }) => theme.bgLighter};
  text-align: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.bgLighter};
  text-align: center;
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;
function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictionState, setPredictionState] = useState({
    showPrediction: false,
    result: null,
  });

  const generatePrediction = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", images[0]);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post("http://127.0.0.1:5000/detect", formData, config);

      let id = parseInt(res.data.match(/\d+/)?.[0], 10);

      setPredictionState({ showPrediction: true, result: data[id] });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(predictionState);
  }, [predictionState]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <Title>AlzAware</Title>
        <Heading>Alzheimer's Detector 🧠</Heading>
        {loading ? (
          <Centered>
            <Loader />
          </Centered>
        ) : (
          <Container>
            <FlexItem>
              {!predictionState.showPrediction && (
                <p>
                  Please initiate the process by dragging/dropping or uploading the MRI scan belonging to the individual
                  you wish to examine.
                </p>
              )}
              <ImageUpload images={images} setImages={setImages} />
              <SelectedImages>
                {images &&
                  images.map((image, index) => {
                    return <ImagesCard key={index} image={image} />;
                  })}
              </SelectedImages>
              {images && (
                <Button
                  onClick={() => {
                    generatePrediction();
                  }}
                >
                  PREDICT
                </Button>
              )}
              {predictionState.showPrediction && (
                <FlexItem style={{ gap: "22px" }}>
                  <Typo>Result : {predictionState.result}</Typo>
                </FlexItem>
              )}
              {predictionState.showPrediction && <AlzheimerInfo />}
            </FlexItem>
          </Container>
        )}
      </Body>
    </ThemeProvider>
  );
}

export default App;
