import React from "react"

export default function NavMenuItem(props) {
  return (
    <li>
      <a href={props.href}>
        <i className={props.class}></i> <span>{props.navItemName}</span>
      </a>
    </li>
  )
}
