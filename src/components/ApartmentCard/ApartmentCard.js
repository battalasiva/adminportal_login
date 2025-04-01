import React from "react";
import { format } from "date-fns";
import ButtonComponent from "../../components/ButtonComponent";
import AppColor from "../../common/colors";

const ApartmentCard = ({ apartment, onApprove, onDecline }) => {
  return (
    <div key={apartment.id} style={styles.card} className="card">
      <h3 style={styles.apartmentName}>{apartment.name}</h3>
      <div style={styles.detailsContainer} className="details-container">
        <p style={styles.detailItem}>
          <strong>Name:</strong> {apartment.ownerName}
        </p>
        <p style={styles.detailItem}>
          <strong>Mobile:</strong> {apartment.mobileNumber}
        </p>
      </div>
      <div style={styles.detailsContainer} className="details-container">
        <p style={styles.detailItem}>
          <strong>Requested Date:</strong>{" "}
          {format(new Date(apartment.creationTime), "dd MMM yyyy")}
        </p>
        <p style={styles.detailItem}>
          <strong>Total Flats:</strong> {apartment.totalFlats}
        </p>
      </div>
      <div style={styles.buttonContainer}>
        <ButtonComponent
          text="Approve"
          color="white"
          bgColor={AppColor.green}
          loading={false}
          onClickFunction={() => onApprove(apartment.id)}
        />
        <ButtonComponent
          text="Decline"
          color="white"
          bgColor={AppColor.red}
          loading={false}
          onClickFunction={() => onDecline(apartment.id)}
        />
      </div>
      <style>
        {`
          .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .card:hover {
            transform: scale(1.01);
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          }
          
          @media (max-width: 768px) {
            .details-container {
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
            }
            .card {
              max-width: 90%;
              margin: auto;
              padding: 10px;
            }
            .buttonContainer {
              flex-direction: column;
              align-items: center;
              gap: 8px;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  card: {
    flex: "1 1 45%",
    maxWidth: "45%",
    minWidth: "300px",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: AppColor.blueShade,
    textAlign: "center",
    transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
  },
  apartmentName: {
    marginBottom: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  detailItem: {
    margin: "2px 0",
    padding: "2px 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default ApartmentCard;
