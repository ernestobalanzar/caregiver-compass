import React, { useState } from "react";
import moment from "moment";
import { Container } from "../components/Container";
import Feed from "../components/Feed";
import NestedFeed from "../components/NestedFeed";
import stevenMchailImage from "../images/avatars/steven-mchail.jpg";
import piersWilkinsImage from "../images/avatars/piers-wilkins.jpg";
import rinaldoBeynonImage from "../images/avatars/rinaldo-beynon.jpg";
import DonationModal from "../components/DonationModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const stats = [
    { name: "Blood Pressure", value: "120-70" },
    { name: "Blood Sugar", value: " 140", unit: "mg/dL" },
    { name: "Blood Oxygen", value: "98.6" },
    { name: "Weight", value: "170", unit: "lbs" },
    { name: "Temperature", value: "98.6", unit: "F" },
  ];
  const statuses = {
    Completed: "text-green-400 bg-green-400/10",
    Error: "text-rose-400 bg-rose-400/10",
  };
  const activityItems = [
    {
      user: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      commit: "2d89f0c8",
      branch: "main",
      status: "Completed",
      duration: "25s",
      date: "45 minutes ago",
      dateTime: "2023-01-23T11:00",
    },
    // More items...
  ];

  const [comments, setComments] = useState([
    {
      id: 0,
      name: "Tom Cook",
      date: "2d ago",
      imageSrc: stevenMchailImage,

      body: "Hey all!!. As many of you know, Luis is going through a challenging time, and our support can make a world of difference for him. This group was created to coordinate and offer care for Luis during this period. We're like a family here, and I believe our collective strength can help him navigate this journey. Thank you all for being a part of this crucial effort. Your commitment is invaluable, and together, we can ensure Luis feels the love, care, and support he needs. I encourage everyone to introduce themselves briefly, share any thoughts, and let's discuss the best ways we can assist.",
      replies: [
        {
          id: 1,
          name: "Piers Wilkins",
          date: "2d ago",
          imageSrc: piersWilkinsImage,
          body: "We can do this together! I'm here to help in any way I can.",
        },
        {
          id: 2,
          name: "Rinaldo Beynon",
          date: "2d ago",
          imageSrc: rinaldoBeynonImage,
          body: "I will be here for Luis. I'm available to help with",
        },
      ],
    },
  ]);

  const addComment = (comment) => {
    setComments((comments) => {
      // Add the new comment to the comments array
      const newComments = [...comments, comment];

      // Sort the newComments array based on the timestamp in descending order
      return newComments.sort((a, b) => b.id - a.id);
    });
  };

  const addSubcomment = (newComments) => {
    setComments(newComments.sort((a, b) => b.id - a.id));
  };

  return (
    <>
      {/* Heading
        <DonationModal />
       */}

      <Container className={"py-10 sm:py-10"}>
        {/*
       <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4  bg-cyan-900  px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-x-3">
              <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <h1 className="flex gap-x-3 text-base leading-7">
                <span className="font-semibold text-white">Luis</span>
                <span className="text-white">/</span>
                <span className="font-semibold text-white">Vital Tracking</span>
              </h1>
            </div>
            <p className="mt-2 text-xs leading-6 text-gray-400">
              Latest vitals and health information:{" "}
              {moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
            Optimal
          </div>
        </div>
        <div className="grid grid-cols-1  bg-cyan-900  sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, statIdx) => (
            <div
              key={stat.name}
              className={classNames(
                statIdx % 2 === 1
                  ? "sm:border-l"
                  : statIdx === 2
                  ? "lg:border-l"
                  : "",
                "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8"
              )}
            >
              <p className="text-sm font-medium leading-6 text-gray-400">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
       */}

        {/* Stats */}
      </Container>
      <Container className={"py-10 sm:py-10"}>
        <Feed addComment={addComment} comments={comments} />
        <NestedFeed comments={comments} addSubcomment={addSubcomment} />
      </Container>
    </>
  );
}
