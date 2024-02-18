import React from "react";
import { Form, InputNumber, Button } from "antd";
import useBmiStore from "./BmiState";

function BmiCalculator() {
  const { height, weight, bmi, calculateBmi, setHeight, setWeight } =
    useBmiStore();

  const handleCalculateBmi = () => {
    calculateBmi();
  };
  return (
    <div>
      <Form layout="inline" style={{ marginBottom: "1rem" }}>
        <Form.Item label="Height (cm)">
          <InputNumber
            min={0}
            step={0.01}
            value={height}
            onChange={(value) => setHeight(Number(value))}
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item label="Weight (kg)">
          <InputNumber
            min={0}
            step={0.1}
            value={weight}
            onChange={(value) => setWeight(Number(value))}
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleCalculateBmi}>
            Calculate BMI
          </Button>
        </Form.Item>
      </Form>
      <Form.Item label="BMI">
        <p>{bmi || "N/A"}</p>
      </Form.Item>
    </div>
  );
}

export default BmiCalculator;
