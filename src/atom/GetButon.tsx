import { PropsWithChildren } from "react";

type styletype=PropsWithChildren<{
    decoration:string
}>
export default function GetButon({decoration}:styletype) {
  return (
    <button type="button" className={decoration}>Get Started</button>
  )
}
