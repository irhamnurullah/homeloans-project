import { Table, Input, Space, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import datas from "../../database/datas";

const { Search } = Input;

const columns = [
  {
    title: "Tanggal Pengajuan",
    dataIndex: "pengajuan",
    key: "pengajuan",
  },
  {
    title: "Nama",
    dataIndex: "nama",
    key: "nama",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Rekomendasi",
    dataIndex: "rekomendasi",
    key: "rekomendasi",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => <Link to={"/Beranda/DetailPengajuan/" + record.id}>{text}</Link>,
  },
];

export default function DaftarPengajuan() {
  return (
    <Content style={{ margin: "5% 1%" }}>
      <div style={{ minHeight: 360 }}>
        <div className="cstm-content">
          <h1>Daftar Pengajuan KPR</h1>
          <hr />
          <div className="cstm-background">
            <SearchBar />
            <DownloadBerkas />
          </div>
          <Table columns={columns} dataSource={datas} size="small" />
        </div>
      </div>
    </Content>
  );
}

const onSearch = (value) => console.log(value);
function SearchBar() {
  return (
    <Space direction="vertical">
      <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    </Space>
  );
}

function DownloadBerkas() {
  return (
    <Button type="primary" icon={<DownloadOutlined />}>
      Download
    </Button>
  );
}
