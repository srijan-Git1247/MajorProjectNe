import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { API_URL } from "../config/index";

export default function HomePage({ events }) {
  console.log(events);
 
  
  return (
    <Layout>
      <h1>Home</h1>
      {events===0 &&  <h1>No Requests</h1>}

      {events.map(evt=>< h3 key={evt.id}>{evt.name},{evt.date}</h3>) }
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
