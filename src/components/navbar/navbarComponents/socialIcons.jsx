import React from "react"

export default function SocialIcon(props) {
  return (
    <a href={props.href} className={props.class}>
      <i className={props.icon}></i>
    </a>
  )
}
