import React from "react";
import { Card, Button } from "antd"; 
import style from './style/mealCard.module.css' 
import { IMealPlan } from "@/providers/FoodProvider/context";

interface MealPlanCardProps {
  mealPlan: IMealPlan;
  handleClick: (mealPlan: IMealPlan) => void;
}

const MealPlanCard: React.FC<MealPlanCardProps> = ({ mealPlan, handleClick }) => {
  const { name, description, notes, mealTotals } = mealPlan;

  return (
    <Card
      title={name}
      className={style.Card}   
      hoverable
    >
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Notes:</strong> {notes}</p>
      <p><strong>Calories:</strong> {mealTotals.calories}</p>
      <p><strong>Carbs:</strong> {mealTotals.carbs}g</p>
      <p><strong>Protein:</strong> {mealTotals.protein}g</p>
      <p><strong>Fat:</strong> {mealTotals.fat}g</p>

      <Button type="primary" onClick={() => handleClick(mealPlan)}>
        Select Plan
      </Button>
    </Card>
  );
};

export default MealPlanCard;
