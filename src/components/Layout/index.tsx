import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Flareswap"
        subTitle="- decentralized cryptocurrency exchange on the Flare Network."
        extra={[
          <Button key="1" type="text">
            Community
          </Button>,
          <Button key="2" type="text">
            About
          </Button>,
          <Link to="/trade">
            <Button key="3" type="primary">
              Launch App
            </Button>
          </Link>,
        ]}
      ></PageHeader>
      {children}
    </div>
  );
}
