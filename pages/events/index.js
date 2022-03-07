import React from "react";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
export default function EventsPage({ events }) {
  return (
    <Layout title="Active Requirements">
      <h1>Active Requirements</h1>

      {events === 0 && <h1>No Requests</h1>}

      {events.map(evt=>< h3 key={evt.id}>{evt.name},{evt.date}</h3>)}
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
