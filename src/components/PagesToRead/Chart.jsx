import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ books }) {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
  ];
  const data = books.slice(0, 5).map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: 0, // এই ভ্যালুটা এখন ব্যবহার করছি না, কিন্তু রিচার্টস এর জন্য প্রয়োজন হতে পারে
    amt: 0, // এই ভ্যালুটা এখন ব্যবহার করছি না, কিন্তু রিচার্টস এর জন্য প্রয়োজন হতে পারে
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  // কাস্টম ট্রায়াঙ্গেল বার শেপ
  const TriangleBar = (allProps) => {
    // প্রপসগুলো ঠিকভাবে রিসিভ করা হচ্ছে কি না চেক করুন
    const itemProps = allProps.props || allProps;
    const { x, y, width, height, index } = itemProps;

    // Safety Check: যদি কোনো ভ্যালু NaN বা undefined হয়, তবে কিছুই রেন্ডার করবে না
    if (
      x === undefined ||
      y === undefined ||
      width === undefined ||
      height === undefined
    ) {
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

  // কাস্টম লেবেল
  const CustomColorLabel = (props) => {
    const { index } = props;
    const fill = colors[(index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
  };

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
            // এখানে সরাসরি কম্পোনেন্ট রেফারেন্স দিন, এটি সবচেয়ে বেশি স্টেবল
            shape={<TriangleBar />}
            activeBar
          >
            <LabelList
              dataKey="uv"
              position="top"
              // কাস্টম লেবেল এরর দিলে সাধারণ লেবেল দিয়ে আগে চেক করুন
              fill="#333"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
