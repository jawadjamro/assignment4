import StudentCard from "./components/card";

export default function Home() {
  return (
    <div className="flex items-center  bg-white-100 min-h-screen">
      <StudentCard
        name="Jawad Hassan"
        rollNo="00456321"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Monday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
      <br />
      <StudentCard
        name="Subhan Kaladi"
        rollNo="00306343"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Monday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
      <br />
      <StudentCard
        name="Rehman Ali "
        rollNo="00460177"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Wednesday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
    </div>
  )}