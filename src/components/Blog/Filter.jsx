import React from 'react'






const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

   function filterHandler(title) {
     setCategory(title);
   }

  return (
    <div>
      <div className=" w-full flex flex-wrap max-w-max space-x-4 md:space-x-8 gap-y-4 mx-auto px-4 py-4  justify-centre">
        {filterData.map((data) => {
          return (
            <button
              className={`text-lg px-4 py-2 rounded-md font-medium  hover:bg-opacity-50 border-2
              ${
                category === data.title
                  ? "bg-opacity-60  bg-yellow-400 border-yellow-400"
                  : "bg-opacity-40 border-yellow-300  text-gray-800"
              } 
              transiation-all duration-300`}
              key={data.id}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter