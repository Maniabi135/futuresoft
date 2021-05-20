import React, { useState, useEffect } from "react";
import { makeApi, API_URLS } from "../ApiUtils";
import { Utils } from "../Utils";

export const TilesCard = () => {
  const [loader, setLoader] = useState(true);
  const [projectCount, setProjectCount] = useState(0);
  const [mailCount, setMailCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const tilesList = [
    {
      name: "Projects",
      key: "projects",
      id: "projects",
      value: projectCount,
      iconName: "navigation",
      iconClass: "material-icons-outlined",
      color: "greenyellow"
    },
    {
      name: "Mails",
      key: "mails",
      id: "mails",
      value: mailCount,
      iconName: "mail",
      iconClass: "material-icons-outlined",
      color: "#f48e13"
    },
    {
      name: "Tickets",
      key: "tickets",
      id: "tickets",
      value: ticketCount,
      iconName: "book_online",
      iconClass: "material-icons-outlined",
      color: "#03A9F4"
    },
    {
      name: "Customers",
      key: "customers",
      id: "customers",
      value: customerCount,
      iconName: "group",
      iconClass: "material-icons-outlined",
      color: "#f6719d"
    }
  ];

  const getTilesData = async () => {
    try {
      const config = {
        url: API_URLS.tilesUrl
      };
      let res = await makeApi(config);
      const { projects = 30, mails = 234, tickets = 456, customers = 5987 } =
        res?.data?.[0] || {};
      setMailCount(mails);
      setCustomerCount(customers);
      setProjectCount(projects);
      setTicketCount(tickets);
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTilesData();
  }, []);

  return (
    <div className="row mb-4">
      {!loader &&
        tilesList.map(item => {
          const {
            key = "",
            name = "",
            id = "",
            value = "",
            iconName = "",
            iconClass = "",
            color = ""
          } = item;
          return (
            <div
              className="col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2"
              key={key}
              id={id}
            >
              <div className="tileCard p-3 p-md-2">
                <i className={iconClass} style={{ color: color }}>
                  {iconName}
                </i>
                <div className="tileBody">
                  <h6 className="name">{name}</h6>
                  <div className="value">{Utils.convertDigit(value)}</div>
                </div>
              </div>
            </div>
          );
        })}
      {loader &&
        Array.from({ length: 4 }, (value, index) => (
          <div
            className="col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2"
            key={`tileloader${index}`}
          >
            <div className="tileCardLoader p-3 p-md-2">
              <span className="icon linearBackground" />
              <div className="tileBody">
                <span className="name linearBackground" />
                <span className="value linearBackground" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TilesCard;
