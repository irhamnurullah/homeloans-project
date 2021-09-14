import React from "react";
import datas from "../../database/datas";

function DetailPengajuan(props) {
  //   console.log("propsnya apa sih ?", props);
  const id = props.match.params.id;
  //   console.log("dapet ga nih idnya ?", id);
  const currentDetail = datas.filter((data) => {
    if (data.id === id) {
      return true;
    } else {
      return false;
    }
  })[0];
  console.log("current detail", currentDetail);

  return (
    <div>
      <h1>halaman detail pengajuan</h1>
      <p>{currentDetail.nama}</p>
      <p>{currentDetail.pengajuan}</p>
    </div>
  );
}

export default DetailPengajuan;
