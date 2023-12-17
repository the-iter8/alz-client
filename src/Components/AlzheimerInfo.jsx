import React from "react";
import styled from "styled-components";
import Gif1 from "../assets/details1.gif";
const InfoContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%; /* Adjust as needed */
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InfoSection = styled.section`
  margin-bottom: 1px;
`;
const OverViewContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const GifContainer = styled.div`
  border-radius: 10px;
  width: 70%;
`;

const Gif = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const SymptomsSection = styled.section`
  margin-bottom: 15px;
  width: 80%; /* Adjust as needed */
`;

const SymptomsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Symptom = styled.li`
  margin-bottom: 5px;
`;

const TreatmentsSection = styled.section`
  margin-bottom: 15px;
  width: 80%; /* Adjust as needed */
`;

const TreatmentInfo = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SupportSection = styled.section`
  margin-bottom: 15px;
  width: 80%; /* Adjust as needed */
`;

const SupportInfo = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ResourceLink = styled.a`
  color: blue;
  text-decoration: underline;
  margin-right: 10px;
`;

const AlzheimerInfo = () => {
  return (
    <InfoContainer>
      <Title>Alzheimer's Disease Information</Title>
      <InfoSection>
        <h3>Brief Overview</h3>
        <OverViewContainer>
          <p>
            Alzheimer's disease is a progressive disorder affecting the brain, leading to memory loss and cognitive
            decline.
          </p>
          <GifContainer>
            <Gif src={Gif1} alt="Alzheimer's Gif" />
          </GifContainer>
        </OverViewContainer>
      </InfoSection>
      <SymptomsSection>
        <h3>Symptoms</h3>
        <SymptomsList>
          <Symptom>Memory loss disrupting daily life</Symptom>
          <Symptom>Difficulty in planning or problem-solving</Symptom>
          <Symptom>Challenges in completing familiar tasks</Symptom>
          <Symptom>Confusion with time or place</Symptom>
          {/* Add more symptoms */}
        </SymptomsList>
      </SymptomsSection>
      <TreatmentsSection>
        <h3>Treatments</h3>
        <TreatmentInfo>
          While there's currently no cure for Alzheimer's disease, various treatments and management strategies exist to
          help manage symptoms and improve the quality of life. These include medications to temporarily improve
          symptoms, lifestyle changes, and supportive care.
        </TreatmentInfo>
        {/* Add more information about available treatments */}
      </TreatmentsSection>

      <SupportSection>
        <h3>Support Resources</h3>
        <SupportInfo>
          Finding support and resources can greatly assist individuals affected by Alzheimer's disease. Consider
          reaching out to support groups, caregiver resources, and organizations dedicated to Alzheimer's disease.
        </SupportInfo>
        <div>
          <ResourceLink target='_blank' href='https://www.alz.org/help-support'>
            Support Groups
          </ResourceLink>
          <ResourceLink target='_blank' href='https://www.alz.org/help-support/caregiving'>
            Caregiver Resources
          </ResourceLink>
          {/* Add more helpful links or contact information */}
        </div>
      </SupportSection>
    </InfoContainer>
  );
};

export default AlzheimerInfo;
