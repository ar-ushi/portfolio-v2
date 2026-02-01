import React from "react"
import { Link } from "gatsby"
import { socialMediaLinks } from "../../config"
import * as style from "../../styles/home.module.css"
import Side from "./side"

export default function Links() {
  return (
    <Side orientation="left">
      <ul className={style.listlinks}>
        {socialMediaLinks.map(({ url, name, iconName }, i) => (
          <li key={i}>
            {url.startsWith("/") ? (
              <Link to={url} aria-label={name}>
                <i className={iconName} aria-hidden="true" />
              </Link>
            ) : (
              <a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
              >
                <i className={iconName} aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Side>
  )
}
