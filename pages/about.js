import React, { Children } from "react";
import Layout from "../components/Layout";

import Link from "next/link";
export default function AboutPage() {
  return (
    <Layout title="About Blood Donation">
      <h1>About</h1>
      <p>This is an app to Request blood and Donation </p>
      <p>Version 1.0.0</p>
  
    </Layout>
  );
}
