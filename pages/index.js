import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { connectToDatabase } from '../helpers/db';
import { Fragment } from 'react/jsx-runtime';

function HomePage(props) {
  return (
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups!"/>
    </Head>
    <MeetupList meetups={props.meetups} />
  </Fragment>);
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
