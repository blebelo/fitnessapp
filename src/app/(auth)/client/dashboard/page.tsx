"use client";
import { useStyles } from "./style";
import { Col, Row, Typography } from "antd";
import Navbar from "@/app/components/NavBar";
import MealPlanCard from "@/app/components/mealCard";
import { IMealPlan } from "@/providers/FoodProvider/context";
import { mealdata } from "@/utils/sampleData";

const ClientDashboard: React.FC = () => {
  const { styles } = useStyles();
  let role: string | null = null;

  try {
    role = sessionStorage.getItem("role");
  } catch (error) {
    console.error("Error fetching role from sessionStorage:", error);
  }
  if (role !== "admin") {
    return <Typography>No Meal Plans Found</Typography>;
  }



  return (
    <>
      <header className={styles.Header}>
        <Navbar path={"Logout"} />
      </header>
      <div className={styles.Heading}>
        <Typography className={styles.Typography}>Client Dashboard</Typography>
      </div>
      <div className={styles.Cards}>
        <Row gutter={[16, 16]}>
          {mealdata.data?.map((mealPlan: IMealPlan) => (
            <Col key={mealPlan._id} xs={22} sm={12} md={8} lg={6}>
              <MealPlanCard mealPlan={mealPlan} handleClick={openMeal} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ClientDashboard;
