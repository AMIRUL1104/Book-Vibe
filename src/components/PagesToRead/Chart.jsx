import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ১. গ্লোবাল ভেরিয়েবল এবং হেল্পার ফাংশনগুলো বাইরে রাখুন
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// ২. কাস্টম ট্রায়াঙ্গেল বার শেপ - মেইন কম্পোনেন্টের বাইরে
const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  if (x === undefined || y === undefined || !width || !height) {
    return null;
  }

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={color}
      style={{ transition: "all 0.3s ease" }}
    />
  );
};

// ৩. মেইন চার্ট কম্পোনেন্ট
export default function Chart({ books }) {
  // ডাটা ফরম্যাটিং
  const data =
    books?.slice(0, 5).map((book) => ({
      name: book.bookName,
      uv: book.totalPages,
    })) || [];

  return (
    <div style={{ width: "100%", height: "400px", minHeight: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />

          <Bar
            dataKey="uv"
            // এখানে সরাসরি কম্পোনেন্ট ফাংশন পাস করুন
            shape={<TriangleBar />}
          >
            <LabelList dataKey="uv" position="top" fill="#333" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
