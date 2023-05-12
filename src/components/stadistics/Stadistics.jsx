import React from "react";
import "./stadistics.css";
import workImage from "../../assets/icon-work.svg";
import playImage from "../../assets/icon-play.svg";
import studyImage from "../../assets/icon-study.svg";
import exerciseImage from "../../assets/icon-exercise.svg";
import socialImage from "../../assets/icon-social.svg";
import selfCareImage from "../../assets/icon-self-care.svg";
import ellipsis from "../../assets/icon-ellipsis.svg";

function Stadistics({ data, daily, weekly, monthly }) {
  function setIcon(name) {
    switch (name) {
      case "Work":
        return workImage;
      case "Play":
        return playImage;
      case "Study":
        return studyImage;
      case "Exercise":
        return exerciseImage;
      case "Social":
        return socialImage;
      case "Self Care":
        return selfCareImage;
    }
  }

  function setBackground(name) {
    switch (name) {
      case "Work":
        return "stadistics__container work";
      case "Play":
        return "stadistics__container play";
      case "Study":
        return "stadistics__container study";
      case "Exercise":
        return "stadistics__container exercise";
      case "Social":
        return "stadistics__container social";
      case "Self Care":
        return "stadistics__container self-care";
    }
  }

  return data.map((activity, index) => (
    <article key={index} className={setBackground(activity.title)}>
      <header className="stadistics__header">
        <img src={setIcon(activity.title)} alt={`${activity.title} image`} />
      </header>
      <section className="stadistics__body">
        <div className="stadistics__menu">
          <h3>{activity.title}</h3>
          <img src={ellipsis} alt="Ellipsis" />
        </div>
        <div className="stadistics__time">
          <h2 className="stadistics__hours">
            {daily
              ? activity.timeframes.daily.current
              : weekly
              ? activity.timeframes.weekly.current
              : activity.timeframes.monthly.current}
            hrs
          </h2>
          <span>
            {daily ? "Last day - " : weekly ? "Last week - " : "Last Month - "}

            {daily
              ? activity.timeframes.daily.previous
              : weekly
              ? activity.timeframes.weekly.previous
              : activity.timeframes.monthly.previous}
          </span>
        </div>
      </section>
    </article>
  ));
}

export default Stadistics;
