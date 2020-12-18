import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import { PoweroffOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  const history = useHistory();

  return (
    <div>
      <PageHeader
        ghost={false}
        title={<div onClick={() => history.push("/")}>Flareswap</div>}
        subTitle="- decentralized cryptocurrency exchange on the Flare Network."
        extra={[
          <Button key="1" type="text">
            Community
          </Button>,
          <Button key="2" type="text">
            About
          </Button>,
          <Link key="3" to="/trade">
            <Button type="primary" icon={<PoweroffOutlined />}>
              Launch App
            </Button>
          </Link>,
        ]}
      ></PageHeader>
      {children}
    </div>
  );
}
