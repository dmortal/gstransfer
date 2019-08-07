import * as React from "react";

export interface IUserInfoProps {
  user: {
    name: string,
    address?:string,
    image?:string
  }
}

export const UserInfo = (props: IUserInfoProps) => props.user ? (<div className="user-info">
    <img src={props.user.image} alt={props.user.name} className="user-info__avatar"/>
    <h3 className="user-info__name">{props.user.name}</h3>
    <p className="user-info__address">{props.user.address}</p>
  </div>):null;
