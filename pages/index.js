import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Paide_ordulinnuse_varemed.JPG/1920px-Paide_ordulinnuse_varemed.JPG',
    address: 'Some addresss 5394, Some city',
    description: 'This is a new meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Paide_ordulinnuse_varemed.JPG/1920px-Paide_ordulinnuse_varemed.JPG',
    address: 'Some second addresss 5394, Some city',
    description: 'This is a new second meetup',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

export default HomePage;
