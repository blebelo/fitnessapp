export interface IMealPlan {
  name: string;
  clientId: string;
  trainerId: string;
  clientName: string;
  descrption: string;
  notes: string;
  clientNotes: [];
  meals: [
    {
      name: string;
      id: number;
      note: string;
      clientNotes: [];
      items: [
        {
          name: string;
          quantity: number;
          unit: string;
          calories: number;
          carbs: number;
          protein: number;
          fat: number;
          note: null;
        }
      ];
      itemTotals: {
        calories: number;
        carbs: number;
        protein: number;
        fat: number;
      };
    }
  ];
  mealTotals: { calories: number; carbs: number; protein: number; fat: number };
  base: 1;
}