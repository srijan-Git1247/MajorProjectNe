import React from "react";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import RequestItem from "../../components/RequestItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Active Requirements</h1>
      {events === 0 && <h1>No Requests</h1>}

      {events.map((evt) => (
        <RequestItem key={evt.id} evt={evt} />
      ))}
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
