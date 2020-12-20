import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import { PoweroffOutlined, ApiOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

type Props = {
  children: any;
  showLaunchAppButton: boolean;
};

export default function Layout({ children, showLaunchAppButton }: Props) {
  const history = useHistory();

  return (
    <div>
      <PageHeader
        ghost={false}
        title={<div onClick={() => history.push("/")}>Flareswap</div>}
        subTitle="- decentralized cryptocurrency exchange operating on Flare Network."
        extra={[
          <Button key="1" type="text">
            Community
          </Button>,
          <Button key="2" type="text">
            About
          </Button>,
          showLaunchAppButton ? (
            <Link key="3" to="/features">
              <Button type="primary" shape="round" icon={<PoweroffOutlined />}>
                Launch App
              </Button>
            </Link>
          ) : (
            <Button key="3" type="primary" shape="round" icon={<ApiOutlined />}>
              Connect wallet
            </Button>
          ),
        ]}
      ></PageHeader>
      {children}
    </div>
  );
}
