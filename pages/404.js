import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <h2>Sorry!</h2>
            <p>This page doesn't exist. <Link href="/">Go Home.</Link></p>
        </>
    )
  }