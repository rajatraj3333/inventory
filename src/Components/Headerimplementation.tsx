import React, { useState } from "react";
import Table from "./Table";
import HeaderActions from "./HeaderActions";
import { targetValue } from "./typesdefine";
import { filterutil } from "../util/util";
import { data } from "../util/data";
import { idText } from "typescript";
function Headerimplementation() {


  const [filterdata, setFilterData] = useState<any[]>(data);
  const [updateData, setUpdateData] = useState(data)
  // const { log } = console; 

  const action = (e, id, type) => {
    e.preventDefault();
    const singleUpdateData = updateData.find(item => item.id === id)
    let newData
    if (type === 'save') {
      newData = filterdata.map(item => item['id'] == singleUpdateData?.id ? { ...singleUpdateData, edit: false } : item);
      setFilterData(newData);
    }
    else if (type === 'edit') {
      newData = filterdata.map(item => item['id'] == singleUpdateData?.id ? { ...singleUpdateData, edit: true } : item);
      setFilterData(newData);
    }

    else if (type === 'delete') {
      const newFilterData = filterdata.filter(item => item.id != id)
      setFilterData(newFilterData);
    }

  }



  const update = (e, id) => {
    e.preventDefault();

    let dataupdate;
    dataupdate = updateData.map(item => item.id === id ? { ...item, [e.target.name]: e.target.value } : item)
    setUpdateData(dataupdate);

  }


  const debounce = (callback, delay) => {
    let timerId;

    return function (this, ...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  };


  const handleSearch = debounce((e: targetValue) => {
    const { value } = e.target
    setFilterData(filterutil(data, item => item.ProductName.toLowerCase().includes(value.toLowerCase()) ? item : false))

  }, 1500)

  function filter(e: string, type: React.ChangeEvent<HTMLInputElement> | string) {
    let key = e;

    if (type === 'date') {
      // setDate(key)
      const [year, month, day] = key.split('-')
      const time = day + "-" + month + "-" + year;

      let filteredData;
      filteredData = filterutil(filterdata.length > 0 ? filterdata : data, item => item.PurchaseDate === time ? item : false)
      setFilterData(filteredData)
    }
    else if ('price') {

      const [start, end] = key.split('-')
      let filteredPriceData;

      filteredPriceData = filterutil(filterdata.length > 0 ? filterdata : data, item => item.Price >= start && item.Price <= end ? item : false)

      setFilterData(filteredPriceData);

    }

  }


  function resetAll() {
    setFilterData(data);
  }
  return (
    <>
      <HeaderActions
        handlesearch={handleSearch}
        Filter={filter}
        resetAll={resetAll}
      />
      <Table
        data={filterdata}
        action={action}
        update={update}
      />
    </>
  )
}

export default Headerimplementation;