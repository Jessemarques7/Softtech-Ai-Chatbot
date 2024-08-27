"use client";
import Header from "@/_components/Header/Header";
import styles from "./page.module.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  BarChart,
  Legend,
  Bar,
  Rectangle,
} from "recharts";
import MenuBar from "@/_components/Menu/MenuBar";
import { useState } from "react";

const data = [
  {
    name: "",
    chamados: 0,
    pv: 100,
    amt: 100,
  },
  {
    name: "Fevereiro",
    chamados: 4,
    pv: 100,
    amt: 400,
  },
  // {
  //   name: "",
  //   uv: 5,
  //   pv: 100,
  //   amt: 100,
  // },
  {
    name: "Março",
    chamados: 6,
    pv: 100,
    amt: 210,
  },
  // {
  //   name: "",
  //   uv: 16,
  //   pv: 100,
  //   amt: 181,
  // },
  {
    name: "Abril",
    chamados: 25,
    pv: 100,
    amt: 290,
  },
  // {
  //   name: "",
  //   uv: 20,
  //   pv: 100,
  //   amt: 500,
  // },
  {
    name: "Maio",
    chamados: 15,
    pv: 108,
    amt: 200,
  },
];

const dataPie = [
  { name: "AMS-Não SAP", value: 5 },
  { name: "Service Desk", value: 3 },
  { name: "Acesso", value: 8 },
  { name: "Field Service", value: 12 },
  { name: "Ativos", value: 7 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#aa42ff", "#ff4242"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const dataBar = [
  {
    name: "Fevereiro",
    fechado: 3,
    resolvido: 1,
    amt: 2400,
  },
  {
    name: "Março",
    fechado: 2,
    resolvido: 4,
    amt: 2210,
  },
  {
    name: "Abril",
    fechado: 13,
    resolvido: 12,
    amt: 2290,
  },
  {
    name: "Maio",
    fechado: 1,
    resolvido: 14,
    amt: 2000,
  },
];
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <div className={styles.main}>
        <MenuBar isOpen={isOpen} />
        <div className={styles.container}>
          <div className={styles.large1}>
            <div className={styles.small1}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className={styles.summary}>
                {dataPie.map((item, index) => (
                  <div key={index}>
                    <span className={styles.block}></span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.small}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={dataBar}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="fechado"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="resolvido"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={styles.large}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="chamados"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
