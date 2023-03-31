import js from "../../assets/js.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import htm from "../../assets/html.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import tlwnd from "../../assets/tailwind.png";
import mui from "../../assets/mui.png";
import msql from "../../assets/mysql.png";
import fbse from "../../assets/firebase.png";
import mgo from "../../assets/mongo.png";
import gh from "../../assets/gh.png";
import nde from "../../assets/node.png";

const style: string = "absolute rounded-xl bg-iconBkg p-3";
const style2: string = "absolute rounded-xl border border-4 border-iconBkg p-3";
const small: string = "w-12 h-12 z-0 opacity-30";
const small2: string = "w-12 h-12 z-0 opacity-20";
const small3: string = "w-12 h-12 z-0 opacity-10";
const medium: string = "w-16 h-16 z-10 opacity-50";
const medium2: string = "w-16 h-16 z-10 opacity-20";
const large: string = "w-20 h-20 z-20 opacity-50";
const large2: string = "w-20 h-20 z-20 opacity-20";

const BkgIcons = () => {
  return (
    <div className="w-full h-full z-30 bg-repeat bg-overlay-pattern">
      <div className="relative flex w-full h-full select-none">
        <img src={js} className={`${style} ${large} top-[15%] left-[25%]`} />
        <img src={htm} className={`${style} ${medium2} top-[30%] left-[10%]`} />
        <img src={git} className={`${style} ${medium} top-[28%] left-[60%]`} />
        <img src={ts} className={`${style} ${large} top-[35%] left-[40%]`} />
        <img src={mui} className={`${style} ${medium} top-[55%] left-[20%]`} />
        <img src={react} className={`${style} ${large} top-[55%] left-[60%]`} />
        <img src={msql} className={`${style} ${medium} top-[65%] left-[30%]`} />
        <img src={css} className={`${style} ${medium2} top-[3%] left-[40%]`} />
        <img src={gh} className={`${style} ${large2} top-[15%] left-[75%]`} />
        <img src={fbse} className={`${style} ${medium} top-[38%] left-[80%]`} />
        <img src={mgo} className={`${style} ${medium2} top-[55%] left-[75%]`} />
        <img src={nde} className={`${style} ${medium2} top-[50%] left-[50%]`} />
        <img src={tlwnd} className={`${style} ${large} top-[12%] left-[55%]`} />
        <div className={`${style2} ${small2} top-[80%] left-[20%]`}></div>
        <div className={`${style2} ${small2} top-[5%] left-[7%]`}></div>
        <div className={`${style} ${small} top-[5%] left-[19%]`}></div>
        <div className={`${style} ${large2} top-[40%] left-[65%]`}></div>
        <div className={`${style} ${small2} top-[72%] left-[70%]`}></div>
        <div className={`${style2} ${small2} top-[20%] left-[45%]`}></div>
        <div className={`${style2} ${small2} top-[60%] left-[90%]`}></div>
        <div className={`${style} ${small3} top-[45%] left-[30%]`}></div>
        <div className={`${style} ${small3} top-[55%] left-[40%]`}></div>
        <div className={`${style} ${small3} top-[60%] left-[10%]`}></div>
        <div className={`${style2} ${medium2} top-[35%] left-[21%]`}></div>
        <div className={`${style2} ${medium2} top-[72%] left-[50%]`}></div>
      </div>
    </div>
  );
};

export default BkgIcons;
