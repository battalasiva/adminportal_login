import React, { useEffect } from "react";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import HideAppBar from "../../components/HideAppBar";

const dummyData = [
  { id: 384, name: "Bsbsb", ownerName: "Rahul Sharma", mobileNumber: "9876543210", totalFlats: 30, subscriptionType: "PREMIUM", creationTime: "2024-10-14T20:09:01.000+00:00" },
  { id: 457, name: "LAKSHMI MADHAV APPARTMENT", ownerName: "Anita Verma", mobileNumber: "9123456789", totalFlats: 28, subscriptionType: "PREMIUM", creationTime: "2024-10-22T17:27:04.000+00:00" },
  { id: 473, name: "Vigneshwara Nilyam", ownerName: "Suresh Kumar", mobileNumber: "8987654321", totalFlats: 5, subscriptionType: "PREMIUM", creationTime: "2024-10-24T03:30:13.000+00:00" },
  { id: 482, name: "Green Valley Heights", ownerName: "Pooja Singh", mobileNumber: "7568901234", totalFlats: 12, subscriptionType: "PREMIUM", creationTime: "2024-10-28T10:45:30.000+00:00" },
  { id: 499, name: "Sunrise Residency", ownerName: "Amit Patel", mobileNumber: "9876012345", totalFlats: 15, subscriptionType: "PREMIUM", creationTime: "2024-11-02T15:20:45.000+00:00" },
  { id: 384, name: "Bsbsb", ownerName: "Rahul Sharma", mobileNumber: "9876543210", totalFlats: 30, subscriptionType: "PREMIUM", creationTime: "2024-10-14T20:09:01.000+00:00" },
  { id: 457, name: "LAKSHMI MADHAV APPARTMENT", ownerName: "Anita Verma", mobileNumber: "9123456789", totalFlats: 28, subscriptionType: "PREMIUM", creationTime: "2024-10-22T17:27:04.000+00:00" },
  { id: 473, name: "Vigneshwara Nilyam", ownerName: "Suresh Kumar", mobileNumber: "8987654321", totalFlats: 5, subscriptionType: "PREMIUM", creationTime: "2024-10-24T03:30:13.000+00:00" },
  { id: 482, name: "Green Valley Heights", ownerName: "Pooja Singh", mobileNumber: "7568901234", totalFlats: 12, subscriptionType: "PREMIUM", creationTime: "2024-10-28T10:45:30.000+00:00" },
  { id: 499, name: "Sunrise Residency", ownerName: "Amit Patel", mobileNumber: "9876012345", totalFlats: 15, subscriptionType: "PREMIUM", creationTime: "2024-11-02T15:20:45.000+00:00" },
];

const HomeScreen = () => {

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  const handleApprove = (id) => {
    alert(`Apartment ID ${id} Approved`);
  };

  const handleDecline = (id) => {
    alert(`Apartment ID ${id} Declined`);
  };

  return (
    <div style={styles.container}>
      <HideAppBar />
      <div style={styles.cardContainer}>
        {dummyData.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onApprove={handleApprove}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "100%",
    margin: "auto",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
};

export default HomeScreen;