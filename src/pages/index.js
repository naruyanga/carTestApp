// import Hello from "@/component/Hello";
// import Test from "../component/Test";

// const Home = () => {
//   const mockData = [
//     { ner: "bat", age: 12 },
//     { ner: "tur", age: 15 },
//     { ner: " bold", age: 42 },
//     { ner: "anad", age: 22 },
//   ];
//   return (
//     <div>
//       <Test />
//       {mockData.map((data, index) => {
//         return <Hello name={data.ner} age={data.age} />;
//       })}
//     </div>
//   );
// };
// export default Home;

import Car from "../component/Car";

const CarDiv = () => {
  const data = [
    {
      mashin: "BMW",
      text1: "My BMW is blue",
      text2: "it's a bit older, from 2011",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v33mCUqfg5eIab6BOe-ehloFGQnY9YGqgw&s",
    },
    {
      mashin: "Mercedes",
      text1: "My Mercedes is grey",
      text2: "it's a bit older, from 2011",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v33mCUqfg5eIab6BOe-ehloFGQnY9YGqgw&s",
    },
    {
      mashin: "Toyota",
      text1: "My Toyota is grey",
      text2: "it's a bit older, from 2011",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v33mCUqfg5eIab6BOe-ehloFGQnY9YGqgw&s",
    },
    {
      mashin: "Alpha Romeo",
      text1: "My Alpha Romeo is red",
      text2: "it's a bit older, from 2011",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v33mCUqfg5eIab6BOe-ehloFGQnY9YGqgw&s",
    },
  ];
  return (
    <div className="container">
      {data.map((car) => {
        return (
          <Car
            imgUrl={car.img}
            mashin={car.mashin}
            text1={car.text1}
            text2={car.text2}
          />
        );
      })}
    </div>
  );
};
export default CarDiv;
