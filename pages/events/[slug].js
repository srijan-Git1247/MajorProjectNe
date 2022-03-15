import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from "../../styles/Event.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
export default function EventPage({ evt }) {
  const router = useRouter();
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout title={router.query.slug}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <IoChatbubble />
              Respond to the request
            </a>
          </Link>

          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes></FaTimes>
            Delete Request
          </a>
        </div>

        <span>
          {new Date(evt.date).toLocaleDateString("en-UK")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className="">
            <Image src={evt.image.url} width={960} height={600} />
          </div>
        )}

        <h3>Units:</h3>
        <p>{evt.units}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue:{evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{" <"}Go Back </a>
        </Link>
      </div>
    </Layout>
  );
}
/*
export async function getServerSideProps({query:{slug}})
{
  
  const res= await fetch(`${API_URL}/api/events/${slug}`);

  const events= await res.json()
  return{

    props:{
      evt:events[0],

    },

  }
}*/
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: {
      slug: evt.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);

  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
